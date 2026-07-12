import fs from 'node:fs'
import path from 'node:path'
import { format, resolveConfig } from 'prettier'

export const read = name =>
	fs.readFileSync(name, { encoding: 'utf8' })

export const write = (name, content) =>
	fs.writeFileSync(mkdir(name), content)

export const append = (name, content) =>
	fs.appendFileSync(mkdir(name), content)

export const remove = name => {
	try {
		fs.rmSync(name, { recursive: true })
		if (/[^\/]+\.[^\/]+$/.test(name)) {
			fs.rmdirSync(path.dirname(name))
		}
	} catch (e) {}
}

export const move = (source, destination) =>
	fs.renameSync(source, mkdir(destination))

export const copy = (source, destination) =>
	fs.copyFileSync(source, mkdir(destination))

export const mkdir = dir => {
	fs.mkdirSync(
		/[^\/]+\.[^\/]+$/.test(dir) ? path.dirname(dir) : dir,
		{
			recursive: true,
		},
	)
	return dir
}

let prettierConfig

export const prettier = async file => {
	prettierConfig =
		prettierConfig ||
		(await resolveConfig(process.cwd(), {
			config: './.prettierrc.json',
		}))

	for (const name of fs.globSync(file)) {
		write(
			name,
			await format(read(name), {
				...prettierConfig,
				filepath: name,
			}),
		)
	}
}

/** @returns {string[]} Sorted unique strings; nested arrays are flattened */
export const unique = (...a) => [...new Set(a.flat(Infinity))].sort()

export const uniqueKeys = (...a) =>
	unique(
		unique(a)
			.join('\n')
			.split('\n')
			.map(x => x.trim())
			.filter(x => !x.startsWith('//'))
			.join('\n')
			.replace(/\s/g, '\n')
			.replace(/['",]/g, '\n')
			.split('\n')
			.filter(x => x),
	)

/**
 * Splits a union at top-level `|` only, so the `|` inside
 * `Record<string, a | b>`, `(a | b)[]` or `{ a: b | c }` stays put.
 * The `>` of `=>` does not close anything
 */
function splitUnion(a) {
	const parts = []
	let part = ''
	let depth = 0
	let prev = ''
	for (const char of a) {
		switch (char) {
			case '<':
			case '(':
			case '[':
			case '{':
				depth++
				break
			case '>':
				if (prev !== '=') depth--
				break
			case ')':
			case ']':
			case '}':
				depth--
				break
		}
		if (char === '|' && depth === 0) {
			parts.push(part)
			part = ''
		} else {
			part += char
		}
		prev = char
	}
	parts.push(part)
	return parts
}

export const uniqueTypes = a => {
	let parts = [
		...new Set(
			splitUnion(a.replace(/\n/g, ' '))
				.map(x => x.trim())
				.filter(x => x),
		),
	]
	// a union holding both bare literal types `true` and `false` is
	// just `boolean`. only whole top-level parts count, so the string
	// literals in `'true' | 'false'` are not confused with them
	if (parts.includes('true') && parts.includes('false')) {
		parts = [
			...new Set(
				parts.map(x =>
					x === 'true' || x === 'false' ? 'boolean' : x,
				),
			),
		]
	}
	return parts.join(' | ')
}

export const entries = Object.entries

export function removeFromArray(array, value) {
	const index = array.indexOf(value)
	if (index !== -1) array.splice(index, 1)
}

/** Callers share the parsed object and must not mutate it */
const fetchJSONCache = {}
export async function fetchJSON(url, lower = false) {
	const key = url + '#' + lower
	if (!(key in fetchJSONCache)) {
		const text = await fetchCached(url)
		try {
			fetchJSONCache[key] = JSON.parse(
				lower ? text.toLowerCase() : text,
			)
		} catch (e) {
			console.warn('unable to parse json from ', url, text)
			fetchJSONCache[key] = {}
		}
	}
	return fetchJSONCache[key]
}
const fetchCachedCache = {}
export const fetchCached = async url => {
	if (fetchCachedCache[url]) {
		return fetchCachedCache[url]
	}

	const name = await hash(url)
	const file = './node_modules/.cache/' + name + '.txt'
	if (!fs.existsSync(file)) {
		console.log('fetching and caching', url)
		const response = await fetch(url)

		// a `404` is expected for some urls (files that dont exists in
		// mdn/bcd), but never cache other errors such rate limits
		if (!response.ok && response.status !== 404) {
			throw new Error(
				'fetch failed with status ' +
					response.status +
					' for url ' +
					url,
			)
		}

		const content = await response.text()
		if (content) {
			write(file, content)
		}
		fetchCachedCache[url] = content
	} else {
		fetchCachedCache[url] = read(file)
	}
	if (fetchCachedCache[url] === '') {
		throw new Error('received empty file from url ' + url)
	}
	return fetchCachedCache[url]
}

async function hash(value, algo = 'SHA-256') {
	const msgUint8 = new TextEncoder().encode(value)
	const hashBuffer = await crypto.subtle.digest(algo, msgUint8)
	const hashArray = Array.from(new Uint8Array(hashBuffer))
	return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

const stringify = JSON.stringify
const stringifyReadable = o => stringify(o, null, 2)

function key(s) {
	return s.replace(':', '').replace(/-/g, '') + ' ' + s
}

export const stringifySorted = o => {
	function sort(o) {
		if (o === null || typeof o !== 'object') {
			return o
		}
		const tmp = Array.isArray(o) ? [] : {}
		Object.keys(o)
			.sort((a, b) =>
				key(a).localeCompare(key(b), 'en', {
					caseFirst: 'lower',
				}),
			)
			.map(k => (tmp[k] = sort(o[k])))

		if (Array.isArray(tmp)) {
			tmp.sort((a, b) =>
				stringify(a).localeCompare(stringify(b), 'en', {
					caseFirst: 'lower',
				}),
			)
		}
		return tmp
	}
	return stringifyReadable(sort(o))
}
