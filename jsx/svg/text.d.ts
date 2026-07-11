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

// Pick<PresentationSVGAttributes, 'clip-path' | 'writing-mode' | 'text-rendering'>
interface PresentationSVGAttributes {
	'clip-path'?: string
	'text-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit'
	'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit'
}
// Pick<PresentationSVGAttributes, 'font-family' | 'font-style' | 'font-variant' | 'font-weight' | 'font-stretch' | 'font-size' | 'font-size-adjust' | 'kerning' | 'letter-spacing' | 'word-spacing' | 'text-decoration' | 'glyph-orientation-horizontal' | 'glyph-orientation-vertical' | 'direction' | 'unicode-bidi' | 'text-anchor' | 'dominant-baseline' | 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity'>
interface PresentationSVGAttributes {
	'dominant-baseline'?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top' | 'inherit'
	'fill-opacity'?: number | string | 'inherit'
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	'font-family'?: string
	'font-size'?: string
	'font-size-adjust'?: number | string
	'font-stretch'?: string
	'font-style'?: 'normal' | 'italic' | 'oblique' | 'inherit'
	'font-variant'?: string
	'font-weight'?: number | string
	'glyph-orientation-horizontal'?: string
	'glyph-orientation-vertical'?: string
	'letter-spacing'?: number | string
	'stroke-dasharray'?: string
	'stroke-dashoffset'?: number | string
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
	'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit'
	'stroke-miterlimit'?: number | string | 'inherit'
	'stroke-opacity'?: number | string | 'inherit'
	'stroke-width'?: number | string
	'text-anchor'?: 'start' | 'middle' | 'end' | 'inherit'
	'text-decoration'?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | 'inherit'
	'unicode-bidi'?: string
	'word-spacing'?: number | string
	color?: string
	direction?: 'ltr' | 'rtl' | 'inherit'
	fill?: string
	kerning?: string
	stroke?: string
}
// Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'>
interface PresentationSVGAttributes {
	'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'
	'pointer-events'?: 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'color' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit'
	cursor?: string
	display?: string
	filter?: string
	mask?: string
	opacity?: number | string | 'inherit'
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

interface TextContentElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'font-family' | 'font-style' | 'font-variant' | 'font-weight' | 'font-stretch' | 'font-size' | 'font-size-adjust' | 'kerning' | 'letter-spacing' | 'word-spacing' | 'text-decoration' | 'glyph-orientation-horizontal' | 'glyph-orientation-vertical' | 'direction' | 'unicode-bidi' | 'text-anchor' | 'dominant-baseline' | 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity'> {}
interface GraphicsElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'> {}
interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface StylableSVGAttributes {
	/**
	 * Class names to apply. Accepts a string, an object whose keys are class
	 * names and values are booleans (`{ active: isActive() }` — truthy keys
	 * are added), or an array merging strings/objects/nested arrays
	 * (`["card", props.class, { active: isActive() }]`).
	 *
	 * For conditional classes, prefer the array+object form. Don't build
	 * class strings manually with concatenation, template literals, or
	 * `.filter(Boolean).join(" ")` — that's the React/`classnames` reflex
	 * and the array+object form replaces it. The array+object form composes
	 * with reactive values directly; manually-built strings re-run the whole
	 * concatenation on every change instead of toggling the affected classes.
	 */
	class?: ClassValue | false
	style?: CSSProperties | string | false
}

interface TransformableSVGAttributes {
	transform?: string | false
}

// Pick<PresentationSVGAttributes, 'clip-path' | 'writing-mode' | 'text-rendering'>
interface PresentationSVGAttributes {
	'clip-path'?: string | false
	'text-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit' | false
	'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit' | false
}
// Pick<PresentationSVGAttributes, 'font-family' | 'font-style' | 'font-variant' | 'font-weight' | 'font-stretch' | 'font-size' | 'font-size-adjust' | 'kerning' | 'letter-spacing' | 'word-spacing' | 'text-decoration' | 'glyph-orientation-horizontal' | 'glyph-orientation-vertical' | 'direction' | 'unicode-bidi' | 'text-anchor' | 'dominant-baseline' | 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity'>
interface PresentationSVGAttributes {
	'dominant-baseline'?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top' | 'inherit' | false
	'fill-opacity'?: number | string | 'inherit' | false
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit' | false
	'font-family'?: string | false
	'font-size'?: string | false
	'font-size-adjust'?: number | string | false
	'font-stretch'?: string | false
	'font-style'?: 'normal' | 'italic' | 'oblique' | 'inherit' | false
	'font-variant'?: string | false
	'font-weight'?: number | string | false
	'glyph-orientation-horizontal'?: string | false
	'glyph-orientation-vertical'?: string | false
	'letter-spacing'?: number | string | false
	'stroke-dasharray'?: string | false
	'stroke-dashoffset'?: number | string | false
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit' | false
	'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit' | false
	'stroke-miterlimit'?: number | string | 'inherit' | false
	'stroke-opacity'?: number | string | 'inherit' | false
	'stroke-width'?: number | string | false
	'text-anchor'?: 'start' | 'middle' | 'end' | 'inherit' | false
	'text-decoration'?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | 'inherit' | false
	'unicode-bidi'?: string | false
	'word-spacing'?: number | string | false
	color?: string | false
	direction?: 'ltr' | 'rtl' | 'inherit' | false
	fill?: string | false
	kerning?: string | false
	stroke?: string | false
}
// Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'>
interface PresentationSVGAttributes {
	'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit' | false
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit' | false
	'pointer-events'?: 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'color' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit' | false
	cursor?: string | false
	display?: string | false
	filter?: string | false
	mask?: string | false
	opacity?: number | string | 'inherit' | false
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit' | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGTextElementAttributes<T> extends SVGProps<T> {}
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGTextElementAttributes<Element> extends SVGAttributes<Element> {}
