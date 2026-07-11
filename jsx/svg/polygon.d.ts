// Solid Main - https://www.solidjs.com/
interface PolygonSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path' | 'marker-start' | 'marker-mid' | 'marker-end'> {
	points?: string
}

interface GraphicsElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'> {}
interface ShapeElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}
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

// Pick<PresentationSVGAttributes, 'clip-path' | 'marker-start' | 'marker-mid' | 'marker-end'>
interface PresentationSVGAttributes {
	'clip-path'?: string
	'marker-end'?: string
	'marker-mid'?: string
	'marker-start'?: string
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
interface PolygonSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path' | 'marker-start' | 'marker-mid' | 'marker-end'> {
	points?: string | false
}

interface GraphicsElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'> {}
interface ShapeElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}
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

// Pick<PresentationSVGAttributes, 'clip-path' | 'marker-start' | 'marker-mid' | 'marker-end'>
interface PresentationSVGAttributes {
	'clip-path'?: string | false
	'marker-end'?: string | false
	'marker-mid'?: string | false
	'marker-start'?: string | false
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

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGPolygonElementAttributes<Element> extends SVGAttributes<Element> {}
