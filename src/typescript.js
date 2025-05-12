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

export const fixedTsEventsInterfaces = {
	command: 'CommandEvent',
	input: 'InputEvent',
	/* non standard/deprecated **/
	dragexit: 'DragEvent',
}
