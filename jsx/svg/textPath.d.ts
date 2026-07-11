// Solid Main - https://www.solidjs.com/
interface TextPathSVGAttributes<T> extends TextContentElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'> {
	href?: string
	method?: 'align' | 'stretch'
	spacing?: 'auto' | 'exact'
	startOffset?: number | string
}

interface TextContentElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'font-family' | 'font-style' | 'font-variant' | 'font-weight' | 'font-stretch' | 'font-size' | 'font-size-adjust' | 'kerning' | 'letter-spacing' | 'word-spacing' | 'text-decoration' | 'glyph-orientation-horizontal' | 'glyph-orientation-vertical' | 'direction' | 'unicode-bidi' | 'text-anchor' | 'dominant-baseline' | 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity'> {}
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

// Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'>
interface PresentationSVGAttributes {
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit'
	'baseline-shift'?: number | string
	display?: string
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit'
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

// Solid Next - https://www.solidjs.com/
interface TextPathSVGAttributes<T> extends TextContentElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'> {
	href?: string | false
	method?: 'align' | 'stretch' | false
	spacing?: 'auto' | 'exact' | false
	startOffset?: number | string | false
}

interface TextContentElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'font-family' | 'font-style' | 'font-variant' | 'font-weight' | 'font-stretch' | 'font-size' | 'font-size-adjust' | 'kerning' | 'letter-spacing' | 'word-spacing' | 'text-decoration' | 'glyph-orientation-horizontal' | 'glyph-orientation-vertical' | 'direction' | 'unicode-bidi' | 'text-anchor' | 'dominant-baseline' | 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity'> {}
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

// Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'>
interface PresentationSVGAttributes {
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit' | false
	'baseline-shift'?: number | string | false
	display?: string | false
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit' | false
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

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGTextPathElementAttributes<Element> extends SVGAttributes<Element> {}
