import { fetchCached, unique } from './utils.js'

const mdnSkip = [
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
	'blur',
	'click',
	'contentEditable',
	'dataset',
	'dir',
	'draggable',
	'editContext',
	'enterKeyHint',
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
	'translate',
	'virtualKeyboardPolicy',
	'writingSuggestions',
]
export function ElementURL(ns, tagName) {
	switch (ns) {
		case 'html': {
			if (tagName === 'webview') {
				return 'https://www.electronjs.org/docs/latest/api/webview-tag'
			}
			return (
				'https://developer.mozilla.org/docs/Web/HTML/Element/' +
				tagName
			)
		}
		case 'math': {
			return (
				'https://developer.mozilla.org/en-US/docs/Web/MathML/Element/' +
				tagName
			)
		}
		case 'svg': {
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

export function InterfaceURL(ns, tagName, tagInterfaceName) {
	return (
		'https://developer.mozilla.org/en-US/docs/Web/API/' +
		tagInterfaceName
	)
}
export function KeyURL(ns, tagName, tagInterfaceName, key) {
	if (tagName === 'webview') {
		return (
			'https://www.electronjs.org/docs/latest/api/webview-tag#' + key
		)
	}
	return (
		'https://developer.mozilla.org/en-US/docs/Web/API/' +
		tagInterfaceName +
		'#' +
		tagInterfaceName.toLowerCase() +
		'.' +
		key.toLowerCase()
	)
}

export function InterfaceJSONURL(interfaceName) {
	return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/api/${interfaceName}.json`
}

export function ElementJSONURL(ns, tagName) {
	switch (ns) {
		case 'html': {
			return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/html/elements/${tagName}.json`
		}
		case 'math': {
			return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/mathml/elements/${tagName}.json`
		}
		case 'svg': {
			return `https://raw.githubusercontent.com/mdn/browser-compat-data/refs/heads/main/svg/elements/${tagName}.json`
		}
		default: {
			throw new Error('WHAT')
		}
	}
}

export async function checkMDNMainValue(
	ns,
	tagName,
	tagInterfaceName,
	valueName,
) {
	const interfaceMDN = JSON.parse(
		(
			await fetchCached(InterfaceJSONURL(tagInterfaceName))
		).toLowerCase(),
	)

	let elementMDN
	try {
		elementMDN = JSON.parse(
			(await fetchCached(ElementJSONURL(ns, tagName))).toLowerCase(),
		)
	} catch (e) {
		elementMDN = true
	}

	// take deprecated from interface name
	return (
		interfaceMDN.api[tagInterfaceName.toLowerCase()].__compat.status[
			valueName
		] ||
		// take deprecated from element
		elementMDN[Object.keys(elementMDN)[0]]?.elements[
			tagName.toLowerCase()
		]?.__compat.status[valueName] ||
		undefined
	)
}

/** Desperation mode ON */
export async function checkMDNPropValue(
	ns,
	tagName,
	tagInterfaceName,
	propName,
	valueName,
) {
	propName = propName.toLowerCase()

	let elementMDN
	try {
		elementMDN = JSON.parse(
			(await fetchCached(ElementJSONURL(ns, tagName))).toLowerCase(),
		)
	} catch (e) {
		elementMDN = true
	}

	const interfaceMDN = JSON.parse(
		(
			await fetchCached(InterfaceJSONURL(tagInterfaceName))
		).toLowerCase(),
	)

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

	return interfaceMDN.api[tagInterfaceName.toLowerCase()][propName]
		?.__compat.status[valueName]
}

export async function keysNotIncludedInMDN(
	ns,
	tagName,
	tagInterfaceName,
	keys,
	readonlyKeys,
) {
	try {
		let mdnkeys = []

		try {
			const elementMDN = JSON.parse(
				await fetchCached(ElementJSONURL(ns, tagName)),
			)

			mdnkeys = unique([
				Object.keys(
					elementMDN[Object.keys(elementMDN)[0]]?.elements[tagName]
						?.__compat,
				),
				Object.keys(
					elementMDN[Object.keys(elementMDN)[0]]?.elements[tagName],
				),
			])
		} catch (e) {}

		try {
			const interfaceMDN = JSON.parse(
				await fetchCached(InterfaceJSONURL(tagInterfaceName)),
			)

			mdnkeys = unique([
				mdnkeys,
				Object.keys(interfaceMDN.api[tagInterfaceName]),
			])
		} catch (e) {}

		return mdnkeys
			.map(x =>
				x.endsWith('_event') ? 'on' + x.replace('_event', '') : x,
			)
			.filter(x => !keys.includes(x.toLowerCase()))
			.filter(x => !mdnSkip.includes(x))
			.filter(x => !readonlyKeys.includes(x))
	} catch (e) {}
	return []
}
