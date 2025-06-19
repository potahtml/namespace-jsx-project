import {
	fetchCached,
	fetchJSON,
	unique,
	uniqueKeys,
} from './utils.js'

const mdnSkip = uniqueKeys(`
	// elementMDN tags

	__compat
	mdn_url
	spec_url
	status
	support
	tags

	// mdn global

	accessKeyLabel
	anchorElement
	attachInternals
	attributeStyleMap
	blur
	click
	dataset
	focus
	hidePopover
	isContentEditable
	offsetHeight
	offsetLeft
	offsetParent
	offsetTop
	offsetWidth
	showPopover
	togglePopover

	// custom / random stuff / non-machine friendly


	advanced_visible_child_selection
	aspect_ratio_computed_from_attributes
	hr_in_select
	implicit_noopener
	lquote_rquote_attributes
	text_fragments
	xlink_actuate
	xlink_href
	xlink_show
	xlink_title
	supports_static
	display_list_item

	toString toBlob toDataURL Audio getSVGDocument HTMLOutputElement Option

	// units

	named_spaces nonzero_unitless_values pseudo_units relative_values scale_factor

	// form

	checkValidity reportValidity requestSubmit setCustomValidity

	// canvas

	captureStream getContext transferControlToOffscreen

	// dialog

	requestClose showModal

	// input

	colorSpace mozactionhint setRangeText setSelectionRange showPicker stepDown stepUp

	// video

	cancelVideoFrameCallback getVideoPlaybackQuality requestPictureInPicture requestVideoFrameCallback

	// table

	createCaption createTBody createTFoot createTHead deleteCaption deleteRow deleteTFoot deleteTHead insertRow deleteCell insertCell deleteCell insertCell

`)

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
export function KeyURL(tagName, keyInterfaceName, key) {
	if (!keyInterfaceName) {
		return (
			'https://developer.mozilla.org/en-US/search?q=' +
			encodeURIComponent(key)
		)
	}
	if (tagName === 'webview') {
		return (
			'https://www.electronjs.org/docs/latest/api/webview-tag#' + key
		)
	}
	if (key.startsWith('on')) {
		key = key.replace(/^on:/, '').replace(/^on/, '')

		return (
			'https://developer.mozilla.org/en-US/docs/Web/API/' +
			keyInterfaceName +
			'#' +
			key.toLowerCase()
		)
	}
	return (
		'https://developer.mozilla.org/en-US/docs/Web/API/' +
		keyInterfaceName +
		'#' +
		keyInterfaceName.toLowerCase() +
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
	const interfaceMDN = await fetchJSON(
		InterfaceJSONURL(tagInterfaceName),
		true,
	)

	const elementMDN = await fetchJSON(
		ElementJSONURL(ns, tagName),
		true,
	)

	// take deprecated from interface name
	return (
		(interfaceMDN.api &&
			interfaceMDN.api[tagInterfaceName.toLowerCase()].__compat
				.status[valueName]) ||
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

	const elementMDN = await fetchJSON(
		ElementJSONURL(ns, tagName),
		true,
	)

	const interfaceMDN = await fetchJSON(
		InterfaceJSONURL(tagInterfaceName),
		true,
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
	globalKeys,
) {
	try {
		let mdnkeys = []

		try {
			const elementMDN = await fetchJSON(ElementJSONURL(ns, tagName))

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
			const interfaceMDN = await fetchJSON(
				InterfaceJSONURL(tagInterfaceName),
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
			.filter(x => !globalKeys.includes(x))
			.filter(x => !keys.includes(x.toLowerCase()))
			.filter(x => !mdnSkip.includes(x))
			.filter(x => !readonlyKeys.includes(x))
	} catch (e) {}
	return []
}
