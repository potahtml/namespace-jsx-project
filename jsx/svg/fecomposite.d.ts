// Solid - https://www.solidjs.com/
interface FeCompositeSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
	operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic'
	k1?: number | string
	k2?: number | string
	k3?: number | string
	k4?: number | string
}

interface FilterPrimitiveElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	result?: string
}

interface DoubleInputFilterSVGAttributes {
	in?: string
	in2?: string
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

interface PresentationSVGAttributes {
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit'
	'baseline-shift'?: number | string
	clip?: string
	'clip-path'?: string
	'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	color?: string
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-profile'?: string
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'
	cursor?: string
	direction?: 'ltr' | 'rtl' | 'inherit'
	display?: string
	'dominant-baseline'?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top' | 'inherit'
	'enable-background'?: string
	fill?: string
	'fill-opacity'?: number | string | 'inherit'
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	filter?: string
	'flood-color'?: string
	'flood-opacity'?: number | string | 'inherit'
	'font-family'?: string
	'font-size'?: string
	'font-size-adjust'?: number | string
	'font-stretch'?: string
	'font-style'?: 'normal' | 'italic' | 'oblique' | 'inherit'
	'font-variant'?: string
	'font-weight'?: number | string
	'glyph-orientation-horizontal'?: string
	'glyph-orientation-vertical'?: string
	'image-rendering'?: 'auto' | 'optimizeQuality' | 'optimizeSpeed' | 'inherit'
	kerning?: string
	'letter-spacing'?: number | string
	'lighting-color'?: string
	'marker-end'?: string
	'marker-mid'?: string
	'marker-start'?: string
	mask?: string
	opacity?: number | string | 'inherit'
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit'
	pathLength?: string | number
	'pointer-events'?: 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'color' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit'
	'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit'
	'stop-color'?: string
	'stop-opacity'?: number | string | 'inherit'
	stroke?: string
	'stroke-dasharray'?: string
	'stroke-dashoffset'?: number | string
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
	'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit'
	'stroke-miterlimit'?: number | string | 'inherit'
	'stroke-opacity'?: number | string | 'inherit'
	'stroke-width'?: number | string
	'text-anchor'?: 'start' | 'middle' | 'end' | 'inherit'
	'text-decoration'?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | 'inherit'
	'text-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit'
	'unicode-bidi'?: string
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit'
	'word-spacing'?: number | string
	'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit'
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFECompositeElementAttributes {}
