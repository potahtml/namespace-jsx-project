// Pota - https://github.com/potahtml/pota
interface HTMLFrameSetElementAttributes<Element> extends HTMLAttributes<Element>, EventHandlersWindow<Element> {
	/** @deprecated */
	cols?: number | string
	/** @deprecated */
	rows?: number | string
}

interface EventHandlersWindow<Element> {
	'on:afterprint'?: EventHandler<Event, Element>
	'on:beforeprint'?: EventHandler<Event, Element>
	'on:beforeunload'?: EventHandler<BeforeUnloadEvent, Element>
	'on:gamepadconnected'?: EventHandler<GamepadEvent, Element>
	'on:gamepaddisconnected'?: EventHandler<GamepadEvent, Element>
	'on:hashchange'?: EventHandler<HashChangeEvent, Element>
	'on:languagechange'?: EventHandler<Event, Element>
	'on:message'?: EventHandler<MessageEvent, Element>
	'on:messageerror'?: EventHandler<MessageEvent, Element>
	'on:offline'?: EventHandler<Event, Element>
	'on:online'?: EventHandler<Event, Element>
	'on:pagehide'?: EventHandler<PageTransitionEvent, Element>
	// TODO `PageRevealEvent` is currently undefined on TS
	'on:pagereveal'?: EventHandler<Event, Element>
	'on:pageshow'?: EventHandler<PageTransitionEvent, Element>
	// TODO `PageSwapEvent` is currently undefined on TS
	'on:pageswap'?: EventHandler<Event, Element>
	'on:popstate'?: EventHandler<PopStateEvent, Element>
	'on:rejectionhandled'?: EventHandler<PromiseRejectionEvent, Element>
	'on:storage'?: EventHandler<StorageEvent, Element>
	'on:unhandledrejection'?: EventHandler<PromiseRejectionEvent, Element>
	'on:unload'?: EventHandler<Event, Element>
}
