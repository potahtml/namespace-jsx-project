// Solid Main - https://www.solidjs.com/
interface SwitchSVGAttributes<T> extends ContainerElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'display' | 'visibility'> {}
interface ContainerElementSVGAttributes<T> extends CoreSVGAttributes<T>, ShapeElementSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-path' | 'mask' | 'cursor' | 'opacity' | 'filter' | 'enable-background' | 'color-interpolation' | 'color-rendering'> {}
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

interface ShapeElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}
// Pick<PresentationSVGAttributes, 'display' | 'visibility'>
interface PresentationSVGAttributes {
	display?: string
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit'
}
// Pick<PresentationSVGAttributes, 'clip-path' | 'mask' | 'cursor' | 'opacity' | 'filter' | 'enable-background' | 'color-interpolation' | 'color-rendering'>
interface PresentationSVGAttributes {
	'clip-path'?: string
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'
	'enable-background'?: string
	cursor?: string
	filter?: string
	mask?: string
	opacity?: number | string | 'inherit'
}
// Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'>
interface PresentationSVGAttributes {
	'fill-opacity'?: number | string | 'inherit'
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit'
	'stroke-dasharray'?: string
	'stroke-dashoffset'?: number | string
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
	'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit'
	'stroke-miterlimit'?: number | string | 'inherit'
	'stroke-opacity'?: number | string | 'inherit'
	'stroke-width'?: number | string
	color?: string
	fill?: string
	pathLength?: string | number
	stroke?: string
}

// Solid Next - https://www.solidjs.com/
interface SwitchSVGAttributes<T> extends ContainerElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'display' | 'visibility'> {}
interface ContainerElementSVGAttributes<T> extends SVGAttributes<T>, ShapeElementSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-path' | 'mask' | 'cursor' | 'opacity' | 'filter' | 'enable-background' | 'color-interpolation' | 'color-rendering'> {}
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

interface ShapeElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}
// Pick<PresentationSVGAttributes, 'display' | 'visibility'>
interface PresentationSVGAttributes {
	display?: string | false
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit' | false
}
// Pick<PresentationSVGAttributes, 'clip-path' | 'mask' | 'cursor' | 'opacity' | 'filter' | 'enable-background' | 'color-interpolation' | 'color-rendering'>
interface PresentationSVGAttributes {
	'clip-path'?: string | false
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit' | false
	'enable-background'?: string | false
	cursor?: string | false
	filter?: string | false
	mask?: string | false
	opacity?: number | string | 'inherit' | false
}
// Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'>
interface PresentationSVGAttributes {
	'fill-opacity'?: number | string | 'inherit' | false
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit' | false
	'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit' | false
	'stroke-dasharray'?: string | false
	'stroke-dashoffset'?: number | string | false
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit' | false
	'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit' | false
	'stroke-miterlimit'?: number | string | 'inherit' | false
	'stroke-opacity'?: number | string | 'inherit' | false
	'stroke-width'?: number | string | false
	color?: string | false
	fill?: string | false
	pathLength?: string | number | false
	stroke?: string | false
}

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGSwitchElementAttributes<Element> extends SVGAttributes<Element> {}
