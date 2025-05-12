// Solid Main - https://www.solidjs.com/
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes, WindowEventMap<T>, ElementEventMap<T> {
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
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice'
	viewBox?: string
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

interface WindowEventMap<T> {
	onAfterPrint?: EventHandlerUnion<T, Event>
	onBeforePrint?: EventHandlerUnion<T, Event>
	onBeforeUnload?: EventHandlerUnion<T, BeforeUnloadEvent>
	onGamepadConnected?: EventHandlerUnion<T, GamepadEvent>
	onGamepadDisconnected?: EventHandlerUnion<T, GamepadEvent>
	onHashchange?: EventHandlerUnion<T, HashChangeEvent>
	onLanguageChange?: EventHandlerUnion<T, Event>
	onMessage?: EventHandlerUnion<T, MessageEvent>
	onMessageError?: EventHandlerUnion<T, MessageEvent>
	onOffline?: EventHandlerUnion<T, Event>
	onOnline?: EventHandlerUnion<T, Event>
	onPageHide?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageRevealEvent` is currently undefined on TS
	onPageReveal?: EventHandlerUnion<T, Event>
	onPageShow?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageSwapEvent` is currently undefined on TS
	onPageSwap?: EventHandlerUnion<T, Event>
	onPopstate?: EventHandlerUnion<T, PopStateEvent>
	onRejectionHandled?: EventHandlerUnion<T, PromiseRejectionEvent>
	onStorage?: EventHandlerUnion<T, StorageEvent>
	onUnhandledRejection?: EventHandlerUnion<T, PromiseRejectionEvent>
	onUnload?: EventHandlerUnion<T, Event>

	onafterprint?: EventHandlerUnion<T, Event>
	onbeforeprint?: EventHandlerUnion<T, Event>
	onbeforeunload?: EventHandlerUnion<T, BeforeUnloadEvent>
	ongamepadconnected?: EventHandlerUnion<T, GamepadEvent>
	ongamepaddisconnected?: EventHandlerUnion<T, GamepadEvent>
	onhashchange?: EventHandlerUnion<T, HashChangeEvent>
	onlanguagechange?: EventHandlerUnion<T, Event>
	onmessage?: EventHandlerUnion<T, MessageEvent>
	onmessageerror?: EventHandlerUnion<T, MessageEvent>
	onoffline?: EventHandlerUnion<T, Event>
	ononline?: EventHandlerUnion<T, Event>
	onpagehide?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageRevealEvent` is currently undefined in TS
	onpagereveal?: EventHandlerUnion<T, Event>
	onpageshow?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageSwapEvent` is currently undefined in TS
	onpageswap?: EventHandlerUnion<T, Event>
	onpopstate?: EventHandlerUnion<T, PopStateEvent>
	onrejectionhandled?: EventHandlerUnion<T, PromiseRejectionEvent>
	onstorage?: EventHandlerUnion<T, StorageEvent>
	onunhandledrejection?: EventHandlerUnion<T, PromiseRejectionEvent>
	onunload?: EventHandlerUnion<T, Event>

	'on:afterprint'?: EventHandlerWithOptionsUnion<T, Event>
	'on:beforeprint'?: EventHandlerWithOptionsUnion<T, Event>
	'on:beforeunload'?: EventHandlerWithOptionsUnion<T, BeforeUnloadEvent>
	'on:gamepadconnected'?: EventHandlerWithOptionsUnion<T, GamepadEvent>
	'on:gamepaddisconnected'?: EventHandlerWithOptionsUnion<T, GamepadEvent>
	'on:hashchange'?: EventHandlerWithOptionsUnion<T, HashChangeEvent>
	'on:languagechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:message'?: EventHandlerWithOptionsUnion<T, MessageEvent>
	'on:messageerror'?: EventHandlerWithOptionsUnion<T, MessageEvent>
	'on:offline'?: EventHandlerWithOptionsUnion<T, Event>
	'on:online'?: EventHandlerWithOptionsUnion<T, Event>
	'on:pagehide'?: EventHandlerWithOptionsUnion<T, PageTransitionEvent>
	// TODO `PageRevealEvent` is currently undefined in TS
	'on:pagereveal'?: EventHandlerWithOptionsUnion<T, Event>
	'on:pageshow'?: EventHandlerWithOptionsUnion<T, PageTransitionEvent>
	// TODO `PageSwapEvent` is currently undefined in TS
	'on:pageswap'?: EventHandlerWithOptionsUnion<T, Event>
	'on:popstate'?: EventHandlerWithOptionsUnion<T, PopStateEvent>
	'on:rejectionhandled'?: EventHandlerWithOptionsUnion<T, PromiseRejectionEvent>
	'on:storage'?: EventHandlerWithOptionsUnion<T, StorageEvent>
	'on:unhandledrejection'?: EventHandlerWithOptionsUnion<T, PromiseRejectionEvent>
	'on:unload'?: EventHandlerWithOptionsUnion<T, Event>
}

interface ElementEventMap<T> {
	onFullscreenChange?: EventHandlerUnion<T, Event>
	onFullscreenError?: EventHandlerUnion<T, Event>

	'on:fullscreenchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:fullscreenerror'?: EventHandlerWithOptionsUnion<T, Event>

	onfullscreenchange?: EventHandlerUnion<T, Event>
	onfullscreenerror?: EventHandlerUnion<T, Event>
}

interface ShapeElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}

// Solid Minor - https://www.solidjs.com/
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes, WindowEventMap<T>, ElementEventMap<T> {
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
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice'
	viewBox?: string
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
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice' | false
	viewBox?: string | false
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

interface ShapeElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color' | 'fill' | 'fill-rule' | 'fill-opacity' | 'stroke' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin' | 'stroke-miterlimit' | 'stroke-dasharray' | 'stroke-dashoffset' | 'stroke-opacity' | 'shape-rendering' | 'pathLength'> {}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGSVGElementAttributes {}
interface SVGSVGElementEvents<Element> extends SVGEvents<Element>, WindowEvents<Element> {}
interface WindowEvents<Element> {
	'on:afterprint'?: Events<Event, Element>
	'on:beforeprint'?: Events<Event, Element>
	'on:beforeunload'?: Events<BeforeUnloadEvent, Element>
	'on:gamepadconnected'?: Events<GamepadEvent, Element>
	'on:gamepaddisconnected'?: Events<GamepadEvent, Element>
	'on:hashchange'?: Events<HashChangeEvent, Element>
	'on:languagechange'?: Events<Event, Element>
	'on:message'?: Events<MessageEvent, Element>
	'on:messageerror'?: Events<MessageEvent, Element>
	'on:offline'?: Events<Event, Element>
	'on:online'?: Events<Event, Element>
	'on:pagehide'?: Events<PageTransitionEvent, Element>
	'on:pagereveal'?: Events<Event, Element>
	'on:pageshow'?: Events<PageTransitionEvent, Element>
	'on:pageswap'?: Events<Event, Element>
	'on:popstate'?: Events<PopStateEvent, Element>
	'on:rejectionhandled'?: Events<PromiseRejectionEvent, Element>
	'on:storage'?: Events<StorageEvent, Element>
	'on:unhandledrejection'?: Events<PromiseRejectionEvent, Element>
	'on:unload'?: Events<Event, Element>
}
