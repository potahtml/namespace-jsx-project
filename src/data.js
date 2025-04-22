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
		// SOLID MAIN
		file: 'https://raw.githubusercontent.com/titoBouzout/dom-expressions/refs/heads/main/packages/dom-expressions/src/jsx.d.ts',
		name: 'Solid Main',
		url: 'https://www.solidjs.com/',
		map: {
			// events
			customeventhandlerscamelcase: 'events',
			customeventhandlerslowercase: 'events',
			customeventhandlersnamespaced: 'events',
			elementeventmap: 'events',
			windoweventmap: 'events',
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
		// SOLID MINOR
		file: 'https://raw.githubusercontent.com/titoBouzout/dom-expressions/refs/heads/minor/packages/dom-expressions/src/jsx.d.ts',
		name: 'Solid Minor',
		url: 'https://www.solidjs.com/',
		map: {
			// events
			customeventhandlerscamelcase: 'events',
			customeventhandlerslowercase: 'events',
			customeventhandlersnamespaced: 'events',
			elementeventmap: 'events',
			windoweventmap: 'events',
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
		// SOLID NEXT
		file: 'https://raw.githubusercontent.com/titoBouzout/dom-expressions/refs/heads/next/packages/dom-expressions/src/jsx.d.ts',
		name: 'Solid Next',
		url: 'https://www.solidjs.com/',
		map: {
			// events
			customeventhandlerscamelcase: 'events',
			customeventhandlerslowercase: 'events',
			customeventhandlersnamespaced: 'events',
			elementeventmap: 'events',
			windoweventmap: 'events',
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
			globalevents: 'events',
			htmlevents: 'events',
			svgevents: 'events',
			mathmlevents: 'events',
			htmlbodyelementevents: 'events',
			windowevents: 'events',

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
	allhtmlattributes: true,
	refattributes: true,
	attributes: true,
	globalevents: true,
	htmlevents: true,
	svgevents: true,
	mathmlevents: true,
	htmlbodyelementevents: true,
	windowevents: true,
	htmlmediaelementevents: true,

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

export const fixedTsEventsInterfaces = {
	command: 'CommandEvent',
	input: 'InputEvent',
	/* non standard/deprecated **/
	dragexit: 'DragEvent',
}

/**
 * The source of truth, the list of tagNames is taken from typescript
 * itself.
 */

export const tsTagNamesMap = {
	html: {
		properties: ts.htmlelementtagnamemap.properties,
		source: ts.htmlelementtagnamemap.source,
		namespace: 'http://www.w3.org/1999/xhtml',
	},
	htmldeprecated: {
		properties: ts.htmlelementdeprecatedtagnamemap.properties,
		source: ts.htmlelementdeprecatedtagnamemap.source,
		namespace: 'http://www.w3.org/1999/xhtml',
	},
	svg: {
		properties: ts.svgelementtagnamemap.properties,
		source: ts.svgelementtagnamemap.source,
		namespace: 'http://www.w3.org/2000/svg',
	},
	mathml: {
		properties: ts.mathmlelementtagnamemap.properties,
		source: ts.mathmlelementtagnamemap.source,
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
		// confirmed deprecated but not in mdn
		'applet',
		'basefont',
		'bgsound',
		'blink',
		'listing',
		'isindex',
		'keygen',
		'menuitem',
		'multicol',
		'nextid',
		'noindex',
		'spacer',
	],
	'http://www.w3.org/1998/Math/MathML': [],
	'http://www.w3.org/2000/svg': [],
}

// confirmed deprecated - needs MDN update

export const deprecatedAttributes = {
	// HTML

	// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
	'img.HTMLImageElement.intrinsicsize': true,

	// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#bgcolor
	'col.HTMLTableColElement.bgcolor': true,

	// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#bgcolor
	'colgroup.HTMLTableColElement.bgcolor': true,

	// non-standard deprecated https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/mediaGroup
	'audio.HTMLAudioElement.mediagroup': true,
	'video.HTMLVideoElement.mediagroup': true,
	'track.HTMLTrackElement.mediagroup': true,

	// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#language
	'script.HTMLScriptElement.language': true,

	// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#accept
	'form.HTMLFormElement.accept': true,

	// SVG

	// deprecated https://developer.mozilla.org/en-US/docs/Web/API/SVGStyleElement
	'style.SVGStyleElement.type': true,

	// MATHML

	// deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/annotation-xml
	'annotation-xml.MathMLElement.src': true,

	// deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/annotation
	'annotation.MathMLElement.src': true,

	// deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms
	'ms.MathMLElement.lquote': true,
	'ms.MathMLElement.rquote': true,

	// legacy deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle
	'mstyle.MathMLElement.scriptminsize': true,
	'mstyle.MathMLElement.scriptsizemultiplier': true,

	// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
	'style.HTMLStyleElement.scoped': true,
	'style.SVGStyleElement.scoped': true,

	// not found in mdn
	'iframe.HTMLIFrameElement.allowtransparency': true,

	// not found in mdn
	'keygen.HTMLUnknownElement.autofocus': true,
	'keygen.HTMLUnknownElement.challenge': true,
	'keygen.HTMLUnknownElement.disabled': true,
	'keygen.HTMLUnknownElement.form': true,
	'keygen.HTMLUnknownElement.keyparams': true,
	'keygen.HTMLUnknownElement.keytype': true,
	'keygen.HTMLUnknownElement.name': true,

	// EXTERNAL

	'webview.HTMLElement.blinkfeatures': true,
	'webview.HTMLElement.disableguestresize': true,
	'webview.HTMLElement.guestinstance': true,
}

/** These attributes/properties dont exists in x/html. */
export const frameworkSpecific = {
	'http://www.w3.org/1999/xhtml': {
		// React
		link: ['precedence'],
		style: ['precedence', 'href'],
	},

	'http://www.w3.org/2000/svg': {
		// React
		style: ['precedence', 'href'],
	},
}

// needs MDN update

export const weirdAttributes = {
	'iframe.HTMLIFrameElement.seamless': true,

	'object.HTMLObjectElement.typemustmatch': true,

	'menu.HTMLMenuElement.label': true,
	'menu.HTMLMenuElement.type': true,
}

export const mdnSkip = [
	// elementMDN tags
	'__compat',
	'mdn_url',
	'spec_url',
	'status',
	'support',
	'tags',
	// elementMDN ??
	'advanced_visible_child_selection',
	'aspect_ratio_computed_from_attributes',
	'hr_in_select',
	'implicit_noopener',
	'lquote_rquote_attributes',
	'text_fragments',
	'xlink_actuate',
	'xlink_href',
	'xlink_show',
	'xlink_title',

	// HTMLElement
	'accessKey',
	'accessKeyLabel',
	'anchorElement',
	'attachInternals',
	'attributeStyleMap',
	'autocapitalize',
	'autocorrect',
	'autofocus',
	'beforetoggle_event',
	'blur',
	'change_event',
	'click',
	'command_event',
	'contentEditable',
	'dataset',
	'dir',
	'drag_event',
	'dragend_event',
	'dragenter_event',
	'dragexit_event',
	'draggable',
	'dragleave_event',
	'dragover_event',
	'dragstart_event',
	'drop_event',
	'editContext',
	'enterKeyHint',
	'error_event',
	'focus',
	'hidden',
	'hidePopover',
	'inert',
	'innerText',
	'inputMode',
	'isContentEditable',
	'lang',
	'nonce',
	'offsetHeight',
	'offsetLeft',
	'offsetParent',
	'offsetTop',
	'offsetWidth',
	'outerText',
	'popover',
	'showPopover',
	'spellcheck',
	'style',
	'tabIndex',
	'title',
	'togglePopover',
	'toggle_event',
	'translate',
	'virtualKeyboardPolicy',
	'writingSuggestions',
]
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
		'#' +
		inter.toLowerCase() +
		'.' +
		attr.toLowerCase()
	)
}

export function InterfaceJSONURL(inter) {
	return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/api/${inter}.json`
}

export function ElementJSONURL(ns, tagName) {
	switch (ns) {
		case 'http://www.w3.org/1999/xhtml': {
			return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/html/elements/${tagName}.json`
		}
		case 'http://www.w3.org/1998/Math/MathML': {
			return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/mathml/elements/${tagName}.json`
		}
		case 'http://www.w3.org/2000/svg': {
			return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/svg/elements/${tagName}.json`
		}
		default: {
			throw new Error('WHAT')
		}
	}
}

export const startBrowser = async (browser = 'chrome') => {
	const navigatorInstance = await puppeteer.launch({
		headless: true,
		browser: browser,
		args: [
			'--ash-no-nudges',
			'--deny-permission-prompts',
			'--disable-background-timer-throttling',
			'--disable-backgrounding-occluded-windows',
			'--disable-client-side-phishing-detection',
			'--disable-default-apps',
			'--disable-extensions',
			'--disable-features=TranslateUI,Translate,InfiniteSessionRestore,IsolateOrigins',
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
			'--disable-web-security',
			'--no-sandbox',
		],
		protocolTimeout: 300_000,
		defaultViewport: null,
	})

	const page = await navigatorInstance.newPage()
	return [navigatorInstance, page]
}
export const fetchTable = async file => {
	const [navigatorInstance, page] = await startBrowser()

	const url = 'file:///' + process.cwd().replace(/\\/g, '/') + file

	await page.goto(url, {
		waitUntil: 'networkidle0',
	})
	await new Promise(resolve => setTimeout(resolve, 10000))
	const result = await page.evaluate(() => {
		return '<!DOCTYPE html>' + document.documentElement.outerHTML
	})

	navigatorInstance.close()

	return result
}
export const browserData = async (
	browserData,
	browser = 'chrome',
) => {
	const [navigatorInstance, page] = await startBrowser(browser)

	await page.exposeFunction('getData', () => browserData)

	const url =
		'file:///' +
		process.cwd().replace(/\\/g, '/') +
		'/src/browser.html'

	await page.goto(url, {
		waitUntil: 'networkidle0',
	})
	await page.evaluate(() => window.runFromPuppeteer())
	await new Promise(resolve => setTimeout(resolve, 2000))
	const result = await page.evaluate(() => document.body.textContent)

	navigatorInstance.close()

	return JSON.parse(result)
}
