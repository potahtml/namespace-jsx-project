/**
 * It has to run with data coming from the call because else the data
 * will be hardcoded on this file. We want to avoid harcoding things.
 */
window.runFromPuppeteer = async function () {
	return await window.getData().then(data => {
		run(data, true)
	})
}

/**
 * This is test data, the data is not hardcoded. It is passed when run
 * in puppeteer
 */
const testData = {
	html: [
		'a',
		'abbr',
		'address',
		'area',
		'article',
		'aside',
		'audio',
		'b',
		'base',
		'bdi',
		'bdo',
		'blockquote',
		'body',
		'br',
		'button',
		'canvas',
		'caption',
		'cite',
		'code',
		'col',
		'colgroup',
		'data',
		'datalist',
		'dd',
		'del',
		'details',
		'dfn',
		'dialog',
		'div',
		'dl',
		'dt',
		'em',
		'embed',
		'fieldset',
		'figcaption',
		'figure',
		'footer',
		'form',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'head',
		'header',
		'hgroup',
		'hr',
		'html',
		'i',
		'iframe',
		'image',
		'img',
		'input',
		'ins',
		'kbd',
		'label',
		'legend',
		'li',
		'link',
		'main',
		'map',
		'mark',
		'menu',
		'meta',
		'meter',
		'nav',
		'noscript',
		'object',
		'ol',
		'optgroup',
		'option',
		'output',
		'p',
		'picture',
		'pre',
		'progress',
		'q',
		'rp',
		'rt',
		'ruby',
		's',
		'samp',
		'script',
		'search',
		'section',
		'select',
		'slot',
		'small',
		'source',
		'span',
		'strong',
		'style',
		'sub',
		'summary',
		'sup',
		'table',
		'tbody',
		'td',
		'template',
		'textarea',
		'tfoot',
		'th',
		'thead',
		'time',
		'title',
		'tr',
		'track',
		'u',
		'ul',
		'var',
		'video',
		'wbr',
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
		'xmp',
		'noindex',
		'webview',
	],
	svg: [
		'a',
		'animate',
		'animateMotion',
		'animateTransform',
		'circle',
		'clipPath',
		'defs',
		'desc',
		'ellipse',
		'feBlend',
		'feColorMatrix',
		'feComponentTransfer',
		'feComposite',
		'feConvolveMatrix',
		'feDiffuseLighting',
		'feDisplacementMap',
		'feDistantLight',
		'feDropShadow',
		'feFlood',
		'feFuncA',
		'feFuncB',
		'feFuncG',
		'feFuncR',
		'feGaussianBlur',
		'feImage',
		'feMerge',
		'feMergeNode',
		'feMorphology',
		'feOffset',
		'fePointLight',
		'feSpecularLighting',
		'feSpotLight',
		'feTile',
		'feTurbulence',
		'filter',
		'foreignObject',
		'g',
		'image',
		'line',
		'linearGradient',
		'marker',
		'mask',
		'metadata',
		'mpath',
		'path',
		'pattern',
		'polygon',
		'polyline',
		'radialGradient',
		'rect',
		'script',
		'set',
		'stop',
		'style',
		'svg',
		'switch',
		'symbol',
		'text',
		'textPath',
		'title',
		'tspan',
		'use',
		'view',
	],
	math: [
		'annotation',
		'annotation-xml',
		'maction',
		'math',
		'merror',
		'mfrac',
		'mi',
		'mmultiscripts',
		'mn',
		'mo',
		'mover',
		'mpadded',
		'mphantom',
		'mprescripts',
		'mroot',
		'mrow',
		'ms',
		'mspace',
		'msqrt',
		'mstyle',
		'msub',
		'msubsup',
		'msup',
		'mtable',
		'mtd',
		'mtext',
		'mtr',
		'munder',
		'munderover',
		'semantics',
		'menclose',
		'mfenced',
	],
}

const NS = {
	html: 'http://www.w3.org/1999/xhtml',
	math: 'http://www.w3.org/1998/Math/MathML',
	svg: 'http://www.w3.org/2000/svg',
}

// Test
run(testData)

function run(data, dynamic) {
	const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors
	const getPrototypeOf = Object.getPrototypeOf

	function getSetterNamesFromPrototype(
		object,
		includeCommonAncestor = '',
	) {
		object = getPrototypeOf(object)

		const setters = []
		const readonly = []
		const readonlyProps = []

		while (object.constructor.name !== 'Node') {
			const descriptors = getOwnPropertyDescriptors(object)

			for (const key in descriptors) {
				if (key === 'constructor') continue
				if (descriptors[key].set && !readonlyProps.includes(key)) {
					setters.push(object.constructor.name + '.' + key)
				} else if (descriptors[key].get) {
					readonlyProps.push(key)
					readonly.push(object.constructor.name + '.' + key)
				}
			}

			object = getPrototypeOf(object)
		}

		const filter = x =>
			includeCommonAncestor
				? x.startsWith(includeCommonAncestor + '.')
				: !x.startsWith('HTMLElement.') &&
					!x.startsWith('SVGElement.') &&
					!x.startsWith('MathMLElement.') &&
					!x.startsWith('Element.')

		return [readonly.filter(filter), setters.filter(filter)]
	}

	const result = {
		dynamic: dynamic || undefined,
		html: {},
		math: {},
		svg: {},
		keys: {
			element: {},
			htmlelement: {},
			svgelement: {},
			mathelement: {},
		},
		events: [],
		booleans: [],
	}

	for (const ns in data) {
		for (const tag of data[ns]) {
			const node = document.createElementNS(NS[ns], tag)
			const tagInterfaceName = node.constructor.name

			const [readonly, setters] = getSetterNamesFromPrototype(node)

			gatherPropertiesAttributes(
				result,
				ns,
				tag,
				tagInterfaceName,
				readonly,
				setters,
				node,
			)
		}
	}

	let node
	let readonly
	let setters

	// Element - Element -> Node -> EventTarget
	node = document.createElementNS(NS.html, 'div')
	;[readonly, setters] = getSetterNamesFromPrototype(node, 'Element')
	gatherPropertiesAttributes(
		result,
		'html',
		'element',
		'Element',
		readonly,
		setters,
		node,
	)

	// HTMLElement - HTMLElement -> Element -> Node -> EventTarget
	node = document.createElementNS(NS.html, 'div')
	;[readonly, setters] = getSetterNamesFromPrototype(
		node,
		'HTMLElement',
	)
	gatherPropertiesAttributes(
		result,
		'html',
		'htmlelement',
		'HTMLElement',
		readonly,
		setters,
		node,
	)

	// MathMLElement - MathMLElement -> Element -> Node -> EventTarget
	node = document.createElementNS(NS.math, 'math')
	;[readonly, setters] = getSetterNamesFromPrototype(
		node,
		'MathMLElement',
	)
	gatherPropertiesAttributes(
		result,
		'math',
		'mathelement',
		'MathMLElement',
		readonly,
		setters,
		node,
	)

	// SVGElement - SVGElement -> Element -> Node -> EventTarget
	node = document.createElementNS(NS.svg, 'svg')
	;[readonly, setters] = getSetterNamesFromPrototype(
		node,
		'SVGElement',
	)
	gatherPropertiesAttributes(
		result,
		'svg',
		'svgelement',
		'SVGElement',
		readonly,
		setters,
		node,
	)

	result.keys = {
		// @ts-ignore
		element: result.html.element,
		// @ts-ignore
		htmlelement: result.html.htmlelement,
		// @ts-ignore
		svgelement: result.svg.svgelement,
		// @ts-ignore
		mathelement: result.math.mathelement,
	}

	// @ts-ignore
	delete result.html.element
	// @ts-ignore
	delete result.html.htmlelement
	// @ts-ignore
	delete result.svg.svgelement
	// @ts-ignore
	delete result.math.mathelement

	// @ts-ignore
	result.events = unique(result.events)
	// @ts-ignore
	result.booleans = unique(result.booleans)

	function gatherPropertiesAttributes(
		result,
		ns,
		tag,
		tagInterfaceName,
		readonly,
		setters,
		node,
	) {
		result[ns][tag] = {
			tagInterfaceName,
			readonly,
			keys: {},
			events: [],
			booleans: [],
		}

		// skip `image` as is `img`
		if (ns === 'html' && tag === 'image') {
			return
		}

		for (const keyWithInterfaceName of setters) {
			const [keyInterfaceName, name] = keyWithInterfaceName.split('.')

			if (name.startsWith('aria') && name.endsWith('Elements')) {
				// read only properties not marked as readonly
				continue
			}

			if (
				ns === 'math' &&
				tag !== 'mathelement' &&
				((name.startsWith('on') && node[name] === null) ||
					name === 'autofocus' ||
					name === 'tabIndex' ||
					name === 'attributeStyleMap' ||
					name === 'dataset' ||
					name === 'nonce' ||
					name === 'style')
			) {
				// skip globals for MathML, as every MathML has these globals keys
				continue
			}

			const isReadOnly = readonly.some(x => x.split('.')[1] === name)

			result[ns][tag].keys[name] = result[ns][tag].keys[name] || {
				name,
				attr: false,
				prop: true,
				value: 'unknown',
				propName: name,
				attrName: '',
				keyInterfaceName,
				readonly: isReadOnly,
			}

			result[ns][tag].keys[name].prop = true
			result[ns][tag].keys[name].readonly =
				result[ns][tag].keys[name].readonly || isReadOnly

			// discover kind/type

			const value = node[name]

			let type = ''

			switch (keyWithInterfaceName) {
				// special case values/types that throw errors when invalid

				// HTML ELEMENTS
				case 'HTMLInputElement.valueAsDate': {
					type = 'Date'
					node.type = 'date'
					node[name] = new Date()
					node.removeAttribute('type')
					break
				}
				case 'HTMLInputElement.valueAsNumber': {
					type = 'number'
					node.type = 'number'
					node[name] = 3
					node.removeAttribute('type')
					break
				}
				case 'HTMLInputElement.files': {
					type = 'FileList'
					break
				}
				case 'HTMLTableElement.caption': {
					type = 'HTMLTableCaptionElement'
					break
				}
				case 'HTMLTableElement.tHead':
				case 'HTMLTableElement.tFoot': {
					type = 'HTMLTableSectionElement'
					break
				}
				case 'HTMLMediaElement.srcObject': {
					type = 'MediaStream | MediaSource | Blob | File'
					break
				}
				case 'HTMLIFrameElement.allow': {
					type = 'string'
					node[name] = 'camera https://localhost;'
					break
				}

				// HTMLElement
				case 'HTMLElement.editContext': {
					type = 'EditContext'
					break
				}
				case 'HTMLElement.popover': {
					type = 'string'
					node[name] = 'auto'
					break
				}
				default: {
					// by name
					if (name === 'sandbox') {
						type = 'string'
						node[name] = 'allow-same-origin'
					} else if (
						name === 'popoverTargetElement' ||
						name === 'commandForElement'
					) {
						type = 'Element'
						node[name] = document.body
					} else if (name === 'crossOrigin') {
						type = 'string'
						node[name] = 'anonymous'
					} else if (name === 'mozPrintCallback') {
						type = 'event'
					} else if (name.startsWith('on') && node[name] === null) {
						type = 'event'
						result.events.push(keyWithInterfaceName)
						result[ns][tag].events.push(keyWithInterfaceName)
					} else if (name === 'role') {
						// ARIA
						type = 'string'
						node[name] = 'menu'
					} else if (name.startsWith('aria')) {
						// ARIA
						if (name.endsWith('Element')) {
							type = 'Element'
							node[name] = document.body
						} else {
							type = 'unknown'
							node[name] = 'test'
						}
					} else if (name === 'contentEditable') {
						type = 'string'
						node[name] = 'plaintext-only'
					} else if (name === 'outerHTML' || name === 'outerText') {
						type = 'string'
					} else {
						// by value
						if (
							value instanceof DOMTokenList ||
							value instanceof CSSStyleDeclaration ||
							typeof value === 'string'
						) {
							type = 'string'
							node[name] = 'test'
						} else if (typeof value === 'boolean') {
							type = 'boolean'
							node[name] = true
							result.booleans.push(keyWithInterfaceName)
							result[ns][tag].booleans.push(keyWithInterfaceName)
						} else if (typeof value === 'number') {
							try {
								// volume/playbackRate fails with values above 1
								type = 'number'
								node[name] = 69
							} catch (e) {
								try {
									// input fails to set defaultValue and crashes
									type = 'number'
									node[name] = 1
								} catch (e) {
									console.log(result[ns][tag].keys[name], e)
								}
							}
						} else if (typeof value === 'object' && value !== null) {
							type = 'object'
							node[name] = 'test'
						} else {
							console.log(
								'unkown type for ',
								tagInterfaceName,
								keyWithInterfaceName,
								name,
								value,
								typeof value,
								result[ns][tag].keys[name],
							)

							try {
								// try a string and if crashes mark it as `unknown`
								type = 'string'
								node[name] = 'test'
							} catch (e) {
								type = 'unknown'
								console.log(e)
							}
						}
					}
				}
			}

			// update value
			result[ns][tag].keys[name].value = type

			// events can be used as string attributes
			if (type === 'event' && name.startsWith('on')) {
				result[ns][tag].keys[name].attr = true
				result[ns][tag].keys[name].attrName = name
			}

			// check for attribute
			if (node.attributes.length) {
				const attrName = node.attributes[0].name

				// reset attributes
				while (node.attributes.length) {
					node.removeAttribute(node.attributes[0].name)
				}

				// save
				if (type === 'Element') {
					/**
					 * When a `Element` is used in a prop it adds in some
					 * situations a bogus attribute
					 */
					continue
				}

				if (attrName !== name) {
					// the name of the attribute differs from the prop name
					result[ns][tag].keys[attrName] = result[ns][tag].keys[
						attrName
					] || {
						name: attrName,
						attr: true,
						prop: false,
						value: type,
						propName: name,
						attrName,
						keyInterfaceName,
						readonly: isReadOnly,
					}

					// set as attribute
					result[ns][tag].keys[attrName].attr = true

					// map names
					result[ns][tag].keys[attrName].propName = name
					result[ns][tag].keys[attrName].attrName = attrName

					// update value
					result[ns][tag].keys[attrName].value = type

					if (type === 'boolean') {
						result[ns][tag].booleans.push(
							keyInterfaceName + '.' + attrName,
						)
						result.booleans.push(keyInterfaceName + '.' + attrName)
					}
				} else {
					// mark as attribute
					result[ns][tag].keys[name].attr = true
				}

				// map names
				result[ns][tag].keys[name].attrName = attrName
			}
		}
	}

	document.body.style.whiteSpace = 'pre'
	document.body.textContent = JSON.stringify(result, null, 2)

	console.log('DONE', result)
}

function unique(arr) {
	return [...new Set(arr)].sort()
}
