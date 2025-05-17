// Solid Main - https://www.solidjs.com/
interface TextSVGAttributes<T> extends TextContentElementSVGAttributes<T>, GraphicsElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path' | 'writing-mode' | 'text-rendering'> {
	dx?: number | string
	dy?: number | string
	lengthAdjust?: 'spacing' | 'spacingAndGlyphs'
	rotate?: number | string
	textLength?: number | string
	x?: number | string
	y?: number | string
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
	'clip-path'?: string
	'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-profile'?: string
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'
	'dominant-baseline'?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top' | 'inherit'
	'enable-background'?: string
	'fill-opacity'?: number | string | 'inherit'
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
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
	'letter-spacing'?: number | string
	'lighting-color'?: string
	'marker-end'?: string
	'marker-mid'?: string
	'marker-start'?: string
	'pointer-events'?: 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'color' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit'
	'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit'
	'stop-color'?: string
	'stop-opacity'?: number | string | 'inherit'
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
	'word-spacing'?: number | string
	'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit'
	clip?: string
	color?: string
	cursor?: string
	direction?: 'ltr' | 'rtl' | 'inherit'
	display?: string
	fill?: string
	filter?: string
	kerning?: string
	mask?: string
	opacity?: number | string | 'inherit'
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit'
	pathLength?: string | number
	stroke?: string
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit'
}

// Solid Next - https://www.solidjs.com/
interface TextSVGAttributes<T> extends TextContentElementSVGAttributes<T>, GraphicsElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path' | 'writing-mode' | 'text-rendering'> {
	dx?: number | string | false
	dy?: number | string | false
	lengthAdjust?: 'spacing' | 'spacingAndGlyphs' | false
	rotate?: number | string | false
	textLength?: number | string | false
	x?: number | string | false
	y?: number | string | false
}

interface TextContentElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'font-family' | 'font-style' | 'font-variant' | 'font-weight' | 'font-stretch' | 'font-size' | 'font-size-adjust' | 'kerning' | 'letter-spacing' | 'word-spacing' | 'text-decoration' | 'glyph-orientation-horizontal' | 'glyph-orientation-vertical' | 'direction' | 'unicode-bidi' | 'text-anchor' | 'dominant-baseline' | 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity'> {}
interface GraphicsElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'> {}
interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface StylableSVGAttributes {
	class?: string | ClassList | false
	style?: CSSProperties | string | false
}

interface TransformableSVGAttributes {
	transform?: string | false
}

interface PresentationSVGAttributes {
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit' | false
	'baseline-shift'?: number | string | false
	'clip-path'?: string | false
	'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit' | false
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-profile'?: string | false
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit' | false
	'dominant-baseline'?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top' | 'inherit' | false
	'enable-background'?: string | false
	'fill-opacity'?: number | string | 'inherit' | false
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit' | false
	'flood-color'?: string | false
	'flood-opacity'?: number | string | 'inherit' | false
	'font-family'?: string | false
	'font-size'?: string | false
	'font-size-adjust'?: number | string | false
	'font-stretch'?: string | false
	'font-style'?: 'normal' | 'italic' | 'oblique' | 'inherit' | false
	'font-variant'?: string | false
	'font-weight'?: number | string | false
	'glyph-orientation-horizontal'?: string | false
	'glyph-orientation-vertical'?: string | false
	'image-rendering'?: 'auto' | 'optimizeQuality' | 'optimizeSpeed' | 'inherit' | false
	'letter-spacing'?: number | string | false
	'lighting-color'?: string | false
	'marker-end'?: string | false
	'marker-mid'?: string | false
	'marker-start'?: string | false
	'pointer-events'?: 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'color' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit' | false
	'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit' | false
	'stop-color'?: string | false
	'stop-opacity'?: number | string | 'inherit' | false
	'stroke-dasharray'?: string | false
	'stroke-dashoffset'?: number | string | false
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit' | false
	'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit' | false
	'stroke-miterlimit'?: number | string | 'inherit' | false
	'stroke-opacity'?: number | string | 'inherit' | false
	'stroke-width'?: number | string | false
	'text-anchor'?: 'start' | 'middle' | 'end' | 'inherit' | false
	'text-decoration'?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | 'inherit' | false
	'text-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit' | false
	'unicode-bidi'?: string | false
	'word-spacing'?: number | string | false
	'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit' | false
	clip?: string | false
	color?: string | false
	cursor?: string | false
	direction?: 'ltr' | 'rtl' | 'inherit' | false
	display?: string | false
	fill?: string | false
	filter?: string | false
	kerning?: string | false
	mask?: string | false
	opacity?: number | string | 'inherit' | false
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | false
	pathLength?: string | number | false
	stroke?: string | false
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit' | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGTextElementAttributes<T> extends SVGProps<T> {}
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGTextElementAttributes {}
