// Pota - https://github.com/potahtml/pota
interface HTMLFrameSetElementAttributes<Element> extends HTMLAttributes<Element>, WindowEventHandlers<Element> {
	/** @deprecated */
	cols?: number | string
	/** @deprecated */
	rows?: number | string
}

interface WindowEventHandlers<Element> {
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
	// TODO `PageRevealEvent` is currently undefined on TS
	'on:pagereveal'?: Events<Event, Element>
	'on:pageshow'?: Events<PageTransitionEvent, Element>
	// TODO `PageSwapEvent` is currently undefined on TS
	'on:pageswap'?: Events<Event, Element>
	'on:popstate'?: Events<PopStateEvent, Element>
	'on:rejectionhandled'?: Events<PromiseRejectionEvent, Element>
	'on:storage'?: Events<StorageEvent, Element>
	'on:unhandledrejection'?: Events<PromiseRejectionEvent, Element>
	'on:unload'?: Events<Event, Element>
}
