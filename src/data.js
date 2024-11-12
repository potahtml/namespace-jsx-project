import puppeteer from 'puppeteer'

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
			intrinsicmathmlelements: 'elements',

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
	{
		// POTA
		file: 'https://raw.githubusercontent.com/potahtml/pota/refs/heads/master/jsx.d.ts',
		name: 'Pota',
		url: 'https://github.com/potahtml/pota',
		map: {
			// events

			elementevents: 'events',
			globaleventhandlersevents: 'events',
			htmlmediaelementevents: 'events',
			htmlvideoelementevents: 'events',
			windoweventhandlersevents: 'events',

			// elements

			htmlelements: 'elements',
			htmldeprecatedelements: 'elements',

			mathmlelements: 'elements',
			mathmldeprecatedelements: 'elements',

			svgelements: 'elements',

			htmlwebviewelements: 'elements',

			domhtmlattributes: 'htmlattributes',
			domhtmlproperties: 'htmlattributes',

			dommathmlattributes: 'mathmlattributes',
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
		description: tag.description?.value || tag.description || '',
		keys: {},
	}
	for (const attr of tag.attributes) {
		vsCode[tag.name].keys[attr.name] = attr.valueSet
			? vsCodeData.valueSets
					.find(item => item.name === attr.valueSet)
					?.values?.map(value => "'" + value.name + "'")
					.join(' | ')
			: 'string'

		// attr.valueSet.v is missing in vsCode data, its boolean

		vsCode[tag.name].keys[attr.name] =
			vsCode[tag.name].keys[attr.name] || 'boolean'
	}
}

export { vsCode }

/**
 * It prevents the following interfaces from being merge with each
 * tagName interface.
 */

export const isBlacklisted = {
	// when extending
	element: true,
	t: true,
	eventtarget: true,
	extends: true,
	interface: true,
	ariaattributes: true,
	domattributes: true,

	windoweventhandlersevents: true,
	voidhtmlattributes: true,
	mathmlelement: true,

	// regular
	htmlelement: true,

	htmlattributes: true,
	svgattributes: true,
	mathmlattributes: true,

	detailedhtmlfactory: true,
	svgfactory: true,

	htmlelementevents: true,
	mathmlelementevents: true,
	svgelementevents: true,

	htmlelementattributes: true,
	htmlunknownelementattributes: true,
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

export const deprecatedTags = {
	'http://www.w3.org/1999/xhtml': [
		'acronym',
		'applet',
		'basefont',
		'bgsound',
		'big',
		'blink',
		'center',
		'dir',
		'font',
		'frame',
		'frameset',
		'isindex',
		'keygen',
		'listing',
		'marquee',
		'menuitem',
		'multicol',
		'nextid',
		'nobr',
		'noembed',
		'noframes',
		'param',
		'plaintext',
		'rb',
		'rtc',
		'spacer',
		'strike',
		'tt',
		'u',
		'xmp',
	],
	'http://www.w3.org/1998/Math/MathML': [
		'maction',
		'menclose',
		'mfenced',
	],
	'http://www.w3.org/2000/svg': [],
}

export const deprecatedAttributes = {
	'a.HTMLAnchorElement.charset': true,
	'a.HTMLAnchorElement.coords': true,
	'a.HTMLAnchorElement.name': true,
	'a.HTMLAnchorElement.rev': true,
	'a.HTMLAnchorElement.shape': true,
	'annotation-xml.MathMLElement.src': true,
	'annotation.MathMLElement.src': true,
	'audio.HTMLAudioElement.mediagroup': true,
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
	'br.HTMLBRElement.clear': true,
	'caption.HTMLTableCaptionElement.align': true,
	'col.HTMLTableColElement.align': true,
	'col.HTMLTableColElement.bgcolor': true,
	'col.HTMLTableColElement.char': true,
	'col.HTMLTableColElement.charoff': true,
	'col.HTMLTableColElement.valign': true,
	'col.HTMLTableColElement.width': true,
	'dir.HTMLDirectoryElement.compact': true,
	'div.HTMLDivElement.align': true,
	'dl.HTMLDListElement.compact': true,
	'embed.HTMLEmbedElement.align': true,
	'embed.HTMLEmbedElement.name': true,
	'font.HTMLFontElement.color': true,
	'font.HTMLFontElement.face': true,
	'font.HTMLFontElement.size': true,
	'form.HTMLFormElement.accept': true,
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
	'h1.HTMLHeadingElement.align': true,
	'h2.HTMLHeadingElement.align': true,
	'h3.HTMLHeadingElement.align': true,
	'h4.HTMLHeadingElement.align': true,
	'h5.HTMLHeadingElement.align': true,
	'h6.HTMLHeadingElement.align': true,
	'head.HTMLHeadElement.profile': true,
	'hr.HTMLHRElement.align': true,
	'hr.HTMLHRElement.color': true,
	'hr.HTMLHRElement.noshade': true,
	'hr.HTMLHRElement.size': true,
	'hr.HTMLHRElement.width': true,
	'html.HTMLHtmlElement.version': true,
	'iframe.HTMLIFrameElement.align': true,
	'iframe.HTMLIFrameElement.allowpaymentrequest': true,
	'iframe.HTMLIFrameElement.allowtransparency': true,
	'iframe.HTMLIFrameElement.frameborder': true,
	'iframe.HTMLIFrameElement.longdesc': true,
	'iframe.HTMLIFrameElement.marginheight': true,
	'iframe.HTMLIFrameElement.marginwidth': true,
	'iframe.HTMLIFrameElement.scrolling': true,
	'iframe.HTMLIFrameElement.seamless': true,
	'img.HTMLImageElement.align': true,
	'img.HTMLImageElement.border': true,
	'img.HTMLImageElement.hspace': true,
	'img.HTMLImageElement.intrinsicsize': true,
	'img.HTMLImageElement.longdesc': true,
	'img.HTMLImageElement.name': true,
	'img.HTMLImageElement.vspace': true,
	'input.HTMLInputElement.align': true,
	'input.HTMLInputElement.usemap': true,
	'keygen.HTMLUnknownElement.autofocus': true,
	'keygen.HTMLUnknownElement.challenge': true,
	'keygen.HTMLUnknownElement.disabled': true,
	'keygen.HTMLUnknownElement.form': true,
	'keygen.HTMLUnknownElement.keyparams': true,
	'keygen.HTMLUnknownElement.keytype': true,
	'keygen.HTMLUnknownElement.name': true,
	'legend.HTMLLegendElement.align': true,
	'li.HTMLLIElement.type': true,
	'link.HTMLLinkElement.charset': true,
	'link.HTMLLinkElement.rev': true,
	'link.HTMLLinkElement.target': true,
	'listing.HTMLPreElement.width': true,
	'maction.MathMLElement.actiontype': true,
	'maction.MathMLElement.selection': true,
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
	'menu.HTMLMenuElement.compact': true,
	'menu.HTMLMenuElement.label': true,
	'menu.HTMLMenuElement.type': true,
	'meta.HTMLMetaElement.scheme': true,
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
	'object.HTMLObjectElement.typemustmatch': true,
	'object.HTMLObjectElement.usemap': true,
	'object.HTMLObjectElement.vspace': true,
	'ol.HTMLOListElement.compact': true,
	'p.HTMLParagraphElement.align': true,
	'param.HTMLParamElement.name': true,
	'param.HTMLParamElement.type': true,
	'param.HTMLParamElement.value': true,
	'param.HTMLParamElement.valuetype': true,
	'pre.HTMLPreElement.width': true,
	'pre.HTMLPreElement.wrap': true,
	'script.HTMLScriptElement.charset': true,
	'script.HTMLScriptElement.event': true,
	'script.HTMLScriptElement.language': true,
	'style.HTMLStyleElement.scoped': true,
	'style.HTMLStyleElement.type': true,
	'style.SVGStyleElement.scoped': true,
	'style.SVGStyleElement.type': true,
	'table.HTMLTableElement.align': true,
	'table.HTMLTableElement.bgcolor': true,
	'table.HTMLTableElement.border': true,
	'table.HTMLTableElement.cellpadding': true,
	'table.HTMLTableElement.cellspacing': true,
	'table.HTMLTableElement.frame': true,
	'table.HTMLTableElement.rules': true,
	'table.HTMLTableElement.summary': true,
	'table.HTMLTableElement.width': true,
	'tbody.HTMLTableSectionElement.align': true,
	'tbody.HTMLTableSectionElement.bgcolor': true,
	'tbody.HTMLTableSectionElement.char': true,
	'tbody.HTMLTableSectionElement.charoff': true,
	'tbody.HTMLTableSectionElement.valign': true,
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
	'tfoot.HTMLTableSectionElement.align': true,
	'tfoot.HTMLTableSectionElement.bgcolor': true,
	'tfoot.HTMLTableSectionElement.char': true,
	'tfoot.HTMLTableSectionElement.charoff': true,
	'tfoot.HTMLTableSectionElement.valign': true,
	'th.HTMLTableCellElement.align': true,
	'th.HTMLTableCellElement.axis': true,
	'th.HTMLTableCellElement.bgcolor': true,
	'th.HTMLTableCellElement.char': true,
	'th.HTMLTableCellElement.charoff': true,
	'th.HTMLTableCellElement.height': true,
	'th.HTMLTableCellElement.nowrap': true,
	'th.HTMLTableCellElement.valign': true,
	'th.HTMLTableCellElement.width': true,
	'thead.HTMLTableSectionElement.align': true,
	'thead.HTMLTableSectionElement.bgcolor': true,
	'thead.HTMLTableSectionElement.char': true,
	'thead.HTMLTableSectionElement.charoff': true,
	'thead.HTMLTableSectionElement.valign': true,
	'tr.HTMLTableRowElement.align': true,
	'tr.HTMLTableRowElement.bgcolor': true,
	'tr.HTMLTableRowElement.char': true,
	'tr.HTMLTableRowElement.charoff': true,
	'tr.HTMLTableRowElement.valign': true,
	'ul.HTMLUListElement.compact': true,
	'ul.HTMLUListElement.type': true,
	'video.HTMLVideoElement.mediagroup': true,
	'webview.HTMLElement.blinkfeatures': true,
	'webview.HTMLElement.disableguestresize': true,
	'webview.HTMLElement.guestinstance': true,
	'xmp.HTMLPreElement.width': true,
}

export function ElementURL(ns, tagName) {
	switch (ns) {
		case 'http://www.w3.org/1999/xhtml': {
			if (tagName === 'webview') {
				return 'https://www.electronjs.org/docs/latest/api/webview-tag'
			}
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

export function InterfaceURL(ns, tagName, inter) {
	if (tagName === 'webview') {
		return 'https://www.electronjs.org/docs/latest/api/webview-tag'
	}
	return 'https://developer.mozilla.org/en-US/docs/Web/API/' + inter
}
export function KeyURL(ns, tagName, inter, attr) {
	if (tagName === 'webview') {
		return (
			'https://www.electronjs.org/docs/latest/api/webview-tag#' + attr
		)
	}
	return (
		'https://developer.mozilla.org/en-US/docs/Web/API/' +
		inter +
		'/' +
		attr
	)
}

export const browserData = async browserData => {
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

	await page.exposeFunction('getData', () => browserData)
	await page.goto(process.cwd() + '/src/browser.html', {
		waitUntil: 'networkidle0',
	})
	await page.evaluate(() => window.runFromPuppeteer())
	await new Promise(resolve => setTimeout(resolve, 2000))
	const browser = await page.evaluate(() => document.body.textContent)

	chrome.close()

	return JSON.parse(browser)
}
