import { execFileSync } from 'node:child_process'
import { read, unique } from './utils.js'

/**
 * Prints the added/removed/changed keys between two revisions of
 * `jsx/data.json`, grouped per tag. Doubles as release notes.
 *
 *     node src/changelog.js [old] [new]
 *
 * Revisions are anything `git show` accepts (hash, tag, HEAD~5).
 * `old` defaults to `HEAD`, `new` to the working tree, so after
 * `npm run dev` a plain `npm run changelog` shows what regenerating
 * changed.
 */

const file = 'jsx/data.json'

const [oldRev = 'HEAD', newRev] = process.argv.slice(2)

const load = rev => {
	try {
		return JSON.parse(
			rev
				? execFileSync('git', ['show', rev + ':' + file], {
						encoding: 'utf8',
						maxBuffer: 64 * 1024 ** 2,
					})
				: read('./' + file),
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

const isObject = v =>
	v !== null && typeof v === 'object' && !Array.isArray(v)

const display = v =>
	Array.isArray(v)
		? '(' + v.length + ' items)'
		: isObject(v)
			? '(' + Object.keys(v).length + ' keys)'
			: String(v).replace(/\s+/g, ' ')

const changes = []

function diff(oldValue, newValue, path) {
	if (oldValue === undefined) {
		changes.push({ sign: '+', path, text: display(newValue) })
	} else if (newValue === undefined) {
		changes.push({ sign: '-', path, text: display(oldValue) })
	} else if (isObject(oldValue) && isObject(newValue)) {
		for (const k of unique(
			Object.keys(oldValue),
			Object.keys(newValue),
		)) {
			diff(oldValue[k], newValue[k], [...path, k])
		}
	} else if (Array.isArray(oldValue) && Array.isArray(newValue)) {
		// items are unordered sets as far as meaning goes, so report
		// membership changes instead of positional ones
		const oldItems = new Map(
			oldValue.map(x => [JSON.stringify(x), x]),
		)
		const newItems = new Map(
			newValue.map(x => [JSON.stringify(x), x]),
		)
		for (const [id, item] of oldItems) {
			if (!newItems.has(id)) {
				changes.push({ sign: '-', path, text: display(item) })
			}
		}
		for (const [id, item] of newItems) {
			if (!oldItems.has(id)) {
				changes.push({ sign: '+', path, text: display(item) })
			}
		}
	} else if (oldValue !== newValue) {
		changes.push({
			sign: '~',
			path,
			text: display(oldValue) + ' → ' + display(newValue),
		})
	}
}

diff(load(oldRev), load(newRev), [])

console.log(
	file +
		': `' +
		oldRev +
		'` → ' +
		(newRev ? '`' + newRev + '`' : 'working tree'),
)

if (!changes.length) {
	console.log('\nno changes')
	process.exit()
}

// group changes per tag (`elements.html.a`) or per top section
// (`keys.events`, `DOMExpressions.booleans`)
const groupDepth = path => (path[0] === 'elements' ? 3 : 2)

const groups = new Map()
for (const change of changes) {
	const group = change.path.slice(0, groupDepth(change.path))
	const name = group.join('.')
	if (!groups.has(name)) {
		groups.set(name, [])
	}
	groups.get(name).push(change)
}

const totals = { '+': 0, '-': 0, '~': 0 }

for (const [name, list] of groups) {
	console.log('\n' + name)
	for (const { sign, path, text } of list) {
		totals[sign]++
		const rest = path.slice(groupDepth(path)).join('.')
		console.log(
			'\t' + sign + ' ' + [rest, text].filter(x => x).join(': '),
		)
	}
}

console.log(
	'\n' +
		totals['+'] +
		' added, ' +
		totals['-'] +
		' removed, ' +
		totals['~'] +
		' changed',
)
