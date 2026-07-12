import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import { read, unique, write } from './utils.js'

/**
 * Maintains `changelog.md`: walks every committed version of
 * `jsx/data.json`, diffs each with the previous one, and writes a
 * summary table plus a section per version with a table per tag
 * listing what was added/removed/changed. The summary table
 * doubles as the record of which versions were already computed,
 * so re-running only appends commits that aren't listed yet.
 *
 *     npm run changelog
 *
 * For an ad-hoc comparison printed to the console (never written
 * to `changelog.md`), pass revisions — anything `git show`
 * accepts; `new` defaults to the working tree:
 *
 *     npm run changelog -- <old> [new]
 */

const file = 'jsx/data.json'
const output = './changelog.md'

const git = args =>
	execFileSync('git', args, {
		encoding: 'utf8',
		maxBuffer: 64 * 1024 ** 2,
	})

const load = rev => {
	try {
		return JSON.parse(
			rev ? git(['show', rev + ':' + file]) : read('./' + file),
		)
	} catch (e) {
		console.error(
			'could not load `' +
				file +
				'` from ' +
				(rev ? '`' + rev + '`' : 'the working tree'),
		)
		process.exit(1)
	}
}

// diff

const isObject = v =>
	v !== null && typeof v === 'object' && !Array.isArray(v)

function diffData(oldData, newData) {
	const changes = []
	function walk(oldValue, newValue, path) {
		if (oldValue === undefined) {
			changes.push({ sign: '+', path, value: newValue })
		} else if (newValue === undefined) {
			changes.push({ sign: '-', path, value: oldValue })
		} else if (isObject(oldValue) && isObject(newValue)) {
			for (const k of unique(
				Object.keys(oldValue),
				Object.keys(newValue),
			)) {
				walk(oldValue[k], newValue[k], [...path, k])
			}
		} else if (Array.isArray(oldValue) && Array.isArray(newValue)) {
			// items are unordered sets as far as meaning goes, so
			// report membership changes instead of positional ones
			const oldItems = new Map(
				oldValue.map(x => [JSON.stringify(x), x]),
			)
			const newItems = new Map(
				newValue.map(x => [JSON.stringify(x), x]),
			)
			for (const [id, item] of oldItems) {
				if (!newItems.has(id)) {
					changes.push({ sign: '-', path, value: item })
				}
			}
			for (const [id, item] of newItems) {
				if (!oldItems.has(id)) {
					changes.push({ sign: '+', path, value: item })
				}
			}
		} else if (oldValue !== newValue) {
			changes.push({ sign: '~', path, old: oldValue, new: newValue })
		}
	}
	walk(oldData, newData, [])
	return changes
}

// render changes as markdown: a table per tag/section

const display = v =>
	Array.isArray(v)
		? '(' + v.length + ' items)'
		: '(' + Object.keys(v).length + ' keys)'

const code = v => {
	if (v === null || typeof v !== 'object') {
		const s = String(v).replace(/\s+/g, ' ') || "''"
		return s.includes('`') ? '`` ' + s + ' ``' : '`' + s + '`'
	}
	return display(v)
}

// `\|` even inside code spans — gfm splits table cells on raw
// pipes before inline parsing, `string | false` would break rows
const escapeCell = s => String(s).replace(/\|/g, '\\|')

// old data.json versions keyed `elements` by namespace URI
const namespaceNames = {
	'http://www.w3.org/1999/xhtml': 'html',
	'http://www.w3.org/2000/svg': 'svg',
	'http://www.w3.org/1998/Math/MathML': 'math',
}
const namespaceName = ns => namespaceNames[ns] || ns

const detail = (name, change) => {
	const prefix = name ? name + ': ' : ''
	return change.sign === '~'
		? prefix + code(change.old) + ' → ' + code(change.new)
		: prefix +
				(change.sign === '+' ? 'added ' : 'removed ') +
				code(change.value)
}

const words = { '+': 'added', '-': 'removed', '~': 'changed' }

function renderChanges(changes) {
	// tag additions/removals per namespace, they come first and
	// deliberately without their content — the tag being new/gone
	// is the news
	const tags = new Map()
	// everything else grouped: per tag, per `keys` interface, or
	// per top-level section; each group becomes its own table
	const buckets = new Map()
	const bucket = (label, kind) => {
		if (!buckets.has(label)) {
			buckets.set(label, {
				kind,
				added: [],
				removed: [],
				changed: new Map(),
				rows: [],
			})
		}
		return buckets.get(label)
	}
	// for metadata fields and array items: one table row per change
	const row = (name, change) =>
		change.sign === '~'
			? [
					'changed',
					name && '_' + name + '_',
					code(change.old) + ' → ' + code(change.new),
				]
			: name
				? [words[change.sign], '_' + name + '_', code(change.value)]
				: [words[change.sign], code(change.value), '']

	for (const change of changes) {
		const { sign, path } = change

		if (path[0] === 'elements' && path.length === 3 && sign !== '~') {
			const ns = namespaceName(path[1])
			if (!tags.has(ns)) {
				tags.set(ns, { added: [], removed: [] })
			}
			tags.get(ns)[sign === '+' ? 'added' : 'removed'].push(path[2])
			continue
		}

		// `elements.ns.tag.keys.key[...]` and
		// `keys.Interface.keys.key[...]` get the per-key treatment:
		// new/removed keys are a bare mention, changed keys list
		// exactly what changed
		let label
		let kind
		let keyIndex = -1
		if (
			path[0] === 'elements' &&
			path.length > 4 &&
			path[3] === 'keys'
		) {
			label = namespaceName(path[1]) + ' `<' + path[2] + '>`'
			kind = 'elements'
			keyIndex = 4
		} else if (
			path[0] === 'keys' &&
			path.length > 3 &&
			path[2] === 'keys'
		) {
			label = 'keys.' + path[1]
			kind = 'keys'
			keyIndex = 3
		}

		if (keyIndex !== -1) {
			const b = bucket(label, kind)
			const key = path[keyIndex]
			if (path.length === keyIndex + 1 && sign !== '~') {
				b[sign === '+' ? 'added' : 'removed'].push(key)
			} else {
				const sub = path.slice(keyIndex + 1)
				const name = (sub[0] === 'values' ? sub.slice(1) : sub).join(
					'.',
				)
				if (!b.changed.has(key)) {
					b.changed.set(key, [])
				}
				b.changed.get(key).push(detail(name, change))
			}
		} else if (path[0] === 'elements' && path.length > 3) {
			// tag metadata (description, deprecated, readonly…)
			bucket(
				namespaceName(path[1]) + ' `<' + path[2] + '>`',
				'elements',
			).rows.push(row(path.slice(3).join('.'), change))
		} else {
			const label = path.slice(0, 2).join('.')
			bucket(label, path[0] === 'keys' ? 'keys' : 'other').rows.push(
				row(path.slice(2).join('.'), change),
			)
		}
	}

	const blocks = []
	// counted at the level the tables show: a key with many field
	// changes is one changed key
	const counts = { added: 0, removed: 0, changed: 0 }

	const bullets = []
	for (const [ns, { added, removed }] of tags) {
		counts.added += added.length
		counts.removed += removed.length
		if (added.length) {
			bullets.push(
				`- ${ns}: new tag${added.length > 1 ? 's' : ''} ` +
					added.map(x => code('<' + x + '>')).join(', '),
			)
		}
		if (removed.length) {
			bullets.push(
				`- ${ns}: removed tag${removed.length > 1 ? 's' : ''} ` +
					removed.map(x => code('<' + x + '>')).join(', '),
			)
		}
	}
	if (bullets.length) {
		blocks.push(bullets.join('\n'))
	}

	// elements first, the `keys` interfaces after, the rest last
	for (const kind of ['elements', 'keys', 'other']) {
		for (const [label, b] of buckets) {
			if (b.kind !== kind) {
				continue
			}
			const rows = [
				...b.added.map(key => ['added', code(key), '']),
				...b.removed.map(key => ['removed', code(key), '']),
				...[...b.changed].map(([key, details]) => [
					'changed',
					code(key),
					details.join('<br>'),
				]),
				...b.rows,
			]
			for (const [word] of rows) {
				counts[word]++
			}
			// the details column only when something uses it
			const columns = rows.some(r => r[2]) ? 3 : 2
			const line = cells =>
				'| ' + cells.slice(0, columns).join(' | ') + ' |'
			blocks.push(
				`**${label}**\n\n` +
					line(['change', 'key', 'details']) +
					'\n' +
					line(['-', '-', '-']) +
					'\n' +
					rows.map(r => line(r.map(escapeCell))).join('\n'),
			)
		}
	}
	return { content: blocks.join('\n\n'), counts }
}

const summary = counts =>
	`${counts.added} added, ${counts.removed} removed, ${counts.changed} changed`

// console mode: compare two revisions ad-hoc

const [oldRev, newRev] = process.argv.slice(2)

if (oldRev) {
	const changes = diffData(load(oldRev), load(newRev))
	console.log(
		file +
			': `' +
			oldRev +
			'` → ' +
			(newRev ? '`' + newRev + '`' : 'working tree') +
			'\n',
	)
	if (!changes.length) {
		console.log('no changes')
		process.exit()
	}
	const { content, counts } = renderChanges(changes)
	console.log(content)
	console.log('\n' + summary(counts))
	process.exit()
}

// changelog.md mode: every committed version, newest first

const history = git([
	'log',
	'--reverse',
	'--format=%h\t%ad\t%s',
	'--date=short',
	'--',
	file,
])
	.trim()
	.split('\n')
	.map(line => {
		const [hash, date, ...subject] = line.split('\t')
		return { hash, date, subject: subject.join('\t') }
	})

// link each version to its commit when origin is github
let commitURL = ''
try {
	const remote = /github\.com[:/](.+?)(?:\.git)?$/.exec(
		git(['remote', 'get-url', 'origin']).trim(),
	)
	if (remote) {
		commitURL = `https://github.com/${remote[1]}/commit/`
	}
} catch (e) {}

// what the existing file already computed: reuse its table rows
// and sections verbatim so re-runs only add missing versions
const existing = fs.existsSync(output) ? read(output) : ''
const existingRows = new Map()
for (const line of existing.split('\n')) {
	const match = /^\| \[?`([0-9a-f]+)`/.exec(line)
	if (match) {
		existingRows.set(match[1], line)
	}
}
const existingSections = new Map()
for (const part of existing.split(/\n(?=## [0-9a-f]+\n)/)) {
	const match = /^## ([0-9a-f]+)\n/.exec(part)
	if (match) {
		existingSections.set(match[1], part.trimEnd())
	}
}

// two-version cache so consecutive diffs parse each version once
const cache = new Map()
const loadVersion = hash => {
	if (!cache.has(hash)) {
		cache.set(hash, load(hash))
		for (const key of cache.keys()) {
			if (cache.size <= 2) break
			cache.delete(key)
		}
	}
	return cache.get(hash)
}

const rows = []
const sections = []
let computed = 0

for (const [index, { hash, date, subject }] of history.entries()) {
	if (
		existingRows.has(hash) &&
		(index === 0 || existingSections.has(hash))
	) {
		rows.push(existingRows.get(hash))
		if (existingSections.has(hash)) {
			sections.push(existingSections.get(hash))
		}
		continue
	}
	if (index === 0) {
		rows.push(
			`| \`${hash}\` | ${date} | ${escapeCell(subject)} | – | – | – |`,
		)
		continue
	}
	console.log('computing', hash, subject)
	const changes = diffData(
		loadVersion(history[index - 1].hash),
		loadVersion(hash),
	)
	const { content, counts } = renderChanges(changes)
	rows.push(
		`| [\`${hash}\`](#${hash}) | ${date} | ${escapeCell(subject)} ` +
			`| ${counts.added} | ${counts.removed} | ${counts.changed} |`,
	)
	sections.push(
		`## ${hash}\n\n${date} — ${subject}` +
			(commitURL ? ` ([diff](${commitURL}${hash}))` : '') +
			` — ${summary(counts)}\n\n` +
			(content || '- no changes'),
	)
	computed++
}

const content =
	'# data.json changelog\n\n' +
	'What changed on each committed version of `jsx/data.json`, ' +
	'newest first. Generated by `npm run changelog`, which only ' +
	'appends versions not listed in this table yet.\n\n' +
	'| version | date | commit | added | removed | changed |\n' +
	'| ------- | ---- | ------ | ----: | ------: | ------: |\n' +
	rows.toReversed().join('\n') +
	'\n\n' +
	sections.toReversed().join('\n\n') +
	'\n'

if (content === existing) {
	console.log(output + ' is up to date')
} else {
	write(output, content)
	console.log(
		output +
			(computed ? ': added ' + computed + ' version(s)' : ' updated'),
	)
}
