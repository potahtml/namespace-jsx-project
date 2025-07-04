import fs from 'node:fs'
import { execSync as $ } from 'child_process'
import path from 'node:path'

export { $ }

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

export const prettier = file =>
	$(
		`prettier --config ./.prettierrc.json "${file}" --write --no-editorconfig --ignore-path="false"`,
	)

/** @returns String[] */
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

export const uniqueTypes = a =>
	[
		...new Set(
			a
				.replace(/\n/g, ' ')
				.split('|')
				.map(x => x.trim())
				.filter(x => x),
		),
	].join(' | ')

export const entries = Object.entries

export function removeFromArray(array, value) {
	const index = array.indexOf(value)
	if (index !== -1) array.splice(index, 1)
}

export async function fetchJSON(url, lower = false) {
	const text = await fetchCached(url)
	try {
		return JSON.parse(lower ? text.toLowerCase() : text)
	} catch (e) {
		console.warn('unable to parse json from ', url, text)
		return {}
	}
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
		const content = await fetch(url).then(x => x.text())
		if (content) {
			write(file, content)
		}
		fetchCachedCache[url] = content
	} else {
		fetchCachedCache[url] = read(file)
	}
	if (fetchCachedCache[url] === '') {
		console.log('received empty file from url', url)
		process.exit()
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
