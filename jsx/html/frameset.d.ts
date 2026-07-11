// Pota - https://github.com/potahtml/pota
interface HTMLFrameSetElementAttributes<Element> extends HTMLAttributes<Element>, EventHandlersWindow<Element> {
	/** @deprecated */
	cols?: number | string
	/** @deprecated */
	rows?: number | string
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
	/** @deprecated */
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
