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

export const deprecatedAttributes = {
	'audio.HTMLAudioElement.mediagroup': true,

	'video.HTMLVideoElement.mediagroup': true,

	'a.HTMLAnchorElement.charset': true,
	'a.HTMLAnchorElement.coords': true,
	'a.HTMLAnchorElement.name': true,
	'a.HTMLAnchorElement.rev': true,
	'a.HTMLAnchorElement.shape': true,

	'br.HTMLBRElement.clear': true,

	'body.HTMLBodyElement.alink': true,
	'body.HTMLBodyElement.background': true,
	'body.HTMLBodyElement.bgcolor': true,
	'body.HTMLBodyElement.bottommargin': true,
	'body.HTMLBodyElement.leftmargin': true,
	'body.HTMLBodyElement.link': true,
	'body.HTMLBodyElement.rightmargin': true,
	'body.HTMLBodyElement.text': true,
	'body.HTMLBodyElement.topmargin': true,
	'body.HTMLBodyElement.vlink': true,

	'dl.HTMLDListElement.compact': true,

	'div.HTMLDivElement.align': true,

	'embed.HTMLEmbedElement.align': true,
	'embed.HTMLEmbedElement.name': true,

	'form.HTMLFormElement.accept': true,

	'hr.HTMLHRElement.align': true,
	'hr.HTMLHRElement.color': true,
	'hr.HTMLHRElement.noshade': true,
	'hr.HTMLHRElement.size': true,
	'hr.HTMLHRElement.width': true,

	'html.HTMLHtmlElement.version': true,

	'iframe.HTMLIFrameElement.allowpaymentrequest': true,
	'iframe.HTMLIFrameElement.allowtransparency': true,
	'iframe.HTMLIFrameElement.align': true,
	'iframe.HTMLIFrameElement.frameborder': true,
	'iframe.HTMLIFrameElement.longdesc': true,
	'iframe.HTMLIFrameElement.marginheight': true,
	'iframe.HTMLIFrameElement.marginwidth': true,
	'iframe.HTMLIFrameElement.scrolling': true,
	'iframe.HTMLIFrameElement.seamless': true,

	'img.HTMLImageElement.align': true,
	'img.HTMLImageElement.border': true,
	'img.HTMLImageElement.hspace': true,
	'img.HTMLImageElement.longdesc': true,
	'img.HTMLImageElement.name': true,
	'img.HTMLImageElement.vspace': true,

	'input.HTMLInputElement.align': true,
	'input.HTMLInputElement.usemap': true,

	'li.HTMLLIElement.type': true,

	'legend.HTMLLegendElement.align': true,

	'link.HTMLLinkElement.charset': true,
	'link.HTMLLinkElement.rev': true,
	'link.HTMLLinkElement.target': true,

	'menu.HTMLMenuElement.label': true,
	'menu.HTMLMenuElement.type': true,
	'menu.HTMLMenuElement.compact': true,

	'meta.HTMLMetaElement.scheme': true,

	'ol.HTMLOListElement.compact': true,

	'object.HTMLObjectElement.align': true,
	'object.HTMLObjectElement.archive': true,
	'object.HTMLObjectElement.border': true,
	'object.HTMLObjectElement.classid': true,
	'object.HTMLObjectElement.code': true,
	'object.HTMLObjectElement.codebase': true,
	'object.HTMLObjectElement.codetype': true,
	'object.HTMLObjectElement.declare': true,
	'object.HTMLObjectElement.hspace': true,
	'object.HTMLObjectElement.standby': true,
	'object.HTMLObjectElement.usemap': true,
	'object.HTMLObjectElement.vspace': true,
	'object.HTMLObjectElement.typemustmatch': true,

	'p.HTMLParagraphElement.align': true,

	'pre.HTMLPreElement.width': true,
	'pre.HTMLPreElement.wrap': true,
	'listing.HTMLPreElement.width': true,
	'xmp.HTMLPreElement.width': true,

	'script.HTMLScriptElement.charset': true,
	'script.HTMLScriptElement.event': true,
	'script.HTMLScriptElement.language': true,

	'style.HTMLStyleElement.scoped': true,
	'style.HTMLStyleElement.type': true,

	'caption.HTMLTableCaptionElement.align': true,

	'td.HTMLTableCellElement.abbr': true,
	'td.HTMLTableCellElement.align': true,
	'td.HTMLTableCellElement.axis': true,
	'td.HTMLTableCellElement.bgcolor': true,
	'td.HTMLTableCellElement.char': true,
	'td.HTMLTableCellElement.charoff': true,
	'td.HTMLTableCellElement.height': true,
	'td.HTMLTableCellElement.nowrap': true,
	'td.HTMLTableCellElement.scope': true,
	'td.HTMLTableCellElement.valign': true,
	'td.HTMLTableCellElement.width': true,

	'th.HTMLTableCellElement.align': true,
	'th.HTMLTableCellElement.axis': true,
	'th.HTMLTableCellElement.bgcolor': true,
	'th.HTMLTableCellElement.char': true,
	'th.HTMLTableCellElement.charoff': true,
	'th.HTMLTableCellElement.height': true,
	'th.HTMLTableCellElement.nowrap': true,
	'th.HTMLTableCellElement.valign': true,
	'th.HTMLTableCellElement.width': true,

	'col.HTMLTableColElement.align': true,
	'col.HTMLTableColElement.bgcolor': true,
	'col.HTMLTableColElement.char': true,
	'col.HTMLTableColElement.charoff': true,
	'col.HTMLTableColElement.valign': true,
	'col.HTMLTableColElement.width': true,

	'table.HTMLTableElement.align': true,
	'table.HTMLTableElement.bgcolor': true,
	'table.HTMLTableElement.border': true,
	'table.HTMLTableElement.cellpadding': true,
	'table.HTMLTableElement.cellspacing': true,
	'table.HTMLTableElement.frame': true,
	'table.HTMLTableElement.rules': true,
	'table.HTMLTableElement.summary': true,
	'table.HTMLTableElement.width': true,

	'tr.HTMLTableRowElement.align': true,
	'tr.HTMLTableRowElement.bgcolor': true,
	'tr.HTMLTableRowElement.char': true,
	'tr.HTMLTableRowElement.charoff': true,
	'tr.HTMLTableRowElement.valign': true,

	'tbody.HTMLTableSectionElement.align': true,
	'tbody.HTMLTableSectionElement.bgcolor': true,
	'tbody.HTMLTableSectionElement.char': true,
	'tbody.HTMLTableSectionElement.charoff': true,
	'tbody.HTMLTableSectionElement.valign': true,

	'tfoot.HTMLTableSectionElement.align': true,
	'tfoot.HTMLTableSectionElement.bgcolor': true,
	'tfoot.HTMLTableSectionElement.char': true,
	'tfoot.HTMLTableSectionElement.charoff': true,
	'tfoot.HTMLTableSectionElement.valign': true,

	'thead.HTMLTableSectionElement.align': true,
	'thead.HTMLTableSectionElement.bgcolor': true,
	'thead.HTMLTableSectionElement.char': true,
	'thead.HTMLTableSectionElement.charoff': true,
	'thead.HTMLTableSectionElement.valign': true,

	'ul.HTMLUListElement.compact': true,
	'ul.HTMLUListElement.type': true,

	'dir.HTMLDirectoryElement.compact': true,

	'font.HTMLFontElement.color': true,
	'font.HTMLFontElement.face': true,
	'font.HTMLFontElement.size': true,

	'frame.HTMLFrameElement.frameborder': true,
	'frame.HTMLFrameElement.longdesc': true,
	'frame.HTMLFrameElement.marginheight': true,
	'frame.HTMLFrameElement.marginwidth': true,
	'frame.HTMLFrameElement.name': true,
	'frame.HTMLFrameElement.noresize': true,
	'frame.HTMLFrameElement.scrolling': true,
	'frame.HTMLFrameElement.src': true,

	'frameset.HTMLFrameSetElement.cols': true,
	'frameset.HTMLFrameSetElement.rows': true,

	'marquee.HTMLMarqueeElement.behavior': true,
	'marquee.HTMLMarqueeElement.bgcolor': true,
	'marquee.HTMLMarqueeElement.direction': true,
	'marquee.HTMLMarqueeElement.height': true,
	'marquee.HTMLMarqueeElement.hspace': true,
	'marquee.HTMLMarqueeElement.loop': true,
	'marquee.HTMLMarqueeElement.scrollamount': true,
	'marquee.HTMLMarqueeElement.scrolldelay': true,
	'marquee.HTMLMarqueeElement.truespeed': true,
	'marquee.HTMLMarqueeElement.vspace': true,
	'marquee.HTMLMarqueeElement.width': true,

	'param.HTMLParamElement.name': true,
	'param.HTMLParamElement.value': true,
	'param.HTMLParamElement.type': true,
	'param.HTMLParamElement.valuetype': true,

	'keygen.HTMLUnknownElement.autofocus': true,
	'keygen.HTMLUnknownElement.challenge': true,
	'keygen.HTMLUnknownElement.disabled': true,
	'keygen.HTMLUnknownElement.form': true,
	'keygen.HTMLUnknownElement.keyparams': true,
	'keygen.HTMLUnknownElement.keytype': true,
	'keygen.HTMLUnknownElement.name': true,

	'annotation.MathMLElement.src': true,

	'annotation-xml.MathMLElement.src': true,

	'maction.MathMLElement.actiontype': true,
	'maction.MathMLElement.selection': true,

	'mfrac.MathMLElement.denomalign': true,
	'mfrac.MathMLElement.numalign': true,

	'mmultiscripts.MathMLElement.subscriptshift': true,
	'mmultiscripts.MathMLElement.superscriptshift': true,

	'mo.MathMLElement.accent': true,

	'ms.MathMLElement.lquote': true,
	'ms.MathMLElement.rquote': true,

	'mstyle.MathMLElement.background': true,
	'mstyle.MathMLElement.color': true,
	'mstyle.MathMLElement.fontsize': true,
	'mstyle.MathMLElement.fontstyle': true,
	'mstyle.MathMLElement.fontweight': true,
	'mstyle.MathMLElement.scriptminsize': true,
	'mstyle.MathMLElement.scriptsizemultiplier': true,

	'msub.MathMLElement.subscriptshift': true,

	'msubsup.MathMLElement.subscriptshift': true,
	'msubsup.MathMLElement.superscriptshift': true,

	'msup.MathMLElement.superscriptshift': true,
}
