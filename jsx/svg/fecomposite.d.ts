// Solid Main - https://www.solidjs.com/
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

// Solid Minor - https://www.solidjs.com/
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
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
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

// Solid Next - https://www.solidjs.com/
interface FeCompositeSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
	operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic' | undefined | false
	k1?: number | string | undefined | false
	k2?: number | string | undefined | false
	k3?: number | string | undefined | false
	k4?: number | string | undefined | false
}

interface FilterPrimitiveElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	x?: number | string | undefined | false
	y?: number | string | undefined | false
	width?: number | string | undefined | false
	height?: number | string | undefined | false
	result?: string | undefined | false
}

interface DoubleInputFilterSVGAttributes {
	in?: string | undefined | false
	in2?: string | undefined | false
}

interface StylableSVGAttributes {
	class?: string | ClassList | undefined | false
	style?: CSSProperties | string | undefined | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | undefined | false
	lang?: string | undefined | false
	tabindex?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | undefined | false
}

interface PresentationSVGAttributes {
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit' | undefined | false
	'baseline-shift'?: number | string | undefined | false
	clip?: string | undefined | false
	'clip-path'?: string | undefined | false
	'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit' | undefined | false
	color?: string | undefined | false
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined | false
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined | false
	'color-profile'?: string | undefined | false
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit' | undefined | false
	cursor?: string | undefined | false
	direction?: 'ltr' | 'rtl' | 'inherit' | undefined | false
	display?: string | undefined | false
	'dominant-baseline'?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top' | 'inherit' | undefined | false
	'enable-background'?: string | undefined | false
	fill?: string | undefined | false
	'fill-opacity'?: number | string | 'inherit' | undefined | false
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit' | undefined | false
	filter?: string | undefined | false
	'flood-color'?: string | undefined | false
	'flood-opacity'?: number | string | 'inherit' | undefined | false
	'font-family'?: string | undefined | false
	'font-size'?: string | undefined | false
	'font-size-adjust'?: number | string | undefined | false
	'font-stretch'?: string | undefined | false
	'font-style'?: 'normal' | 'italic' | 'oblique' | 'inherit' | undefined | false
	'font-variant'?: string | undefined | false
	'font-weight'?: number | string | undefined | false
	'glyph-orientation-horizontal'?: string | undefined | false
	'glyph-orientation-vertical'?: string | undefined | false
	'image-rendering'?: 'auto' | 'optimizeQuality' | 'optimizeSpeed' | 'inherit' | undefined | false
	kerning?: string | undefined | false
	'letter-spacing'?: number | string | undefined | false
	'lighting-color'?: string | undefined | false
	'marker-end'?: string | undefined | false
	'marker-mid'?: string | undefined | false
	'marker-start'?: string | undefined | false
	mask?: string | undefined | false
	opacity?: number | string | 'inherit' | undefined | false
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | undefined | false
	pathLength?: string | number | undefined | false
	'pointer-events'?: 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'color' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit' | undefined | false
	'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit' | undefined | false
	'stop-color'?: string | undefined | false
	'stop-opacity'?: number | string | 'inherit' | undefined | false
	stroke?: string | undefined | false
	'stroke-dasharray'?: string | undefined | false
	'stroke-dashoffset'?: number | string | undefined | false
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit' | undefined | false
	'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit' | undefined | false
	'stroke-miterlimit'?: number | string | 'inherit' | undefined | false
	'stroke-opacity'?: number | string | 'inherit' | undefined | false
	'stroke-width'?: number | string | undefined | false
	'text-anchor'?: 'start' | 'middle' | 'end' | 'inherit' | undefined | false
	'text-decoration'?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | 'inherit' | undefined | false
	'text-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit' | undefined | false
	'unicode-bidi'?: string | undefined | false
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit' | undefined | false
	'word-spacing'?: number | string | undefined | false
	'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit' | undefined | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFECompositeElementAttributes {}
