/** Export lib.dom from Typescript */

import { parseFromURL } from './parse.js'

export const ts = await parseFromURL(
	'https://raw.githubusercontent.com/microsoft/TypeScript-DOM-lib-generator/refs/heads/main/baselines/dom.generated.d.ts',
	'typescript',
)

const tagNamesOf = (id, optional) => {
	if (!ts[id]) {
		if (optional) return []
		throw new Error(
			'interface ' + id + ' missing from typescript dom lib',
		)
	}
	return ts[id].properties.map(p => p.name)
}

export const tsTagNames = {
	html: tagNamesOf('htmlelementtagnamemap'),
	htmldeprecated: tagNamesOf('htmlelementdeprecatedtagnamemap'),
	svg: tagNamesOf('svgelementtagnamemap'),
	svgdeprecated: tagNamesOf('svgelementdeprecatedtagnamemap', true),
	math: tagNamesOf('mathmlelementtagnamemap'),
	mathdeprecated: tagNamesOf(
		'mathmlelementdeprecatedtagnamemap',
		true,
	),
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
