import {
	copy,
	entries,
	prettier,
	read,
	remove,
	removeFromArray,
	stringifySorted,
	unique,
	uniqueTypes,
	write,
} from './utils.js'
import {
	parseFromFile,
	parseFromString,
	parseFromURL,
} from './parse.js'
import { getLibs } from './frameworks.js'
import { tsEventsInterfaces, tsTagNames } from './typescript.js'
import { vsCode } from './vscode.js'
import { data, NS, NSGlobalInterfaces } from './data.js'
import { browserData, fetchTable } from './browser.js'
import {
	checkMDNMainValue,
	checkMDNPropValue,
	ElementURL,
	InterfaceURL,
	keysNotIncludedInMDN,
	KeyURL,
} from './mdn.js'

// clean output

remove('./jsx/')

copy(`./.prettierrc.json`, `./jsx/.prettierrc.json`)

// state

const DATA = {
	elements: {
		html: {},
		svg: {},
		math: {},
	},
	DOMExpressions: {
		url: 'https://github.com/ryansolid/dom-expressions',
		booleans: [],
		booleansWithCase: [],
		PropAliases: {},
	},
	keys: {
		HTMLElement: { keys: {} },
		MathMLElement: { keys: {} },
		SVGElement: { keys: {} },
		Element: { keys: {} },
		booleans: [],
		events: [],
		eventsInterfaces: {},
		eventsHierarchy: [],
		globals: {
			html: [],
			svg: [],
			math: [],
		},
	},
}

// program

const libs = await getLibs()

// merge tag names

const tagNames = {
	html: unique([
		data.html.tags.list,
		data.html.tags.deprecated,
		tsTagNames.html,
		tsTagNames.htmldeprecated,
		libs.map(lib =>
			lib.map.elements.html.include === false
				? []
				: Object.keys(lib.elements.html),
		),

		Object.keys(vsCode),
	]),
	svg: unique([
		data.svg.tags.list,
		data.svg.tags.deprecated,
		tsTagNames.svg,
		tsTagNames.svgdeprecated,
		libs.map(lib =>
			lib.map.elements.svg.include === false
				? []
				: Object.keys(lib.elements.svg),
		),
	]),
	math: unique([
		data.math.tags.list,
		data.math.tags.deprecated,
		tsTagNames.math,
		tsTagNames.mathdeprecated,
		libs.map(lib =>
			lib.map.elements.math.include === false
				? []
				: Object.keys(lib.elements.math),
		),
	]),
}

// browser data

const chrome = await browserData(tagNames, 'chrome')
const firefox = await browserData(tagNames, 'firefox')

if (!chrome.dynamic || !firefox.dynamic) {
	throw new Error('data from browsers wasnt dynamically created')
}

write(`./browser/browser.json`, stringifySorted({ chrome, firefox }))

// save typescript events interfaces

DATA.keys.eventsInterfaces = tsEventsInterfaces

// merge browsers global interfaces (Element, HTMLElement, SVGElement, MathMLElement)

for (const ns of NSGlobalInterfaces) {
	DATA.keys[ns] = {
		interfaceName:
			chrome.keys[ns].tagInterfaceName ||
			firefox.keys[ns].tagInterfaceName,
		readonly: unique(
			chrome.keys[ns].readonly,
			firefox.keys[ns].readonly,
		),
		keys: {},
		events: unique(chrome.keys[ns].events, firefox.keys[ns].events),
		booleans: unique(
			chrome.keys[ns].booleans,
			firefox.keys[ns].booleans,
		),
	}

	// chrome

	for (const k in chrome.keys[ns].keys) {
		DATA.keys[ns].keys[k] = DATA.keys[ns].keys[k] || {
			name: k,
			values: {},
		}
		const key = DATA.keys[ns].keys[k]

		const d = chrome.keys[ns].keys[k]

		key.values.Chrome = uniqueTypes(d.value)

		key.propChrome = d.prop
		key.attrChrome = d.attr

		key.keyInterfaceName = d.keyInterfaceName
		key.readonly = d.readonly

		key.propName = d.propName
		key.attrName = d.attrName
	}

	// firefox

	for (const k in firefox.keys[ns].keys) {
		DATA.keys[ns].keys[k] = DATA.keys[ns].keys[k] || {
			name: k,
			values: {},
		}
		const key = DATA.keys[ns].keys[k]

		const d = firefox.keys[ns].keys[k]

		key.values.Firefox = uniqueTypes(d.value)

		key.propFirefox = d.prop
		key.attrFirefox = d.attr

		key.keyInterfaceName = key.keyInterfaceName || d.keyInterfaceName
		key.readonly = key.readonly || d.readonly

		key.propName = key.propName || d.propName
		key.attrName = key.attrName || d.attrName
	}

	for (const k in DATA.keys[ns].keys) {
		const key = DATA.keys[ns].keys[k]

		key.prop = key.propChrome || key.propFirefox
		key.attr = key.attrChrome || key.attrFirefox
	}
}

// create html, math, svg "global attributes"

DATA.keys.globals.html = unique(
	Object.keys(DATA.keys.HTMLElement.keys).map(
		x => 'HTMLElement.' + x,
	),
	Object.keys(DATA.keys.Element.keys).map(x => 'Element.' + x),
)

DATA.keys.globals.math = unique(
	Object.keys(DATA.keys.MathMLElement.keys).map(
		x => 'MathMLElement.' + x,
	),
	Object.keys(DATA.keys.Element.keys).map(x => 'Element.' + x),
)

DATA.keys.globals.svg = unique(
	Object.keys(DATA.keys.SVGElement.keys).map(x => 'SVGElement.' + x),
	Object.keys(DATA.keys.Element.keys).map(x => 'Element.' + x),
)

// merge framework global interfaces (Element, HTMLElement, SVGElement, MathMLElement)

for (const ns of NSGlobalInterfaces) {
	// libs

	for (const lib of libs) {
		if (lib.keys[ns]) {
			for (const k in lib.keys[ns]) {
				DATA.keys[ns].keys[k] = DATA.keys[ns].keys[k] || {
					name: k,
					values: {},
				}
				DATA.keys[ns].keys[k].values[lib.name] = lib.keys[ns][k]
			}
		}
	}

	// copy onevent/onEvent to on:event

	for (const k in DATA.keys[ns].keys) {
		if (k.startsWith('on') && !k.startsWith('on:')) {
			const name = k.replace(/^on/, 'on:').toLowerCase()
			DATA.keys[ns].keys[name] = DATA.keys[ns].keys[name] || {
				name: name,
				values: {},
			}
		}
	}

	// copy properties from onevent to on:event/onEvent

	for (const k in DATA.keys[ns].keys) {
		if (k.startsWith('on')) {
			const name = (
				k.startsWith('on:') ? k.replace(/^on:/, 'on') : k
			).toLowerCase()

			DATA.keys[ns].keys[name] = DATA.keys[ns].keys[name] || {
				name: name,
				values: {},
			}

			DATA.keys[ns].keys[k].keyInterfaceName =
				DATA.keys[ns].keys[name].keyInterfaceName

			DATA.keys[ns].keys[k].values.Chrome =
				DATA.keys[ns].keys[name].values.Chrome
			DATA.keys[ns].keys[k].values.Firefox =
				DATA.keys[ns].keys[name].values.Firefox

			DATA.keys[ns].keys[k].eventInterface = tsEventsInterfaces[name]
		}
	}

	for (const k in DATA.keys[ns].keys) {
		const key = DATA.keys[ns].keys[k]

		if (!key.keyInterfaceName) {
			const kName = k.replace(/^on:/, 'on').toLowerCase()

			let found = false
			// inherited from something else such htmlmediaelement
			for (const k in DATA.keys[ns].keys) {
				if (
					k.toLowerCase() === kName &&
					DATA.keys[ns].keys[k].keyInterfaceName
				) {
					key.keyInterfaceName =
						DATA.keys[ns].keys[k].keyInterfaceName
					found = true
					break
				}
			}

			// inherited from (html|svg|mathml)element/element
			if (
				!found &&
				(k in DATA.keys.Element.keys ||
					kName in DATA.keys.Element.keys)
			) {
				key.keyInterfaceName = 'Element'
			}
		}

		// url
		key.url = KeyURL(ns, key.keyInterfaceName, k)

		// inherited
		key.inherited =
			key.keyInterfaceName && key.keyInterfaceName !== ns

		// event interface
		if (k.startsWith('on')) {
			const kName = k.replace(/^on:/, 'on').toLowerCase()
			key.eventInterface = tsEventsInterfaces[kName]
		}
	}
}

// merge all events

DATA.keys.events = unique(chrome.events, firefox.events)

// deduplicate events

DATA.keys.eventsHierarchy = {
	// events shared by all elements
	elements: [],
	// events defined on window that arent present in elements
	window: [],
	// $Element specific events
	custom: [],
}

{
	const remaining = DATA.keys.events.slice()

	// copy Element events to Elements

	DATA.keys.eventsHierarchy.elements = remaining
		.filter(x => x.startsWith('Element.'))
		.map(x => x.split('.')[1])

	// deuplicate HTMLElement/SVGElement/MathMLElement

	for (const event of remaining.slice()) {
		const [interfaceName, eventName] = event.split('.')

		if (
			remaining.includes('HTMLElement.' + eventName) &&
			remaining.includes('SVGElement.' + eventName) &&
			remaining.includes('MathMLElement.' + eventName)
		) {
			DATA.keys.eventsHierarchy.elements.push(eventName)
			removeFromArray(remaining, 'HTMLElement.' + eventName)
			removeFromArray(remaining, 'SVGElement.' + eventName)
			removeFromArray(remaining, 'MathMLElement.' + eventName)
		}
	}

	// remove events already defined in Elements

	for (const event of remaining.slice()) {
		const [interfaceName, eventName] = event.split('.')

		if (DATA.keys.eventsHierarchy.elements.includes(eventName)) {
			removeFromArray(remaining, event)
		}
	}

	// deuplicate HTMLBodyElement/HTMLFrameSetElement

	for (const event of remaining.slice()) {
		const [interfaceName, eventName] = event.split('.')

		if (
			remaining.includes('HTMLBodyElement.' + eventName) &&
			remaining.includes('HTMLFrameSetElement.' + eventName)
		) {
			removeFromArray(remaining, 'HTMLBodyElement.' + eventName)
			removeFromArray(remaining, 'HTMLFrameSetElement.' + eventName)

			DATA.keys.eventsHierarchy.window.push(eventName)
		}
	}

	// remove from window events defined on Elements

	DATA.keys.eventsHierarchy.custom = remaining
}

// merge all booleans

DATA.keys.booleans = unique(chrome.booleans, firefox.booleans)

// remove from HTMLElement events defined in Element

// merge tag attributes/properties from browser/frameworks

for (const [ns, tags] of entries(tagNames)) {
	// global keys for ns (these all tags of this ns inherit)
	const nsGlobalKeys = unique(
		DATA.keys.globals[ns].map(x => x.split('.')[1]),
	)

	for (const tagName of tags) {
		// if the browser reports a key as "own" for a tag, then is not global

		const globalKeys = nsGlobalKeys.filter(
			x =>
				!(x in chrome[ns][tagName].keys) &&
				!(x in firefox[ns][tagName].keys),
		)

		const tag = {}

		DATA.elements[ns][tagName] = tag

		tag.namespace = NS[ns]
		tag.name = tagName
		tag.description = vsCode[tagName]
			? vsCode[tagName].description
			: ''
		tag.elementURL = ElementURL(ns, tagName)
		tag.tagInterfaceName =
			chrome[ns][tagName].tagInterfaceName ||
			firefox[ns][tagName].tagInterfaceName
		tag.interfaceURL = InterfaceURL(ns, tagName, tag.tagInterfaceName)
		tag.keys = {}
		tag.readonly = unique([
			chrome[ns][tagName].readonly,
			firefox[ns][tagName].readonly,
		])
		tag.deprecated = undefined
		tag.nonstandard = undefined
		tag.experimental = undefined

		// mdn stuff

		if (tagName !== 'webview') {
			tag.deprecated =
				data[ns].tags.deprecated.includes(tagName) ||
				(await checkMDNMainValue(
					ns,
					tagName,
					tag.tagInterfaceName,
					'deprecated',
				)) ||
				false

			tag.nonstandard = tag.deprecated
				? undefined
				: (await checkMDNMainValue(
							ns,
							tagName,
							tag.tagInterfaceName,
							'standard_track',
					  )) === false
					? true
					: undefined

			tag.experimental = tag.deprecated
				? undefined
				: await checkMDNMainValue(
						ns,
						tagName,
						tag.tagInterfaceName,
						'experimental',
					)
		}

		// copy browser keys

		// chrome
		for (const k in chrome[ns][tagName].keys) {
			const key = chrome[ns][tagName].keys[k]

			tag.keys[k] = tag.keys[k] || { values: {} }
			tag.keys[k].values.Chrome = uniqueTypes(key.value)

			tag.keys[k].propChrome = key.prop
			tag.keys[k].attrChrome = key.attr

			tag.keys[k].keyInterfaceName = key.keyInterfaceName
			tag.keys[k].readonly = key.readonly

			tag.keys[k].propName = key.propName
			tag.keys[k].attrName = key.attrName
		}

		// firefox
		for (const k in firefox[ns][tagName].keys) {
			const key = firefox[ns][tagName].keys[k]

			tag.keys[k] = tag.keys[k] || { values: {} }
			tag.keys[k].values.Firefox = uniqueTypes(key.value)

			tag.keys[k].propFirefox = key.prop
			tag.keys[k].attrFirefox = key.attr

			tag.keys[k].keyInterfaceName =
				tag.keys[k].keyInterfaceName || key.keyInterfaceName
			tag.keys[k].readonly = tag.keys[k].readonly || key.readonly

			tag.keys[k].propName = tag.keys[k].propName || key.propName
			tag.keys[k].attrName = tag.keys[k].attrName || key.attrName
		}

		// copy libs keys

		for (const lib of libs) {
			if (lib.elements[ns][tagName]) {
				for (const [k, value] of entries(
					lib.elements[ns][tagName].properties,
				)) {
					if (
						!data.hardcoded.frameworkspecific.includes(
							tagName + '.' + k,
						)
					) {
						tag.keys[k] = tag.keys[k] || { values: {} }
						tag.keys[k].values[lib.name] = value
					}
				}
			}
		}

		// copy onevent/onEvent to on:event

		for (const k in tag.keys) {
			if (k.startsWith('on') && !k.startsWith('on:')) {
				const name = k.replace(/^on/, 'on:').toLowerCase()
				tag.keys[name] = tag.keys[name] || { values: {} }
			}
		}

		// copy properties from onevent to on:event/onEvent

		for (const k in tag.keys) {
			if (k.startsWith('on')) {
				const name = (
					k.startsWith('on:') ? k.replace(/^on:/, 'on') : k
				).toLowerCase()

				tag.keys[name] = tag.keys[name] || { values: {} }

				tag.keys[k].keyInterfaceName = tag.keys[name].keyInterfaceName

				tag.keys[k].values.Chrome = tag.keys[name].values.Chrome
				tag.keys[k].values.Firefox = tag.keys[name].values.Firefox

				tag.keys[k].eventInterface = tsEventsInterfaces[name]
			}
		}

		// noramlize

		for (const k in tag.keys) {
			const kLower = k.toLowerCase()

			const key = tag.keys[k]
			key.name = k

			if (!key.keyInterfaceName) {
				const kName = kLower.replace(/^on:/, 'on')

				let found = false
				// inherited from something else such htmlmediaelement
				for (const k in tag.keys) {
					if (
						k.toLowerCase() === kName &&
						tag.keys[k].keyInterfaceName
					) {
						key.keyInterfaceName = tag.keys[k].keyInterfaceName
						found = true
						break
					}
				}

				// inherited from (html|svg|mathml)element/element
				if (
					!found &&
					(nsGlobalKeys.includes(k) || nsGlobalKeys.includes(kName))
				) {
					key.keyInterfaceName = DATA.keys.globals[ns]
						.find(x => x.split('.')[1].toLowerCase() === kName)
						.split('.')[0]
				}
			}

			const idInterface =
				tagName + '.' + tag.tagInterfaceName + '.' + k
			const idInterfaceLower =
				tagName + '.' + tag.tagInterfaceName + '.' + kLower

			// deprecation
			key.deprecated =
				data.hardcoded.deprecated.includes(idInterfaceLower)

			// weird
			key.weird =
				data.hardcoded.weird.includes(idInterfaceLower) || undefined

			// url
			key.url = KeyURL(
				tagName,
				key.keyInterfaceName || tag.tagInterfaceName,
				k,
			)

			// prop

			key.propChrome = key.propChrome || false
			key.propFirefox = key.propFirefox || false

			key.prop = key.propChrome || key.propFirefox

			// attr

			const isConfirmedAttribute =
				data.hardcoded.confirmed.includes(idInterface) ||
				data.hardcoded.notglobal.includes(idInterface)

			key.attrChrome = key.attrChrome || isConfirmedAttribute || false
			key.attrFirefox =
				key.attrFirefox || isConfirmedAttribute || false

			key.attr = key.attrChrome || key.attrFirefox || false

			key.global =
				!data.hardcoded.notglobal.includes(idInterface) &&
				(key.keyInterfaceName === 'HTMLElement' ||
					key.keyInterfaceName === 'MathMLElement' ||
					key.keyInterfaceName === 'SVGElement' ||
					key.keyInterfaceName === 'Element')

			// when interface is empty/null is because this key is made up and doesnt exists

			key.inherited = !!(
				key.keyInterfaceName &&
				tag.tagInterfaceName !== key.keyInterfaceName
			)

			key.readonly =
				key.readonly ||
				tag.readonly.some(x => x.split('.')[1] === k) ||
				data.hardcoded.readonly.includes(
					tagName + '.' + tag.tagInterfaceName + '.' + k,
				)

			key.deprecated =
				key.deprecated ||
				(await checkMDNPropValue(
					ns,
					tagName,
					tag.tagInterfaceName,
					k,
					'deprecated',
				)) ||
				undefined

			key.nonstandard = (await checkMDNPropValue(
				ns,
				tagName,
				tag.tagInterfaceName,
				k,
				'standard_track',
			))
				? undefined
				: (await checkMDNPropValue(
							ns,
							tagName,
							tag.tagInterfaceName,
							k,
							'standard_track',
					  )) === false
					? true
					: undefined

			key.experimental =
				(await checkMDNPropValue(
					ns,
					tagName,
					tag.tagInterfaceName,
					k,
					'experimental',
				)) || undefined

			key.warn =
				/[A-Z]/.test(k) &&
				// is not an event
				!/^on:?[A-Z]/.test(k) &&
				// svg is XML so it has attributes with uppercase letters
				ns !== 'svg' &&
				// is not a prop
				!key.prop
					? true
					: undefined

			if (ns === 'html' && tag.name !== 'webview') {
				key.danger =
					key.warn || key.deprecated || /^on/.test(k)
						? undefined
						: !key.attr && !key.prop && !key.global
			}

			// event interface

			if (key.name.startsWith('on')) {
				const kName = key.name.replace(/^on:/, 'on').toLowerCase()
				key.eventInterface = tsEventsInterfaces[kName]
			}
		}

		// after keys been set

		// mark inherited case insensitive

		const inherited = Object.keys(tag.keys)
			.filter(x => tag.keys[x].inherited)
			.map(x => x.toLowerCase())

		for (const k in tag.keys) {
			if (inherited.includes(k.toLowerCase())) {
				tag.keys[k].inherited = true
			}
		}

		// warn about stuff included in mdn but not shown in the table

		tag.notIncludedMDN = await keysNotIncludedInMDN(
			ns,
			tagName,
			tag.tagInterfaceName,
			Object.keys(tag.keys).map(x => x.toLowerCase()),
			tag.readonly.map(x => x.split('.')[1]),
			globalKeys,
		)
	}
}

// https://github.com/ryansolid/dom-expressions

DATA.DOMExpressions = {
	url: 'https://github.com/ryansolid/dom-expressions',
	booleans: [],
	booleansWithCase: [],
	PropAliases: {},
}

for (const [ns, tag] of entries(DATA.elements.html)) {
	for (const [_, key] of entries(tag.keys)) {
		if (key.prop) {
			if (key.readonly || key.deprecated || key.nonstandard) {
				continue
			}

			if (
				key.values.Chrome === 'boolean' ||
				key.values.Firefox === 'boolean'
			) {
				if (/[A-Z]/.test(key.name)) {
					DATA.DOMExpressions.booleansWithCase.push(key.name)

					const keyLower = key.name.toLowerCase()
					if (!DATA.DOMExpressions.PropAliases[keyLower]) {
						DATA.DOMExpressions.PropAliases[keyLower] = {
							$: key.name,
						}
					}
					DATA.DOMExpressions.PropAliases[keyLower][
						tag.name.toUpperCase()
					] = 1
				}

				DATA.DOMExpressions.booleans.push(key.name.toLowerCase())
			}
		}
	}
}

DATA.DOMExpressions.booleansWithCase = unique(
	DATA.DOMExpressions.booleansWithCase,
)

DATA.DOMExpressions.booleans = unique(DATA.DOMExpressions.booleans)

// save to json

write(`./jsx/data.json`, stringifySorted(DATA))

write(
	`./table/index.html`,
	await fetchTable('/table/index.template.html'),
)

prettier('./jsx/**/*.d.ts')
prettier('./table/index.html')
