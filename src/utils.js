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
		`prettier  --config ./.prettierrc.json ${file} --write --no-editorconfig --ignore-path="false"`,
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
