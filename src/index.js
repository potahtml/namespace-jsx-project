import {
	append,
	copy,
	prettier,
	read,
	remove,
	unique,
	write,
} from './utils.js'

import {
	generateElementsInterfaces,
	getEventNameMaps,
	isBlacklisted,
	jsxcore,
	libs,
	ts,
	tsTagNamesMap,
	vsCode,
} from './data.js'
import {
	parseFromFile,
	parseFromString,
	parseFromURL,
} from './parse.js'

// clean output

remove('./jsx/')

copy(`./.prettierrc.json`, `./jsx/.prettierrc.json`)

const libraryTags = {}

const DATA = {
	events: {},
	elements: {},
}

for (const lib of libs) {
	/** Split the source namespace JSX into interfaces */

	lib.interfaces = await parseFromURL(lib.file, lib.name, lib.map)

	for (const [name, value] of Object.entries(lib.interfaces)) {
		write(`./jsx/source/${lib.name}/${name}.d.ts`, value.source)
	}

	/** Get the tagNames used */

	const [_, inter] = parseFromFile(
		`./jsx/source/${lib.name}/elements.d.ts`,
	)
	lib.tagNames = []
	lib.tagInterface = {}
	for (const [name, value] of Object.entries(inter)) {
		value.properties.forEach(prop => {
			const tagNameWithCase = prop.name
			const tagName = tagNameWithCase.toLowerCase()

			lib.tagNames.push(tagName)

			/** Get the attributes interfaces for the tagName */

			lib.tagInterface[tagName] = lib.tagInterface[tagName] || ''
			const interfaces = prop.source
				.replace(/</g, ' ')
				.replace(/>/g, ' ')
				.trim()
				.toLowerCase()
				.split(' ')
			for (const inter of interfaces) {
				if (inter && !isBlacklisted[inter] && lib.interfaces[inter]) {
					lib.tagInterface[tagName] +=
						lib.interfaces[inter].source + '\n'
				}
			}

			const tag = (libraryTags[tagNameWithCase] = libraryTags[
				tagNameWithCase
			] || { attributes: {} })
			const properties = tag.attributes

			const parsed = parseFromString(lib.tagInterface[tagName])
			for (const inter of parsed) {
				for (const [name, value] of Object.entries(inter)) {
					if (value.properties) {
						for (const prop of value.properties) {
							properties[prop.name] = properties[prop.name] || {}
							properties[prop.name][lib.name] = prop.source
						}
					}
				}
			}
		})
	}
	lib.tagNames = unique(lib.tagNames)

	/** Merge libs shared interfaces */

	const banner = `\n\n// ${lib.name} - ${lib.url}  \n`

	for (const [name, value] of Object.entries(jsxcore)) {
		if (lib.interfaces[name]) {
			append(
				`./jsx/${value}.d.ts`,
				banner + lib.interfaces[name].source,
			)
		}
	}
}

/**
 * Get event names from frameworks for fancy capitalzation. Give some
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
		.map(item => item.split(':')[0]),
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

/** Typescript tag names maps. */

const seenTags = {}
const seenEventsMaps = []

for (const [kind, value] of Object.entries(tsTagNamesMap)) {
	const elements = value.properties.map(prop => {
		const event = getEventNameMaps(
			ts[prop.source.toLowerCase()].source,
		)[0]

		return {
			id: prop.name,
			tagName: prop.name.toLowerCase(),
			interface: prop.source.trim(),
			events: event.replace(/EventMap/, 'Events'),
			eventsMap: event,
		}
	})

	/** Write the tsTagNamesMap to disk */

	write(`./jsx/ts/${kind}.d.ts`, value.source)

	/** Generate elements interfaces */

	write(
		`./jsx/generated/${kind}.d.ts`,
		generateElementsInterfaces(
			elements,
			value.interface,
			value.attributes,
		),
	)

	DATA.elements[value.namespace] =
		DATA.elements[value.namespace] || {}

	/** For each tag name merge the the interfaces from the frameworks */

	for (let element of elements) {
		DATA.elements[value.namespace][element.id] =
			DATA.elements[value.namespace][element.id] || {}

		DATA.elements[value.namespace][element.id].deprecated =
			kind.includes('deprecated')

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

/**
 * Write to disk Frameworks tags not included in TS data, ex
 * `webview`.
 */

const frameworkTags = unique(
	libs.map(lib => lib.tagNames).flat(Infinity),
)

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

/** All event maps */

let allEventsMaps = []
for (const eventMap of unique(seenEventsMaps)) {
	allEventsMaps.push(eventMap)
	allEventsMaps.push(
		getEventNameMaps(ts[eventMap.toLowerCase()].source),
	)
}
allEventsMaps = unique(allEventsMaps)

/** Generate events file */

for (const eventMap of allEventsMaps) {
	const file = `./jsx/generated/events.d.ts`
	append(file, ts[eventMap.toLowerCase()].source)
}

/**
 * Modify generated events file to include the element interface
 * wraping. This is for use in pota.
 */

const events = read(`./jsx/generated/events.d.ts`).split('\n')

for (let i = 0; i < events.length; i++) {
	const event = events[i]
	if (event.includes(':')) {
		let [eventName, inter] = event.split(':')
		eventName = eventName.trim()
		DATA.events[eventName] = {
			name: eventName,
			nameCapitalized: DATA.events[eventName] || eventName,
			interface: inter.trim(),
		}
		eventName =
			eventsCapitalized[eventName] ||
			`on${eventName}`.replace(
				/on([a-z])/i,
				s => 'on' + s[2].toUpperCase(),
			)

		events[i] = `${eventName}?: Events<${inter}, Element>
"on:${eventName.toLowerCase().slice(2)}"?: Events<${inter}, Element>`
	}
}
write(
	`./jsx/generated/events.d.ts`,
	events.join('\n').replace(/EventMap/g, 'Events<Element>'),
)

// normalize events

for (let eventName in DATA.events) {
	if (typeof DATA.events[eventName] === 'string') {
		DATA.events[eventName] = {
			name: eventName,
			nameCapitalized: DATA.events[eventName],
			interface: 'Event',
		}
	}
}

function MDNURL(ns, tagName) {
	switch (ns) {
		case 'http://www.w3.org/1999/xhtml': {
			return (
				'https://developer.mozilla.org/docs/Web/HTML/Element/' +
				tagName
			)
		}
		case 'http://www.w3.org/1998/Math/MathML': {
			return (
				'https://developer.mozilla.org/en-US/docs/Web/MathML/Element/' +
				tagName
			)
		}
		case 'http://www.w3.org/2000/svg': {
			return (
				'https://developer.mozilla.org/en-US/docs/Web/SVG/Element/' +
				tagName
			)
		}
		default: {
			return 'https://developer.mozilla.org/en-US/search?q=' + tagName
		}
	}
}
// copy library tags to data.elements
for (const ns in DATA.elements) {
	for (const tagName in DATA.elements[ns]) {
		const tag = DATA.elements[ns][tagName]
		if (libraryTags[tagName]) {
			tag.attributes = libraryTags[tagName].attributes
		} else {
			tag.attributes = {}
		}
		tag.url = MDNURL(ns, tagName)
		tag.description = ''
		if (vsCode[tagName]) {
			tag.description = vsCode[tagName].description
			for (const attr in vsCode[tagName].attributes) {
				tag.attributes[attr] = tag.attributes[attr] || {}
				tag.attributes[attr]['VSCode'] =
					vsCode[tagName].attributes[attr]
			}
		}
	}
}

// get data from the browser

import puppeteer from 'puppeteer'

const chrome = await puppeteer.launch({
	headless: true,
	args: [
		'--ash-no-nudges',
		'--deny-permission-prompts',
		'--disable-background-timer-throttling',
		'--disable-backgrounding-occluded-windows',
		'--disable-client-side-phishing-detection',
		'--disable-default-apps',
		'--disable-extensions',
		'--disable-features=TranslateUI,Translate,InfiniteSessionRestore',
		'--disable-infobars',
		'--disable-ipc-flooding-protection',
		'--disable-notifications',
		'--disable-renderer-backgrounding',
		'--disable-session-crashed-bubble',
		'--ignore-certificate-errors',
		'--mute-audio',
		'--no-default-browser-check',
		'--no-first-run',
		'--start-maximized',
	],
	protocolTimeout: 300_000,
	defaultViewport: null,
})

const page = await chrome.newPage()

const browserData = {
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
await page.exposeFunction('getData', () => browserData)
await page.goto(process.cwd() + '/src/browser.html', {
	waitUntil: 'networkidle0',
})
await page.evaluate(() => window.runFromPuppeteer())
await new Promise(resolve => setTimeout(resolve, 2000))
const browser = JSON.parse(
	await page.evaluate(() => document.body.textContent),
)
chrome.close()

// console.log(browser)

for (const ns in DATA.elements) {
	for (const tag in DATA.elements[ns]) {
		const element = DATA.elements[ns][tag]
		element.interface = browser[ns].elements[tag].interface
		for (const attr in browser[ns].elements[tag].attributes) {
			element.attributes[attr] = element.attributes[attr] || {}
			element.attributes[attr].Chrome =
				browser[ns].elements[tag].attributes[attr]
		}
	}
}

write(`./jsx/data.json`, JSON.stringify(DATA, null, 2))

// create table.md

let attributesPropertiesTable = `
# namespace JSX

This file is generated using \`./data.json\`.

The possible \`tagNames\` come from a mashup between frameworks and TypeScript \`TagNamesMaps\` data.

The \`interface\` names comes from \`document.createElementNS(ns, tagName).constructor.name\`.

Chrome attribute names comes from brute-forcing the element setters till an attribute is added.

# Elements Tables

`
const columns = ['Chrome', 'Solid', 'Voby', 'Vue', 'React', 'VSCode']

for (const ns in DATA.elements) {
	for (const [tag, value] of Object.entries(DATA.elements[ns])) {
		attributesPropertiesTable += `\n\n## [${tag}](${value.url}) - [${value.interface}](https://developer.mozilla.org/en-US/docs/Web/API/${value.interface}) - deprecated: ${value.deprecated} - ns: ${ns}`

		// headings
		attributesPropertiesTable += `\n\n| attribute `
		for (const lib of columns) {
			attributesPropertiesTable += ` | ${lib}`
		}
		attributesPropertiesTable += `|`
		// separator
		attributesPropertiesTable += `\n| --- `
		for (const lib of columns) {
			attributesPropertiesTable += ` |  --- `
		}
		attributesPropertiesTable += `|`

		// attribute/properties
		const props = []
		for (const [attr, val] of Object.entries(value.attributes)) {
			let prop = `| [${attr}](https://developer.mozilla.org/en-US/search?q=${attr})`
			for (const lib of columns) {
				prop += ` | ${(val[lib] !== undefined ? val[lib] : '❌').replace(/\|/g, '\\|')}`
			}
			prop += `|`

			props.push(prop)
		}
		attributesPropertiesTable +=
			'\n' +
			props
				.sort((a, b) =>
					a.localeCompare(b, undefined, { sensitivity: 'case' }),
				)
				.join('\n')
	}
}

write(`./jsx/readme.md`, attributesPropertiesTable)

prettier('./jsx/**')
