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
	const text = dev
		? await fetchCached(file)
		: await fetchText(file)

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
	// parse
	const source = string
	const lines = source.split('\n')

	// for unwrapping simple types
	const types = []
	for (const line of lines) {
		// oxc has a bug on which the `.end` will be incorrect if we parse the whole file. For this reason parse it line by line instead
		const ast = parseSync('file.d.ts', line).program.body
		if (ast.length) {
			const t = ast[0]

			if (t.type === 'TSTypeAliasDeclaration') {
				const text = line.slice(t.id.end + 2, t.end).trim()
				// filter out complex types
				if (/^[a-z0-9-_ \'\|()&{}/+;]+$/i.test(text)) {
					const typ = { name: t.id.name, source: text }
					types.push(typ)
				}
			}
		}
	}

	const interfaces = {}

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]

		const match = line
			.replace(/^\s*export\sinterface/, 'interface')
			.replace(/^\s*export\stype/, 'type')
			.trim()

		if (match.startsWith('interface')) {
			const inter = getInterfaceFromLine(match, map, interfaces)

			if (!match.endsWith('{}')) {
				const indent = line.replace(/^(\s*)[^\s].*/, '$1')

				let text = match // remove the export
				while (i < lines.length && text !== indent + '}') {
					inter.source += text + '\n'

					lines[i] = ''
					text = lines[++i]
				}
				inter.source += '}\n'
			} else {
				inter.source += match
			}

			inter.source = unwrapTypes(inter.source, types)

			// parse the properties

			const ast = parseSync('file.d.ts', inter.source).program.body

			inter.properties = []
			inter.extends = []
			for (const i of ast) {
				collectReferences(i.extends, inter.extends)
				for (const property of i.body.body) {
					// leave these cases
					// code [property: string]: string | number | null
					if (!property.key || !property.typeAnnotation) {
						continue
					}

					// abc: value, vs, "abc-def": value
					const name = property.key.name || property.key.value
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

			// blank the line to know the differences
			lines[i] = ''
		} else {
			// it removes the "export"
			lines[i] = match
		}
	}

	return [lines.join('\n'), interfaces]
}

/** Returns an interface object if exists or creates one */

function getInterfaceFromLine(line, map, interfaces) {
	const id = line.replace(/^.*interface ([a-z0-9_\.]+).*$/i, '$1')
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

			// pota
			.replace(/Accessor<([^><]+)>/gi, '$1')
			.replace(/Attribute<([^><]+)>/gi, '$1')

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
