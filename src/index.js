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
} from './data.js'
import { parse, parseFromFile } from './parse.js'

// clean output

remove('./jsx/')

copy(`./.prettierrc.json`, `./jsx/.prettierrc.json`)

for (const lib of libs) {
	/** Split the source namespace JSX into interfaces */

	lib.interfaces = parse(lib.file, lib.name, lib.map)

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
			const tagName = prop.name.toLowerCase()

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

	/** For each tag name merge the the interfaces from the frameworks */

	for (let element of elements) {
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

/** Write to disk Frameworks tags not included in TS data, ex webview. */

const frameworkTags = unique(
	libs.map(lib => lib.tagNames).flat(Infinity),
)

for (const tag of frameworkTags) {
	if (!seenTags[tag]) {
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
		eventName =
			eventsCapitalized[eventName] ||
			`on${eventName}`.replace(
				/on([a-z])/i,
				s => 'on' + s[2].toUpperCase(),
			)

		events[i] = `${eventName}?: Events<${inter}, Element>`
	}
}
write(
	`./jsx/generated/events.d.ts`,
	events.join('\n').replace(/EventMap/g, 'Events<Element>'),
)

prettier('./jsx/**')
