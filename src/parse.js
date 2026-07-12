import {
	copy,
	entries,
	fetchCached,
	prettier,
	read,
	uniqueTypes,
	write,
} from './utils.js'
import { parseSync } from 'oxc-parser'

/** This is used to parse framework interfaces */
const dev = false

/** Fetches text, retrying once, and fails loudly on errors */
async function fetchText(url) {
	let response = await fetch(url)

	if (!response.ok) {
		// try again, could be a transient error
		response = await fetch(url)
	}
	if (!response.ok) {
		throw new Error(
			'fetch failed with status ' +
				response.status +
				' for url ' +
				url,
		)
	}

	let text = await response.text()

	if (text === '') {
		// try again
		text = await fetch(url).then(v => v.text())
		if (text === '') {
			throw new Error('received empty file from url ' + url)
		}
	}

	return text
}

export async function parseFromURL(file, name, map = {}) {
	// frameworks that split their types across files (such preact's
	// jsx.d.ts + dom.d.ts) list them as an array and get the texts
	// concatenated before parsing
	const files = Array.isArray(file) ? file : [file]

	let text = ''
	for (const url of files) {
		text +=
			(dev ? await fetchCached(url) : await fetchText(url)) + '\n'
	}

	file = './node_modules/.cache/' + name + '.d.ts'
	write(file, text)
	return parse(file, name, map)
}

export async function parse(file, name, map = {}) {
	// copy from `node_modules/lib/jsx.d.ts` to `source/$lib.d.ts`
	copy(file, `./jsx/source/${name}.d.ts`)
	copy(file, `./jsx/original/${name}.d.ts`)

	file = `./jsx/source/${name}.d.ts`

	// parse
	const [sourceWithoutInterfaces, interfaces] = await parseFromFile(
		file,
		map,
	)

	// write source but without the lines we have used
	write(file, sourceWithoutInterfaces)

	await prettier(file)

	return interfaces
}

/**
 * It parses interfaces from a file. The parser is naive, but as we
 * use prettier to format the file first then it works. The parser
 * output is also validated because when written to disk we also
 * prettify the file.
 */

export async function parseFromFile(file, map = {}) {
	// pretty the file (easier to parse)
	await prettier(file)

	// parse
	const source = read(file)
	return parseFromString(source, map)
}

export function parseFromString(string, map = {}) {
	const source = stripComments(string)
	const program = parseSync('file.d.ts', source).program

	// collect interface and type alias declarations wherever they sit:
	// top level, behind `export`, or inside namespaces/modules
	const interfaceNodes = []
	const aliasNodes = []
	// spans to cut from the leftover source, `export` prefix included
	const removals = []

	const collect = (nodes, exportStart) => {
		for (const node of nodes) {
			switch (node.type) {
				case 'ExportNamedDeclaration':
					if (node.declaration) {
						collect([node.declaration], node.start)
					}
					break
				case 'TSInterfaceDeclaration':
					interfaceNodes.push(node)
					removals.push([exportStart ?? node.start, node.end])
					break
				case 'TSTypeAliasDeclaration':
					aliasNodes.push([node, exportStart])
					break
				case 'TSModuleDeclaration': {
					// `namespace A.B {}` nests module declarations
					let body = node.body
					while (body?.type === 'TSModuleDeclaration') {
						body = body.body
					}
					if (body?.body) {
						collect(body.body)
					}
					break
				}
			}
		}
	}
	collect(program.body)

	// for unwrapping simple types
	const types = []
	for (const [t] of aliasNodes) {
		const text = source
			.slice(t.id.end + 2, t.end)
			.trim()
			// prettier wraps long unions across lines
			.replace(/\s+/g, ' ')
			.replace(/^\| /, '')
		// filter out complex types
		if (/^[a-z0-9-_ \'\|()&{}/+;<>,\[\]]+$/i.test(text)) {
			types.push({ name: t.id.name, source: text })
		}
	}

	const interfaces = {}

	// merge sources of same-name declarations
	for (const node of interfaceNodes) {
		const inter = getInterfaceById(node.id.name, map, interfaces)
		inter.source += unwrapTypes(
			source
				.slice(node.start, node.end)
				// dedent the closing brace of nested interfaces
				.replace(/\n[ \t]*}$/, '\n}') + '\n',
			types,
		)
	}

	// object-literal type aliases become pseudo-interfaces, so
	// `type CSSAttributes = NSStyle & { class?: ... }` is reachable
	// from `extends CSSAttributes`. Only the literal members become
	// properties; reference parts of an intersection become `extends`
	// (unresolvable ones, like mapped types, are dropped as before)
	for (const [node, exportStart] of aliasNodes) {
		const annotation = node.typeAnnotation
		const parts =
			annotation.type === 'TSIntersectionType' ||
			// a union where every branch is an object literal, like
			// preact's `AnchorAriaRoles`, merges the branches' members
			(annotation.type === 'TSUnionType' &&
				annotation.types.every(t => t.type === 'TSTypeLiteral'))
				? annotation.types
				: [annotation]

		const members = []
		const heritage = []
		for (const part of parts) {
			if (part.type === 'TSTypeLiteral') {
				for (const member of part.members) {
					// `href?: never` marks a key as disallowed in this
					// branch, it is not a value type
					if (
						member.typeAnnotation?.typeAnnotation?.type ===
						'TSNeverKeyword'
					) {
						continue
					}
					members.push(source.slice(member.start, member.end))
				}
			} else if (part.type === 'TSTypeReference') {
				heritage.push(source.slice(part.start, part.end))
			} else if (part.type === 'TSMappedType') {
				// `[Key in keyof X as `use:${Key}`]?: X[Key]` becomes the
				// pattern member `'use:*'?: X[Key]`
				const name = patternName(part.nameType)
				if (name && part.typeAnnotation) {
					members.push(
						"'" +
							name +
							"'" +
							(part.optional ? '?' : '') +
							': ' +
							source.slice(
								part.typeAnnotation.start,
								part.typeAnnotation.end,
							),
					)
				}
			}
		}

		// an intersection of references alone, like preact's
		// `Omit<PartialAnchorHTMLAttributes<T>, 'role'> & AnchorAriaRoles`,
		// still resolves: the references become `extends` heritage
		if (
			!members.length &&
			!(
				annotation.type === 'TSIntersectionType' && heritage.length
			)
		) {
			continue
		}

		const typeParameters = node.typeParameters
			? source.slice(node.typeParameters.start, node.typeParameters.end)
			: ''

		const inter = getInterfaceById(node.id.name, map, interfaces)
		inter.source += unwrapTypes(
			'interface ' +
				node.id.name +
				typeParameters +
				(heritage.length ? ' extends ' + heritage.join(', ') : '') +
				' {\n' +
				members.join('\n') +
				'\n}\n',
			// a reference-only intersection alias, like solid's
			// `EventType = ExtractEventType<...> & ExtractEventType<...>`,
			// also passes the simple-types filter above; inlining it into
			// its own declaration would replace the interface name with
			// the aliased expression
			types.filter(type => type.name !== node.id.name),
		)
		removals.push([exportStart ?? node.start, node.end])
	}

	// parse the properties
	for (const [, inter] of entries(interfaces)) {
		const ast = parseSync('file.d.ts', inter.source).program.body

		inter.properties = []
		inter.extends = []
		for (const i of ast) {
			collectReferences(i.extends, inter.extends)
			for (const property of i.body.body) {
				if (!property.typeAnnotation) {
					continue
				}

				// abc: value, vs, "abc-def": value, vs the pattern key of
				// a template-literal index signature `class:${string}`.
				// plain index signatures `[property: string]` have neither
				// a key nor a pattern and are left out
				const name = property.key
					? property.key.name || property.key.value
					: patternName(
							property.parameters?.[0]?.typeAnnotation
								?.typeAnnotation,
						)
				if (!name) {
					continue
				}
				inter.properties.push({
					name: name,
					optional: property.optional,
					source: inter.source
						.slice(
							property.typeAnnotation.start + 1,
							property.typeAnnotation.end,
						)
						.trim(),
				})
			}
		}
	}

	// the source without the interfaces we have used
	let leftover = ''
	let last = 0
	for (const [start, end] of removals.sort((a, b) => a[0] - b[0])) {
		leftover += source.slice(last, start)
		last = end
	}
	leftover += source.slice(last)

	return [leftover, interfaces]
}

/**
 * A template-literal type as a displayable pattern key, so
 * `class:${string}` yields `class:*`
 */
function patternName(node) {
	return node?.type === 'TSTemplateLiteralType'
		? node.quasis.map(q => q.value.cooked ?? q.value.raw).join('*')
		: null
}

/** Cuts every comment span out of the source */

function stripComments(source) {
	const comments = parseSync('file.d.ts', source).comments

	let out = ''
	let last = 0
	for (const { start, end } of comments) {
		out += source.slice(last, start)
		last = end
	}
	out += source.slice(last)
	return out
}

/** Returns an interface object if exists or creates one */

function getInterfaceById(id, map, interfaces) {
	const lower = id.toLowerCase()
	const name = map[lower] || lower

	if (!interfaces[name]) {
		interfaces[name] = {
			name: map[name] || name,
			id: id,
			source: '',
			properties: [],
			extends: [],
		}
	}
	return interfaces[name]
}

/** Unwraps types, this is slow and naive but it kinda works */

function unwrapTypes(source, types) {
	for (let i = 0; i < 2; i++) {
		source = source
			.replace(/\| undefined/gi, '')

			// solid
			.replace(/\| SerializableAttributeValue/gi, '')

			// voby
			.replace(/FunctionMaybe<Nullable<([^\n]+)>>\n/gi, '$1\n')
			.replace(/ObservableMaybe<([^\n]+)>\n/gi, '$1\n')
			.replace(/Nullable<([^\n]+)>\n/gi, '$1\n')
			.replace(/\| ReadonlyArray<([^> ]+)> /gi, '| readonly $1[] ')

			// preact
			.replace(/\| SignalLike<([^>]+)>/gi, ' ')
			.replace(/ SignalLike<([^>]+)>\n/gi, '\n')
			.replace(/Signalish<([^>]+)>/gi, '$1')

			// pota — `Attribute<T>` is `T | false` once the reactive
			// wrappers are dropped
			.replace(/Accessor<([^><]+)>/gi, '$1')
			.replace(/Attribute<([^><]+)>/gi, '$1 | false')
			.replace(/Attribute<([^\n]+)>\n/gi, '$1 | false\n')

			// react
			.replace(/\| DO_NOT_USE[^\n]+\n/gi, '\n')
	}

	for (let i = 0; i < 2; i++) {
		for (const type of types) {
			source = source
				.replaceAll(' ' + type.name + ' ', ' ' + type.source + ' ')
				.replaceAll(' ' + type.name + '\n', ' ' + type.source + '\n')
		}
	}

	source = source.replace(/\| undefined/gi, '')

	return source
}

/**
 * Fallback for whatever oxc cannot parse: strips syntax and yields
 * every word as a candidate interface name
 */
function getExtendedInterfaceNames(string) {
	return string
		.replaceAll('<', ' ')
		.replaceAll('>', ' ')
		.replaceAll(',', ' ')
		.replaceAll('.', ' ')
		.toLowerCase()
		.split(' ')
		.map(i => i.trim())
		.filter(i => i)
}

/**
 * The rightmost identifier of a type name, so `React.HTMLAttributes`
 * resolves to `HTMLAttributes`
 */
function referenceName(typeName) {
	switch (typeName.type) {
		case 'Identifier':
			return typeName.name
		case 'TSQualifiedName':
			return referenceName(typeName.right)
		default:
			return null
	}
}

/**
 * The head of a type reference: its name and type arguments, for both
 * `extends X<T>` heritage entries and `X<T>` type expressions
 */
function referenceHead(node) {
	switch (node.type) {
		case 'TSInterfaceHeritage':
			return node.expression?.type === 'Identifier'
				? {
						name: node.expression.name,
						args: node.typeArguments?.params,
					}
				: null
		case 'TSTypeReference':
			return {
				name: referenceName(node.typeName),
				args: node.typeArguments?.params,
			}
		default:
			return null
	}
}

/** The string literal keys of `Pick`/`Omit`, or `null` when not literal */
function literalKeys(node) {
	if (
		node.type === 'TSLiteralType' &&
		typeof node.literal?.value === 'string'
	) {
		return [node.literal.value]
	}
	if (node.type === 'TSUnionType') {
		const keys = []
		for (const type of node.types) {
			const k = literalKeys(type)
			if (!k) return null
			keys.push(...k)
		}
		return keys
	}
	return null
}

/**
 * Walks an AST collecting interface references
 * `{ name, pick?, omit? }`. `Pick<X, 'a' | 'b'>` yields `X` with
 * `pick: ['a', 'b']` instead of degrading to "merge all of X", same
 * for `Omit`. Everything else yields every identifier as a candidate
 * name (names that match no interface are simply ignored later).
 */
function collectReferences(node, refs) {
	if (!node || typeof node !== 'object') return

	if (Array.isArray(node)) {
		for (const n of node) collectReferences(n, refs)
		return
	}

	if (node.type === 'Identifier') {
		refs.push({ name: node.name.toLowerCase() })
		return
	}

	const head = referenceHead(node)
	if (head?.name) {
		const lower = head.name.toLowerCase()
		if ((lower === 'pick' || lower === 'omit') && head.args) {
			const target =
				head.args.length === 2 && referenceHead(head.args[0])
			const keys = target && literalKeys(head.args[1])
			if (target?.name && keys) {
				refs.push({ name: target.name.toLowerCase(), [lower]: keys })
				collectReferences(target.args, refs)
				return
			}
			console.warn(
				'cannot resolve the keys of a utility type, merging it whole:',
				head.name,
			)
			// fall through to the generic walk
		} else {
			refs.push({ name: lower })
			collectReferences(head.args, refs)
			return
		}
	}

	for (const key in node) {
		if (key !== 'type' && key !== 'start' && key !== 'end') {
			collectReferences(node[key], refs)
		}
	}
}

/** Interface references found in a type expression such as `X<T> & Y` */
function getTypeReferences(string) {
	const ast = parseSync('file.d.ts', 'type __T = ' + string).program
		.body

	const refs = []
	if (ast.length && ast[0].typeAnnotation) {
		collectReferences(ast[0].typeAnnotation, refs)
	} else {
		for (const name of getExtendedInterfaceNames(string)) {
			refs.push({ name })
		}
	}
	return refs
}

const referenceKey = ref =>
	ref.name +
	'|' +
	(ref.pick || []).join() +
	'|' +
	(ref.omit || []).join()

function mergeProperty(properties, name, prop) {
	if (properties[name]) {
		properties[name] = {
			source: uniqueTypes(
				properties[name].source + ' | ' + prop.source,
			),
			optional: properties[name].optional || prop.optional,
		}
	} else {
		properties[name] = {
			source: uniqueTypes(prop.source),
			optional: prop.optional,
		}
	}
}

/**
 * Flattens an interface (own properties plus its whole `extends`
 * subtree) into a property map, then applies the reference's
 * `pick`/`omit` filter. `Pick`/`Omit` semantics operate on the
 * flattened type, so nested filters resolve here too.
 */
function flattenReference(ref, interfaces, skip, stack = []) {
	const properties = {}

	const inter = interfaces[ref.name]
	if (!inter || skip.includes(ref.name) || stack.includes(ref.name)) {
		return properties
	}
	stack = stack.concat(ref.name)

	for (const parent of inter.extends) {
		const parentProperties = flattenReference(
			parent,
			interfaces,
			skip,
			stack,
		)
		for (const [name, prop] of entries(parentProperties)) {
			mergeProperty(properties, name, prop)
		}
	}

	for (const prop of inter.properties) {
		mergeProperty(properties, prop.name, {
			source: prop.source,
			optional: prop.optional,
		})
	}

	if (ref.pick) {
		for (const name in properties) {
			if (!ref.pick.includes(name)) {
				delete properties[name]
			}
		}
	}
	if (ref.omit) {
		for (const name of ref.omit) {
			delete properties[name]
		}
	}

	return properties
}

/**
 * Renders a `Pick`/`Omit` reference as an interface containing only
 * the surviving properties, so the merged source shows exactly what
 * lands in the data
 */
function synthesizeFilteredInterface(ref, interfaces, skip) {
	const inter = interfaces[ref.name]
	if (!inter) return ''

	const properties = flattenReference(ref, interfaces, skip)

	const keys = (ref.pick || ref.omit)
		.map(key => `'${key}'`)
		.join(' | ')

	let source = `// ${ref.pick ? 'Pick' : 'Omit'}<${inter.id}, ${keys}>\n`
	source += `interface ${inter.id} {\n`
	for (const [name, prop] of entries(properties)) {
		const key = /^[a-z_$][a-z0-9_$]*$/i.test(name)
			? name
			: `'${name}'`
		source += `\t${key}${prop.optional ? '?' : ''}: ${prop.source}\n`
	}
	source += '}\n'
	return source
}

export function getInterfaceMergedFromPropertySource(
	string,
	interfaces,
	skip = [],
) {
	const names = []
	const filtered = []

	const add = ref => {
		if (skip.includes(ref.name)) return
		if (ref.pick || ref.omit) {
			if (
				!filtered.some(r => referenceKey(r) === referenceKey(ref))
			) {
				filtered.push(ref)
			}
		} else if (!names.includes(ref.name)) {
			names.push(ref.name)
		}
	}

	for (const ref of getTypeReferences(string)) {
		add(ref)
	}

	// merge names, walking the extends chains kind of recursively
	// (`names` grows while iterating). `Pick`/`Omit` references land in
	// `filtered` and resolve their own subtree in `flattenReference`,
	// so their parents don't leak in here whole
	for (const name of names) {
		if (interfaces[name]) {
			for (const ref of interfaces[name].extends) {
				add(ref)
			}
		}
	}

	const result = { source: '', properties: {} }

	// merge source
	for (const name of names) {
		if (interfaces[name]) {
			result.source += interfaces[name].source + '\n'
		}
	}
	for (const ref of filtered) {
		result.source += synthesizeFilteredInterface(
			ref,
			interfaces,
			skip,
		)
	}

	const [, parsed] = parseFromString(result.source)
	for (const [, value] of entries(parsed)) {
		if (value.properties) {
			for (const prop of value.properties) {
				if (result.properties[prop.name]) {
					result.properties[prop.name] += ' | ' + prop.source
					result.properties[prop.name] = uniqueTypes(
						result.properties[prop.name],
					)
				} else {
					result.properties[prop.name] = uniqueTypes(prop.source)
				}
			}
		}
	}

	return result
}
