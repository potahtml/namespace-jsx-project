// Solid - https://www.solidjs.com/
interface TextSVGAttributes<T> extends TextContentElementSVGAttributes<T>, GraphicsElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'writing-mode' | 'text-rendering'> {
	x?: number | string
	y?: number | string
	dx?: number | string
	dy?: number | string
	rotate?: number | string
	textLength?: number | string
	lengthAdjust?: 'spacing' | 'spacingAndGlyphs'
}

interface TextContentElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'font-family' | 'font-style' | 'font-variant' | 'font-weight' | 'font-stretch' | 'font-size' | 'font-size-adjust' | 'kerning' | 'letter-spacing' | 'word-spacing' | 'text-decoration' | 'glyph-orientation-horizontal' | 'glyph-orientation-vertical' | 'direction' | 'unicode-bidi' | 'text-anchor' | 'dominant-baseline' | 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity'> {}
interface GraphicsElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'> {}
interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

interface TransformableSVGAttributes {
	transform?: string
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

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGTextElementAttributes {}
