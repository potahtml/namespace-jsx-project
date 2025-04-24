// Solid Main - https://www.solidjs.com/
interface ElementEventMap<T> {
	onFullscreenChange?: EventHandlerUnion<T, Event>
	onFullscreenError?: EventHandlerUnion<T, Event>

	'on:fullscreenchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:fullscreenerror'?: EventHandlerWithOptionsUnion<T, Event>

	onfullscreenchange?: EventHandlerUnion<T, Event>
	onfullscreenerror?: EventHandlerUnion<T, Event>
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
interface CustomEventHandlersCamelCase<T> {
	onAbort?: EventHandlerUnion<T, UIEvent>
	onAnimationCancel?: EventHandlerUnion<T, AnimationEvent>
	onAnimationEnd?: EventHandlerUnion<T, AnimationEvent>
	onAnimationIteration?: EventHandlerUnion<T, AnimationEvent>
	onAnimationStart?: EventHandlerUnion<T, AnimationEvent>
	onAuxClick?: EventHandlerUnion<T, PointerEvent>
	onBeforeInput?: InputEventHandlerUnion<T, InputEvent>
	onBeforeToggle?: EventHandlerUnion<T, ToggleEvent>
	onBlur?: FocusEventHandlerUnion<T, FocusEvent>
	onCancel?: EventHandlerUnion<T, Event>
	onCanPlay?: EventHandlerUnion<T, Event>
	onCanPlayThrough?: EventHandlerUnion<T, Event>
	onChange?: ChangeEventHandlerUnion<T, Event>
	onClick?: EventHandlerUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	onCommand?: EventHandlerUnion<T, Event>
	onCompositionEnd?: EventHandlerUnion<T, CompositionEvent>
	onCompositionStart?: EventHandlerUnion<T, CompositionEvent>
	onCompositionUpdate?: EventHandlerUnion<T, CompositionEvent>
	onContextMenu?: EventHandlerUnion<T, PointerEvent>
	onCopy?: EventHandlerUnion<T, ClipboardEvent>
	onCueChange?: EventHandlerUnion<T, Event>
	onCut?: EventHandlerUnion<T, ClipboardEvent>
	onDblClick?: EventHandlerUnion<T, MouseEvent>
	onDrag?: EventHandlerUnion<T, DragEvent>
	onDragEnd?: EventHandlerUnion<T, DragEvent>
	onDragEnter?: EventHandlerUnion<T, DragEvent>
	onDragExit?: EventHandlerUnion<T, DragEvent>
	onDragLeave?: EventHandlerUnion<T, DragEvent>
	onDragOver?: EventHandlerUnion<T, DragEvent>
	onDragStart?: EventHandlerUnion<T, DragEvent>
	onDrop?: EventHandlerUnion<T, DragEvent>
	onDurationChange?: EventHandlerUnion<T, Event>
	onEmptied?: EventHandlerUnion<T, Event>
	onEnded?: EventHandlerUnion<T, Event>
	onError?: EventHandlerUnion<T, ErrorEvent>
	onFocus?: FocusEventHandlerUnion<T, FocusEvent>
	onFocusIn?: FocusEventHandlerUnion<T, FocusEvent>
	onFocusOut?: FocusEventHandlerUnion<T, FocusEvent>
	onGotPointerCapture?: EventHandlerUnion<T, PointerEvent>
	onInput?: InputEventHandlerUnion<T, InputEvent>
	onInvalid?: EventHandlerUnion<T, Event>
	onKeyDown?: EventHandlerUnion<T, KeyboardEvent>
	onKeyPress?: EventHandlerUnion<T, KeyboardEvent>
	onKeyUp?: EventHandlerUnion<T, KeyboardEvent>
	onLoad?: EventHandlerUnion<T, Event>
	onLoadedData?: EventHandlerUnion<T, Event>
	onLoadedMetadata?: EventHandlerUnion<T, Event>
	onLoadStart?: EventHandlerUnion<T, Event>
	onLostPointerCapture?: EventHandlerUnion<T, PointerEvent>
	onMouseDown?: EventHandlerUnion<T, MouseEvent>
	onMouseEnter?: EventHandlerUnion<T, MouseEvent>
	onMouseLeave?: EventHandlerUnion<T, MouseEvent>
	onMouseMove?: EventHandlerUnion<T, MouseEvent>
	onMouseOut?: EventHandlerUnion<T, MouseEvent>
	onMouseOver?: EventHandlerUnion<T, MouseEvent>
	onMouseUp?: EventHandlerUnion<T, MouseEvent>
	onPaste?: EventHandlerUnion<T, ClipboardEvent>
	onPause?: EventHandlerUnion<T, Event>
	onPlay?: EventHandlerUnion<T, Event>
	onPlaying?: EventHandlerUnion<T, Event>
	onPointerCancel?: EventHandlerUnion<T, PointerEvent>
	onPointerDown?: EventHandlerUnion<T, PointerEvent>
	onPointerEnter?: EventHandlerUnion<T, PointerEvent>
	onPointerLeave?: EventHandlerUnion<T, PointerEvent>
	onPointerMove?: EventHandlerUnion<T, PointerEvent>
	onPointerOut?: EventHandlerUnion<T, PointerEvent>
	onPointerOver?: EventHandlerUnion<T, PointerEvent>
	onPointerUp?: EventHandlerUnion<T, PointerEvent>
	onProgress?: EventHandlerUnion<T, ProgressEvent>
	onRateChange?: EventHandlerUnion<T, Event>
	onReset?: EventHandlerUnion<T, Event>
	onResize?: EventHandlerUnion<T, UIEvent>
	onScroll?: EventHandlerUnion<T, Event>
	onScrollEnd?: EventHandlerUnion<T, Event>
	onSecurityPolicyViolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	onSeeked?: EventHandlerUnion<T, Event>
	onSeeking?: EventHandlerUnion<T, Event>
	onSelect?: EventHandlerUnion<T, Event>
	onSelectionChange?: EventHandlerUnion<T, Event>
	onSlotChange?: EventHandlerUnion<T, Event>
	onStalled?: EventHandlerUnion<T, Event>
	onSubmit?: EventHandlerUnion<T, SubmitEvent>
	onSuspend?: EventHandlerUnion<T, Event>
	onTimeUpdate?: EventHandlerUnion<T, Event>
	onToggle?: EventHandlerUnion<T, ToggleEvent>
	onTouchCancel?: EventHandlerUnion<T, TouchEvent>
	onTouchEnd?: EventHandlerUnion<T, TouchEvent>
	onTouchMove?: EventHandlerUnion<T, TouchEvent>
	onTouchStart?: EventHandlerUnion<T, TouchEvent>
	onTransitionCancel?: EventHandlerUnion<T, TransitionEvent>
	onTransitionEnd?: EventHandlerUnion<T, TransitionEvent>
	onTransitionRun?: EventHandlerUnion<T, TransitionEvent>
	onTransitionStart?: EventHandlerUnion<T, TransitionEvent>
	onVolumeChange?: EventHandlerUnion<T, Event>
	onWaiting?: EventHandlerUnion<T, Event>
	onWheel?: EventHandlerUnion<T, WheelEvent>
}
interface CustomEventHandlersLowerCase<T> {
	onabort?: EventHandlerUnion<T, UIEvent>
	onanimationcancel?: EventHandlerUnion<T, AnimationEvent>
	onanimationend?: EventHandlerUnion<T, AnimationEvent>
	onanimationiteration?: EventHandlerUnion<T, AnimationEvent>
	onanimationstart?: EventHandlerUnion<T, AnimationEvent>
	onauxclick?: EventHandlerUnion<T, PointerEvent>
	onbeforeinput?: InputEventHandlerUnion<T, InputEvent>
	onbeforetoggle?: EventHandlerUnion<T, ToggleEvent>
	onblur?: FocusEventHandlerUnion<T, FocusEvent>
	oncancel?: EventHandlerUnion<T, Event>
	oncanplay?: EventHandlerUnion<T, Event>
	oncanplaythrough?: EventHandlerUnion<T, Event>
	onchange?: ChangeEventHandlerUnion<T, Event>
	onclick?: EventHandlerUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	oncommand?: EventHandlerUnion<T, Event>
	oncompositionend?: EventHandlerUnion<T, CompositionEvent>
	oncompositionstart?: EventHandlerUnion<T, CompositionEvent>
	oncompositionupdate?: EventHandlerUnion<T, CompositionEvent>
	oncontextmenu?: EventHandlerUnion<T, PointerEvent>
	oncopy?: EventHandlerUnion<T, ClipboardEvent>
	oncuechange?: EventHandlerUnion<T, Event>
	oncut?: EventHandlerUnion<T, ClipboardEvent>
	ondblclick?: EventHandlerUnion<T, MouseEvent>
	ondrag?: EventHandlerUnion<T, DragEvent>
	ondragend?: EventHandlerUnion<T, DragEvent>
	ondragenter?: EventHandlerUnion<T, DragEvent>
	ondragexit?: EventHandlerUnion<T, DragEvent>
	ondragleave?: EventHandlerUnion<T, DragEvent>
	ondragover?: EventHandlerUnion<T, DragEvent>
	ondragstart?: EventHandlerUnion<T, DragEvent>
	ondrop?: EventHandlerUnion<T, DragEvent>
	ondurationchange?: EventHandlerUnion<T, Event>
	onemptied?: EventHandlerUnion<T, Event>
	onended?: EventHandlerUnion<T, Event>
	onerror?: EventHandlerUnion<T, ErrorEvent>
	onfocus?: FocusEventHandlerUnion<T, FocusEvent>
	onfocusin?: FocusEventHandlerUnion<T, FocusEvent>
	onfocusout?: FocusEventHandlerUnion<T, FocusEvent>
	ongotpointercapture?: EventHandlerUnion<T, PointerEvent>
	oninput?: InputEventHandlerUnion<T, InputEvent>
	oninvalid?: EventHandlerUnion<T, Event>
	onkeydown?: EventHandlerUnion<T, KeyboardEvent>
	onkeypress?: EventHandlerUnion<T, KeyboardEvent>
	onkeyup?: EventHandlerUnion<T, KeyboardEvent>
	onload?: EventHandlerUnion<T, Event>
	onloadeddata?: EventHandlerUnion<T, Event>
	onloadedmetadata?: EventHandlerUnion<T, Event>
	onloadstart?: EventHandlerUnion<T, Event>
	onlostpointercapture?: EventHandlerUnion<T, PointerEvent>
	onmousedown?: EventHandlerUnion<T, MouseEvent>
	onmouseenter?: EventHandlerUnion<T, MouseEvent>
	onmouseleave?: EventHandlerUnion<T, MouseEvent>
	onmousemove?: EventHandlerUnion<T, MouseEvent>
	onmouseout?: EventHandlerUnion<T, MouseEvent>
	onmouseover?: EventHandlerUnion<T, MouseEvent>
	onmouseup?: EventHandlerUnion<T, MouseEvent>
	onpaste?: EventHandlerUnion<T, ClipboardEvent>
	onpause?: EventHandlerUnion<T, Event>
	onplay?: EventHandlerUnion<T, Event>
	onplaying?: EventHandlerUnion<T, Event>
	onpointercancel?: EventHandlerUnion<T, PointerEvent>
	onpointerdown?: EventHandlerUnion<T, PointerEvent>
	onpointerenter?: EventHandlerUnion<T, PointerEvent>
	onpointerleave?: EventHandlerUnion<T, PointerEvent>
	onpointermove?: EventHandlerUnion<T, PointerEvent>
	onpointerout?: EventHandlerUnion<T, PointerEvent>
	onpointerover?: EventHandlerUnion<T, PointerEvent>
	onpointerup?: EventHandlerUnion<T, PointerEvent>
	onprogress?: EventHandlerUnion<T, ProgressEvent>
	onratechange?: EventHandlerUnion<T, Event>
	onreset?: EventHandlerUnion<T, Event>
	onresize?: EventHandlerUnion<T, UIEvent>
	onscroll?: EventHandlerUnion<T, Event>
	onscrollend?: EventHandlerUnion<T, Event>
	onsecuritypolicyviolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	onseeked?: EventHandlerUnion<T, Event>
	onseeking?: EventHandlerUnion<T, Event>
	onselect?: EventHandlerUnion<T, Event>
	onselectionchange?: EventHandlerUnion<T, Event>
	onslotchange?: EventHandlerUnion<T, Event>
	onstalled?: EventHandlerUnion<T, Event>
	onsubmit?: EventHandlerUnion<T, SubmitEvent>
	onsuspend?: EventHandlerUnion<T, Event>
	ontimeupdate?: EventHandlerUnion<T, Event>
	ontoggle?: EventHandlerUnion<T, ToggleEvent>
	ontouchcancel?: EventHandlerUnion<T, TouchEvent>
	ontouchend?: EventHandlerUnion<T, TouchEvent>
	ontouchmove?: EventHandlerUnion<T, TouchEvent>
	ontouchstart?: EventHandlerUnion<T, TouchEvent>
	ontransitioncancel?: EventHandlerUnion<T, TransitionEvent>
	ontransitionend?: EventHandlerUnion<T, TransitionEvent>
	ontransitionrun?: EventHandlerUnion<T, TransitionEvent>
	ontransitionstart?: EventHandlerUnion<T, TransitionEvent>
	onvolumechange?: EventHandlerUnion<T, Event>
	onwaiting?: EventHandlerUnion<T, Event>
	onwheel?: EventHandlerUnion<T, WheelEvent>
}
interface CustomEventHandlersNamespaced<T> {
	'on:abort'?: EventHandlerWithOptionsUnion<T, UIEvent>
	'on:animationcancel'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationend'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationiteration'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationstart'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:auxclick'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:beforeinput'?: EventHandlerWithOptionsUnion<T, InputEvent, InputEventHandler<T, InputEvent>>
	'on:beforetoggle'?: EventHandlerWithOptionsUnion<T, ToggleEvent>
	'on:blur'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:cancel'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplay'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplaythrough'?: EventHandlerWithOptionsUnion<T, Event>
	'on:change'?: EventHandlerWithOptionsUnion<T, Event, ChangeEventHandler<T, Event>>
	'on:click'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	'on:command'?: EventHandlerWithOptionsUnion<T, Event>
	'on:compositionend'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionstart'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionupdate'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:contextmenu'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:copy'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:cuechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:cut'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:dblclick'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:drag'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragend'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragenter'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragexit'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragleave'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragover'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragstart'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:drop'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:durationchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:emptied'?: EventHandlerWithOptionsUnion<T, Event>
	'on:ended'?: EventHandlerWithOptionsUnion<T, Event>
	'on:error'?: EventHandlerWithOptionsUnion<T, ErrorEvent>
	'on:focus'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:focusin'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:focusout'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:gotpointercapture'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:input'?: EventHandlerWithOptionsUnion<T, InputEvent, InputEventHandler<T, InputEvent>>
	'on:invalid'?: EventHandlerWithOptionsUnion<T, Event>
	'on:keydown'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:keypress'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:keyup'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:load'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadeddata'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadedmetadata'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadstart'?: EventHandlerWithOptionsUnion<T, Event>
	'on:lostpointercapture'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:mousedown'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseenter'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseleave'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mousemove'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseout'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseover'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseup'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:paste'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:pause'?: EventHandlerWithOptionsUnion<T, Event>
	'on:play'?: EventHandlerWithOptionsUnion<T, Event>
	'on:playing'?: EventHandlerWithOptionsUnion<T, Event>
	'on:pointercancel'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerdown'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerenter'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerleave'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointermove'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerout'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerover'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerup'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:progress'?: EventHandlerWithOptionsUnion<T, ProgressEvent>
	'on:ratechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:reset'?: EventHandlerWithOptionsUnion<T, Event>
	'on:resize'?: EventHandlerWithOptionsUnion<T, UIEvent>
	'on:scroll'?: EventHandlerWithOptionsUnion<T, Event>
	'on:scrollend'?: EventHandlerWithOptionsUnion<T, Event>
	'on:securitypolicyviolation'?: EventHandlerWithOptionsUnion<T, SecurityPolicyViolationEvent>
	'on:seeked'?: EventHandlerWithOptionsUnion<T, Event>
	'on:seeking'?: EventHandlerWithOptionsUnion<T, Event>
	'on:select'?: EventHandlerWithOptionsUnion<T, Event>
	'on:selectionchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:slotchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:stalled'?: EventHandlerWithOptionsUnion<T, Event>
	'on:submit'?: EventHandlerWithOptionsUnion<T, SubmitEvent>
	'on:suspend'?: EventHandlerWithOptionsUnion<T, Event>
	'on:timeupdate'?: EventHandlerWithOptionsUnion<T, Event>
	'on:toggle'?: EventHandlerWithOptionsUnion<T, ToggleEvent>
	'on:touchcancel'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchend'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchmove'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchstart'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:transitioncancel'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionend'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionrun'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionstart'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:volumechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:waiting'?: EventHandlerWithOptionsUnion<T, Event>
	'on:wheel'?: EventHandlerWithOptionsUnion<T, WheelEvent>
}
interface DOMAttributes<T> extends CustomAttributes<T>, DirectiveAttributes, DirectiveFunctionAttributes<T>, PropAttributes, AttrAttributes, BoolAttributes, OnAttributes<T>, OnCaptureAttributes<T>, CustomEventHandlersCamelCase<T>, CustomEventHandlersLowerCase<T>, CustomEventHandlersNamespaced<T> {
	children?: Node | ArrayElement | (string & {}) | number | boolean | null
	innerHTML?: string
	innerText?: string | number
	textContent?: string | number
}

// Solid Minor - https://www.solidjs.com/
interface ElementEventMap<T> {
	onFullscreenChange?: EventHandlerUnion<T, Event>
	onFullscreenError?: EventHandlerUnion<T, Event>

	'on:fullscreenchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:fullscreenerror'?: EventHandlerWithOptionsUnion<T, Event>

	/** @deprecated Use camelCase event handlers */
	onfullscreenchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onfullscreenerror?: EventHandlerUnion<T, Event>
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

	/** @deprecated Use camelCase event handlers */
	onafterprint?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onbeforeprint?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onbeforeunload?: EventHandlerUnion<T, BeforeUnloadEvent>
	/** @deprecated Use camelCase event handlers */
	ongamepadconnected?: EventHandlerUnion<T, GamepadEvent>
	/** @deprecated Use camelCase event handlers */
	ongamepaddisconnected?: EventHandlerUnion<T, GamepadEvent>
	/** @deprecated Use camelCase event handlers */
	onhashchange?: EventHandlerUnion<T, HashChangeEvent>
	/** @deprecated Use camelCase event handlers */
	onlanguagechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onmessage?: EventHandlerUnion<T, MessageEvent>
	/** @deprecated Use camelCase event handlers */
	onmessageerror?: EventHandlerUnion<T, MessageEvent>
	/** @deprecated Use camelCase event handlers */
	onoffline?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	ononline?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpagehide?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageRevealEvent` is currently undefined in TS
	/** @deprecated Use camelCase event handlers */
	onpagereveal?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpageshow?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageSwapEvent` is currently undefined in TS
	/** @deprecated Use camelCase event handlers */
	onpageswap?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpopstate?: EventHandlerUnion<T, PopStateEvent>
	/** @deprecated Use camelCase event handlers */
	onrejectionhandled?: EventHandlerUnion<T, PromiseRejectionEvent>
	/** @deprecated Use camelCase event handlers */
	onstorage?: EventHandlerUnion<T, StorageEvent>
	/** @deprecated Use camelCase event handlers */
	onunhandledrejection?: EventHandlerUnion<T, PromiseRejectionEvent>
	/** @deprecated Use camelCase event handlers */
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
interface CustomEventHandlersCamelCase<T> {
	onAbort?: EventHandlerUnion<T, UIEvent>
	onAnimationCancel?: EventHandlerUnion<T, AnimationEvent>
	onAnimationEnd?: EventHandlerUnion<T, AnimationEvent>
	onAnimationIteration?: EventHandlerUnion<T, AnimationEvent>
	onAnimationStart?: EventHandlerUnion<T, AnimationEvent>
	onAuxClick?: EventHandlerUnion<T, PointerEvent>
	onBeforeInput?: InputEventHandlerUnion<T, InputEvent>
	onBeforeToggle?: EventHandlerUnion<T, ToggleEvent>
	onBlur?: FocusEventHandlerUnion<T, FocusEvent>
	onCancel?: EventHandlerUnion<T, Event>
	onCanPlay?: EventHandlerUnion<T, Event>
	onCanPlayThrough?: EventHandlerUnion<T, Event>
	onChange?: ChangeEventHandlerUnion<T, Event>
	onClick?: EventHandlerUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	onCommand?: EventHandlerUnion<T, Event>
	onCompositionEnd?: EventHandlerUnion<T, CompositionEvent>
	onCompositionStart?: EventHandlerUnion<T, CompositionEvent>
	onCompositionUpdate?: EventHandlerUnion<T, CompositionEvent>
	onContextMenu?: EventHandlerUnion<T, PointerEvent>
	onCopy?: EventHandlerUnion<T, ClipboardEvent>
	onCueChange?: EventHandlerUnion<T, Event>
	onCut?: EventHandlerUnion<T, ClipboardEvent>
	onDblClick?: EventHandlerUnion<T, MouseEvent>
	onDrag?: EventHandlerUnion<T, DragEvent>
	onDragEnd?: EventHandlerUnion<T, DragEvent>
	onDragEnter?: EventHandlerUnion<T, DragEvent>
	onDragExit?: EventHandlerUnion<T, DragEvent>
	onDragLeave?: EventHandlerUnion<T, DragEvent>
	onDragOver?: EventHandlerUnion<T, DragEvent>
	onDragStart?: EventHandlerUnion<T, DragEvent>
	onDrop?: EventHandlerUnion<T, DragEvent>
	onDurationChange?: EventHandlerUnion<T, Event>
	onEmptied?: EventHandlerUnion<T, Event>
	onEnded?: EventHandlerUnion<T, Event>
	onError?: EventHandlerUnion<T, ErrorEvent>
	onFocus?: FocusEventHandlerUnion<T, FocusEvent>
	onFocusIn?: FocusEventHandlerUnion<T, FocusEvent>
	onFocusOut?: FocusEventHandlerUnion<T, FocusEvent>
	onGotPointerCapture?: EventHandlerUnion<T, PointerEvent>
	onInput?: InputEventHandlerUnion<T, InputEvent>
	onInvalid?: EventHandlerUnion<T, Event>
	onKeyDown?: EventHandlerUnion<T, KeyboardEvent>
	onKeyPress?: EventHandlerUnion<T, KeyboardEvent>
	onKeyUp?: EventHandlerUnion<T, KeyboardEvent>
	onLoad?: EventHandlerUnion<T, Event>
	onLoadedData?: EventHandlerUnion<T, Event>
	onLoadedMetadata?: EventHandlerUnion<T, Event>
	onLoadStart?: EventHandlerUnion<T, Event>
	onLostPointerCapture?: EventHandlerUnion<T, PointerEvent>
	onMouseDown?: EventHandlerUnion<T, MouseEvent>
	onMouseEnter?: EventHandlerUnion<T, MouseEvent>
	onMouseLeave?: EventHandlerUnion<T, MouseEvent>
	onMouseMove?: EventHandlerUnion<T, MouseEvent>
	onMouseOut?: EventHandlerUnion<T, MouseEvent>
	onMouseOver?: EventHandlerUnion<T, MouseEvent>
	onMouseUp?: EventHandlerUnion<T, MouseEvent>
	onPaste?: EventHandlerUnion<T, ClipboardEvent>
	onPause?: EventHandlerUnion<T, Event>
	onPlay?: EventHandlerUnion<T, Event>
	onPlaying?: EventHandlerUnion<T, Event>
	onPointerCancel?: EventHandlerUnion<T, PointerEvent>
	onPointerDown?: EventHandlerUnion<T, PointerEvent>
	onPointerEnter?: EventHandlerUnion<T, PointerEvent>
	onPointerLeave?: EventHandlerUnion<T, PointerEvent>
	onPointerMove?: EventHandlerUnion<T, PointerEvent>
	onPointerOut?: EventHandlerUnion<T, PointerEvent>
	onPointerOver?: EventHandlerUnion<T, PointerEvent>
	onPointerUp?: EventHandlerUnion<T, PointerEvent>
	onProgress?: EventHandlerUnion<T, ProgressEvent>
	onRateChange?: EventHandlerUnion<T, Event>
	onReset?: EventHandlerUnion<T, Event>
	onResize?: EventHandlerUnion<T, UIEvent>
	onScroll?: EventHandlerUnion<T, Event>
	onScrollEnd?: EventHandlerUnion<T, Event>
	onSecurityPolicyViolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	onSeeked?: EventHandlerUnion<T, Event>
	onSeeking?: EventHandlerUnion<T, Event>
	onSelect?: EventHandlerUnion<T, Event>
	onSelectionChange?: EventHandlerUnion<T, Event>
	onSlotChange?: EventHandlerUnion<T, Event>
	onStalled?: EventHandlerUnion<T, Event>
	onSubmit?: EventHandlerUnion<T, SubmitEvent>
	onSuspend?: EventHandlerUnion<T, Event>
	onTimeUpdate?: EventHandlerUnion<T, Event>
	onToggle?: EventHandlerUnion<T, ToggleEvent>
	onTouchCancel?: EventHandlerUnion<T, TouchEvent>
	onTouchEnd?: EventHandlerUnion<T, TouchEvent>
	onTouchMove?: EventHandlerUnion<T, TouchEvent>
	onTouchStart?: EventHandlerUnion<T, TouchEvent>
	onTransitionCancel?: EventHandlerUnion<T, TransitionEvent>
	onTransitionEnd?: EventHandlerUnion<T, TransitionEvent>
	onTransitionRun?: EventHandlerUnion<T, TransitionEvent>
	onTransitionStart?: EventHandlerUnion<T, TransitionEvent>
	onVolumeChange?: EventHandlerUnion<T, Event>
	onWaiting?: EventHandlerUnion<T, Event>
	onWheel?: EventHandlerUnion<T, WheelEvent>
}
interface CustomEventHandlersLowerCase<T> {
	/** @deprecated Use camelCase event handlers */
	onabort?: EventHandlerUnion<T, UIEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationcancel?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationend?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationiteration?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationstart?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onauxclick?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onbeforeinput?: InputEventHandlerUnion<T, InputEvent>
	/** @deprecated Use camelCase event handlers */
	onbeforetoggle?: EventHandlerUnion<T, ToggleEvent>
	/** @deprecated Use camelCase event handlers */
	onblur?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	oncancel?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncanplay?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncanplaythrough?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onchange?: ChangeEventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onclick?: EventHandlerUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	/** @deprecated Use camelCase event handlers */
	oncommand?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncompositionend?: EventHandlerUnion<T, CompositionEvent>
	/** @deprecated Use camelCase event handlers */
	oncompositionstart?: EventHandlerUnion<T, CompositionEvent>
	/** @deprecated Use camelCase event handlers */
	oncompositionupdate?: EventHandlerUnion<T, CompositionEvent>
	/** @deprecated Use camelCase event handlers */
	oncontextmenu?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	oncopy?: EventHandlerUnion<T, ClipboardEvent>
	/** @deprecated Use camelCase event handlers */
	oncuechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncut?: EventHandlerUnion<T, ClipboardEvent>
	/** @deprecated Use camelCase event handlers */
	ondblclick?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	ondrag?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragend?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragenter?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragexit?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragleave?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragover?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragstart?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondrop?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondurationchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onemptied?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onended?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onerror?: EventHandlerUnion<T, ErrorEvent>
	/** @deprecated Use camelCase event handlers */
	onfocus?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	onfocusin?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	onfocusout?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	ongotpointercapture?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	oninput?: InputEventHandlerUnion<T, InputEvent>
	/** @deprecated Use camelCase event handlers */
	oninvalid?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onkeydown?: EventHandlerUnion<T, KeyboardEvent>
	/** @deprecated Use camelCase event handlers */
	onkeypress?: EventHandlerUnion<T, KeyboardEvent>
	/** @deprecated Use camelCase event handlers */
	onkeyup?: EventHandlerUnion<T, KeyboardEvent>
	/** @deprecated Use camelCase event handlers */
	onload?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onloadeddata?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onloadedmetadata?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onloadstart?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onlostpointercapture?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onmousedown?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseenter?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseleave?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmousemove?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseout?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseover?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseup?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onpaste?: EventHandlerUnion<T, ClipboardEvent>
	/** @deprecated Use camelCase event handlers */
	onpause?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onplay?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onplaying?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpointercancel?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerdown?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerenter?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerleave?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointermove?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerout?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerover?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerup?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onprogress?: EventHandlerUnion<T, ProgressEvent>
	/** @deprecated Use camelCase event handlers */
	onratechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onreset?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onresize?: EventHandlerUnion<T, UIEvent>
	/** @deprecated Use camelCase event handlers */
	onscroll?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onscrollend?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onsecuritypolicyviolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	/** @deprecated Use camelCase event handlers */
	onseeked?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onseeking?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onselect?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onselectionchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onslotchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onstalled?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onsubmit?: EventHandlerUnion<T, SubmitEvent>
	/** @deprecated Use camelCase event handlers */
	onsuspend?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	ontimeupdate?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	ontoggle?: EventHandlerUnion<T, ToggleEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchcancel?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchend?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchmove?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchstart?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitioncancel?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitionend?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitionrun?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitionstart?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	onvolumechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onwaiting?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onwheel?: EventHandlerUnion<T, WheelEvent>
}
interface CustomEventHandlersNamespaced<T> {
	'on:abort'?: EventHandlerWithOptionsUnion<T, UIEvent>
	'on:animationcancel'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationend'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationiteration'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationstart'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:auxclick'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:beforeinput'?: EventHandlerWithOptionsUnion<T, InputEvent, InputEventHandler<T, InputEvent>>
	'on:beforetoggle'?: EventHandlerWithOptionsUnion<T, ToggleEvent>
	'on:blur'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:cancel'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplay'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplaythrough'?: EventHandlerWithOptionsUnion<T, Event>
	'on:change'?: EventHandlerWithOptionsUnion<T, Event, ChangeEventHandler<T, Event>>
	'on:click'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	'on:command'?: EventHandlerWithOptionsUnion<T, Event>
	'on:compositionend'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionstart'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionupdate'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:contextmenu'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:copy'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:cuechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:cut'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:dblclick'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:drag'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragend'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragenter'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragexit'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragleave'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragover'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragstart'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:drop'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:durationchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:emptied'?: EventHandlerWithOptionsUnion<T, Event>
	'on:ended'?: EventHandlerWithOptionsUnion<T, Event>
	'on:error'?: EventHandlerWithOptionsUnion<T, ErrorEvent>
	'on:focus'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:focusin'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:focusout'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:gotpointercapture'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:input'?: EventHandlerWithOptionsUnion<T, InputEvent, InputEventHandler<T, InputEvent>>
	'on:invalid'?: EventHandlerWithOptionsUnion<T, Event>
	'on:keydown'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:keypress'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:keyup'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:load'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadeddata'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadedmetadata'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadstart'?: EventHandlerWithOptionsUnion<T, Event>
	'on:lostpointercapture'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:mousedown'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseenter'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseleave'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mousemove'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseout'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseover'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseup'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:paste'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:pause'?: EventHandlerWithOptionsUnion<T, Event>
	'on:play'?: EventHandlerWithOptionsUnion<T, Event>
	'on:playing'?: EventHandlerWithOptionsUnion<T, Event>
	'on:pointercancel'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerdown'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerenter'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerleave'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointermove'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerout'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerover'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerup'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:progress'?: EventHandlerWithOptionsUnion<T, ProgressEvent>
	'on:ratechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:reset'?: EventHandlerWithOptionsUnion<T, Event>
	'on:resize'?: EventHandlerWithOptionsUnion<T, UIEvent>
	'on:scroll'?: EventHandlerWithOptionsUnion<T, Event>
	'on:scrollend'?: EventHandlerWithOptionsUnion<T, Event>
	'on:securitypolicyviolation'?: EventHandlerWithOptionsUnion<T, SecurityPolicyViolationEvent>
	'on:seeked'?: EventHandlerWithOptionsUnion<T, Event>
	'on:seeking'?: EventHandlerWithOptionsUnion<T, Event>
	'on:select'?: EventHandlerWithOptionsUnion<T, Event>
	'on:selectionchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:slotchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:stalled'?: EventHandlerWithOptionsUnion<T, Event>
	'on:submit'?: EventHandlerWithOptionsUnion<T, SubmitEvent>
	'on:suspend'?: EventHandlerWithOptionsUnion<T, Event>
	'on:timeupdate'?: EventHandlerWithOptionsUnion<T, Event>
	'on:toggle'?: EventHandlerWithOptionsUnion<T, ToggleEvent>
	'on:touchcancel'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchend'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchmove'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchstart'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:transitioncancel'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionend'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionrun'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionstart'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:volumechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:waiting'?: EventHandlerWithOptionsUnion<T, Event>
	'on:wheel'?: EventHandlerWithOptionsUnion<T, WheelEvent>
}
interface DOMAttributes<T> extends CustomAttributes<T>, DirectiveAttributes, DirectiveFunctionAttributes<T>, PropAttributes, AttrAttributes, BoolAttributes, OnAttributes<T>, OnCaptureAttributes<T>, CustomEventHandlersCamelCase<T>, CustomEventHandlersLowerCase<T>, CustomEventHandlersNamespaced<T> {
	children?: Node | ArrayElement | (string & {}) | number | boolean | null
	innerHTML?: string
	innerText?: string | number
	textContent?: string | number
}

// Solid Next - https://www.solidjs.com/
interface ElementEventMap<T> {
	onFullscreenChange?: EventHandlerUnion<T, Event>
	onFullscreenError?: EventHandlerUnion<T, Event>

	'on:fullscreenchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:fullscreenerror'?: EventHandlerWithOptionsUnion<T, Event>

	/** @deprecated Use camelCase event handlers */
	onfullscreenchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onfullscreenerror?: EventHandlerUnion<T, Event>
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

	/** @deprecated Use camelCase event handlers */
	onafterprint?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onbeforeprint?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onbeforeunload?: EventHandlerUnion<T, BeforeUnloadEvent>
	/** @deprecated Use camelCase event handlers */
	ongamepadconnected?: EventHandlerUnion<T, GamepadEvent>
	/** @deprecated Use camelCase event handlers */
	ongamepaddisconnected?: EventHandlerUnion<T, GamepadEvent>
	/** @deprecated Use camelCase event handlers */
	onhashchange?: EventHandlerUnion<T, HashChangeEvent>
	/** @deprecated Use camelCase event handlers */
	onlanguagechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onmessage?: EventHandlerUnion<T, MessageEvent>
	/** @deprecated Use camelCase event handlers */
	onmessageerror?: EventHandlerUnion<T, MessageEvent>
	/** @deprecated Use camelCase event handlers */
	onoffline?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	ononline?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpagehide?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageRevealEvent` is currently undefined in TS
	/** @deprecated Use camelCase event handlers */
	onpagereveal?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpageshow?: EventHandlerUnion<T, PageTransitionEvent>
	// TODO `PageSwapEvent` is currently undefined in TS
	/** @deprecated Use camelCase event handlers */
	onpageswap?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpopstate?: EventHandlerUnion<T, PopStateEvent>
	/** @deprecated Use camelCase event handlers */
	onrejectionhandled?: EventHandlerUnion<T, PromiseRejectionEvent>
	/** @deprecated Use camelCase event handlers */
	onstorage?: EventHandlerUnion<T, StorageEvent>
	/** @deprecated Use camelCase event handlers */
	onunhandledrejection?: EventHandlerUnion<T, PromiseRejectionEvent>
	/** @deprecated Use camelCase event handlers */
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
interface CustomEventHandlersCamelCase<T> {
	onAbort?: EventHandlerUnion<T, UIEvent>
	onAnimationCancel?: EventHandlerUnion<T, AnimationEvent>
	onAnimationEnd?: EventHandlerUnion<T, AnimationEvent>
	onAnimationIteration?: EventHandlerUnion<T, AnimationEvent>
	onAnimationStart?: EventHandlerUnion<T, AnimationEvent>
	onAuxClick?: EventHandlerUnion<T, PointerEvent>
	onBeforeInput?: InputEventHandlerUnion<T, InputEvent>
	onBeforeToggle?: EventHandlerUnion<T, ToggleEvent>
	onBlur?: FocusEventHandlerUnion<T, FocusEvent>
	onCancel?: EventHandlerUnion<T, Event>
	onCanPlay?: EventHandlerUnion<T, Event>
	onCanPlayThrough?: EventHandlerUnion<T, Event>
	onChange?: ChangeEventHandlerUnion<T, Event>
	onClick?: EventHandlerUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	onCommand?: EventHandlerUnion<T, Event>
	onCompositionEnd?: EventHandlerUnion<T, CompositionEvent>
	onCompositionStart?: EventHandlerUnion<T, CompositionEvent>
	onCompositionUpdate?: EventHandlerUnion<T, CompositionEvent>
	onContextMenu?: EventHandlerUnion<T, PointerEvent>
	onCopy?: EventHandlerUnion<T, ClipboardEvent>
	onCueChange?: EventHandlerUnion<T, Event>
	onCut?: EventHandlerUnion<T, ClipboardEvent>
	onDblClick?: EventHandlerUnion<T, MouseEvent>
	onDrag?: EventHandlerUnion<T, DragEvent>
	onDragEnd?: EventHandlerUnion<T, DragEvent>
	onDragEnter?: EventHandlerUnion<T, DragEvent>
	onDragExit?: EventHandlerUnion<T, DragEvent>
	onDragLeave?: EventHandlerUnion<T, DragEvent>
	onDragOver?: EventHandlerUnion<T, DragEvent>
	onDragStart?: EventHandlerUnion<T, DragEvent>
	onDrop?: EventHandlerUnion<T, DragEvent>
	onDurationChange?: EventHandlerUnion<T, Event>
	onEmptied?: EventHandlerUnion<T, Event>
	onEnded?: EventHandlerUnion<T, Event>
	onError?: EventHandlerUnion<T, ErrorEvent>
	onFocus?: FocusEventHandlerUnion<T, FocusEvent>
	onFocusIn?: FocusEventHandlerUnion<T, FocusEvent>
	onFocusOut?: FocusEventHandlerUnion<T, FocusEvent>
	onGotPointerCapture?: EventHandlerUnion<T, PointerEvent>
	onInput?: InputEventHandlerUnion<T, InputEvent>
	onInvalid?: EventHandlerUnion<T, Event>
	onKeyDown?: EventHandlerUnion<T, KeyboardEvent>
	onKeyPress?: EventHandlerUnion<T, KeyboardEvent>
	onKeyUp?: EventHandlerUnion<T, KeyboardEvent>
	onLoad?: EventHandlerUnion<T, Event>
	onLoadedData?: EventHandlerUnion<T, Event>
	onLoadedMetadata?: EventHandlerUnion<T, Event>
	onLoadStart?: EventHandlerUnion<T, Event>
	onLostPointerCapture?: EventHandlerUnion<T, PointerEvent>
	onMouseDown?: EventHandlerUnion<T, MouseEvent>
	onMouseEnter?: EventHandlerUnion<T, MouseEvent>
	onMouseLeave?: EventHandlerUnion<T, MouseEvent>
	onMouseMove?: EventHandlerUnion<T, MouseEvent>
	onMouseOut?: EventHandlerUnion<T, MouseEvent>
	onMouseOver?: EventHandlerUnion<T, MouseEvent>
	onMouseUp?: EventHandlerUnion<T, MouseEvent>
	onPaste?: EventHandlerUnion<T, ClipboardEvent>
	onPause?: EventHandlerUnion<T, Event>
	onPlay?: EventHandlerUnion<T, Event>
	onPlaying?: EventHandlerUnion<T, Event>
	onPointerCancel?: EventHandlerUnion<T, PointerEvent>
	onPointerDown?: EventHandlerUnion<T, PointerEvent>
	onPointerEnter?: EventHandlerUnion<T, PointerEvent>
	onPointerLeave?: EventHandlerUnion<T, PointerEvent>
	onPointerMove?: EventHandlerUnion<T, PointerEvent>
	onPointerOut?: EventHandlerUnion<T, PointerEvent>
	onPointerOver?: EventHandlerUnion<T, PointerEvent>
	onPointerUp?: EventHandlerUnion<T, PointerEvent>
	onProgress?: EventHandlerUnion<T, ProgressEvent>
	onRateChange?: EventHandlerUnion<T, Event>
	onReset?: EventHandlerUnion<T, Event>
	onResize?: EventHandlerUnion<T, UIEvent>
	onScroll?: EventHandlerUnion<T, Event>
	onScrollEnd?: EventHandlerUnion<T, Event>
	onSecurityPolicyViolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	onSeeked?: EventHandlerUnion<T, Event>
	onSeeking?: EventHandlerUnion<T, Event>
	onSelect?: EventHandlerUnion<T, Event>
	onSelectionChange?: EventHandlerUnion<T, Event>
	onSlotChange?: EventHandlerUnion<T, Event>
	onStalled?: EventHandlerUnion<T, Event>
	onSubmit?: EventHandlerUnion<T, SubmitEvent>
	onSuspend?: EventHandlerUnion<T, Event>
	onTimeUpdate?: EventHandlerUnion<T, Event>
	onToggle?: EventHandlerUnion<T, ToggleEvent>
	onTouchCancel?: EventHandlerUnion<T, TouchEvent>
	onTouchEnd?: EventHandlerUnion<T, TouchEvent>
	onTouchMove?: EventHandlerUnion<T, TouchEvent>
	onTouchStart?: EventHandlerUnion<T, TouchEvent>
	onTransitionCancel?: EventHandlerUnion<T, TransitionEvent>
	onTransitionEnd?: EventHandlerUnion<T, TransitionEvent>
	onTransitionRun?: EventHandlerUnion<T, TransitionEvent>
	onTransitionStart?: EventHandlerUnion<T, TransitionEvent>
	onVolumeChange?: EventHandlerUnion<T, Event>
	onWaiting?: EventHandlerUnion<T, Event>
	onWheel?: EventHandlerUnion<T, WheelEvent>
}
interface CustomEventHandlersLowerCase<T> {
	/** @deprecated Use camelCase event handlers */
	onabort?: EventHandlerUnion<T, UIEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationcancel?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationend?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationiteration?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onanimationstart?: EventHandlerUnion<T, AnimationEvent>
	/** @deprecated Use camelCase event handlers */
	onauxclick?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onbeforeinput?: InputEventHandlerUnion<T, InputEvent>
	/** @deprecated Use camelCase event handlers */
	onbeforetoggle?: EventHandlerUnion<T, ToggleEvent>
	/** @deprecated Use camelCase event handlers */
	onblur?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	oncancel?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncanplay?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncanplaythrough?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onchange?: ChangeEventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onclick?: EventHandlerUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	/** @deprecated Use camelCase event handlers */
	oncommand?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncompositionend?: EventHandlerUnion<T, CompositionEvent>
	/** @deprecated Use camelCase event handlers */
	oncompositionstart?: EventHandlerUnion<T, CompositionEvent>
	/** @deprecated Use camelCase event handlers */
	oncompositionupdate?: EventHandlerUnion<T, CompositionEvent>
	/** @deprecated Use camelCase event handlers */
	oncontextmenu?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	oncopy?: EventHandlerUnion<T, ClipboardEvent>
	/** @deprecated Use camelCase event handlers */
	oncuechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncut?: EventHandlerUnion<T, ClipboardEvent>
	/** @deprecated Use camelCase event handlers */
	ondblclick?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	ondrag?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragend?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragenter?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragexit?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragleave?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragover?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondragstart?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondrop?: EventHandlerUnion<T, DragEvent>
	/** @deprecated Use camelCase event handlers */
	ondurationchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onemptied?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onended?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onerror?: EventHandlerUnion<T, ErrorEvent>
	/** @deprecated Use camelCase event handlers */
	onfocus?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	onfocusin?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	onfocusout?: FocusEventHandlerUnion<T, FocusEvent>
	/** @deprecated Use camelCase event handlers */
	ongotpointercapture?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	oninput?: InputEventHandlerUnion<T, InputEvent>
	/** @deprecated Use camelCase event handlers */
	oninvalid?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onkeydown?: EventHandlerUnion<T, KeyboardEvent>
	/** @deprecated Use camelCase event handlers */
	onkeypress?: EventHandlerUnion<T, KeyboardEvent>
	/** @deprecated Use camelCase event handlers */
	onkeyup?: EventHandlerUnion<T, KeyboardEvent>
	/** @deprecated Use camelCase event handlers */
	onload?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onloadeddata?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onloadedmetadata?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onloadstart?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onlostpointercapture?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onmousedown?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseenter?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseleave?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmousemove?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseout?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseover?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onmouseup?: EventHandlerUnion<T, MouseEvent>
	/** @deprecated Use camelCase event handlers */
	onpaste?: EventHandlerUnion<T, ClipboardEvent>
	/** @deprecated Use camelCase event handlers */
	onpause?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onplay?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onplaying?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onpointercancel?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerdown?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerenter?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerleave?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointermove?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerout?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerover?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onpointerup?: EventHandlerUnion<T, PointerEvent>
	/** @deprecated Use camelCase event handlers */
	onprogress?: EventHandlerUnion<T, ProgressEvent>
	/** @deprecated Use camelCase event handlers */
	onratechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onreset?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onresize?: EventHandlerUnion<T, UIEvent>
	/** @deprecated Use camelCase event handlers */
	onscroll?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onscrollend?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onsecuritypolicyviolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	/** @deprecated Use camelCase event handlers */
	onseeked?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onseeking?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onselect?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onselectionchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onslotchange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onstalled?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onsubmit?: EventHandlerUnion<T, SubmitEvent>
	/** @deprecated Use camelCase event handlers */
	onsuspend?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	ontimeupdate?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	ontoggle?: EventHandlerUnion<T, ToggleEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchcancel?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchend?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchmove?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontouchstart?: EventHandlerUnion<T, TouchEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitioncancel?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitionend?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitionrun?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	ontransitionstart?: EventHandlerUnion<T, TransitionEvent>
	/** @deprecated Use camelCase event handlers */
	onvolumechange?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onwaiting?: EventHandlerUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onwheel?: EventHandlerUnion<T, WheelEvent>
}
interface CustomEventHandlersNamespaced<T> {
	'on:abort'?: EventHandlerWithOptionsUnion<T, UIEvent>
	'on:animationcancel'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationend'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationiteration'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:animationstart'?: EventHandlerWithOptionsUnion<T, AnimationEvent>
	'on:auxclick'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:beforeinput'?: EventHandlerWithOptionsUnion<T, InputEvent, InputEventHandler<T, InputEvent>>
	'on:beforetoggle'?: EventHandlerWithOptionsUnion<T, ToggleEvent>
	'on:blur'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:cancel'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplay'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplaythrough'?: EventHandlerWithOptionsUnion<T, Event>
	'on:change'?: EventHandlerWithOptionsUnion<T, Event, ChangeEventHandler<T, Event>>
	'on:click'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	// TODO `CommandEvent` is currently undefined in TS
	'on:command'?: EventHandlerWithOptionsUnion<T, Event>
	'on:compositionend'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionstart'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionupdate'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:contextmenu'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:copy'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:cuechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:cut'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:dblclick'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:drag'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragend'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragenter'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragexit'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragleave'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragover'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:dragstart'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:drop'?: EventHandlerWithOptionsUnion<T, DragEvent>
	'on:durationchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:emptied'?: EventHandlerWithOptionsUnion<T, Event>
	'on:ended'?: EventHandlerWithOptionsUnion<T, Event>
	'on:error'?: EventHandlerWithOptionsUnion<T, ErrorEvent>
	'on:focus'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:focusin'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:focusout'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:gotpointercapture'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:input'?: EventHandlerWithOptionsUnion<T, InputEvent, InputEventHandler<T, InputEvent>>
	'on:invalid'?: EventHandlerWithOptionsUnion<T, Event>
	'on:keydown'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:keypress'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:keyup'?: EventHandlerWithOptionsUnion<T, KeyboardEvent>
	'on:load'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadeddata'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadedmetadata'?: EventHandlerWithOptionsUnion<T, Event>
	'on:loadstart'?: EventHandlerWithOptionsUnion<T, Event>
	'on:lostpointercapture'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:mousedown'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseenter'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseleave'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mousemove'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseout'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseover'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:mouseup'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:paste'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:pause'?: EventHandlerWithOptionsUnion<T, Event>
	'on:play'?: EventHandlerWithOptionsUnion<T, Event>
	'on:playing'?: EventHandlerWithOptionsUnion<T, Event>
	'on:pointercancel'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerdown'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerenter'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerleave'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointermove'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerout'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerover'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerup'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:progress'?: EventHandlerWithOptionsUnion<T, ProgressEvent>
	'on:ratechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:reset'?: EventHandlerWithOptionsUnion<T, Event>
	'on:resize'?: EventHandlerWithOptionsUnion<T, UIEvent>
	'on:scroll'?: EventHandlerWithOptionsUnion<T, Event>
	'on:scrollend'?: EventHandlerWithOptionsUnion<T, Event>
	'on:securitypolicyviolation'?: EventHandlerWithOptionsUnion<T, SecurityPolicyViolationEvent>
	'on:seeked'?: EventHandlerWithOptionsUnion<T, Event>
	'on:seeking'?: EventHandlerWithOptionsUnion<T, Event>
	'on:select'?: EventHandlerWithOptionsUnion<T, Event>
	'on:selectionchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:slotchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:stalled'?: EventHandlerWithOptionsUnion<T, Event>
	'on:submit'?: EventHandlerWithOptionsUnion<T, SubmitEvent>
	'on:suspend'?: EventHandlerWithOptionsUnion<T, Event>
	'on:timeupdate'?: EventHandlerWithOptionsUnion<T, Event>
	'on:toggle'?: EventHandlerWithOptionsUnion<T, ToggleEvent>
	'on:touchcancel'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchend'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchmove'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:touchstart'?: EventHandlerWithOptionsUnion<T, TouchEvent>
	'on:transitioncancel'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionend'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionrun'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:transitionstart'?: EventHandlerWithOptionsUnion<T, TransitionEvent>
	'on:volumechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:waiting'?: EventHandlerWithOptionsUnion<T, Event>
	'on:wheel'?: EventHandlerWithOptionsUnion<T, WheelEvent>
}
interface DOMAttributes<T> extends CustomAttributes<T>, DirectiveAttributes, DirectiveFunctionAttributes<T>, PropAttributes, AttrAttributes, BoolAttributes, OnAttributes<T>, CustomEventHandlersCamelCase<T>, CustomEventHandlersLowerCase<T>, CustomEventHandlersNamespaced<T> {
	children?: Node | ArrayElement | (string & {}) | number | boolean | null
	innerHTML?: string
	innerText?: string | number
	textContent?: string | number
}

// Voby - https://github.com/vobyjs/voby
interface EventAttributes<T extends EventTarget> {
	/* IMAGE EVENTS */
	onLoad?: GenericEventHandler<T>
	onLoadCapture?: GenericEventHandler<T>
	onError?: GenericEventHandler<T>
	onErrorCapture?: GenericEventHandler<T>
	/* CLIPBOARD EVENTS */
	onCopy?: ClipboardEventHandler<T>
	onCopyCapture?: ClipboardEventHandler<T>
	onCut?: ClipboardEventHandler<T>
	onCutCapture?: ClipboardEventHandler<T>
	onPaste?: ClipboardEventHandler<T>
	onPasteCapture?: ClipboardEventHandler<T>
	/* COMPOSITION EVENTS */
	onCompositionEnd?: CompositionEventHandler<T>
	onCompositionEndCapture?: CompositionEventHandler<T>
	onCompositionStart?: CompositionEventHandler<T>
	onCompositionStartCapture?: CompositionEventHandler<T>
	onCompositionUpdate?: CompositionEventHandler<T>
	onCompositionUpdateCapture?: CompositionEventHandler<T>
	/* DETAILS EVENTS */
	onToggle?: GenericEventHandler<T>
	/* FOCUS EVENTS */
	onFocus?: FocusEventHandler<T>
	onFocusCapture?: FocusEventHandler<T>
	onFocusIn?: FocusEventHandler<T>
	onFocusInCapture?: FocusEventHandler<T>
	onFocusOut?: FocusEventHandler<T>
	onFocusOutCapture?: FocusEventHandler<T>
	onBlur?: FocusEventHandler<T>
	onBlurCapture?: FocusEventHandler<T>
	/* FORM EVENTS */
	onChange?: KeyboardEventHandler<T>
	onChangeCapture?: KeyboardEventHandler<T>
	onInput?: InputEventHandler<T>
	onInputCapture?: InputEventHandler<T>
	onBeforeInput?: InputEventHandler<T>
	onBeforeInputCapture?: InputEventHandler<T>
	onSearch?: GenericEventHandler<T>
	onSearchCapture?: GenericEventHandler<T>
	onSubmit?: SubmitEventHandler<T>
	onSubmitCapture?: SubmitEventHandler<T>
	onInvalid?: GenericEventHandler<T>
	onInvalidCapture?: GenericEventHandler<T>
	onReset?: GenericEventHandler<T>
	onResetCapture?: GenericEventHandler<T>
	onFormData?: GenericEventHandler<T>
	onFormDataCapture?: GenericEventHandler<T>
	/* KEYBOARD EVENTS */
	onKeyDown?: KeyboardEventHandler<T>
	onKeyDownCapture?: KeyboardEventHandler<T>
	onKeyPress?: KeyboardEventHandler<T>
	onKeyPressCapture?: KeyboardEventHandler<T>
	onKeyUp?: KeyboardEventHandler<T>
	onKeyUpCapture?: KeyboardEventHandler<T>
	/* MEDIA EVENTS */
	onAbort?: GenericEventHandler<T>
	onAbortCapture?: GenericEventHandler<T>
	onCanPlay?: GenericEventHandler<T>
	onCanPlayCapture?: GenericEventHandler<T>
	onCanPlayThrough?: GenericEventHandler<T>
	onCanPlayThroughCapture?: GenericEventHandler<T>
	onDurationChange?: GenericEventHandler<T>
	onDurationChangeCapture?: GenericEventHandler<T>
	onEmptied?: GenericEventHandler<T>
	onEmptiedCapture?: GenericEventHandler<T>
	onEncrypted?: GenericEventHandler<T>
	onEncryptedCapture?: GenericEventHandler<T>
	onEnded?: GenericEventHandler<T>
	onEndedCapture?: GenericEventHandler<T>
	onLoadedData?: GenericEventHandler<T>
	onLoadedDataCapture?: GenericEventHandler<T>
	onLoadedMetadata?: GenericEventHandler<T>
	onLoadedMetadataCapture?: GenericEventHandler<T>
	onLoadStart?: GenericEventHandler<T>
	onLoadStartCapture?: GenericEventHandler<T>
	onPause?: GenericEventHandler<T>
	onPauseCapture?: GenericEventHandler<T>
	onPlay?: GenericEventHandler<T>
	onPlayCapture?: GenericEventHandler<T>
	onPlaying?: GenericEventHandler<T>
	onPlayingCapture?: GenericEventHandler<T>
	onProgress?: GenericEventHandler<T>
	onProgressCapture?: GenericEventHandler<T>
	onRateChange?: GenericEventHandler<T>
	onRateChangeCapture?: GenericEventHandler<T>
	onSeeked?: GenericEventHandler<T>
	onSeekedCapture?: GenericEventHandler<T>
	onSeeking?: GenericEventHandler<T>
	onSeekingCapture?: GenericEventHandler<T>
	onStalled?: GenericEventHandler<T>
	onStalledCapture?: GenericEventHandler<T>
	onSuspend?: GenericEventHandler<T>
	onSuspendCapture?: GenericEventHandler<T>
	onTimeUpdate?: GenericEventHandler<T>
	onTimeUpdateCapture?: GenericEventHandler<T>
	onVolumeChange?: GenericEventHandler<T>
	onVolumeChangeCapture?: GenericEventHandler<T>
	onWaiting?: GenericEventHandler<T>
	onWaitingCapture?: GenericEventHandler<T>
	/* MOUSE EVENTS */
	onAuxClick?: MouseEventHandler<T>
	onAuxClickCapture?: MouseEventHandler<T>
	onClick?: MouseEventHandler<T>
	onClickCapture?: MouseEventHandler<T>
	onContextMenu?: MouseEventHandler<T>
	onContextMenuCapture?: MouseEventHandler<T>
	onDblClick?: MouseEventHandler<T>
	onDblClickCapture?: MouseEventHandler<T>
	onDrag?: DragEventHandler<T>
	onDragCapture?: DragEventHandler<T>
	onDragEnd?: DragEventHandler<T>
	onDragEndCapture?: DragEventHandler<T>
	onDragEnter?: DragEventHandler<T>
	onDragEnterCapture?: DragEventHandler<T>
	onDragExit?: DragEventHandler<T>
	onDragExitCapture?: DragEventHandler<T>
	onDragLeave?: DragEventHandler<T>
	onDragLeaveCapture?: DragEventHandler<T>
	onDragOver?: DragEventHandler<T>
	onDragOverCapture?: DragEventHandler<T>
	onDragStart?: DragEventHandler<T>
	onDragStartCapture?: DragEventHandler<T>
	onDrop?: DragEventHandler<T>
	onDropCapture?: DragEventHandler<T>
	onMiddleClick?: MouseEventHandler<T>
	onMiddleClickCapture?: MouseEventHandler<T>
	onMouseDown?: MouseEventHandler<T>
	onMouseDownCapture?: MouseEventHandler<T>
	onMouseEnter?: MouseEventHandler<T>
	onMouseEnterCapture?: MouseEventHandler<T>
	onMouseLeave?: MouseEventHandler<T>
	onMouseLeaveCapture?: MouseEventHandler<T>
	onMouseMove?: MouseEventHandler<T>
	onMouseMoveCapture?: MouseEventHandler<T>
	onMouseOut?: MouseEventHandler<T>
	onMouseOutCapture?: MouseEventHandler<T>
	onMouseOver?: MouseEventHandler<T>
	onMouseOverCapture?: MouseEventHandler<T>
	onMouseUp?: MouseEventHandler<T>
	onMouseUpCapture?: MouseEventHandler<T>
	/* SELECTION EVENTS */
	onSelect?: GenericEventHandler<T>
	onSelectCapture?: GenericEventHandler<T>
	/* TOUCH EVENTS */
	onTouchCancel?: TouchEventHandler<T>
	onTouchCancelCapture?: TouchEventHandler<T>
	onTouchEnd?: TouchEventHandler<T>
	onTouchEndCapture?: TouchEventHandler<T>
	onTouchMove?: TouchEventHandler<T>
	onTouchMoveCapture?: TouchEventHandler<T>
	onTouchStart?: TouchEventHandler<T>
	onTouchStartCapture?: TouchEventHandler<T>
	/* POINTER EVENTS */
	onPointerOver?: PointerEventHandler<T>
	onPointerOverCapture?: PointerEventHandler<T>
	onPointerEnter?: PointerEventHandler<T>
	onPointerEnterCapture?: PointerEventHandler<T>
	onPointerDown?: PointerEventHandler<T>
	onPointerDownCapture?: PointerEventHandler<T>
	onPointerMove?: PointerEventHandler<T>
	onPointerMoveCapture?: PointerEventHandler<T>
	onPointerUp?: PointerEventHandler<T>
	onPointerUpCapture?: PointerEventHandler<T>
	onPointerCancel?: PointerEventHandler<T>
	onPointerCancelCapture?: PointerEventHandler<T>
	onPointerOut?: PointerEventHandler<T>
	onPointerOutCapture?: PointerEventHandler<T>
	onPointerLeave?: PointerEventHandler<T>
	onPointerLeaveCapture?: PointerEventHandler<T>
	onGotPointerCapture?: PointerEventHandler<T>
	onGotPointerCaptureCapture?: PointerEventHandler<T>
	onLostPointerCapture?: PointerEventHandler<T>
	onLostPointerCaptureCapture?: PointerEventHandler<T>
	/* UI EVENTS */
	onScroll?: UIEventHandler<T>
	onScrollPassive?: UIEventHandler<T>
	onScrollCapture?: UIEventHandler<T>
	onScrollCapturePassive?: UIEventHandler<T>
	onScrollEnd?: UIEventHandler<T>
	onScrollEndPassive?: UIEventHandler<T>
	/* WHEEL EVENTS */
	onWheel?: WheelEventHandler<T>
	onWheelPassive?: WheelEventHandler<T>
	onWheelCapture?: WheelEventHandler<T>
	onWheelCapturePassive?: WheelEventHandler<T>
	/* ANIMATION EVENTS */
	onAnimationStart?: AnimationEventHandler<T>
	onAnimationStartCapture?: AnimationEventHandler<T>
	onAnimationEnd?: AnimationEventHandler<T>
	onAnimationEndCapture?: AnimationEventHandler<T>
	onAnimationIteration?: AnimationEventHandler<T>
	onAnimationIterationCapture?: AnimationEventHandler<T>
	/* TRANSITION EVENTS */
	onTransitionEnd?: TransitionEventHandler<T>
	onTransitionEndCapture?: TransitionEventHandler<T>
}
interface DOMAttributes<T extends EventTarget> extends EventAttributes<T> {}

// Vue - https://vuejs.org/
interface Events {
	// clipboard events
	onCopy: ClipboardEvent
	onCut: ClipboardEvent
	onPaste: ClipboardEvent

	// composition events
	onCompositionend: CompositionEvent
	onCompositionstart: CompositionEvent
	onCompositionupdate: CompositionEvent

	// drag drop events
	onDrag: DragEvent
	onDragend: DragEvent
	onDragenter: DragEvent
	onDragexit: DragEvent
	onDragleave: DragEvent
	onDragover: DragEvent
	onDragstart: DragEvent
	onDrop: DragEvent

	// focus events
	onFocus: FocusEvent
	onFocusin: FocusEvent
	onFocusout: FocusEvent
	onBlur: FocusEvent

	// form events
	onChange: Event
	onBeforeinput: Event
	onInput: Event
	onReset: Event
	onSubmit: Event
	onInvalid: Event

	// image events
	onLoad: Event
	onError: Event

	// keyboard events
	onKeydown: KeyboardEvent
	onKeypress: KeyboardEvent
	onKeyup: KeyboardEvent

	// mouse events
	onAuxclick: MouseEvent
	onClick: MouseEvent
	onContextmenu: MouseEvent
	onDblclick: MouseEvent
	onMousedown: MouseEvent
	onMouseenter: MouseEvent
	onMouseleave: MouseEvent
	onMousemove: MouseEvent
	onMouseout: MouseEvent
	onMouseover: MouseEvent
	onMouseup: MouseEvent

	// media events
	onAbort: Event
	onCanplay: Event
	onCanplaythrough: Event
	onDurationchange: Event
	onEmptied: Event
	onEncrypted: Event
	onEnded: Event
	onLoadeddata: Event
	onLoadedmetadata: Event
	onLoadstart: Event
	onPause: Event
	onPlay: Event
	onPlaying: Event
	onProgress: Event
	onRatechange: Event
	onSeeked: Event
	onSeeking: Event
	onStalled: Event
	onSuspend: Event
	onTimeupdate: Event
	onVolumechange: Event
	onWaiting: Event

	// selection events
	onSelect: Event

	// scroll events
	onScroll: Event
	onScrollend: Event

	// touch events
	onTouchcancel: TouchEvent
	onTouchend: TouchEvent
	onTouchmove: TouchEvent
	onTouchstart: TouchEvent

	// pointer events
	onPointerdown: PointerEvent
	onPointermove: PointerEvent
	onPointerup: PointerEvent
	onPointercancel: PointerEvent
	onPointerenter: PointerEvent
	onPointerleave: PointerEvent
	onPointerover: PointerEvent
	onPointerout: PointerEvent

	// wheel events
	onWheel: WheelEvent

	// animation events
	onAnimationstart: AnimationEvent
	onAnimationend: AnimationEvent
	onAnimationiteration: AnimationEvent

	// transition events
	onTransitionend: TransitionEvent
	onTransitionstart: TransitionEvent
}

// Preact - https://preactjs.com/
interface DOMAttributes<Target extends EventTarget> extends PreactDOMAttributes {
	// Image Events
	onLoad?: GenericEventHandler<Target>
	onLoadCapture?: GenericEventHandler<Target>
	onError?: GenericEventHandler<Target>
	onErrorCapture?: GenericEventHandler<Target>

	// Clipboard Events
	onCopy?: ClipboardEventHandler<Target>
	onCopyCapture?: ClipboardEventHandler<Target>
	onCut?: ClipboardEventHandler<Target>
	onCutCapture?: ClipboardEventHandler<Target>
	onPaste?: ClipboardEventHandler<Target>
	onPasteCapture?: ClipboardEventHandler<Target>

	// Composition Events
	onCompositionEnd?: CompositionEventHandler<Target>
	onCompositionEndCapture?: CompositionEventHandler<Target>
	onCompositionStart?: CompositionEventHandler<Target>
	onCompositionStartCapture?: CompositionEventHandler<Target>
	onCompositionUpdate?: CompositionEventHandler<Target>
	onCompositionUpdateCapture?: CompositionEventHandler<Target>

	// Popover Events
	onBeforeToggle?: ToggleEventHandler<Target>
	onToggle?: ToggleEventHandler<Target>

	// Dialog Events
	onClose?: GenericEventHandler<Target>
	onCancel?: GenericEventHandler<Target>

	// Focus Events
	onFocus?: FocusEventHandler<Target>
	onFocusCapture?: FocusEventHandler<Target>
	onFocusIn?: FocusEventHandler<Target>
	onFocusInCapture?: FocusEventHandler<Target>
	onFocusOut?: FocusEventHandler<Target>
	onFocusOutCapture?: FocusEventHandler<Target>
	onBlur?: FocusEventHandler<Target>
	onBlurCapture?: FocusEventHandler<Target>

	// Form Events
	onChange?: GenericEventHandler<Target>
	onChangeCapture?: GenericEventHandler<Target>
	onInput?: InputEventHandler<Target>
	onInputCapture?: InputEventHandler<Target>
	onBeforeInput?: InputEventHandler<Target>
	onBeforeInputCapture?: InputEventHandler<Target>
	onSearch?: GenericEventHandler<Target>
	onSearchCapture?: GenericEventHandler<Target>
	onSubmit?: SubmitEventHandler<Target>
	onSubmitCapture?: SubmitEventHandler<Target>
	onInvalid?: GenericEventHandler<Target>
	onInvalidCapture?: GenericEventHandler<Target>
	onReset?: GenericEventHandler<Target>
	onResetCapture?: GenericEventHandler<Target>
	onFormData?: GenericEventHandler<Target>
	onFormDataCapture?: GenericEventHandler<Target>

	// Keyboard Events
	onKeyDown?: KeyboardEventHandler<Target>
	onKeyDownCapture?: KeyboardEventHandler<Target>
	onKeyPress?: KeyboardEventHandler<Target>
	onKeyPressCapture?: KeyboardEventHandler<Target>
	onKeyUp?: KeyboardEventHandler<Target>
	onKeyUpCapture?: KeyboardEventHandler<Target>

	// Media Events
	onAbort?: GenericEventHandler<Target>
	onAbortCapture?: GenericEventHandler<Target>
	onCanPlay?: GenericEventHandler<Target>
	onCanPlayCapture?: GenericEventHandler<Target>
	onCanPlayThrough?: GenericEventHandler<Target>
	onCanPlayThroughCapture?: GenericEventHandler<Target>
	onDurationChange?: GenericEventHandler<Target>
	onDurationChangeCapture?: GenericEventHandler<Target>
	onEmptied?: GenericEventHandler<Target>
	onEmptiedCapture?: GenericEventHandler<Target>
	onEncrypted?: GenericEventHandler<Target>
	onEncryptedCapture?: GenericEventHandler<Target>
	onEnded?: GenericEventHandler<Target>
	onEndedCapture?: GenericEventHandler<Target>
	onLoadedData?: GenericEventHandler<Target>
	onLoadedDataCapture?: GenericEventHandler<Target>
	onLoadedMetadata?: GenericEventHandler<Target>
	onLoadedMetadataCapture?: GenericEventHandler<Target>
	onLoadStart?: GenericEventHandler<Target>
	onLoadStartCapture?: GenericEventHandler<Target>
	onPause?: GenericEventHandler<Target>
	onPauseCapture?: GenericEventHandler<Target>
	onPlay?: GenericEventHandler<Target>
	onPlayCapture?: GenericEventHandler<Target>
	onPlaying?: GenericEventHandler<Target>
	onPlayingCapture?: GenericEventHandler<Target>
	onProgress?: GenericEventHandler<Target>
	onProgressCapture?: GenericEventHandler<Target>
	onRateChange?: GenericEventHandler<Target>
	onRateChangeCapture?: GenericEventHandler<Target>
	onSeeked?: GenericEventHandler<Target>
	onSeekedCapture?: GenericEventHandler<Target>
	onSeeking?: GenericEventHandler<Target>
	onSeekingCapture?: GenericEventHandler<Target>
	onStalled?: GenericEventHandler<Target>
	onStalledCapture?: GenericEventHandler<Target>
	onSuspend?: GenericEventHandler<Target>
	onSuspendCapture?: GenericEventHandler<Target>
	onTimeUpdate?: GenericEventHandler<Target>
	onTimeUpdateCapture?: GenericEventHandler<Target>
	onVolumeChange?: GenericEventHandler<Target>
	onVolumeChangeCapture?: GenericEventHandler<Target>
	onWaiting?: GenericEventHandler<Target>
	onWaitingCapture?: GenericEventHandler<Target>

	// MouseEvents
	onClick?: MouseEventHandler<Target>
	onClickCapture?: MouseEventHandler<Target>
	onContextMenu?: MouseEventHandler<Target>
	onContextMenuCapture?: MouseEventHandler<Target>
	onDblClick?: MouseEventHandler<Target>
	onDblClickCapture?: MouseEventHandler<Target>
	onDrag?: DragEventHandler<Target>
	onDragCapture?: DragEventHandler<Target>
	onDragEnd?: DragEventHandler<Target>
	onDragEndCapture?: DragEventHandler<Target>
	onDragEnter?: DragEventHandler<Target>
	onDragEnterCapture?: DragEventHandler<Target>
	onDragExit?: DragEventHandler<Target>
	onDragExitCapture?: DragEventHandler<Target>
	onDragLeave?: DragEventHandler<Target>
	onDragLeaveCapture?: DragEventHandler<Target>
	onDragOver?: DragEventHandler<Target>
	onDragOverCapture?: DragEventHandler<Target>
	onDragStart?: DragEventHandler<Target>
	onDragStartCapture?: DragEventHandler<Target>
	onDrop?: DragEventHandler<Target>
	onDropCapture?: DragEventHandler<Target>
	onMouseDown?: MouseEventHandler<Target>
	onMouseDownCapture?: MouseEventHandler<Target>
	onMouseEnter?: MouseEventHandler<Target>
	onMouseEnterCapture?: MouseEventHandler<Target>
	onMouseLeave?: MouseEventHandler<Target>
	onMouseLeaveCapture?: MouseEventHandler<Target>
	onMouseMove?: MouseEventHandler<Target>
	onMouseMoveCapture?: MouseEventHandler<Target>
	onMouseOut?: MouseEventHandler<Target>
	onMouseOutCapture?: MouseEventHandler<Target>
	onMouseOver?: MouseEventHandler<Target>
	onMouseOverCapture?: MouseEventHandler<Target>
	onMouseUp?: MouseEventHandler<Target>
	onMouseUpCapture?: MouseEventHandler<Target>
	// TODO: Spec for `auxclick` events was changed to make it a PointerEvent but only
	// Chrome has support for it yet. When more browsers align we should change this.
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event#browser_compatibility
	onAuxClick?: MouseEventHandler<Target>
	onAuxClickCapture?: MouseEventHandler<Target>

	// Selection Events
	onSelect?: GenericEventHandler<Target>
	onSelectCapture?: GenericEventHandler<Target>

	// Touch Events
	onTouchCancel?: TouchEventHandler<Target>
	onTouchCancelCapture?: TouchEventHandler<Target>
	onTouchEnd?: TouchEventHandler<Target>
	onTouchEndCapture?: TouchEventHandler<Target>
	onTouchMove?: TouchEventHandler<Target>
	onTouchMoveCapture?: TouchEventHandler<Target>
	onTouchStart?: TouchEventHandler<Target>
	onTouchStartCapture?: TouchEventHandler<Target>

	// Pointer Events
	onPointerOver?: PointerEventHandler<Target>
	onPointerOverCapture?: PointerEventHandler<Target>
	onPointerEnter?: PointerEventHandler<Target>
	onPointerEnterCapture?: PointerEventHandler<Target>
	onPointerDown?: PointerEventHandler<Target>
	onPointerDownCapture?: PointerEventHandler<Target>
	onPointerMove?: PointerEventHandler<Target>
	onPointerMoveCapture?: PointerEventHandler<Target>
	onPointerUp?: PointerEventHandler<Target>
	onPointerUpCapture?: PointerEventHandler<Target>
	onPointerCancel?: PointerEventHandler<Target>
	onPointerCancelCapture?: PointerEventHandler<Target>
	onPointerOut?: PointerEventHandler<Target>
	onPointerOutCapture?: PointerEventHandler<Target>
	onPointerLeave?: PointerEventHandler<Target>
	onPointerLeaveCapture?: PointerEventHandler<Target>
	onGotPointerCapture?: PointerEventHandler<Target>
	onGotPointerCaptureCapture?: PointerEventHandler<Target>
	onLostPointerCapture?: PointerEventHandler<Target>
	onLostPointerCaptureCapture?: PointerEventHandler<Target>

	// UI Events
	onScroll?: UIEventHandler<Target>
	onScrollEnd?: UIEventHandler<Target>
	onScrollCapture?: UIEventHandler<Target>

	// Wheel Events
	onWheel?: WheelEventHandler<Target>
	onWheelCapture?: WheelEventHandler<Target>

	// Animation Events
	onAnimationStart?: AnimationEventHandler<Target>
	onAnimationStartCapture?: AnimationEventHandler<Target>
	onAnimationEnd?: AnimationEventHandler<Target>
	onAnimationEndCapture?: AnimationEventHandler<Target>
	onAnimationIteration?: AnimationEventHandler<Target>
	onAnimationIterationCapture?: AnimationEventHandler<Target>

	// Transition Events
	onTransitionCancel?: TransitionEventHandler<Target>
	onTransitionCancelCapture?: TransitionEventHandler<Target>
	onTransitionEnd?: TransitionEventHandler<Target>
	onTransitionEndCapture?: TransitionEventHandler<Target>
	onTransitionRun?: TransitionEventHandler<Target>
	onTransitionRunCapture?: TransitionEventHandler<Target>
	onTransitionStart?: TransitionEventHandler<Target>
	onTransitionStartCapture?: TransitionEventHandler<Target>

	// PictureInPicture Events
	onEnterPictureInPicture?: PictureInPictureEventHandler<Target>
	onEnterPictureInPictureCapture?: PictureInPictureEventHandler<Target>
	onLeavePictureInPicture?: PictureInPictureEventHandler<Target>
	onLeavePictureInPictureCapture?: PictureInPictureEventHandler<Target>
	onResize?: PictureInPictureEventHandler<Target>
	onResizeCapture?: PictureInPictureEventHandler<Target>

	onCommand?: CommandEventHandler<Target>
}

// React - https://react.dev/
interface DOMAttributes<T> {
	children?: ReactNode
	dangerouslySetInnerHTML?: {
		// Should be InnerHTML['innerHTML'].
		// But unfortunately we're mixing renderer-specific type declarations.
		__html: string | TrustedHTML
	}

	// Clipboard Events
	onCopy?: ClipboardEventHandler<T>
	onCopyCapture?: ClipboardEventHandler<T>
	onCut?: ClipboardEventHandler<T>
	onCutCapture?: ClipboardEventHandler<T>
	onPaste?: ClipboardEventHandler<T>
	onPasteCapture?: ClipboardEventHandler<T>

	// Composition Events
	onCompositionEnd?: CompositionEventHandler<T>
	onCompositionEndCapture?: CompositionEventHandler<T>
	onCompositionStart?: CompositionEventHandler<T>
	onCompositionStartCapture?: CompositionEventHandler<T>
	onCompositionUpdate?: CompositionEventHandler<T>
	onCompositionUpdateCapture?: CompositionEventHandler<T>

	// Focus Events
	onFocus?: FocusEventHandler<T>
	onFocusCapture?: FocusEventHandler<T>
	onBlur?: FocusEventHandler<T>
	onBlurCapture?: FocusEventHandler<T>

	// Form Events
	onChange?: FormEventHandler<T>
	onChangeCapture?: FormEventHandler<T>
	onBeforeInput?: FormEventHandler<T>
	onBeforeInputCapture?: FormEventHandler<T>
	onInput?: FormEventHandler<T>
	onInputCapture?: FormEventHandler<T>
	onReset?: FormEventHandler<T>
	onResetCapture?: FormEventHandler<T>
	onSubmit?: FormEventHandler<T>
	onSubmitCapture?: FormEventHandler<T>
	onInvalid?: FormEventHandler<T>
	onInvalidCapture?: FormEventHandler<T>

	// Image Events
	onLoad?: ReactEventHandler<T>
	onLoadCapture?: ReactEventHandler<T>
	onError?: ReactEventHandler<T> // also a Media Event
	onErrorCapture?: ReactEventHandler<T> // also a Media Event

	// Keyboard Events
	onKeyDown?: KeyboardEventHandler<T>
	onKeyDownCapture?: KeyboardEventHandler<T>
	/** @deprecated Use `onKeyUp` or `onKeyDown` instead */
	onKeyPress?: KeyboardEventHandler<T>
	/** @deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead */
	onKeyPressCapture?: KeyboardEventHandler<T>
	onKeyUp?: KeyboardEventHandler<T>
	onKeyUpCapture?: KeyboardEventHandler<T>

	// Media Events
	onAbort?: ReactEventHandler<T>
	onAbortCapture?: ReactEventHandler<T>
	onCanPlay?: ReactEventHandler<T>
	onCanPlayCapture?: ReactEventHandler<T>
	onCanPlayThrough?: ReactEventHandler<T>
	onCanPlayThroughCapture?: ReactEventHandler<T>
	onDurationChange?: ReactEventHandler<T>
	onDurationChangeCapture?: ReactEventHandler<T>
	onEmptied?: ReactEventHandler<T>
	onEmptiedCapture?: ReactEventHandler<T>
	onEncrypted?: ReactEventHandler<T>
	onEncryptedCapture?: ReactEventHandler<T>
	onEnded?: ReactEventHandler<T>
	onEndedCapture?: ReactEventHandler<T>
	onLoadedData?: ReactEventHandler<T>
	onLoadedDataCapture?: ReactEventHandler<T>
	onLoadedMetadata?: ReactEventHandler<T>
	onLoadedMetadataCapture?: ReactEventHandler<T>
	onLoadStart?: ReactEventHandler<T>
	onLoadStartCapture?: ReactEventHandler<T>
	onPause?: ReactEventHandler<T>
	onPauseCapture?: ReactEventHandler<T>
	onPlay?: ReactEventHandler<T>
	onPlayCapture?: ReactEventHandler<T>
	onPlaying?: ReactEventHandler<T>
	onPlayingCapture?: ReactEventHandler<T>
	onProgress?: ReactEventHandler<T>
	onProgressCapture?: ReactEventHandler<T>
	onRateChange?: ReactEventHandler<T>
	onRateChangeCapture?: ReactEventHandler<T>
	onResize?: ReactEventHandler<T>
	onResizeCapture?: ReactEventHandler<T>
	onSeeked?: ReactEventHandler<T>
	onSeekedCapture?: ReactEventHandler<T>
	onSeeking?: ReactEventHandler<T>
	onSeekingCapture?: ReactEventHandler<T>
	onStalled?: ReactEventHandler<T>
	onStalledCapture?: ReactEventHandler<T>
	onSuspend?: ReactEventHandler<T>
	onSuspendCapture?: ReactEventHandler<T>
	onTimeUpdate?: ReactEventHandler<T>
	onTimeUpdateCapture?: ReactEventHandler<T>
	onVolumeChange?: ReactEventHandler<T>
	onVolumeChangeCapture?: ReactEventHandler<T>
	onWaiting?: ReactEventHandler<T>
	onWaitingCapture?: ReactEventHandler<T>

	// MouseEvents
	onAuxClick?: MouseEventHandler<T>
	onAuxClickCapture?: MouseEventHandler<T>
	onClick?: MouseEventHandler<T>
	onClickCapture?: MouseEventHandler<T>
	onContextMenu?: MouseEventHandler<T>
	onContextMenuCapture?: MouseEventHandler<T>
	onDoubleClick?: MouseEventHandler<T>
	onDoubleClickCapture?: MouseEventHandler<T>
	onDrag?: DragEventHandler<T>
	onDragCapture?: DragEventHandler<T>
	onDragEnd?: DragEventHandler<T>
	onDragEndCapture?: DragEventHandler<T>
	onDragEnter?: DragEventHandler<T>
	onDragEnterCapture?: DragEventHandler<T>
	onDragExit?: DragEventHandler<T>
	onDragExitCapture?: DragEventHandler<T>
	onDragLeave?: DragEventHandler<T>
	onDragLeaveCapture?: DragEventHandler<T>
	onDragOver?: DragEventHandler<T>
	onDragOverCapture?: DragEventHandler<T>
	onDragStart?: DragEventHandler<T>
	onDragStartCapture?: DragEventHandler<T>
	onDrop?: DragEventHandler<T>
	onDropCapture?: DragEventHandler<T>
	onMouseDown?: MouseEventHandler<T>
	onMouseDownCapture?: MouseEventHandler<T>
	onMouseEnter?: MouseEventHandler<T>
	onMouseLeave?: MouseEventHandler<T>
	onMouseMove?: MouseEventHandler<T>
	onMouseMoveCapture?: MouseEventHandler<T>
	onMouseOut?: MouseEventHandler<T>
	onMouseOutCapture?: MouseEventHandler<T>
	onMouseOver?: MouseEventHandler<T>
	onMouseOverCapture?: MouseEventHandler<T>
	onMouseUp?: MouseEventHandler<T>
	onMouseUpCapture?: MouseEventHandler<T>

	// Selection Events
	onSelect?: ReactEventHandler<T>
	onSelectCapture?: ReactEventHandler<T>

	// Touch Events
	onTouchCancel?: TouchEventHandler<T>
	onTouchCancelCapture?: TouchEventHandler<T>
	onTouchEnd?: TouchEventHandler<T>
	onTouchEndCapture?: TouchEventHandler<T>
	onTouchMove?: TouchEventHandler<T>
	onTouchMoveCapture?: TouchEventHandler<T>
	onTouchStart?: TouchEventHandler<T>
	onTouchStartCapture?: TouchEventHandler<T>

	// Pointer Events
	onPointerDown?: PointerEventHandler<T>
	onPointerDownCapture?: PointerEventHandler<T>
	onPointerMove?: PointerEventHandler<T>
	onPointerMoveCapture?: PointerEventHandler<T>
	onPointerUp?: PointerEventHandler<T>
	onPointerUpCapture?: PointerEventHandler<T>
	onPointerCancel?: PointerEventHandler<T>
	onPointerCancelCapture?: PointerEventHandler<T>
	onPointerEnter?: PointerEventHandler<T>
	onPointerLeave?: PointerEventHandler<T>
	onPointerOver?: PointerEventHandler<T>
	onPointerOverCapture?: PointerEventHandler<T>
	onPointerOut?: PointerEventHandler<T>
	onPointerOutCapture?: PointerEventHandler<T>
	onGotPointerCapture?: PointerEventHandler<T>
	onGotPointerCaptureCapture?: PointerEventHandler<T>
	onLostPointerCapture?: PointerEventHandler<T>
	onLostPointerCaptureCapture?: PointerEventHandler<T>

	// UI Events
	onScroll?: UIEventHandler<T>
	onScrollCapture?: UIEventHandler<T>
	onScrollEnd?: UIEventHandler<T>
	onScrollEndCapture?: UIEventHandler<T>

	// Wheel Events
	onWheel?: WheelEventHandler<T>
	onWheelCapture?: WheelEventHandler<T>

	// Animation Events
	onAnimationStart?: AnimationEventHandler<T>
	onAnimationStartCapture?: AnimationEventHandler<T>
	onAnimationEnd?: AnimationEventHandler<T>
	onAnimationEndCapture?: AnimationEventHandler<T>
	onAnimationIteration?: AnimationEventHandler<T>
	onAnimationIterationCapture?: AnimationEventHandler<T>

	// Toggle Events
	onToggle?: ToggleEventHandler<T>
	onBeforeToggle?: ToggleEventHandler<T>

	// Transition Events
	onTransitionCancel?: TransitionEventHandler<T>
	onTransitionCancelCapture?: TransitionEventHandler<T>
	onTransitionEnd?: TransitionEventHandler<T>
	onTransitionEndCapture?: TransitionEventHandler<T>
	onTransitionRun?: TransitionEventHandler<T>
	onTransitionRunCapture?: TransitionEventHandler<T>
	onTransitionStart?: TransitionEventHandler<T>
	onTransitionStartCapture?: TransitionEventHandler<T>
}

// Pota - https://github.com/potahtml/pota
interface HTMLEvents<Element> extends ElementEvents<Element>, GlobalEvents<Element> {}
interface MathMLEvents<Element> extends ElementEvents<Element>, GlobalEvents<Element> {}
interface SVGEvents<Element> extends ElementEvents<Element>, GlobalEvents<Element> {}
interface HTMLEvents<Element> extends JSX.HTMLEvents<Element> {}
interface SVGEvents<Element> extends JSX.SVGEvents<Element> {}
interface MathMLEvents<Element> extends JSX.MathMLEvents<Element> {}
interface ElementEvents<Element> {
	'on:fullscreenchange'?: Events<Event, Element>
	'on:fullscreenerror'?: Events<Event, Element>
}
interface GlobalEvents<Element> {
	'on:abort'?: Events<UIEvent, Element>
	'on:animationcancel'?: Events<AnimationEvent, Element>
	'on:animationend'?: Events<AnimationEvent, Element>
	'on:animationiteration'?: Events<AnimationEvent, Element>
	'on:animationstart'?: Events<AnimationEvent, Element>
	'on:auxclick'?: Events<MouseEvent, Element>
	'on:beforeinput'?: Events<InputEvent, Element>
	'on:beforetoggle'?: Events<Event, Element>
	'on:blur'?: Events<FocusEvent, Element>
	'on:cancel'?: Events<Event, Element>
	'on:canplay'?: Events<Event, Element>
	'on:canplaythrough'?: Events<Event, Element>
	'on:change'?: Events<Event, Element>
	'on:click'?: Events<MouseEvent, Element>
	'on:close'?: Events<Event, Element>
	'on:compositionend'?: Events<CompositionEvent, Element>
	'on:compositionstart'?: Events<CompositionEvent, Element>
	'on:compositionupdate'?: Events<CompositionEvent, Element>
	'on:contextlost'?: Events<Event, Element>
	'on:contextmenu'?: Events<MouseEvent, Element>
	'on:contextrestored'?: Events<Event, Element>
	'on:copy'?: Events<ClipboardEvent, Element>
	'on:cuechange'?: Events<Event, Element>
	'on:cut'?: Events<ClipboardEvent, Element>
	'on:dblclick'?: Events<MouseEvent, Element>
	'on:drag'?: Events<DragEvent, Element>
	'on:dragend'?: Events<DragEvent, Element>
	'on:dragenter'?: Events<DragEvent, Element>
	'on:dragleave'?: Events<DragEvent, Element>
	'on:dragover'?: Events<DragEvent, Element>
	'on:dragstart'?: Events<DragEvent, Element>
	'on:drop'?: Events<DragEvent, Element>
	'on:durationchange'?: Events<Event, Element>
	'on:emptied'?: Events<Event, Element>
	'on:ended'?: Events<Event, Element>
	'on:error'?: Events<ErrorEvent, Element>
	'on:focus'?: Events<FocusEvent, Element>
	'on:focusin'?: Events<FocusEvent, Element>
	'on:focusout'?: Events<FocusEvent, Element>
	'on:formdata'?: Events<FormDataEvent, Element>
	'on:gotpointercapture'?: Events<PointerEvent, Element>
	'on:input'?: Events<Event, Element>
	'on:invalid'?: Events<Event, Element>
	'on:keydown'?: Events<KeyboardEvent, Element>
	'on:keypress'?: Events<KeyboardEvent, Element>
	'on:keyup'?: Events<KeyboardEvent, Element>
	'on:load'?: Events<Event, Element>
	'on:loadeddata'?: Events<Event, Element>
	'on:loadedmetadata'?: Events<Event, Element>
	'on:loadstart'?: Events<Event, Element>
	'on:lostpointercapture'?: Events<PointerEvent, Element>
	'on:mousedown'?: Events<MouseEvent, Element>
	'on:mouseenter'?: Events<MouseEvent, Element>
	'on:mouseleave'?: Events<MouseEvent, Element>
	'on:mousemove'?: Events<MouseEvent, Element>
	'on:mouseout'?: Events<MouseEvent, Element>
	'on:mouseover'?: Events<MouseEvent, Element>
	'on:mouseup'?: Events<MouseEvent, Element>
	'on:paste'?: Events<ClipboardEvent, Element>
	'on:pause'?: Events<Event, Element>
	'on:play'?: Events<Event, Element>
	'on:playing'?: Events<Event, Element>
	'on:pointercancel'?: Events<PointerEvent, Element>
	'on:pointerdown'?: Events<PointerEvent, Element>
	'on:pointerenter'?: Events<PointerEvent, Element>
	'on:pointerleave'?: Events<PointerEvent, Element>
	'on:pointermove'?: Events<PointerEvent, Element>
	'on:pointerout'?: Events<PointerEvent, Element>
	'on:pointerover'?: Events<PointerEvent, Element>
	'on:pointerup'?: Events<PointerEvent, Element>
	'on:progress'?: Events<ProgressEvent, Element>
	'on:ratechange'?: Events<Event, Element>
	'on:reset'?: Events<Event, Element>
	'on:resize'?: Events<UIEvent, Element>
	'on:scroll'?: Events<Event, Element>
	'on:scrollend'?: Events<Event, Element>
	'on:securitypolicyviolation'?: Events<SecurityPolicyViolationEvent, Element>
	'on:seeked'?: Events<Event, Element>
	'on:seeking'?: Events<Event, Element>
	'on:select'?: Events<Event, Element>
	'on:selectionchange'?: Events<Event, Element>
	'on:selectstart'?: Events<Event, Element>
	'on:slotchange'?: Events<Event, Element>
	'on:stalled'?: Events<Event, Element>
	'on:submit'?: Events<SubmitEvent, Element>
	'on:suspend'?: Events<Event, Element>
	'on:timeupdate'?: Events<Event, Element>
	'on:toggle'?: Events<Event, Element>
	'on:touchcancel'?: Events<TouchEvent, Element>
	'on:touchend'?: Events<TouchEvent, Element>
	'on:touchmove'?: Events<TouchEvent, Element>
	'on:touchstart'?: Events<TouchEvent, Element>
	'on:transitioncancel'?: Events<TransitionEvent, Element>
	'on:transitionend'?: Events<TransitionEvent, Element>
	'on:transitionrun'?: Events<TransitionEvent, Element>
	'on:transitionstart'?: Events<TransitionEvent, Element>
	'on:volumechange'?: Events<Event, Element>
	'on:waiting'?: Events<Event, Element>
	'on:wheel'?: Events<WheelEvent, Element>
}
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
interface HTMLBodyElementEvents<Element> extends HTMLEvents<Element>, WindowEvents<Element> {}
interface HTMLMediaElementEvents<Element> extends HTMLEvents<Element> {
	'on:encrypted'?: Events<MediaEncryptedEvent, Element>
	'on:waitingforkey'?: Events<Event, Element>
}
interface HTMLVideoElementEvents<Element> extends HTMLMediaElementEvents<Element> {
	'on:enterpictureinpicture'?: Events<PictureInPictureEvent, Element>
	'on:leavepictureinpicture'?: Events<PictureInPictureEvent, Element>
}
