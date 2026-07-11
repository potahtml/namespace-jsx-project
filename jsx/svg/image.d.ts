// Solid Main - https://www.solidjs.com/
interface ImageSVGAttributes<T> extends NewViewportSVGAttributes<T>, GraphicsElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path' | 'color-profile' | 'image-rendering'> {
	height?: number | string
	href?: string
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice' | 'defer none' | 'defer xMinYMin' | 'defer xMidYMin' | 'defer xMaxYMin' | 'defer xMinYMid' | 'defer xMidYMid' | 'defer xMaxYMid' | 'defer xMinYMax' | 'defer xMidYMax' | 'defer xMaxYMax' | 'defer xMinYMin meet' | 'defer xMidYMin meet' | 'defer xMaxYMin meet' | 'defer xMinYMid meet' | 'defer xMidYMid meet' | 'defer xMaxYMid meet' | 'defer xMinYMax meet' | 'defer xMidYMax meet' | 'defer xMaxYMax meet' | 'defer xMinYMin slice' | 'defer xMidYMin slice' | 'defer xMaxYMin slice' | 'defer xMinYMid slice' | 'defer xMidYMid slice' | 'defer xMaxYMid slice' | 'defer xMinYMax slice' | 'defer xMidYMax slice' | 'defer xMaxYMax slice'
	width?: number | string
	x?: number | string
	y?: number | string
}

interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	viewBox?: string
}

interface GraphicsElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'> {}
interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

interface TransformableSVGAttributes {
	transform?: string
}

// Pick<PresentationSVGAttributes, 'clip-path' | 'color-profile' | 'image-rendering'>
interface PresentationSVGAttributes {
	'clip-path'?: string
	'color-profile'?: string
	'image-rendering'?: 'auto' | 'optimizeQuality' | 'optimizeSpeed' | 'inherit'
}
// Pick<PresentationSVGAttributes, 'overflow' | 'clip'>
interface PresentationSVGAttributes {
	clip?: string
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit'
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
interface ImageSVGAttributes<T> extends NewViewportSVGAttributes<T>, GraphicsElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path' | 'color-profile' | 'image-rendering'> {
	height?: number | string | false
	href?: string | false
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice' | 'defer none' | 'defer xMinYMin' | 'defer xMidYMin' | 'defer xMaxYMin' | 'defer xMinYMid' | 'defer xMidYMid' | 'defer xMaxYMid' | 'defer xMinYMax' | 'defer xMidYMax' | 'defer xMaxYMax' | 'defer xMinYMin meet' | 'defer xMidYMin meet' | 'defer xMaxYMin meet' | 'defer xMinYMid meet' | 'defer xMidYMid meet' | 'defer xMaxYMid meet' | 'defer xMinYMax meet' | 'defer xMidYMax meet' | 'defer xMaxYMax meet' | 'defer xMinYMin slice' | 'defer xMidYMin slice' | 'defer xMaxYMin slice' | 'defer xMinYMid slice' | 'defer xMidYMid slice' | 'defer xMaxYMid slice' | 'defer xMinYMax slice' | 'defer xMidYMax slice' | 'defer xMaxYMax slice' | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
}

interface NewViewportSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	viewBox?: string | false
}

interface GraphicsElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-rule' | 'mask' | 'pointer-events' | 'cursor' | 'opacity' | 'filter' | 'display' | 'visibility' | 'color-interpolation' | 'color-rendering'> {}
interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
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

// Pick<PresentationSVGAttributes, 'clip-path' | 'color-profile' | 'image-rendering'>
interface PresentationSVGAttributes {
	'clip-path'?: string | false
	'color-profile'?: string | false
	'image-rendering'?: 'auto' | 'optimizeQuality' | 'optimizeSpeed' | 'inherit' | false
}
// Pick<PresentationSVGAttributes, 'overflow' | 'clip'>
interface PresentationSVGAttributes {
	clip?: string | false
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | false
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
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGImageElementAttributes<Element> extends SVGAttributes<Element> {}
