// Solid Main - https://www.solidjs.com/
interface MaskSVGAttributes<T> extends Omit<ContainerElementSVGAttributes<T>, 'opacity' | 'filter'>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path'> {
	height?: number | string
	maskContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	maskUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	width?: number | string
	x?: number | string
	y?: number | string
}

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

// Omit<ContainerElementSVGAttributes, 'opacity' | 'filter'>
interface ContainerElementSVGAttributes {
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
	'clip-path'?: string
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'
	'enable-background'?: string
	cursor?: string
	mask?: string
}
// Pick<PresentationSVGAttributes, 'clip-path'>
interface PresentationSVGAttributes {
	'clip-path'?: string
}

// Solid Next - https://www.solidjs.com/
interface MaskSVGAttributes<T> extends Omit<ContainerElementSVGAttributes<T>, 'opacity' | 'filter'>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path'> {
	height?: number | string | false
	maskContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	maskUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
}

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

// Omit<ContainerElementSVGAttributes, 'opacity' | 'filter'>
interface ContainerElementSVGAttributes {
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
	'clip-path'?: string | false
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit' | false
	'enable-background'?: string | false
	cursor?: string | false
	mask?: string | false
}
// Pick<PresentationSVGAttributes, 'clip-path'>
interface PresentationSVGAttributes {
	'clip-path'?: string | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGMaskElementAttributes<Element> extends SVGAttributes<Element> {}
