// Solid Main - https://www.solidjs.com/
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// [key: ClassKeys]: boolean;
	about?: string
	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	class?: string
	color?: string
	contenteditable?: 'true' | 'false' | boolean | 'plaintext-only' | 'inherit'
	contextmenu?: string
	datatype?: string
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: boolean | 'false' | 'true'
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	inert?: boolean
	inlist?: any
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
	is?: string
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: boolean
	itemtype?: string
	lang?: string
	part?: string
	popover?: boolean | 'manual' | 'auto'
	prefix?: string
	property?: string
	resource?: string
	slot?: string
	spellcheck?: 'true' | 'false' | boolean
	style?: CSSProperties | string
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'
	typeof?: string
	vocab?: string

	accessKey?: string
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	contentEditable?: boolean | 'plaintext-only' | 'inherit'
	contextMenu?: string
	exportParts?: string
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	itemId?: string
	itemProp?: string
	itemRef?: string
	itemScope?: boolean
	itemType?: string
	tabIndex?: number | string
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

// Solid Minor - https://www.solidjs.com/
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// [key: ClassKeys]: boolean;
	about?: string
	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	class?: string
	color?: string
	contenteditable?: 'true' | 'false' | boolean | 'plaintext-only' | 'inherit'
	contextmenu?: string
	datatype?: string
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: boolean | 'false' | 'true'
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	inert?: '' | boolean
	inlist?: any
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
	is?: string
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: '' | boolean
	itemtype?: string
	lang?: string
	part?: string
	popover?: boolean | 'manual' | 'auto'
	prefix?: string
	property?: string
	resource?: string
	slot?: string
	spellcheck?: 'true' | 'false' | boolean
	style?: CSSProperties | string
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'
	typeof?: string
	vocab?: string

	/** @deprecated Use lowercase attributes */
	accessKey?: string
	/** @deprecated Use lowercase attributes */
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	/** @deprecated Use lowercase attributes */
	contentEditable?: boolean | 'plaintext-only' | 'inherit'
	/** @deprecated Use lowercase attributes */
	contextMenu?: string
	/** @deprecated Use lowercase attributes */
	exportParts?: string
	/** @deprecated Use lowercase attributes */
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	/** @deprecated Use lowercase attributes */
	itemId?: string
	/** @deprecated Use lowercase attributes */
	itemProp?: string
	/** @deprecated Use lowercase attributes */
	itemRef?: string
	/** @deprecated Use lowercase attributes */
	itemScope?: boolean
	/** @deprecated Use lowercase attributes */
	itemType?: string
	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
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

// Solid Next - https://www.solidjs.com/
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// [key: ClassKeys]: boolean;
	about?: string | false
	accesskey?: string | false
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | false
	class?: string | ClassList | false
	color?: string | false
	contenteditable?: 'false' | 'true' | '' | true | 'plaintext-only' | 'inherit' | false
	contextmenu?: string | false
	datatype?: string | false
	dir?: 'ltr' | 'rtl' | 'auto' | false
	draggable?: 'false' | 'true' | false
	exportparts?: string | false
	hidden?: '' | true | 'hidden' | 'until-found' | false
	id?: string | false
	inert?: true | false | '' | false
	inlist?: any | false
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url' | false
	is?: string | false
	itemid?: string | false
	itemprop?: string | false
	itemref?: string | false
	itemscope?: true | false | '' | false
	itemtype?: string | false
	lang?: string | false
	part?: string | false
	popover?: '' | true | 'manual' | 'auto' | false
	prefix?: string | false
	property?: string | false
	resource?: string | false
	slot?: string | false
	spellcheck?: 'false' | 'true' | '' | true | false
	style?: CSSProperties | string | false
	tabindex?: number | string | false
	title?: string | false
	translate?: 'yes' | 'no' | false
	typeof?: string | false
	vocab?: string | false

	/** @deprecated Use lowercase attributes */
	accessKey?: string | false
	/** @deprecated Use lowercase attributes */
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | false
	/** @deprecated Use lowercase attributes */
	contentEditable?: 'false' | 'true' | 'plaintext-only' | 'inherit' | false
	/** @deprecated Use lowercase attributes */
	contextMenu?: string | false
	/** @deprecated Use lowercase attributes */
	exportParts?: string | false
	/** @deprecated Use lowercase attributes */
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | false
	/** @deprecated Use lowercase attributes */
	itemId?: string | false
	/** @deprecated Use lowercase attributes */
	itemProp?: string | false
	/** @deprecated Use lowercase attributes */
	itemRef?: string | false
	/** @deprecated Use lowercase attributes */
	itemScope?: true | false | '' | false
	/** @deprecated Use lowercase attributes */
	itemType?: string | false
	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
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

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface HTMLAttributes<RefType extends EventTarget = EventTarget> extends ClassAttributes<RefType>, DOMAttributes<RefType>, AriaAttributes {
	// Standard HTML Attributes
	accesskey?: string
	accessKey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	autocorrect?: string
	autoCorrect?: string
	autofocus?: boolean
	autoFocus?: boolean
	class?: string
	className?: string
	contenteditable?: boolean | 'true' | 'false' | '' | 'plaintext-only' | 'inherit'
	contentEditable?: boolean | 'true' | 'false' | '' | 'plaintext-only' | 'inherit'
	dir?: 'auto' | 'rtl' | 'ltr'
	draggable?: boolean
	enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	inert?: boolean
	inputmode?: string
	inputMode?: string
	is?: string
	lang?: string
	nonce?: string
	part?: string
	popover?: 'auto' | 'hint' | 'manual' | boolean
	slot?: string
	spellcheck?: boolean
	style?: string | CSSProperties
	tabindex?: number
	tabIndex?: number
	title?: string
	translate?: boolean

	// WAI-ARIA Attributes
	role?: AriaRole

	// Non-standard Attributes
	disablePictureInPicture?: boolean
	elementtiming?: string
	elementTiming?: string
	results?: number

	// RDFa Attributes
	about?: string
	datatype?: string
	inlist?: any
	prefix?: string
	property?: string
	resource?: string
	typeof?: string
	vocab?: string

	// Microdata Attributes
	itemid?: string
	itemID?: string
	itemprop?: string
	itemProp?: string
	itemref?: string
	itemRef?: string
	itemscope?: boolean
	itemScope?: boolean
	itemtype?: string
	itemType?: string
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
