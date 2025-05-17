/** Export lib.dom from Typescript */

import { parseFromURL } from './parse.js'

export const ts = await parseFromURL(
	'https://raw.githubusercontent.com/microsoft/TypeScript-DOM-lib-generator/refs/heads/main/baselines/dom.generated.d.ts',
	'typescript',
)

export const tsTagNames = {
	html: ts.htmlelementtagnamemap.properties.map(p => p.name),
	htmldeprecated: ts.htmlelementdeprecatedtagnamemap.properties.map(
		p => p.name,
	),
	svg: ts.svgelementtagnamemap.properties.map(p => p.name),
	svgdeprecated: ts.svgelementdeprecatedtagnamemap
		? ts.svgelementdeprecatedtagnamemap.properties.map(p => p.name)
		: [],
	math: ts.mathmlelementtagnamemap.properties.map(p => p.name),
	mathdeprecated: ts.mathmlelementdeprecatedtagnamemap
		? ts.mathmlelementdeprecatedtagnamemap.properties.map(p => p.name)
		: [],
}

// typescript events interfaces map

export const tsEventsInterfaces = {}

for (const id of [
	'windoweventmap',
	'windoweventhandlerseventmap',
	'globaleventhandlerseventmap',
	'documenteventmap',
]) {
	for (const prop of ts[id].properties) {
		tsEventsInterfaces['on' + prop.name.toLowerCase()] = prop.source
	}
}

for (const id in ts) {
	if (id.includes('elementeventmap')) {
		for (const prop of ts[id].properties) {
			tsEventsInterfaces['on' + prop.name.toLowerCase()] = prop.source
		}
	}
}

// fix wrong events

tsEventsInterfaces.oncommand = 'CommandEvent'
tsEventsInterfaces.oninput = 'InputEvent'
tsEventsInterfaces.ondragexit = 'DragEvent'

// add missing events

tsEventsInterfaces.onbeforematch =
	tsEventsInterfaces.onbeforematch || 'Event'

tsEventsInterfaces.onbeforexrselect =
	tsEventsInterfaces.onbeforexrselect || 'Event'

tsEventsInterfaces.oncontentvisibilityautostatechange =
	tsEventsInterfaces.oncontentvisibilityautostatechange ||
	'ContentVisibilityAutoStateChangeEvent'

tsEventsInterfaces.onpointerrawupdate =
	tsEventsInterfaces.onpointerrawupdate || 'PointerEvent'

tsEventsInterfaces.onscrollsnapchange =
	tsEventsInterfaces.onscrollsnapchange || 'SnapEvent'

tsEventsInterfaces.onscrollsnapchanging =
	tsEventsInterfaces.onscrollsnapchanging || 'SnapEvent'
