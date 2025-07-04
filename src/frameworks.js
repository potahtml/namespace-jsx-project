import { NSElements, NSGlobalInterfaces } from './data.js'
import {
	getInterfaceMergedFromPropertySource,
	parseFromURL,
} from './parse.js'
import { append, entries, write } from './utils.js'

/**
 * List of frameworks that provide a JSX namespace. Their interface
 * for events, elements and attributes it's mapped into a common
 * name.
 */
export const libs = [
	{
		// SOLID MAIN
		file: 'https://raw.githubusercontent.com/titoBouzout/dom-expressions/refs/heads/main-types-update-0105/packages/dom-expressions/src/jsx.d.ts',
		name: 'Solid Main',
		url: 'https://www.solidjs.com/',
		interfaces: {},
		elements: {
			html: {},
			svg: {},
			math: {},
		},
		keys: {
			HTMLElement: {},
			SVGElement: {},
			MathMLElement: {},
			Element: {},
		},
		map: {
			elements: {
				html: {
					values: ['htmlelementtags', 'htmlelementdeprecatedtags'],
					skip: ['ariaattributes', 'domattributes', 'htmlattributes'],
				},
				svg: {
					values: ['svgelementtags'],
					skip: [
						'ariaattributes',
						'domattributes',
						'coresvgattributes',
					],
				},
				math: {
					values: ['mathmlelementtags'],
					skip: [
						'ariaattributes',
						'domattributes',
						'mathmlattributes',
					],
				},
			},
			keys: {
				HTMLElement: {
					/* HTMLElement interface */
					values: ['htmlattributes'],
					skip: ['domattributes'],
				},
				SVGElement: {
					/* SVGElement interface */
					values: ['coresvgattributes'],
					skip: ['domattributes'],
				},
				MathMLElement: {
					/* MathMLElement interface */
					values: ['mathmlattributes'],
					skip: ['domattributes'],
				},
				Element: {
					/* Element interface */
					values: [
						'ariaattributes',
						'domattributes',
						'customeventhandlerscamelcase',
						'customeventhandlerslowercase',
						'customeventhandlersnamespaced',
					],
					skip: [
						// custom
						'customattributes',
						'directiveattributes',
						'directivefunctionattributes',

						// namespaced
						'propattributes',
						'attrattributes',
						'boolattributes',
						'onattributes',
					],
				},
			},
		},
	},
	{
		// SOLID NEXT
		file: 'https://raw.githubusercontent.com/titoBouzout/dom-expressions/refs/heads/next-types-update-0105/packages/dom-expressions/src/jsx.d.ts',
		name: 'Solid Next',
		url: 'https://www.solidjs.com/',
		interfaces: {},
		elements: {
			html: {},
			svg: {},
			math: {},
		},
		keys: {
			HTMLElement: {},
			SVGElement: {},
			MathMLElement: {},
			Element: {},
		},
		map: {
			elements: {
				html: {
					values: ['htmlelementtags', 'htmlelementdeprecatedtags'],
					skip: ['htmlattributes'],
				},
				svg: {
					values: ['svgelementtags'],
					skip: ['svgattributes'],
				},
				math: {
					values: ['mathmlelementtags'],
					skip: ['mathmlattributes'],
				},
			},
			keys: {
				HTMLElement: {
					/* HTMLElement interface */
					values: ['htmlattributes'],
					skip: ['elementattributes'],
				},
				SVGElement: {
					/* SVGElement interface */
					values: ['svgattributes'],
					skip: ['elementattributes'],
				},
				MathMLElement: {
					/* MathMLElement interface */
					values: ['mathmlattributes'],
					skip: ['elementattributes'],
				},
				Element: {
					/* Element interface */
					values: [
						'ariaattributes',
						'elementattributes',
						'elementeventhandlers',
					],
					skip: [
						// custom
						'customattributes',
						'directiveattributes',
						'directivefunctionattributes',

						// namespaced
						'propattributes',
						'attrattributes',
						'boolattributes',
						'onattributes',
					],
				},
			},
		},
	},
	{
		// VOBY
		file: 'https://raw.githubusercontent.com/vobyjs/voby/refs/heads/master/src/jsx/types.ts',
		name: 'Voby',
		url: 'https://github.com/vobyjs/voby',
		interfaces: {},
		elements: {
			html: {},
			svg: {},
			math: {},
		},
		keys: {
			HTMLElement: {},
			SVGElement: {},
			MathMLElement: {},
			Element: {},
		},
		map: {
			elements: {
				html: {
					values: ['intrinsicelements'],
					skip: [
						'htmlattributes',
						'svgattributes',
						'voidhtmlattributes',
						'ariaattributes',
						'eventattributes',
						'htmlelement',
					],
					include: false,
				},
				svg: {
					values: ['intrinsicelements'],
					skip: [
						'htmlattributes',
						'svgattributes',
						'voidhtmlattributes',
						'ariaattributes',
						'eventattributes',
						'htmlelement',
					],
					include: false,
				},
				math: {
					values: ['intrinsicelements'],
					skip: [
						'htmlattributes',
						'voidhtmlattributes',
						'ariaattributes',
						'eventattributes',
						'htmlelement',
					],
					include: false,
				},
			},
			keys: {
				HTMLElement: {
					values: [],
					skip: [],
				},
				SVGElement: {
					values: [],
					skip: [],
				},
				MathMLElement: {
					values: [],
					skip: [],
				},
				Element: {
					values: ['ariaattributes'],
				},
			},
		},
	},
	{
		// VUE
		file: 'https://raw.githubusercontent.com/vuejs/core/refs/heads/main/packages/runtime-dom/src/jsx.ts',
		name: 'Vue',
		url: 'https://vuejs.org/',
		interfaces: {},
		elements: {
			html: {},
			svg: {},
			math: {},
		},
		keys: {
			HTMLElement: {},
			SVGElement: {},
			MathMLElement: {},
			Element: {},
		},
		map: {
			elements: {
				html: {
					values: ['intrinsicelementattributes'],
					skip: ['htmlattributes', 'svgattributes'],
					include: false,
				},
				svg: {
					values: ['intrinsicelementattributes'],
					skip: ['htmlattributes', 'svgattributes'],
					include: false,
				},
				math: {
					values: [],
					skip: ['htmlattributes', 'svgattributes'],
					include: false,
				},
			},
			keys: {
				HTMLElement: {
					values: [],
					skip: [],
				},
				SVGElement: {
					values: [],
					skip: [],
				},
				MathMLElement: {
					values: [],
					skip: [],
				},
				Element: {
					values: ['ariaattributes'],
				},
			},
		},
	},
	{
		// PREACT
		file: 'https://raw.githubusercontent.com/preactjs/preact/refs/heads/main/src/jsx.d.ts',
		name: 'Preact',
		url: 'https://preactjs.com/',
		interfaces: {},
		elements: {
			html: {},
			svg: {},
			math: {},
		},
		keys: {
			HTMLElement: {},
			SVGElement: {},
			MathMLElement: {},
			Element: {},
		},
		map: {
			elements: {
				html: {
					values: ['intrinsicelements'],
					skip: [
						'intrinsicmathmlelements',
						'intrinsicsvgelements',
						'htmlattributes',
					],
				},
				svg: {
					values: ['intrinsicsvgelements'],
					skip: ['svgattributes'],
				},
				math: {
					values: ['intrinsicmathmlelements'],
					skip: ['mathmlattributes'],
				},
			},
			keys: {
				HTMLElement: {
					values: ['htmlattributes'],
					skip: ['domattributes', 'ariaattributes'],
				},
				SVGElement: {
					values: [],
					skip: ['htmlattributes'],
				},
				MathMLElement: {
					values: ['mathmlattributes'],
					skip: ['htmlattributes'],
				},
				Element: {
					values: ['ariaattributes'],
					skip: [],
				},
			},
		},
	},
	{
		// REACT
		file: 'https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/react/index.d.ts',
		name: 'React',
		url: 'https://react.dev/',
		interfaces: {},
		elements: {
			html: {},
			svg: {},
			math: {},
		},
		keys: {
			HTMLElement: {},
			SVGElement: {},
			MathMLElement: {},
			Element: {},
		},
		map: {
			elements: {
				html: {
					values: ['intrinsicelements'],
					skip: ['htmlattributes', 'svgattributes', 'refattributes'],
					include: false,
				},
				svg: {
					values: ['intrinsicelements'],
					skip: ['htmlattributes', 'svgattributes', 'refattributes'],
					include: false,
				},
				math: {
					values: ['intrinsicelements'],
					skip: ['htmlattributes', 'svgattributes', 'refattributes'],
					include: false,
				},
			},
			keys: {
				HTMLElement: {
					values: [],
					skip: [],
				},
				SVGElement: {
					values: [],
					skip: [],
				},
				MathMLElement: {
					values: [],
					skip: [],
				},
				Element: {
					values: ['ariaattributes'],
				},
			},
		},
	},
	{
		// POTA
		file: 'https://raw.githubusercontent.com/potahtml/pota/refs/heads/master/src/jsx/jsx.d.ts',
		name: 'Pota',
		url: 'https://github.com/potahtml/pota',
		interfaces: {},
		elements: {
			html: {},
			svg: {},
			math: {},
		},
		keys: {
			HTMLElement: {},
			SVGElement: {},
			MathMLElement: {},
			Element: {},
		},
		map: {
			elements: {
				html: {
					values: [
						'htmlelements',
						'htmldeprecatedelements',
						'htmlwebviewelements',
					],
					skip: ['elementattributes', 'htmlattributes'],
				},
				svg: {
					values: ['svgelements', 'svgdeprecatedelements'],
					skip: ['elementattributes', 'svgattributes'],
				},
				math: {
					values: ['mathmlelements', 'mathmldeprecatedelements'],
					skip: ['elementattributes', 'mathmlattributes'],
				},
			},
			keys: {
				HTMLElement: {
					values: ['htmlattributes'],
					skip: ['elementattributes'],
				},
				SVGElement: {
					values: [],
					skip: ['elementattributes'],
				},
				MathMLElement: {
					values: ['mathmlattributes'],
					skip: ['elementattributes'],
				},
				Element: {
					values: [
						'cssattributes',
						'elementattributes',
						'ariaattributes',
						'elementeventhandlers',
					],
				},
			},
		},
	},
]

export async function getLibs() {
	// Write to disk and index lib interfaces

	for (const lib of libs) {
		const banner = `\n\n// ${lib.name} - ${lib.url}  \n`

		lib.interfaces = await parseFromURL(lib.file, lib.name, {})

		// write to disk all of the interfaces

		for (const [name, value] of entries(lib.interfaces)) {
			write(`./jsx/source/${lib.name}/${name}.d.ts`, value.source)
		}

		// tags

		for (const ns of NSElements) {
			const elements = lib.elements[ns]
			for (const tagInterfaces of lib.map.elements[ns].values) {
				if (lib.interfaces[tagInterfaces]) {
					for (const prop of lib.interfaces[tagInterfaces]
						.properties) {
						elements[prop.name] =
							getInterfaceMergedFromPropertySource(
								prop.source,
								lib.interfaces,
								lib.map.elements[ns].skip,
							)

						// save to disk
						append(
							`./jsx/${ns}/${prop.name}.d.ts`,
							banner + elements[prop.name].source,
						)
					}
				}
			}
		}

		// htmlelement, svgelement, mathelement, element interfaces

		for (const ns of NSGlobalInterfaces) {
			const keys = lib.keys[ns]
			let source = ''
			for (const tagInterfaces of lib.map.keys[ns].values) {
				if (lib.interfaces[tagInterfaces]) {
					// TODO, recurse with something similar to getInterfaceMergedFromPropertySource?
					for (const prop of lib.interfaces[tagInterfaces]
						.properties) {
						keys[prop.name] = prop.source
					}
					source += lib.interfaces[tagInterfaces].source
				}
			}

			// save to disk
			append(`./jsx/keys/${ns}.d.ts`, banner + source)
		}
	}

	return libs
}
