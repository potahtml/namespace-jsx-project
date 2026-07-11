// Solid Main - https://www.solidjs.com/
interface BodyHTMLAttributes<T> extends HTMLAttributes<T>, WindowEventMap<T> {}

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

	onPageReveal?: EventHandlerUnion<T, Event>
	onPageShow?: EventHandlerUnion<T, PageTransitionEvent>

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

	onpagereveal?: EventHandlerUnion<T, Event>
	onpageshow?: EventHandlerUnion<T, PageTransitionEvent>

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

	'on:pagereveal'?: EventHandlerWithOptionsUnion<T, Event>
	'on:pageshow'?: EventHandlerWithOptionsUnion<T, PageTransitionEvent>

	'on:pageswap'?: EventHandlerWithOptionsUnion<T, Event>
	'on:popstate'?: EventHandlerWithOptionsUnion<T, PopStateEvent>
	'on:rejectionhandled'?: EventHandlerWithOptionsUnion<T, PromiseRejectionEvent>
	'on:storage'?: EventHandlerWithOptionsUnion<T, StorageEvent>
	'on:unhandledrejection'?: EventHandlerWithOptionsUnion<T, PromiseRejectionEvent>
	'on:unload'?: EventHandlerWithOptionsUnion<T, Event>
}

// Solid Next - https://www.solidjs.com/
interface BodyHTMLAttributes<T> extends HTMLAttributes<T>, EventHandlersWindow<T> {}

interface EventHandlersWindow<T> {
	onAfterPrint?: EventHandlerUnion<T, Event>
	onBeforePrint?: EventHandlerUnion<T, Event>
	onBeforeUnload?: EventHandlerUnion<T, BeforeUnloadEvent>
	onDeviceMotion?: EventHandlerUnion<T, DeviceMotionEvent>
	onDeviceOrientation?: EventHandlerUnion<T, DeviceOrientationEvent>
	onDeviceOrientationAbsolute?: EventHandlerUnion<T, DeviceOrientationEvent>
	onGamepadConnected?: EventHandlerUnion<T, GamepadEvent>
	onGamepadDisconnected?: EventHandlerUnion<T, GamepadEvent>
	onHashchange?: EventHandlerUnion<T, HashChangeEvent>
	onLanguageChange?: EventHandlerUnion<T, Event>
	onMessage?: EventHandlerUnion<T, MessageEvent>
	onMessageError?: EventHandlerUnion<T, MessageEvent>
	onOffline?: EventHandlerUnion<T, Event>
	onOnline?: EventHandlerUnion<T, Event>

	onOrientationChange?: EventHandlerUnion<T, Event>
	onPageHide?: EventHandlerUnion<T, PageTransitionEvent>
	onPageReveal?: EventHandlerUnion<T, PageRevealEvent>
	onPageShow?: EventHandlerUnion<T, PageTransitionEvent>
	onPageSwap?: EventHandlerUnion<T, PageSwapEvent>
	onPopstate?: EventHandlerUnion<T, PopStateEvent>
	onRejectionHandled?: EventHandlerUnion<T, PromiseRejectionEvent>
	onStorage?: EventHandlerUnion<T, StorageEvent>
	onUnhandledRejection?: EventHandlerUnion<T, PromiseRejectionEvent>
	onUnload?: EventHandlerUnion<T, Event>
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLBodyElementAttributes<Element> extends HTMLAttributes<Element>, EventHandlersWindow<Element> {
	alink?: string

	background?: string

	bgcolor?: string

	bottommargin?: number | string

	leftmargin?: number | string

	link?: string

	rightmargin?: number | string

	text?: string

	topmargin?: number | string

	vlink?: string
}

interface EventHandlersWindow<Element> {
	'on:afterprint'?: EventHandlers<Event, Element>
	'on:beforeprint'?: EventHandlers<Event, Element>
	'on:beforeunload'?: EventHandlers<BeforeUnloadEvent, Element>
	'on:clipboardchange'?: EventHandlers<Event, Element>
	'on:devicemotion'?: EventHandlers<DeviceMotionEvent, Element>
	'on:deviceorientation'?: EventHandlers<DeviceOrientationEvent, Element>
	'on:deviceorientationabsolute'?: EventHandlers<DeviceOrientationEvent, Element>
	'on:DOMContentLoaded'?: EventHandlers<Event, Element>
	'on:gamepadconnected'?: EventHandlers<GamepadEvent, Element>
	'on:gamepaddisconnected'?: EventHandlers<GamepadEvent, Element>
	'on:hashchange'?: EventHandlers<HashChangeEvent, Element>
	'on:languagechange'?: EventHandlers<Event, Element>
	'on:message'?: EventHandlers<MessageEvent, Element>
	'on:messageerror'?: EventHandlers<MessageEvent, Element>
	'on:offline'?: EventHandlers<Event, Element>
	'on:online'?: EventHandlers<Event, Element>

	'on:orientationchange'?: EventHandlers<Event, Element>
	'on:pagehide'?: EventHandlers<PageTransitionEvent, Element>
	'on:pagereveal'?: EventHandlers<PageRevealEvent, Element>
	'on:pageshow'?: EventHandlers<PageTransitionEvent, Element>
	'on:pageswap'?: EventHandlers<PageSwapEvent, Element>
	'on:pointerlockchange'?: EventHandlers<Event, Element>
	'on:pointerlockerror'?: EventHandlers<Event, Element>
	'on:popstate'?: EventHandlers<PopStateEvent, Element>
	'on:readystatechange'?: EventHandlers<Event, Element>
	'on:rejectionhandled'?: EventHandlers<PromiseRejectionEvent, Element>
	'on:storage'?: EventHandlers<StorageEvent, Element>
	'on:unhandledrejection'?: EventHandlers<PromiseRejectionEvent, Element>
	'on:unload'?: EventHandlers<Event, Element>
	'on:visibilitychange'?: EventHandlers<Event, Element>
}
