import {
	copy,
	entries,
	prettier,
	read,
	uniqueTypes,
	write,
} from './utils.js'
import oxc from 'oxc-parser'

/** This is used to parse framework interfaces */

export async function parseFromURL(file, name, map = {}) {
	let text = await fetch(file).then(v => v.text())
	if (text === '') {
		// try again
		text = await fetch(file).then(v => v.text())
		if (text === '') {
			console.log('received empty file from url', file)
			process.exit()
		}
	}
	file = './node_modules/.cache/' + name + '.d.ts'
	write(file, text)
	return parse(file, name, map)
}

export function parse(file, name, map = {}) {
	// copy from `node_modules/lib/jsx.d.ts` to `source/$lib.d.ts`
	copy(file, `./jsx/source/${name}.d.ts`)
	copy(file, `./jsx/original/${name}.d.ts`)

	file = `./jsx/source/${name}.d.ts`

	// parse
	const [sourceWithoutInterfaces, interfaces] = parseFromFile(
		file,
		map,
	)

	// write source but without the lines we have used
	write(file, sourceWithoutInterfaces)

	prettier(file)

	return interfaces
}

/**
 * It parses interfaces from a file. The parser is naive, but as we
 * use prettier to format the file first then it works. The parser
 * output is also validated because when written to disk we also
 * prettify the file.
 */

export function parseFromFile(file, map = {}) {
	// pretty the file (easier to parse)
	prettier(file)

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
		const ast = JSON.parse(
			oxc.parseSync(line, { sourceFilename: 'file.d.ts' }).program,
		).body
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

			const ast = JSON.parse(
				oxc.parseSync(inter.source, { sourceFilename: 'file.d.ts' })
					.program,
			).body

			inter.properties = []
			for (const i of ast) {
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
		}
	}
	return interfaces[name]
}

/** Unwraps types, this is slow and naive but it kinda works */

function unwrapTypes(source, types) {
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

		// react
		.replace(/\| DO_NOT_USE[^\n]+\n/gi, '\n')

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

function getExtendedInterfaceNames(string, skip = []) {
	return string
		.replaceAll('<', ' ')
		.replaceAll('>', ' ')
		.replaceAll(',', ' ')
		.replaceAll('.', ' ')
		.toLowerCase()
		.split(' ')
		.map(i => i.trim())
		.filter(i => i)
		.filter(i => !skip.includes(i))
}

export function getInterfaceMergedFromPropertySource(
	string,
	interfaces,
	skip = [],
) {
	const names = getExtendedInterfaceNames(string, skip)

	const result = { source: '', properties: {} }

	// merge names
	for (const name of names) {
		if (interfaces[name]) {
			const extended = getExtendedInterfaceNames(
				interfaces[name].source.split('\n')[0],
				skip,
			)

			// append kind of recursively
			for (const name of extended) {
				if (!names.includes(name)) {
					names.push(name)
				}
			}
		}
	}

	// merge source
	for (const name of names) {
		if (interfaces[name]) {
			result.source += interfaces[name].source + '\n'
		}
	}

	const parsed = parseFromString(result.source)
	for (const inter of parsed) {
		for (const [name, value] of entries(inter)) {
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
	}

	return result
}
