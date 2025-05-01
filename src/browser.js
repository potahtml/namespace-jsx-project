window.runFromPuppeteer = async function () {
	return await window.getData().then(data => {
		run(data)
	})
}

/**
 * This is test data, the data is not hardcoded. It is passed when run
 * in puppeteer
 */
const testData = {
	'http://www.w3.org/1999/xhtml': [
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
	'http://www.w3.org/2000/svg': [
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
	'http://www.w3.org/1998/Math/MathML': [
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

// Test
// run(testData)

function run(data) {
	const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors
	const getPrototypeOf = Object.getPrototypeOf

	function getSetterNamesFromPrototype(
		object,
		includeCommonAncestor = false,
	) {
		object = getPrototypeOf(object)

		const setters = []
		const readonly = []

		while (object.constructor.name !== 'Node') {
			const descriptors = getOwnPropertyDescriptors(object)

			for (const key in descriptors) {
				if (key === 'constructor') continue
				if (descriptors[key].set) {
					setters.push(object.constructor.name + '.' + key)
				} else if (descriptors[key].get) {
					readonly.push(object.constructor.name + '.' + key)
				}
			}

			object = getPrototypeOf(object)
		}

		const filter = x =>
			includeCommonAncestor
				? x
				: !x.startsWith('HTMLElement.') &&
					!x.startsWith('SVGElement.') &&
					!x.startsWith('Element.')

		return [readonly.filter(filter), setters.filter(filter)]
	}

	const result = {}
	for (const ns in data) {
		result[ns] = { elements: {} }

		for (const tag of data[ns]) {
			const node = document.createElementNS(ns, tag)
			const interface_ = node.constructor.name

			const [readonly, setters] = getSetterNamesFromPrototype(node)

			result[ns].elements[tag] = {
				interface: interface_,
				readonly,
				keys: {},
			}

			for (const key of setters) {
				const [keyInterface, name] = key.split('.')
				// skip globals for MathML, as every MathML has these globals attr/props
				if (
					ns === 'http://www.w3.org/1998/Math/MathML' &&
					((name.startsWith('on') && node[name] === null) ||
						name === 'autofocus' ||
						name === 'tabIndex' ||
						name === 'attributeStyleMap' ||
						name === 'dataset' ||
						name === 'nonce' ||
						name === 'style')
				) {
					continue
				}

				const isReadOnly = readonly.some(
					x => x.split('.')[1] === name,
				)

				result[ns].elements[tag].keys[name] = result[ns].elements[tag]
					.keys[name] || {
					name,
					attr: false,
					prop: true,
					value: 'unknown',
					propName: name,
					attrName: '',
					interface: keyInterface,
					readonly: isReadOnly,
				}

				result[ns].elements[tag].keys[name].prop = true
				result[ns].elements[tag].keys[name].readonly = isReadOnly

				// discover kind/type

				const value = node[name]

				let type = ''

				switch (interface_ + '.' + name) {
					// special case values/types that throw errors when invalid
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
					case 'HTMLAudioElement.crossOrigin':
					case 'HTMLImageElement.crossOrigin':
					case 'HTMLLinkElement.crossOrigin':
					case 'HTMLScriptElement.crossOrigin':
					case 'HTMLVideoElement.crossOrigin':
					case 'SVGImageElement.crossOrigin': {
						type = 'string'
						node[name] = 'anonymous'
						break
					}
					case 'HTMLAudioElement.srcObject':
					case 'HTMLVideoElement.srcObject': {
						type = 'MediaStream | MediaSource | Blob | File'
						break
					}
					case 'HTMLInputElement.popoverTargetElement':
					case 'HTMLButtonElement.popoverTargetElement':
					case 'HTMLButtonElement.commandForElement': {
						type = 'Element'
						node[name] = document.body
						break
					}
					case 'HTMLIFrameElement.sandbox': {
						type = 'string'
						node[name] = 'allow-same-origin'
						break
					}
					case 'HTMLIFrameElement.allow': {
						type = 'string'
						node[name] = 'camera https://localhost;'
						break
					}
					default: {
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
									console.log(result[ns].elements[tag].keys[name], e)
								}
							}
						} else if (name.startsWith('on') && node[name] === null) {
							type = 'event'
						} else {
							console.log(
								'unkown type for ',
								interface_,
								name,
								value,
								typeof value,
								result[ns].elements[tag].keys[name],
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

				// update value
				result[ns].elements[tag].keys[name].value = type

				// events can be used as string attributes
				if (type === 'event') {
					result[ns].elements[tag].keys[name].attr = true
					result[ns].elements[tag].keys[name].attrName = name
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
						result[ns].elements[tag].keys[attrName] = result[ns]
							.elements[tag].keys[attrName] || {
							name: attrName,
							attr: true,
							prop: false,
							value: type,
							propName: name,
							attrName,
							interface: keyInterface,
							readonly: isReadOnly,
						}

						// set as attribute
						result[ns].elements[tag].keys[attrName].attr = true

						// map names
						result[ns].elements[tag].keys[attrName].propName = name
						result[ns].elements[tag].keys[attrName].attrName =
							attrName

						// update value
						result[ns].elements[tag].keys[attrName].value = type
					} else {
						// mark as attribute
						result[ns].elements[tag].keys[name].attr = true
					}

					// map names
					result[ns].elements[tag].keys[name].attrName = attrName
				}
			}
		}
	}

	document.body.style.whiteSpace = 'pre'
	document.body.textContent = JSON.stringify(result, null, 2)

	console.log('DONE', result)
}
