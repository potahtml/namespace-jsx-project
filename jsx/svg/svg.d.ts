// Solid Main - https://www.solidjs.com/
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes {
	version?: string
	baseProfile?: string
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	contentScriptType?: string
	contentStyleType?: string
	xmlns?: string
	'xmlns:xlink'?: string
}

interface ContainerElementSVGAttributes<T> extends CoreSVGAttributes<T>, ShapeElementSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-path' | 'mask' | 'cursor' | 'opacity' | 'filter' | 'enable-background' | 'color-interpolation' | 'color-rendering'> {}
interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	viewBox?: string
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

interface FitToViewBoxSVGAttributes {
	viewBox?: string
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice'
}

interface ZoomAndPanSVGAttributes {
	zoomAndPan?: 'disable' | 'magnify'
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

interface ShapeElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}

// Solid Minor - https://www.solidjs.com/
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes {
	'xmlns:xlink'?: string
	contentScriptType?: string
	contentStyleType?: string
	height?: number | string
	width?: number | string
	x?: number | string
	xmlns?: string
	y?: number | string

	/** @deprecated */
	baseProfile?: string
	/** @deprecated */
	version?: string
}

interface ContainerElementSVGAttributes<T> extends CoreSVGAttributes<T>, ShapeElementSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-path' | 'mask' | 'cursor' | 'opacity' | 'filter' | 'enable-background' | 'color-interpolation' | 'color-rendering'> {}
interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	viewBox?: string
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

interface FitToViewBoxSVGAttributes {
	viewBox?: string
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice'
}

interface ZoomAndPanSVGAttributes {
	/**
	 * @deprecated
	 * @non-standard
	 */
	zoomAndPan?: 'disable' | 'magnify'
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
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

interface ShapeElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}

// Solid Next - https://www.solidjs.com/
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes, WindowEventMap<T>, ElementEventMap<T> {
	'xmlns:xlink'?: string | false
	contentScriptType?: string | false
	contentStyleType?: string | false
	height?: number | string | false
	width?: number | string | false
	x?: number | string | false
	xmlns?: string | false
	y?: number | string | false

	/** @deprecated */
	baseProfile?: string | false
	/** @deprecated */
	version?: string | false
}

interface ContainerElementSVGAttributes<T> extends CoreSVGAttributes<T>, ShapeElementSVGAttributes<T>, Pick<PresentationSVGAttributes, 'clip-path' | 'mask' | 'cursor' | 'opacity' | 'filter' | 'enable-background' | 'color-interpolation' | 'color-rendering'> {}
interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	viewBox?: string | false
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
	class?: string | ClassList | false
	style?: CSSProperties | string | false
}

interface FitToViewBoxSVGAttributes {
	viewBox?: string | false
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice' | false
}

interface ZoomAndPanSVGAttributes {
	/**
	 * @deprecated
	 * @non-standard
	 */
	zoomAndPan?: 'disable' | 'magnify' | false
}

interface PresentationSVGAttributes {
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit' | false
	'baseline-shift'?: number | string | false
	clip?: string | false
	'clip-path'?: string | false
	'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit' | false
	color?: string | false
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-profile'?: string | false
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit' | false
	cursor?: string | false
	direction?: 'ltr' | 'rtl' | 'inherit' | false
	display?: string | false
	'dominant-baseline'?: 'auto' | 'text-bottom' | 'alphabetic' | 'ideographic' | 'middle' | 'central' | 'mathematical' | 'hanging' | 'text-top' | 'inherit' | false
	'enable-background'?: string | false
	fill?: string | false
	'fill-opacity'?: number | string | 'inherit' | false
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit' | false
	filter?: string | false
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
	kerning?: string | false
	'letter-spacing'?: number | string | false
	'lighting-color'?: string | false
	'marker-end'?: string | false
	'marker-mid'?: string | false
	'marker-start'?: string | false
	mask?: string | false
	opacity?: number | string | 'inherit' | false
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | false
	pathLength?: string | number | false
	'pointer-events'?: 'bounding-box' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'color' | 'fill' | 'stroke' | 'all' | 'none' | 'inherit' | false
	'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit' | false
	'stop-color'?: string | false
	'stop-opacity'?: number | string | 'inherit' | false
	stroke?: string | false
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
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit' | false
	'word-spacing'?: number | string | false
	'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit' | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | false
	lang?: string | false
	tabindex?: number | string | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

interface ShapeElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGSVGElementAttributes {}
interface SVGSVGElementEvents<Element> extends SVGEvents<Element>, WindowEvents<Element> {}
