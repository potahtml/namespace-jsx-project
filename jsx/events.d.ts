// Solid - https://www.solidjs.com/
interface DOMAttributes<T> extends CustomAttributes<T>, DirectiveAttributes, DirectiveFunctionAttributes<T>, PropAttributes, AttrAttributes, BoolAttributes, OnAttributes<T>, OnCaptureAttributes<T>, CustomEventHandlersCamelCase<T>, CustomEventHandlersLowerCase<T>, CustomEventHandlersNamespaced<T> {
	children?: Node | ArrayElement | (string & {}) | number | boolean | null
	innerHTML?: string
	innerText?: string | number
	textContent?: string | number
	// camel case events
	onCopy?: EventHandlerUnion<T, ClipboardEvent>
	onCut?: EventHandlerUnion<T, ClipboardEvent>
	onPaste?: EventHandlerUnion<T, ClipboardEvent>
	onCompositionEnd?: EventHandlerUnion<T, CompositionEvent>
	onCompositionStart?: EventHandlerUnion<T, CompositionEvent>
	onCompositionUpdate?: EventHandlerUnion<T, CompositionEvent>
	onFocusOut?: FocusEventHandlerUnion<T, FocusEvent>
	onFocusIn?: FocusEventHandlerUnion<T, FocusEvent>
	onEncrypted?: EventHandlerUnion<T, Event>
	onDragExit?: EventHandlerUnion<T, DragEvent>
	// lower case events
	oncopy?: EventHandlerUnion<T, ClipboardEvent>
	oncut?: EventHandlerUnion<T, ClipboardEvent>
	onpaste?: EventHandlerUnion<T, ClipboardEvent>
	oncompositionend?: EventHandlerUnion<T, CompositionEvent>
	oncompositionstart?: EventHandlerUnion<T, CompositionEvent>
	oncompositionupdate?: EventHandlerUnion<T, CompositionEvent>
	onfocusout?: FocusEventHandlerUnion<T, FocusEvent>
	onfocusin?: FocusEventHandlerUnion<T, FocusEvent>
	onencrypted?: EventHandlerUnion<T, Event>
	ondragexit?: EventHandlerUnion<T, DragEvent>
	// lower case events
	'on:copy'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:cut'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:paste'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:compositionend'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionstart'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionupdate'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:focusout'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:focusin'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:encrypted'?: EventHandlerWithOptionsUnion<T, Event>
	'on:dragexit'?: EventHandlerWithOptionsUnion<T, DragEvent>
}
interface CustomEventHandlersCamelCase<T> {
	onAbort?: EventHandlerUnion<T, Event>
	onAnimationEnd?: EventHandlerUnion<T, AnimationEvent>
	onAnimationIteration?: EventHandlerUnion<T, AnimationEvent>
	onAnimationStart?: EventHandlerUnion<T, AnimationEvent>
	onAuxClick?: EventHandlerUnion<T, MouseEvent>
	onBeforeInput?: InputEventHandlerUnion<T, InputEvent>
	onBeforeToggle?: EventHandlerUnion<T, ToggleEvent>
	onBlur?: FocusEventHandlerUnion<T, FocusEvent>
	onCanPlay?: EventHandlerUnion<T, Event>
	onCanPlayThrough?: EventHandlerUnion<T, Event>
	onChange?: ChangeEventHandlerUnion<T, Event>
	onClick?: EventHandlerUnion<T, MouseEvent>
	onContextMenu?: EventHandlerUnion<T, MouseEvent>
	onDblClick?: EventHandlerUnion<T, MouseEvent>
	onDrag?: EventHandlerUnion<T, DragEvent>
	onDragEnd?: EventHandlerUnion<T, DragEvent>
	onDragEnter?: EventHandlerUnion<T, DragEvent>
	onDragLeave?: EventHandlerUnion<T, DragEvent>
	onDragOver?: EventHandlerUnion<T, DragEvent>
	onDragStart?: EventHandlerUnion<T, DragEvent>
	onDrop?: EventHandlerUnion<T, DragEvent>
	onDurationChange?: EventHandlerUnion<T, Event>
	onEmptied?: EventHandlerUnion<T, Event>
	onEnded?: EventHandlerUnion<T, Event>
	onError?: EventHandlerUnion<T, Event>
	onFocus?: FocusEventHandlerUnion<T, FocusEvent>
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
	onScroll?: EventHandlerUnion<T, Event>
	onScrollEnd?: EventHandlerUnion<T, Event>
	onSeeked?: EventHandlerUnion<T, Event>
	onSeeking?: EventHandlerUnion<T, Event>
	onSelect?: EventHandlerUnion<T, Event>
	onStalled?: EventHandlerUnion<T, Event>
	onSubmit?: EventHandlerUnion<T, SubmitEvent>
	onSuspend?: EventHandlerUnion<T, Event>
	onTimeUpdate?: EventHandlerUnion<T, Event>
	onToggle?: EventHandlerUnion<T, ToggleEvent>
	onTouchCancel?: EventHandlerUnion<T, TouchEvent>
	onTouchEnd?: EventHandlerUnion<T, TouchEvent>
	onTouchMove?: EventHandlerUnion<T, TouchEvent>
	onTouchStart?: EventHandlerUnion<T, TouchEvent>
	onTransitionStart?: EventHandlerUnion<T, TransitionEvent>
	onTransitionEnd?: EventHandlerUnion<T, TransitionEvent>
	onTransitionRun?: EventHandlerUnion<T, TransitionEvent>
	onTransitionCancel?: EventHandlerUnion<T, TransitionEvent>
	onVolumeChange?: EventHandlerUnion<T, Event>
	onWaiting?: EventHandlerUnion<T, Event>
	onWheel?: EventHandlerUnion<T, WheelEvent>
}
interface CustomEventHandlersLowerCase<T> {
	onabort?: EventHandlerUnion<T, Event>
	onanimationend?: EventHandlerUnion<T, AnimationEvent>
	onanimationiteration?: EventHandlerUnion<T, AnimationEvent>
	onanimationstart?: EventHandlerUnion<T, AnimationEvent>
	onauxclick?: EventHandlerUnion<T, MouseEvent>
	onbeforeinput?: InputEventHandlerUnion<T, InputEvent>
	onbeforetoggle?: EventHandlerUnion<T, ToggleEvent>
	onblur?: FocusEventHandlerUnion<T, FocusEvent>
	oncanplay?: EventHandlerUnion<T, Event>
	oncanplaythrough?: EventHandlerUnion<T, Event>
	onchange?: ChangeEventHandlerUnion<T, Event>
	onclick?: EventHandlerUnion<T, MouseEvent>
	oncontextmenu?: EventHandlerUnion<T, MouseEvent>
	ondblclick?: EventHandlerUnion<T, MouseEvent>
	ondrag?: EventHandlerUnion<T, DragEvent>
	ondragend?: EventHandlerUnion<T, DragEvent>
	ondragenter?: EventHandlerUnion<T, DragEvent>
	ondragleave?: EventHandlerUnion<T, DragEvent>
	ondragover?: EventHandlerUnion<T, DragEvent>
	ondragstart?: EventHandlerUnion<T, DragEvent>
	ondrop?: EventHandlerUnion<T, DragEvent>
	ondurationchange?: EventHandlerUnion<T, Event>
	onemptied?: EventHandlerUnion<T, Event>
	onended?: EventHandlerUnion<T, Event>
	onerror?: EventHandlerUnion<T, Event>
	onfocus?: FocusEventHandlerUnion<T, FocusEvent>
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
	onscroll?: EventHandlerUnion<T, Event>
	onscrollend?: EventHandlerUnion<T, Event>
	onseeked?: EventHandlerUnion<T, Event>
	onseeking?: EventHandlerUnion<T, Event>
	onselect?: EventHandlerUnion<T, Event>
	onstalled?: EventHandlerUnion<T, Event>
	onsubmit?: EventHandlerUnion<T, SubmitEvent>
	onsuspend?: EventHandlerUnion<T, Event>
	ontimeupdate?: EventHandlerUnion<T, Event>
	ontoggle?: EventHandlerUnion<T, ToggleEvent>
	ontouchcancel?: EventHandlerUnion<T, TouchEvent>
	ontouchend?: EventHandlerUnion<T, TouchEvent>
	ontouchmove?: EventHandlerUnion<T, TouchEvent>
	ontouchstart?: EventHandlerUnion<T, TouchEvent>
	ontransitionstart?: EventHandlerUnion<T, TransitionEvent>
	ontransitionend?: EventHandlerUnion<T, TransitionEvent>
	ontransitionrun?: EventHandlerUnion<T, TransitionEvent>
	ontransitioncancel?: EventHandlerUnion<T, TransitionEvent>
	onvolumechange?: EventHandlerUnion<T, Event>
	onwaiting?: EventHandlerUnion<T, Event>
	onwheel?: EventHandlerUnion<T, WheelEvent>
}

// Voby - https://github.com/vobyjs/voby
interface EventAttributes<T extends EventTarget> {
	/* IMAGE EVENTS */
	onLoad?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onLoadCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onError?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onErrorCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	/* CLIPBOARD EVENTS */
	onCopy?: ObservableMaybe<Nullable<ClipboardEventHandler<T>>>
	onCopyCapture?: ObservableMaybe<Nullable<ClipboardEventHandler<T>>>
	onCut?: ObservableMaybe<Nullable<ClipboardEventHandler<T>>>
	onCutCapture?: ObservableMaybe<Nullable<ClipboardEventHandler<T>>>
	onPaste?: ObservableMaybe<Nullable<ClipboardEventHandler<T>>>
	onPasteCapture?: ObservableMaybe<Nullable<ClipboardEventHandler<T>>>
	/* COMPOSITION EVENTS */
	onCompositionEnd?: ObservableMaybe<Nullable<CompositionEventHandler<T>>>
	onCompositionEndCapture?: ObservableMaybe<Nullable<CompositionEventHandler<T>>>
	onCompositionStart?: ObservableMaybe<Nullable<CompositionEventHandler<T>>>
	onCompositionStartCapture?: ObservableMaybe<Nullable<CompositionEventHandler<T>>>
	onCompositionUpdate?: ObservableMaybe<Nullable<CompositionEventHandler<T>>>
	onCompositionUpdateCapture?: ObservableMaybe<Nullable<CompositionEventHandler<T>>>
	/* DETAILS EVENTS */
	onToggle?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	/* FOCUS EVENTS */
	onFocus?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	onFocusCapture?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	onFocusIn?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	onFocusInCapture?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	onFocusOut?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	onFocusOutCapture?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	onBlur?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	onBlurCapture?: ObservableMaybe<Nullable<FocusEventHandler<T>>>
	/* FORM EVENTS */
	onChange?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	onChangeCapture?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	onInput?: ObservableMaybe<Nullable<InputEventHandler<T>>>
	onInputCapture?: ObservableMaybe<Nullable<InputEventHandler<T>>>
	onBeforeInput?: ObservableMaybe<Nullable<InputEventHandler<T>>>
	onBeforeInputCapture?: ObservableMaybe<Nullable<InputEventHandler<T>>>
	onSearch?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSearchCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSubmit?: ObservableMaybe<Nullable<SubmitEventHandler<T>>>
	onSubmitCapture?: ObservableMaybe<Nullable<SubmitEventHandler<T>>>
	onInvalid?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onInvalidCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onReset?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onResetCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onFormData?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onFormDataCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	/* KEYBOARD EVENTS */
	onKeyDown?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	onKeyDownCapture?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	onKeyPress?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	onKeyPressCapture?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	onKeyUp?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	onKeyUpCapture?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
	/* MEDIA EVENTS */
	onAbort?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onAbortCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onCanPlay?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onCanPlayCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onCanPlayThrough?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onCanPlayThroughCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onDurationChange?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onDurationChangeCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onEmptied?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onEmptiedCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onEncrypted?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onEncryptedCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onEnded?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onEndedCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onLoadedData?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onLoadedDataCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onLoadedMetadata?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onLoadedMetadataCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onLoadStart?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onLoadStartCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onPause?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onPauseCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onPlay?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onPlayCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onPlaying?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onPlayingCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onProgress?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onProgressCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onRateChange?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onRateChangeCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSeeked?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSeekedCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSeeking?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSeekingCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onStalled?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onStalledCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSuspend?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSuspendCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onTimeUpdate?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onTimeUpdateCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onVolumeChange?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onVolumeChangeCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onWaiting?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onWaitingCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	/* MOUSE EVENTS */
	onAuxClick?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onAuxClickCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onClick?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onClickCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onContextMenu?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onContextMenuCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onDblClick?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onDblClickCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onDrag?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragEnd?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragEndCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragEnter?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragEnterCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragExit?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragExitCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragLeave?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragLeaveCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragOver?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragOverCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragStart?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDragStartCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDrop?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onDropCapture?: ObservableMaybe<Nullable<DragEventHandler<T>>>
	onMiddleClick?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMiddleClickCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseDown?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseDownCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseEnter?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseEnterCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseLeave?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseLeaveCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseMove?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseMoveCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseOut?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseOutCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseOver?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseOverCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseUp?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	onMouseUpCapture?: ObservableMaybe<Nullable<MouseEventHandler<T>>>
	/* SELECTION EVENTS */
	onSelect?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	onSelectCapture?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
	/* TOUCH EVENTS */
	onTouchCancel?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	onTouchCancelCapture?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	onTouchEnd?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	onTouchEndCapture?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	onTouchMove?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	onTouchMoveCapture?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	onTouchStart?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	onTouchStartCapture?: ObservableMaybe<Nullable<TouchEventHandler<T>>>
	/* POINTER EVENTS */
	onPointerOver?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerOverCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerEnter?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerEnterCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerDown?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerDownCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerMove?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerMoveCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerUp?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerUpCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerCancel?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerCancelCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerOut?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerOutCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerLeave?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onPointerLeaveCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onGotPointerCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onGotPointerCaptureCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onLostPointerCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	onLostPointerCaptureCapture?: ObservableMaybe<Nullable<PointerEventHandler<T>>>
	/* UI EVENTS */
	onScroll?: ObservableMaybe<Nullable<UIEventHandler<T>>>
	onScrollPassive?: ObservableMaybe<Nullable<UIEventHandler<T>>>
	onScrollCapture?: ObservableMaybe<Nullable<UIEventHandler<T>>>
	onScrollCapturePassive?: ObservableMaybe<Nullable<UIEventHandler<T>>>
	onScrollEnd?: ObservableMaybe<Nullable<UIEventHandler<T>>>
	onScrollEndPassive?: ObservableMaybe<Nullable<UIEventHandler<T>>>
	/* WHEEL EVENTS */
	onWheel?: ObservableMaybe<Nullable<WheelEventHandler<T>>>
	onWheelPassive?: ObservableMaybe<Nullable<WheelEventHandler<T>>>
	onWheelCapture?: ObservableMaybe<Nullable<WheelEventHandler<T>>>
	onWheelCapturePassive?: ObservableMaybe<Nullable<WheelEventHandler<T>>>
	/* ANIMATION EVENTS */
	onAnimationStart?: ObservableMaybe<Nullable<AnimationEventHandler<T>>>
	onAnimationStartCapture?: ObservableMaybe<Nullable<AnimationEventHandler<T>>>
	onAnimationEnd?: ObservableMaybe<Nullable<AnimationEventHandler<T>>>
	onAnimationEndCapture?: ObservableMaybe<Nullable<AnimationEventHandler<T>>>
	onAnimationIteration?: ObservableMaybe<Nullable<AnimationEventHandler<T>>>
	onAnimationIterationCapture?: ObservableMaybe<Nullable<AnimationEventHandler<T>>>
	/* TRANSITION EVENTS */
	onTransitionEnd?: ObservableMaybe<Nullable<TransitionEventHandler<T>>>
	onTransitionEndCapture?: ObservableMaybe<Nullable<TransitionEventHandler<T>>>
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

	// Details Events
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
