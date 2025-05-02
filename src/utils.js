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

export const unique = a => [...new Set(a.flat(Infinity))].sort()

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

export const fetchCached = async url => {
	const name = await hash(url)
	const file = './node_modules/.cache/' + name + '.txt'
	if (!fs.existsSync(file)) {
		console.log('fetching and caching', url)
		write(file, await fetch(url).then(x => x.text()))
	}
	return read(file)
}

async function hash(value, algo = 'SHA-256') {
	const msgUint8 = new TextEncoder().encode(value)
	const hashBuffer = await crypto.subtle.digest(algo, msgUint8)
	const hashArray = Array.from(new Uint8Array(hashBuffer))
	return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

const stringify = JSON.stringify
const stringifyReadable = o => stringify(o, null, 2)

export const stringifySorted = o => {
	function sort(o) {
		if (o === null || typeof o !== 'object') {
			return o
		}
		const tmp = Array.isArray(o) ? [] : {}
		Object.keys(o)
			.sort((a, b) =>
				a
					.replace(':', '')
					.replace(/-/g, '')
					.localeCompare(
						b.replace(':', '').replace(/-/g, ''),
						undefined,
						{
							sensitivity: 'base',
						},
					),
			)
			.map(k => (tmp[k] = sort(o[k])))

		if (Array.isArray(tmp)) {
			tmp.sort((a, b) =>
				stringify(a).localeCompare(stringify(b), undefined, {
					sensitivity: 'base',
				}),
			)
		}
		return tmp
	}
	return stringifyReadable(sort(o))
}
