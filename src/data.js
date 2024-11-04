import { parseFromURL } from './parse.js'
import { read, unique } from './utils.js'

/**
 * List of frameworks that provide a JSX namespace. Their interface
 * for events, elements and attributes it's mapped into a common
 * name.
 */
export const libs = [
	{
		// SOLID
		file: 'https://raw.githubusercontent.com/ryansolid/dom-expressions/refs/heads/main/packages/dom-expressions/src/jsx.d.ts',
		name: 'Solid',
		url: 'https://www.solidjs.com/',
		map: {
			// events
			customeventhandlerscamelcase: 'events',
			customeventhandlerslowercase: 'events',
			domattributes: 'events',

			// elements
			htmlelementdeprecatedtags: 'elements',
			htmlelementtags: 'elements',
			svgelementtags: 'elements',
			intrinsicelements: 'elements',

			// attributes
			intrinsicattributes: 'attributes',
		},
	},
	{
		// VOBY
		file: 'https://raw.githubusercontent.com/vobyjs/voby/refs/heads/master/src/jsx/types.ts',
		name: 'Voby',
		url: 'https://github.com/vobyjs/voby',
		map: {
			// events
			eventattributes: 'events',
			domattributes: 'events',

			// elements
			intrinsicelements: 'elements',
			intrinsicelementsmap: 'elements',

			intrinsicattributes: 'attributes',

			// attributes
			voidhtmlattributes: 'htmlattributes',
		},
	},
	{
		// VUE
		file: 'https://raw.githubusercontent.com/vuejs/core/refs/heads/main/packages/runtime-dom/src/jsx.ts',
		name: 'Vue',
		url: 'https://vuejs.org/',
		map: {
			// elements
			intrinsicelementattributes: 'elements',

			// attributes
			intrinsicattributes: 'attributes',
		},
	},
	{
		// PREACT
		file: 'https://raw.githubusercontent.com/preactjs/preact/refs/heads/main/src/jsx.d.ts',
		name: 'Preact',
		url: 'https://preactjs.com/',
		map: {
			// events
			domattributes: 'events',

			// elements
			intrinsicelements: 'elements',
			intrinsicsvgelements: 'elements',

			// attributes
			intrinsicattributes: 'attributes',
		},
	},

	{
		// REACT
		file: 'https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/react/index.d.ts',
		name: 'React',
		url: 'https://react.dev/',
		map: {
			// events
			domattributes: 'events',

			// elements
			intrinsicelements: 'elements',
			reacthtml: 'elements',
			reactsvg: 'elements',

			// attributes
			allhtmlattributes: 'attributes',
			intrinsicattributes: 'attributes',
		},
	},
]

/** Used to merge the common names from each framework to one file. */

export const jsxcore = {
	elements: 'elements',
	attributes: 'attributes',

	svgattributes: 'svgattributes',
	htmlattributes: 'htmlattributes',
	mathmlattributes: 'mathmlattributes',

	events: 'events',

	cssproperties: 'cssproperties',

	// special attributes
	ariaattributes: 'ariahtmlattributes',
	mediahtmlattributes: 'mediahtmlattributes',
}

/** Export lib.dom from Typescript */

export const ts = await parseFromURL(
	'https://raw.githubusercontent.com/microsoft/TypeScript-DOM-lib-generator/refs/heads/main/baselines/dom.generated.d.ts',
	'typescript',
)

/** Export vsCode data */
const vsCodeData = JSON.parse(
	read(
		'./node_modules/vscode-html-languageservice/lib/esm/languageFacts/data/webCustomData.js',
	)
		.trim()
		.replace('export const htmlData =', '')
		.replace(/^\/\*[^\/]+\*\//, '')
		.replace(/\n\/\/[^\n]+\n/, '\n')
		.replace(/;$/, ''),
)

const vsCode = {}

for (const tag of vsCodeData.tags) {
	vsCode[tag.name] = {
		url: tag.references[0].url,
		description: tag.description?.value || tag.description || '',
		attributes: {},
	}
	for (const attr of tag.attributes) {
		vsCode[tag.name].attributes[attr.name] = attr.valueSet
			? vsCodeData.valueSets
					.find(item => item.name === attr.valueSet)
					?.values?.map(value => "'" + value.name + "'")
					.join(' | ')
			: 'string'

		vsCode[tag.name].attributes[attr.name] =
			vsCode[tag.name].attributes[attr.name] || 'boolean'
	}
}

export { vsCode }

/**
 * It prevents the following interfaces from being merge with each
 * tagName interface.
 */

export const isBlacklisted = {
	htmlelement: true,

	htmlattributes: true,
	svgattributes: true,
	mathmlattributes: true,

	detailedhtmlfactory: true,
	svgfactory: true,
}

/**
 * The source of truth, the list of tagNames is taken from typescript
 * itself.
 */

export const tsTagNamesMap = {
	html: {
		properties: ts.htmlelementtagnamemap.properties,
		source: ts.htmlelementtagnamemap.source,
		interface: 'HTMLElements',
		attributes: 'HTMLAttributes',
		namespace: 'http://www.w3.org/1999/xhtml',
	},
	htmldeprecated: {
		properties: ts.htmlelementdeprecatedtagnamemap.properties,
		source: ts.htmlelementdeprecatedtagnamemap.source,
		interface: 'HTMLDeprecatedElements',
		attributes: 'HTMLAttributes',
		namespace: 'http://www.w3.org/1999/xhtml',
	},
	svg: {
		properties: ts.svgelementtagnamemap.properties,
		source: ts.svgelementtagnamemap.source,
		interface: 'SVGElements',
		attributes: 'SVGAttributes',
		namespace: 'http://www.w3.org/2000/svg',
	},
	mathml: {
		properties: ts.mathmlelementtagnamemap.properties,
		source: ts.mathmlelementtagnamemap.source,
		interface: 'MathMLElements',
		attributes: 'MathMLAttributes',
		namespace: 'http://www.w3.org/1998/Math/MathML',
	},
	mathmldeprecated: {
		properties: [
			{ name: 'menclose', source: 'MathMLElement' },
			{ name: 'mfenced', source: 'MathMLElement' },
		],
		source: `interface MathMLElementDeprecatedTagNameMap {
	menclose: MathMLElement
	mfenced: MathMLElement
}`,
		interface: 'MathMLDeprecatedElements',
		attributes: 'MathMLAttributes',
		namespace: 'http://www.w3.org/1998/Math/MathML',
	},
}

/** It gets all event interfaces that contain "eventmap" in the name. */

export function getEventNameMaps(string) {
	return unique(
		Array.from(string.matchAll(/[^a-z]([a-z]+eventmap)/gi)).map(
			match => match[0].trim(),
		),
	)
}

/**
 * Typescript doesnt provide interfaces for each MathML element, or
 * maybe typescript is right and each MathML element shares the same
 * interface. https://w3c.github.io/mathml-core/#dom-and-javascript
 * Weird, this maps each tagName of MathML to an own made-up
 * interface.
 */

const attributesInterfacesMap = {
	MathMLDeprecatedElements: {
		menclose: 'MathMLMencloseElement',
		mfenced: 'MathMLMfencedElement',
	},
	MathMLElements: {
		annotation: 'MathMLAnnotationElement',
		'annotation-xml': 'MathMLAnnotationXmlElement',
		maction: 'MathMLMactionElement',
		math: 'MathMLMathElement',
		merror: 'MathMLMerrorElement',
		mfrac: 'MathMLMfracElement',
		mi: 'MathMLMiElement',
		mmultiscripts: 'MathMLMmultiscriptsElement',
		mn: 'MathMLMnElement',
		mo: 'MathMLMoElement',
		mover: 'MathMLMoverElement',
		mpadded: 'MathMLMpaddedElement',
		mphantom: 'MathMLMphantomElement',
		mprescripts: 'MathMLMprescriptsElement',
		mroot: 'MathMLMrootElement',
		mrow: 'MathMLMrowElement',
		ms: 'MathMLMsElement',
		mspace: 'MathMLMspaceElement',
		msqrt: 'MathMLMsqrtElement',
		mstyle: 'MathMLMstyleElement',
		msub: 'MathMLMsubElement',
		msubsup: 'MathMLMsubsupElement',
		msup: 'MathMLMsupElement',
		mtable: 'MathMLMtableElement',
		mtd: 'MathMLMtdElement',
		mtext: 'MathMLMtextElement',
		mtr: 'MathMLMtrElement',
		munder: 'MathMLMunderElement',
		munderover: 'MathMLMunderoverElement',
		semantics: 'MathMLSemanticsElement',
	},
}

/** Mapper */

function attributesInterfaceName(interfaceName, tagName, inter) {
	if (attributesInterfacesMap[interfaceName])
		return attributesInterfacesMap[interfaceName][tagName] || inter
	return inter
}

/** This is used to auto-generate empty interfaces for elements */

export function generateElementsInterfaces(
	elements,
	interfaceName = 'HTMLDeprecatedElements',
	attributes = 'HTMLAttributes',
) {
	const interfaces = []
	const content = []

	for (const element of elements) {
		interfaces.push(
			`interface ${attributesInterfaceName(interfaceName, element.id, element.interface)}Attributes {}`,
		)

		content.push(
			`	"${element.id}": ${attributes}<${element.interface}, ${attributesInterfaceName(interfaceName, element.id, element.interface)}Attributes, ${element.events}<${element.interface}>>`,
		)
	}

	return `
${unique(interfaces).join('\n')}

interface ${interfaceName} {
${content.join('\n')}
}
`
}
