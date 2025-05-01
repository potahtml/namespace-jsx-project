import {
	append,
	copy,
	entries,
	fetchCached,
	prettier,
	read,
	remove,
	stringifySorted,
	unique,
	uniqueTypes,
	write,
} from './utils.js'

import {
	KeyURL,
	browserData,
	deprecatedAttributes,
	ElementURL,
	getEventNameMaps,
	InterfaceURL,
	isBlacklisted,
	jsxcore,
	libs,
	ts,
	tsTagNamesMap,
	vsCode,
	InterfaceJSONURL,
	ElementJSONURL,
	weirdAttributes,
	deprecatedTags,
	mdnSkip,
	fetchTable,
	frameworkSpecific,
	fixedTsEventsInterfaces,
	confirmedAttributes,
	globalAttributes,
} from './data.js'

import {
	parseFromFile,
	parseFromString,
	parseFromURL,
} from './parse.js'

// clean output

remove('./jsx/')

copy(`./.prettierrc.json`, `./jsx/.prettierrc.json`)

// state

const DATA = {
	events: {},
	eventsLib: {},
	aria: {},
	elements: {},
	attributesAndProperties: {
		attributes: [],
		properties: [],
		propertiesWithCase: [],
		boolean: [],
		booleanWithCase: [],
	},
}

// Write to disk lib interfaces, index interfaces and tagNames

for (const lib of libs) {
	lib.interfaces = await parseFromURL(lib.file, lib.name, lib.map)

	// write to disk all of the interfaces
	for (const [name, value] of entries(lib.interfaces)) {
		write(`./jsx/source/${lib.name}/${name}.d.ts`, value.source)
	}

	// get all of the tagNames used by reading mapped elements.d.ts
	const [_, inter] = parseFromFile(
		`./jsx/source/${lib.name}/elements.d.ts`,
	)

	// make a list of the tagNames
	lib.tagNames = []

	// save the interfaces of the tagNames
	lib.tagInterface = {}
	lib.tagValues = {}
	for (const [name, value] of Object.entries(inter)) {
		// forEach prop in interface
		value.properties.forEach(prop => {
			const tagName = prop.name

			lib.tagNames.push(tagName)

			// interfaces for tagName
			const interfaces = prop.source
				.replaceAll('<', ' ')
				.replaceAll('>', ' ')
				.replaceAll(',', ' ')
				.replaceAll('.', ' ')
				.trim()
				.toLowerCase()
				.split(' ')
				.map(i => i.trim())
				.filter(i => i)
				.filter(i => !isBlacklisted[i])

			// get the keys for the tagName
			lib.tagInterface[tagName] = lib.tagInterface[tagName] || ''

			for (const inter of interfaces) {
				if (lib.interfaces[inter]) {
					const extended = lib.interfaces[inter].source
						.split('\n')[0]
						.replaceAll('<', ' ')
						.replaceAll('>', ' ')
						.replaceAll(',', ' ')
						.replaceAll('.', ' ')
						.trim()
						.toLowerCase()
						.split(' ')
						.map(i => i.trim())
						.filter(i => i)
						.filter(i => !isBlacklisted[i])

					for (const ext of extended) {
						if (!interfaces.includes(ext)) {
							interfaces.push(ext)
						}
					}
				}
			}
			for (const inter of interfaces) {
				if (lib.interfaces[inter]) {
					lib.tagInterface[tagName] +=
						lib.interfaces[inter].source + '\n'
				}
			}

			// get the keys and values for the tagName
			lib.tagValues[tagName] = lib.tagValues[tagName] || {}

			const parsed = parseFromString(lib.tagInterface[tagName])
			for (const inter of parsed) {
				for (const [name, value] of entries(inter)) {
					if (value.properties) {
						for (const prop of value.properties) {
							if (lib.tagValues[tagName][prop.name]) {
								lib.tagValues[tagName][prop.name] +=
									' | ' + prop.source
								lib.tagValues[tagName][prop.name] = uniqueTypes(
									lib.tagValues[tagName][prop.name],
								)
							} else {
								lib.tagValues[tagName][prop.name] = uniqueTypes(
									prop.source,
								)
							}
						}
					}
				}
			}
		})
	}
	lib.tagNames = unique(lib.tagNames)

	/** Merge libs shared interfaces */

	const banner = `\n\n// ${lib.name} - ${lib.url}  \n`

	for (const [name, value] of entries(jsxcore)) {
		if (lib.interfaces[name]) {
			append(
				`./jsx/${value}.d.ts`,
				banner + lib.interfaces[name].source,
			)
		}
	}
}

/** Typescript tag names maps */

const seenTags = {}
const seenEventsMaps = []

for (const [kind, value] of Object.entries(tsTagNamesMap)) {
	// get the events maps for the file
	const elements = value.properties.map(prop => {
		const eventsMap = getEventNameMaps(
			ts[prop.source.toLowerCase()].source,
		)[0]

		return {
			tagName: prop.name,
			eventsMap,
		}
	})

	// Write the tsTagNamesMap to disk

	write(`./jsx/ts/${kind}.d.ts`, value.source)

	// save in data.json

	DATA.elements[value.namespace] =
		DATA.elements[value.namespace] || {}

	// For each tag name, merge the interfaces from the frameworks

	for (let element of elements) {
		DATA.elements[value.namespace][element.tagName] =
			DATA.elements[value.namespace][element.tagName] || {}

		seenTags[element.tagName] = true
		seenEventsMaps.push(element.eventsMap)

		const file = `./jsx/${kind}/${element.tagName}.d.ts`

		for (const lib of libs) {
			if (lib.tagInterface[element.tagName]) {
				const banner = `\n\n// ${lib.name} - ${lib.url}  \n`
				append(file, banner + lib.tagInterface[element.tagName])
			}
		}
	}
}

// Write to disk Frameworks tags not included in TS data, ex `webview`

const frameworkTags = unique([
	libs.map(lib => lib.tagNames).flat(Infinity),
	Object.keys(vsCode),
])

for (const tag of frameworkTags) {
	if (!seenTags[tag]) {
		DATA.elements['http://www.w3.org/1999/xhtml'][tag] =
			DATA.elements['http://www.w3.org/1999/xhtml'][tag] || {}

		const file = `./jsx/unknown/${tag}.d.ts`

		for (const lib of libs) {
			if (lib.tagInterface[tag]) {
				const banner = `\n\n// ${lib.name} - ${lib.url}  \n`
				append(file, banner + lib.tagInterface[tag])
			}
		}
	}
}

/** Events mapping */

/**
 * Get event names from frameworks for fancy capitalization. Give some
 * event capitalization not defined in any framework.
 */

const eventsNames = unique([
	[
		'onAfterPrint',
		'onAnimationCancel',
		'onBeforePrint',
		'onBeforeToggle',
		'onBeforeUnload',
		'onContextLost',
		'onContextRestored',
		'onCueChange',
		'onDblClick',
		'onEnterPictureInPicture',
		'onFullscreenChange',
		'onFullscreenError',
		'onGamepadConnected',
		'onGamepadDisconnected',
		'onGotPointerCapture',
		'onHashChange',
		'onLanguageChange',
		'onLeavePictureInPicture',
		'onLostPointerCapture',
		'onMessage',
		'onMessageError',
		'onOffline',
		'onOnline',
		'onPageHide',
		'onPageShow',
		'onPopState',
		'onRejectionHandled',
		'onScrollEnd',
		'onSecurityPolicyViolation',
		'onSelectionChange',
		'onSelectStart',
		'onSlotChange',
		'onUnhandledRejection',
		'onUnload',
		'onWaitingForKey',
		'onWebKitAnimationEnd',
		'onWebKitAnimationIteration',
		'onWebKitAnimationStart',
		'onWebKitTransitionEnd',
	],
	read('./jsx/events.d.ts')
		.replaceAll('?', '')
		.split('\n')
		.map(item => item.trim())
		.filter(item => /^on[a-z]+:/i.test(item))
		.filter(item => !/(capture|passive):/i.test(item))
		.map(item => item.split(':')[0].trim()),
])

/**
 * Deduplicate events, sorting makes these with the more capital
 * letters win
 */
const eventsNameSeen = {}
const eventsCapitalized = {}
for (const event of eventsNames) {
	const lower = event.toLowerCase()
	if (!eventsNameSeen[lower]) {
		eventsNameSeen[lower] = true
		eventsCapitalized[event.toLowerCase().slice(2)] = event
	}
}

DATA.events = JSON.parse(JSON.stringify(eventsCapitalized))

let eventsInterfaces = []
for (const eventMap of unique(seenEventsMaps)) {
	eventsInterfaces.push(eventMap)
	eventsInterfaces.push(
		getEventNameMaps(ts[eventMap.toLowerCase()].source),
	)
}
eventsInterfaces = unique(eventsInterfaces)

// Generate events file

for (const eventMap of eventsInterfaces) {
	const file = `./jsx/ts/events.d.ts`
	append(file, ts[eventMap.toLowerCase()].source)
}

// Get the interfaces names for events

const events = read(`./jsx/ts/events.d.ts`).split('\n')

for (let i = 0; i < events.length; i++) {
	const event = events[i]
	if (event.includes(':')) {
		let [eventName, inter] = event.split(':')
		eventName = eventName.trim()
		DATA.events[eventName] = {
			name: eventName,
			capitalized: DATA.events[eventName] || eventName,
			interface: inter.trim(),
		}
	}
}

// normalize events

for (let eventName in DATA.events) {
	if (typeof DATA.events[eventName] === 'string') {
		DATA.events[eventName] = {
			name: eventName,
			capitalized: DATA.events[eventName],
			interface: 'Event',
		}
	}
}

// patch the interfaces

for (let eventName in fixedTsEventsInterfaces) {
	DATA.events[eventName].interface =
		fixedTsEventsInterfaces[eventName]
}

// lib events

DATA.eventsLib = {}

for (const lib of libs) {
	lib.interfaces.events.properties
		.filter(
			x =>
				x.name.startsWith('on') &&
				(!x.name.toLowerCase().endsWith('capture') ||
					x.name.toLowerCase().replace(':', '').replace(/^on/, '') ===
						'lostpointercapture') &&
				!x.name.toLowerCase().endsWith('passive'),
		)
		.forEach(property => {
			DATA.eventsLib[property.name] = DATA.eventsLib[
				property.name
			] || {
				name: property.name,
				values: {},
			}
			if (DATA.eventsLib[property.name].values[lib.name]) {
				// event is duplicated
				DATA.eventsLib[property.name].values[lib.name] +=
					' ' + property.source
			} else {
				DATA.eventsLib[property.name].values[lib.name] =
					property.source
			}
		})
}

// aria

DATA.aria = {}

for (const lib of libs) {
	lib.interfaces.ariaattributes.properties.forEach(property => {
		DATA.aria[property.name] = DATA.aria[property.name] || {
			name: property.name,
			values: {},
		}
		if (DATA.aria[property.name].values[lib.name]) {
			DATA.aria[property.name].values[lib.name] +=
				' | ' + property.source
		} else {
			DATA.aria[property.name].values[lib.name] = property.source
		}
		DATA.aria[property.name].values[lib.name] = uniqueTypes(
			DATA.aria[property.name].values[lib.name],
		)
	})
}

// get browser data

const browserElements = {
	'http://www.w3.org/1999/xhtml': Object.keys(
		DATA.elements['http://www.w3.org/1999/xhtml'],
	),
	'http://www.w3.org/2000/svg': Object.keys(
		DATA.elements['http://www.w3.org/2000/svg'],
	),
	'http://www.w3.org/1998/Math/MathML': Object.keys(
		DATA.elements['http://www.w3.org/1998/Math/MathML'],
	),
}

const chrome = await browserData(browserElements, 'chrome')
const firefox = await browserData(browserElements, 'firefox')

// copy library tags to data.elements

for (const ns in DATA.elements) {
	for (const tagName in DATA.elements[ns]) {
		const tag = DATA.elements[ns][tagName]
		tag.name = tagName
		tag.namespace = ns
		tag.elementURL = ElementURL(ns, tagName)
		tag.description = ''
		tag.interface =
			chrome[ns].elements[tagName].interface ||
			firefox[ns].elements[tagName].interface
		tag.interfaceURL = InterfaceURL(ns, tag, tag.interface)
		tag.keys = {}

		// mdn stuff

		const interfaceMDN = JSON.parse(
			(
				await fetchCached(InterfaceJSONURL(tag.interface))
			).toLowerCase(),
		)

		let elementMDN
		try {
			elementMDN = JSON.parse(
				(
					await fetchCached(ElementJSONURL(ns, tagName))
				).toLowerCase(),
			)
		} catch (e) {
			elementMDN = true
		}

		function checkMDNMainValue(valueName) {
			// take deprecated from interface name
			return (
				interfaceMDN.api[tag.interface.toLowerCase()].__compat.status[
					valueName
				] ||
				// take deprecated from element
				elementMDN[Object.keys(elementMDN)[0]]?.elements[
					tagName.toLowerCase()
				]?.__compat.status[valueName] ||
				undefined
			)
		}
		function checkMDNPropValue(propName, valueName) {
			propName = propName.toLowerCase()

			// do not merge this checks
			const c1 =
				elementMDN[Object.keys(elementMDN)[0]]?.elements[
					tagName.toLowerCase()
				]?.__compat[propName]?.status[valueName]

			if (c1 !== undefined) return c1

			const c2 =
				elementMDN[Object.keys(elementMDN)[0]]?.elements[
					tagName.toLowerCase()
				][propName]?.__compat?.status[valueName]

			if (c2 !== undefined) return c2

			return interfaceMDN.api[tag.interface.toLowerCase()][propName]
				?.__compat.status[valueName]
		}

		if (tagName !== 'webview') {
			tag.deprecated =
				deprecatedTags[ns].includes(tagName) ||
				checkMDNMainValue('deprecated') ||
				false

			tag.nonstandard = tag.deprecated
				? undefined
				: checkMDNMainValue('standard_track') === false
					? true
					: undefined

			tag.experimental = tag.deprecated
				? undefined
				: checkMDNMainValue('experimental')
		}

		// libs
		for (const lib of libs) {
			if (lib.tagValues[tagName]) {
				for (const [k, value] of entries(lib.tagValues[tagName])) {
					tag.keys[k] = tag.keys[k] || { values: {} }
					tag.keys[k].values[lib.name] = value
				}
			}
		}

		// chrome
		for (const k in chrome[ns].elements[tagName].keys) {
			const key = chrome[ns].elements[tagName].keys[k]

			tag.keys[k] = tag.keys[k] || { values: {} }
			tag.keys[k].values.Chrome = uniqueTypes(key.value)

			tag.keys[k].propChrome = key.prop
			tag.keys[k].attrChrome = key.attr

			tag.keys[k].interface = key.interface
			tag.keys[k].readonly = key.readonly

			tag.keys[k].propName = key.propName
			tag.keys[k].attrName = key.attrName
		}

		// firefox
		for (const k in firefox[ns].elements[tagName].keys) {
			const key = firefox[ns].elements[tagName].keys[k]

			tag.keys[k] = tag.keys[k] || { values: {} }
			tag.keys[k].values.Firefox = uniqueTypes(key.value)

			tag.keys[k].propFirefox = key.prop
			tag.keys[k].attrFirefox = key.attr

			tag.keys[k].interface = tag.keys[k].interface || key.interface
			tag.keys[k].readonly = tag.keys[k].readonly || key.readonly

			tag.keys[k].propName = tag.keys[k].propName || key.propName
			tag.keys[k].attrName = tag.keys[k].attrName || key.attrName
		}

		// vs code
		if (vsCode[tagName]) {
			tag.description = vsCode[tagName].description
			/*for (const k in vsCode[tagName].keys) {
				tag.keys[k] = tag.keys[k] || { values: {} }
				tag.keys[k].values.VSCode = uniqueTypes(
					vsCode[tagName].keys[k],
				)
			}*/
		}

		tag.readonly = unique([
			chrome[ns].elements[tagName].readonly,
			firefox[ns].elements[tagName].readonly,
		])

		for (const k in tag.keys) {
			tag.keys[k].name = k

			// deprecation
			tag.keys[k].deprecated =
				deprecatedAttributes[
					tagName + '.' + tag.interface + '.' + k.toLowerCase()
				]

			// weird
			tag.keys[k].weird =
				weirdAttributes[
					tagName + '.' + tag.interface + '.' + k.toLowerCase()
				]

			// url
			tag.keys[k].url = tag.keys[k].interface
				? KeyURL(ns, tagName, tag.keys[k].interface, k)
				: KeyURL(ns, tagName, tag.interface, k)

			// prop/attr

			const isConfirmedAttribute =
				confirmedAttributes[
					tag.name + '.' + tag.interface + '.' + tag.keys[k].name
				]

			tag.keys[k].propChrome = tag.keys[k].propChrome || false
			tag.keys[k].propFirefox = tag.keys[k].propFirefox || false

			tag.keys[k].attrChrome =
				tag.keys[k].attrChrome || isConfirmedAttribute || false
			tag.keys[k].attrFirefox =
				tag.keys[k].attrFirefox || isConfirmedAttribute || false

			tag.keys[k].prop =
				tag.keys[k].propChrome || tag.keys[k].propFirefox

			tag.keys[k].attr =
				tag.keys[k].attrChrome || tag.keys[k].attrFirefox

			tag.keys[k].globalAttribute = globalAttributes.includes(k)

			tag.keys[k].readonly =
				tag.keys[k].readonly ||
				tag.readonly.some(x => x.split('.')[1] === k)

			tag.keys[k].deprecated =
				tag.keys[k].deprecated ||
				checkMDNPropValue(k, 'deprecated') ||
				undefined

			tag.keys[k].nonstandard = checkMDNPropValue(k, 'standard_track')
				? undefined
				: checkMDNPropValue(k, 'standard_track') === false
					? true
					: undefined

			tag.keys[k].experimental =
				checkMDNPropValue(k, 'experimental') || undefined

			tag.keys[k].warn =
				/[A-Z]/.test(k) &&
				!/^on:?[A-Z]/.test(k) &&
				// svg is XML so it has attributes with uppercase letters
				ns !== 'http://www.w3.org/2000/svg' &&
				!tag.keys[k].prop
					? true
					: undefined

			if (
				ns === 'http://www.w3.org/1999/xhtml' &&
				tag.name !== 'webview'
			) {
				tag.keys[k].danger =
					tag.keys[k].warn || tag.keys[k].deprecated || /^on/.test(k)
						? undefined
						: !tag.keys[k].attr &&
							!tag.keys[k].prop &&
							!tag.keys[k].globalAttribute
			}

			// when interface is empty/null is because this key is made up and doesnt exists
			tag.keys[k].inherited =
				!!(
					tag.keys[k].interface &&
					tag.interface !== tag.keys[k].interface
				) && !tag.keys[k].warn
		}

		// mark inherited when also lower case

		const inherited = Object.keys(tag.keys)
			.filter(x => tag.keys[x].inherited)
			.map(x => x.toLowerCase())

		for (const k in tag.keys) {
			if (inherited.includes(k.toLowerCase())) {
				tag.keys[k].inherited = true
			}
		}

		// setters not included
		const keys = Object.keys(tag.keys).map(x => x.toLowerCase())

		tag.notIncludedMDN = []

		// mdn
		try {
			let mdnkeys = []

			const readonlyKeys = tag.readonly.map(x => x.split('.')[1])

			try {
				const elementMDN = JSON.parse(
					await fetchCached(ElementJSONURL(ns, tag.name)),
				)

				mdnkeys = unique([
					Object.keys(
						elementMDN[Object.keys(elementMDN)[0]]?.elements[tag.name]
							?.__compat,
					),
					Object.keys(
						elementMDN[Object.keys(elementMDN)[0]]?.elements[
							tag.name
						],
					),
				])
			} catch (e) {}

			try {
				const interfaceMDN = JSON.parse(
					await fetchCached(InterfaceJSONURL(tag.interface)),
				)

				mdnkeys = unique([
					mdnkeys,
					Object.keys(interfaceMDN.api[tag.interface]),
				])
			} catch (e) {}

			tag.notIncludedMDN = mdnkeys
				.filter(x => !keys.includes(x.toLowerCase()))
				.filter(x => !mdnSkip.includes(x))
				.filter(x => !readonlyKeys.includes(x))
		} catch (e) {}
	}
}

// delete framework-specific
for (const [ns, data] of entries(frameworkSpecific)) {
	for (const [tag, keys] of entries(data)) {
		for (const key of keys) {
			delete DATA.elements[ns][tag].keys[key]
		}
	}
}

// attributes/properties

DATA.attributesAndProperties = {
	attributes: [],
	properties: [],
	propertiesWithCase: [],
	boolean: [],
	booleanWithCase: [],
}

for (const [ns, data] of entries(
	DATA.elements['http://www.w3.org/1999/xhtml'],
)) {
	for (const [_, key] of entries(data.keys)) {
		if (key.event) {
			continue
		}
		if (key.attr) {
			DATA.attributesAndProperties.attributes.push(key.name)
		}
		if (key.prop) {
			DATA.attributesAndProperties.properties.push(key.name)

			if (
				key.values.Chrome === 'boolean' ||
				key.values.Firefox === 'boolean'
			) {
				DATA.attributesAndProperties.boolean.push(key.name)

				if (/[A-Z]/.test(key.name)) {
					DATA.attributesAndProperties.booleanWithCase.push(key.name)
				}
			}

			if (/[A-Z]/.test(key.name)) {
				DATA.attributesAndProperties.propertiesWithCase.push(key.name)
			}
		}
	}
}

DATA.attributesAndProperties.attributes = unique(
	DATA.attributesAndProperties.attributes,
)
DATA.attributesAndProperties.properties = unique(
	DATA.attributesAndProperties.properties,
)
DATA.attributesAndProperties.boolean = unique(
	DATA.attributesAndProperties.boolean,
)
DATA.attributesAndProperties.propertiesWithCase = unique(
	DATA.attributesAndProperties.propertiesWithCase,
)
DATA.attributesAndProperties.booleanWithCase = unique(
	DATA.attributesAndProperties.booleanWithCase,
)

const columns = [
	'Chrome',
	'Firefox',
	'Pota',
	'Solid Main',
	'Solid Minor',
	'Solid Next',
	'Voby',
	'Vue',
	'Preact',
	'React',
]

const o = JSON.parse(stringifySorted(DATA))

o.columns = columns

write(`./jsx/data.json`, JSON.stringify(o, null, 2))

write(`./index.html`, await fetchTable('/index.template.html'))

prettier('./jsx/**')
prettier('./index.html')
