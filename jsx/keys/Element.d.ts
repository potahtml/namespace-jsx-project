// Solid Main - https://www.solidjs.com/
interface AriaAttributes {
	'aria-activedescendant'?: string

	'aria-atomic'?: boolean | 'false' | 'true'

	'aria-braillelabel'?: string

	'aria-brailleroledescription'?: string

	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'

	'aria-busy'?: boolean | 'false' | 'true'

	'aria-checked'?: boolean | 'false' | 'mixed' | 'true'

	'aria-colcount'?: number | string

	'aria-colindex'?: number | string

	'aria-colindextext'?: number | string

	'aria-colspan'?: number | string

	'aria-controls'?: string

	'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'

	'aria-describedby'?: string

	'aria-description'?: string

	'aria-details'?: string

	'aria-disabled'?: boolean | 'false' | 'true'

	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'

	'aria-errormessage'?: string

	'aria-expanded'?: boolean | 'false' | 'true'

	'aria-flowto'?: string

	'aria-grabbed'?: boolean | 'false' | 'true'

	'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'

	'aria-hidden'?: boolean | 'false' | 'true'

	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'

	'aria-keyshortcuts'?: string

	'aria-label'?: string

	'aria-labelledby'?: string

	'aria-level'?: number | string

	'aria-live'?: 'off' | 'assertive' | 'polite'

	'aria-modal'?: boolean | 'false' | 'true'

	'aria-multiline'?: boolean | 'false' | 'true'

	'aria-multiselectable'?: boolean | 'false' | 'true'

	'aria-orientation'?: 'horizontal' | 'vertical'

	'aria-owns'?: string

	'aria-placeholder'?: string

	'aria-posinset'?: number | string

	'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'

	'aria-readonly'?: boolean | 'false' | 'true'

	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'

	'aria-required'?: boolean | 'false' | 'true'

	'aria-roledescription'?: string

	'aria-rowcount'?: number | string

	'aria-rowindex'?: number | string

	'aria-rowindextext'?: number | string

	'aria-rowspan'?: number | string

	'aria-selected'?: boolean | 'false' | 'true'

	'aria-setsize'?: number | string

	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'

	'aria-valuemax'?: number | string

	'aria-valuemin'?: number | string

	'aria-valuenow'?: number | string

	'aria-valuetext'?: string
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem'
}
interface DOMAttributes<T> extends CustomAttributes<T>, DirectiveAttributes, DirectiveFunctionAttributes<T>, PropAttributes, AttrAttributes, BoolAttributes, OnAttributes<T>, OnCaptureAttributes<T>, CustomEventHandlersCamelCase<T>, CustomEventHandlersLowerCase<T>, CustomEventHandlersNamespaced<T>, AriaAttributes {
	innerHTML?: string
	textContent?: string | number

	autofocus?: boolean
	class?: string
	elementtiming?: string
	id?: string
	nonce?: string
	slot?: string
	style?: CSSProperties | string
	tabindex?: number | string

	tabIndex?: number | string
}
interface CustomEventHandlersCamelCase<T> {
	onAbort?: EventHandlerUnion<T, UIEvent>
	onAnimationCancel?: EventHandlerUnion<T, AnimationEvent>
	onAnimationEnd?: EventHandlerUnion<T, AnimationEvent>
	onAnimationIteration?: EventHandlerUnion<T, AnimationEvent>
	onAnimationStart?: EventHandlerUnion<T, AnimationEvent>
	onAuxClick?: EventHandlerUnion<T, PointerEvent>
	onBeforeCopy?: EventHandlerUnion<T, ClipboardEvent>
	onBeforeCut?: EventHandlerUnion<T, ClipboardEvent>
	onBeforeInput?: InputEventHandlerUnion<T, InputEvent>
	onBeforeMatch?: EventHandlerUnion<T, Event>
	onBeforePaste?: EventHandlerUnion<T, ClipboardEvent>
	onBeforeToggle?: EventHandlerUnion<T, ToggleEvent>
	onBeforeXRSelect?: EventHandlerUnion<T, Event>
	onBlur?: FocusEventHandlerUnion<T, FocusEvent>
	onCancel?: EventHandlerUnion<T, Event>
	onCanPlay?: EventHandlerUnion<T, Event>
	onCanPlayThrough?: EventHandlerUnion<T, Event>
	onChange?: ChangeEventHandlerUnion<T, Event>
	onClick?: EventHandlerUnion<T, MouseEvent>
	onClose?: EventHandlerUnion<T, Event>

	onCommand?: EventHandlerUnion<T, Event>
	onCompositionEnd?: EventHandlerUnion<T, CompositionEvent>
	onCompositionStart?: EventHandlerUnion<T, CompositionEvent>
	onCompositionUpdate?: EventHandlerUnion<T, CompositionEvent>
	onContentVisibilityAutoStateChange?: EventHandlerUnion<T, ContentVisibilityAutoStateChangeEvent>
	onContextLost?: EventHandlerUnion<T, Event>
	onContextMenu?: EventHandlerUnion<T, PointerEvent>
	onContextRestored?: EventHandlerUnion<T, Event>
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
	onFormData?: EventHandlerUnion<T, FormDataEvent>
	onFullscreenChange?: EventHandlerUnion<T, Event>
	onFullscreenError?: EventHandlerUnion<T, Event>
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
	onPointerRawUpdate?: EventHandlerUnion<T, PointerEvent>
	onPointerUp?: EventHandlerUnion<T, PointerEvent>
	onProgress?: EventHandlerUnion<T, ProgressEvent>
	onRateChange?: EventHandlerUnion<T, Event>
	onReset?: EventHandlerUnion<T, Event>
	onResize?: EventHandlerUnion<T, UIEvent>
	onScroll?: EventHandlerUnion<T, Event>
	onScrollEnd?: EventHandlerUnion<T, Event>

	onScrollSnapChange?: EventHandlerUnion<T, Event>

	onScrollSnapChanging?: EventHandlerUnion<T, Event>
	onSecurityPolicyViolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	onSeeked?: EventHandlerUnion<T, Event>
	onSeeking?: EventHandlerUnion<T, Event>
	onSelect?: EventHandlerUnion<T, Event>
	onSelectionChange?: EventHandlerUnion<T, Event>
	onSelectStart?: EventHandlerUnion<T, Event>
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
	onbeforecopy?: EventHandlerUnion<T, ClipboardEvent>
	onbeforecut?: EventHandlerUnion<T, ClipboardEvent>
	onbeforeinput?: InputEventHandlerUnion<T, InputEvent>
	onbeforematch?: EventHandlerUnion<T, Event>
	onbeforepaste?: EventHandlerUnion<T, ClipboardEvent>
	onbeforetoggle?: EventHandlerUnion<T, ToggleEvent>
	onbeforexrselect?: EventHandlerUnion<T, Event>
	onblur?: FocusEventHandlerUnion<T, FocusEvent>
	oncancel?: EventHandlerUnion<T, Event>
	oncanplay?: EventHandlerUnion<T, Event>
	oncanplaythrough?: EventHandlerUnion<T, Event>
	onchange?: ChangeEventHandlerUnion<T, Event>
	onclick?: EventHandlerUnion<T, MouseEvent>
	onclose?: EventHandlerUnion<T, Event>

	oncommand?: EventHandlerUnion<T, Event>
	oncompositionend?: EventHandlerUnion<T, CompositionEvent>
	oncompositionstart?: EventHandlerUnion<T, CompositionEvent>
	oncompositionupdate?: EventHandlerUnion<T, CompositionEvent>
	oncontentvisibilityautostatechange?: EventHandlerUnion<T, ContentVisibilityAutoStateChangeEvent>
	oncontextlost?: EventHandlerUnion<T, Event>
	oncontextmenu?: EventHandlerUnion<T, PointerEvent>
	oncontextrestored?: EventHandlerUnion<T, Event>
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
	onformdata?: EventHandlerUnion<T, FormDataEvent>
	onfullscreenchange?: EventHandlerUnion<T, Event>
	onfullscreenerror?: EventHandlerUnion<T, Event>
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
	onpointerrawupdate?: EventHandlerUnion<T, PointerEvent>
	onpointerup?: EventHandlerUnion<T, PointerEvent>
	onprogress?: EventHandlerUnion<T, ProgressEvent>
	onratechange?: EventHandlerUnion<T, Event>
	onreset?: EventHandlerUnion<T, Event>
	onresize?: EventHandlerUnion<T, UIEvent>
	onscroll?: EventHandlerUnion<T, Event>
	onscrollend?: EventHandlerUnion<T, Event>

	onscrollsnapchange?: EventHandlerUnion<T, Event>

	onscrollsnapchanging?: EventHandlerUnion<T, Event>
	onsecuritypolicyviolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	onseeked?: EventHandlerUnion<T, Event>
	onseeking?: EventHandlerUnion<T, Event>
	onselect?: EventHandlerUnion<T, Event>
	onselectionchange?: EventHandlerUnion<T, Event>
	onselectstart?: EventHandlerUnion<T, Event>
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
	'on:beforecopy'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:beforecut'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:beforeinput'?: EventHandlerWithOptionsUnion<T, InputEvent, InputEventHandler<T, InputEvent>>
	'on:beforematch'?: EventHandlerWithOptionsUnion<T, Event>
	'on:beforepaste'?: EventHandlerWithOptionsUnion<T, ClipboardEvent>
	'on:beforetoggle'?: EventHandlerWithOptionsUnion<T, ToggleEvent>
	'on:beforexrselect'?: EventHandlerWithOptionsUnion<T, Event>
	'on:blur'?: EventHandlerWithOptionsUnion<T, FocusEvent, FocusEventHandler<T, FocusEvent>>
	'on:cancel'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplay'?: EventHandlerWithOptionsUnion<T, Event>
	'on:canplaythrough'?: EventHandlerWithOptionsUnion<T, Event>
	'on:change'?: EventHandlerWithOptionsUnion<T, Event, ChangeEventHandler<T, Event>>
	'on:click'?: EventHandlerWithOptionsUnion<T, MouseEvent>
	'on:close'?: EventHandlerWithOptionsUnion<T, Event>

	'on:command'?: EventHandlerWithOptionsUnion<T, Event>
	'on:compositionend'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionstart'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:compositionupdate'?: EventHandlerWithOptionsUnion<T, CompositionEvent>
	'on:contentvisibilityautostatechange'?: EventHandlerWithOptionsUnion<T, ContentVisibilityAutoStateChangeEvent>
	'on:contextlost'?: EventHandlerWithOptionsUnion<T, Event>
	'on:contextmenu'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:contextrestored'?: EventHandlerWithOptionsUnion<T, Event>
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
	'on:formdata'?: EventHandlerWithOptionsUnion<T, FormDataEvent>
	'on:fullscreenchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:fullscreenerror'?: EventHandlerWithOptionsUnion<T, Event>
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
	'on:pointerrawupdate'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:pointerup'?: EventHandlerWithOptionsUnion<T, PointerEvent>
	'on:progress'?: EventHandlerWithOptionsUnion<T, ProgressEvent>
	'on:ratechange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:reset'?: EventHandlerWithOptionsUnion<T, Event>
	'on:resize'?: EventHandlerWithOptionsUnion<T, UIEvent>
	'on:scroll'?: EventHandlerWithOptionsUnion<T, Event>
	'on:scrollend'?: EventHandlerWithOptionsUnion<T, Event>

	'on:scrollsnapchange'?: EventHandlerWithOptionsUnion<T, Event>

	'on:scrollsnapchanging'?: EventHandlerWithOptionsUnion<T, Event>
	'on:securitypolicyviolation'?: EventHandlerWithOptionsUnion<T, SecurityPolicyViolationEvent>
	'on:seeked'?: EventHandlerWithOptionsUnion<T, Event>
	'on:seeking'?: EventHandlerWithOptionsUnion<T, Event>
	'on:select'?: EventHandlerWithOptionsUnion<T, Event>
	'on:selectionchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:selectstart'?: EventHandlerWithOptionsUnion<T, Event>
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
interface DirectiveAttributes {
	'use:*'?: Directives[Key]
}
interface PropAttributes {
	'prop:*'?: ExplicitProperties[Key]
}
interface AttrAttributes {
	'attr:*'?: ExplicitAttributes[Key]
}
interface BoolAttributes {
	'bool:*'?: ExplicitBoolAttributes[Key]
}
interface OnAttributes<T> {
	'on:*'?: EventHandlerWithOptionsUnion<T, CustomEvents[Key]>
}
interface OnCaptureAttributes<T> {
	'oncapture:*'?: EventHandler<T, CustomCaptureEvents[Key]>
}

// Solid Next - https://www.solidjs.com/
interface AriaAttributes {
	'aria-activedescendant'?: string | false

	'aria-atomic'?: 'false' | 'true' | false

	'aria-braillelabel'?: string | false

	'aria-brailleroledescription'?: string | false

	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | false

	'aria-busy'?: 'false' | 'true' | false

	'aria-checked'?: 'false' | 'true' | 'mixed' | false

	'aria-colcount'?: number | string | false

	'aria-colindex'?: number | string | false

	'aria-colindextext'?: number | string | false

	'aria-colspan'?: number | string | false

	'aria-controls'?: string | false

	'aria-current'?: 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time' | false

	'aria-describedby'?: string | false

	'aria-description'?: string | false

	'aria-details'?: string | false

	'aria-disabled'?: 'false' | 'true' | false

	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | false

	'aria-errormessage'?: string | false

	'aria-expanded'?: 'false' | 'true' | false

	'aria-flowto'?: string | false

	'aria-grabbed'?: 'false' | 'true' | false

	'aria-haspopup'?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | false

	'aria-hidden'?: 'false' | 'true' | false

	'aria-invalid'?: 'false' | 'true' | 'grammar' | 'spelling' | false

	'aria-keyshortcuts'?: string | false

	'aria-label'?: string | false

	'aria-labelledby'?: string | false

	'aria-level'?: number | string | false

	'aria-live'?: 'off' | 'assertive' | 'polite' | false

	'aria-modal'?: 'false' | 'true' | false

	'aria-multiline'?: 'false' | 'true' | false

	'aria-multiselectable'?: 'false' | 'true' | false

	'aria-orientation'?: 'horizontal' | 'vertical' | false

	'aria-owns'?: string | false

	'aria-placeholder'?: string | false

	'aria-posinset'?: number | string | false

	'aria-pressed'?: 'false' | 'true' | 'mixed' | false

	'aria-readonly'?: 'false' | 'true' | false

	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals' | false

	'aria-required'?: 'false' | 'true' | false

	'aria-roledescription'?: string | false

	'aria-rowcount'?: number | string | false

	'aria-rowindex'?: number | string | false

	'aria-rowindextext'?: number | string | false

	'aria-rowspan'?: number | string | false

	'aria-selected'?: 'false' | 'true' | false

	'aria-setsize'?: number | string | false

	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | false

	'aria-valuemax'?: number | string | false

	'aria-valuemin'?: number | string | false

	'aria-valuenow'?: number | string | false

	'aria-valuetext'?: string | false
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | false
}
interface ElementAttributes<T> extends CustomAttributes<T>, PropAttributes, EventHandlersElement<T>, AriaAttributes {
	innerHTML?: string
	textContent?: string | number

	autofocus?: true | false | '' | false

	class?: string | number | boolean | null | Record<string, boolean> | ClassValue[] | false
	elementtiming?: string | false
	id?: string | false
	nonce?: string | false
	part?: string | false
	slot?: string | false
	style?: CSSProperties | string | false
	tabindex?: number | string | false
}
interface EventHandlersElement<T> {
	onAbort?: EventHandlerUnion<T, UIEvent>
	onAnimationCancel?: EventHandlerUnion<T, AnimationEvent>
	onAnimationEnd?: EventHandlerUnion<T, AnimationEvent>
	onAnimationIteration?: EventHandlerUnion<T, AnimationEvent>
	onAnimationStart?: EventHandlerUnion<T, AnimationEvent>
	onAuxClick?: EventHandlerUnion<T, PointerEvent>
	onBeforeCopy?: EventHandlerUnion<T, ClipboardEvent>
	onBeforeCut?: EventHandlerUnion<T, ClipboardEvent>
	onBeforeInput?: InputEventHandlerUnion<T, InputEvent>
	onBeforeMatch?: EventHandlerUnion<T, Event>
	onBeforePaste?: EventHandlerUnion<T, ClipboardEvent>
	onBeforeToggle?: EventHandlerUnion<T, ToggleEvent>
	onBeforeXRSelect?: EventHandlerUnion<T, Event>
	onBlur?: FocusEventHandlerUnion<T, FocusEvent>
	onCancel?: EventHandlerUnion<T, Event>
	onCanPlay?: EventHandlerUnion<T, Event>
	onCanPlayThrough?: EventHandlerUnion<T, Event>
	onChange?: ChangeEventHandlerUnion<T, Event>
	onClick?: EventHandlerUnion<T, MouseEvent>
	onClose?: EventHandlerUnion<T, Event>
	onCommand?: EventHandlerUnion<T, CommandEvent>
	onCompositionEnd?: EventHandlerUnion<T, CompositionEvent>
	onCompositionStart?: EventHandlerUnion<T, CompositionEvent>
	onCompositionUpdate?: EventHandlerUnion<T, CompositionEvent>
	onContentVisibilityAutoStateChange?: EventHandlerUnion<T, ContentVisibilityAutoStateChangeEvent>
	onContextLost?: EventHandlerUnion<T, Event>
	onContextMenu?: EventHandlerUnion<T, PointerEvent>
	onContextRestored?: EventHandlerUnion<T, Event>
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
	onFormData?: EventHandlerUnion<T, FormDataEvent>
	onFullscreenChange?: EventHandlerUnion<T, Event>
	onFullscreenError?: EventHandlerUnion<T, Event>
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
	onPointerRawUpdate?: EventHandlerUnion<T, PointerEvent>
	onPointerUp?: EventHandlerUnion<T, PointerEvent>
	onProgress?: EventHandlerUnion<T, ProgressEvent>
	onRateChange?: EventHandlerUnion<T, Event>
	onReset?: EventHandlerUnion<T, Event>
	onResize?: EventHandlerUnion<T, UIEvent>
	onScroll?: EventHandlerUnion<T, Event>
	onScrollEnd?: EventHandlerUnion<T, Event>
	onScrollSnapChange?: EventHandlerUnion<T, SnapEvent>
	onScrollSnapChanging?: EventHandlerUnion<T, SnapEvent>
	onSecurityPolicyViolation?: EventHandlerUnion<T, SecurityPolicyViolationEvent>
	onSeeked?: EventHandlerUnion<T, Event>
	onSeeking?: EventHandlerUnion<T, Event>
	onSelect?: EventHandlerUnion<T, Event>
	onSelectionChange?: EventHandlerUnion<T, Event>
	onSelectStart?: EventHandlerUnion<T, Event>
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
interface PropAttributes {
	'prop:*'?: ExplicitProperties[Key]
}

// Voby - https://github.com/vobyjs/voby
interface AriaAttributes {
	ariaActiveDescendant?: string
	ariaAtomic?: boolean | 'true' | 'false'
	ariaAutoComplete?: 'none' | 'inline' | 'list' | 'both'
	ariaBrailleLabel?: string
	ariaBrailleLabelRoleDescription?: string
	ariaBusy?: boolean | 'true' | 'false'
	ariaChecked?: boolean | 'false' | 'mixed' | 'true'
	ariaColCount?: number
	ariaColIndex?: number
	ariaColSpan?: number
	ariaControls?: string
	ariaCurrent?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'
	ariaDescription?: string
	ariaDescribedBy?: string
	ariaDetails?: string
	ariaDisabled?: boolean | 'true' | 'false'
	ariaDropEffect?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
	ariaErrorMessage?: string
	ariaExpanded?: boolean | 'true' | 'false'
	ariaFlowTo?: string
	ariaGrabbed?: boolean | 'true' | 'false'
	ariaHasPopup?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
	ariaHidden?: boolean | 'true' | 'false'
	ariaInvalid?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
	ariaKeyShortcuts?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	ariaLevel?: number
	ariaLive?: 'off' | 'assertive' | 'polite'
	ariaModal?: boolean | 'true' | 'false'
	ariaMultiLine?: boolean | 'true' | 'false'
	ariaMultiSelectable?: boolean | 'true' | 'false'
	ariaOrientation?: 'horizontal' | 'vertical'
	ariaOwns?: string
	ariaPlaceholder?: string
	ariaPosInSet?: number
	ariaPressed?: boolean | 'false' | 'mixed' | 'true'
	ariaReadOnly?: boolean | 'true' | 'false'
	ariaRelevant?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
	ariaRequired?: boolean | 'true' | 'false'
	ariaRoleDescription?: string
	ariaRowCount?: number
	ariaRowIndex?: number
	ariaRowSpan?: number
	ariaSelected?: boolean | 'true' | 'false'
	ariaSetSize?: number
	ariaSort?: 'none' | 'ascending' | 'descending' | 'other'
	ariaValueMax?: number
	ariaValueMin?: number
	ariaValueNow?: number
	ariaValueText?: string
}
interface DirectiveAttributes {
	'use:*'?: Directives[Directive] extends [infer U] ? U | [U] : Directives[Directive]
}

// Vue - https://vuejs.org/
interface AriaAttributes {
	'aria-activedescendant'?: string

	'aria-atomic'?: boolean | 'true' | 'false'

	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'

	'aria-busy'?: boolean | 'true' | 'false'

	'aria-checked'?: boolean | 'true' | 'false' | 'mixed'

	'aria-colcount'?: number | string

	'aria-colindex'?: number | string

	'aria-colspan'?: number | string

	'aria-controls'?: string

	'aria-current'?: boolean | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'

	'aria-describedby'?: string

	'aria-details'?: string

	'aria-disabled'?: boolean | 'true' | 'false'

	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'

	'aria-errormessage'?: string

	'aria-expanded'?: boolean | 'true' | 'false'

	'aria-flowto'?: string

	'aria-grabbed'?: boolean | 'true' | 'false'

	'aria-haspopup'?: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'

	'aria-hidden'?: boolean | 'true' | 'false'

	'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling'

	'aria-keyshortcuts'?: string

	'aria-label'?: string

	'aria-labelledby'?: string

	'aria-level'?: number | string

	'aria-live'?: 'off' | 'assertive' | 'polite'

	'aria-modal'?: boolean | 'true' | 'false'

	'aria-multiline'?: boolean | 'true' | 'false'

	'aria-multiselectable'?: boolean | 'true' | 'false'

	'aria-orientation'?: 'horizontal' | 'vertical'

	'aria-owns'?: string

	'aria-placeholder'?: string

	'aria-posinset'?: number | string

	'aria-pressed'?: boolean | 'true' | 'false' | 'mixed'

	'aria-readonly'?: boolean | 'true' | 'false'

	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'

	'aria-required'?: boolean | 'true' | 'false'

	'aria-roledescription'?: string

	'aria-rowcount'?: number | string

	'aria-rowindex'?: number | string

	'aria-rowspan'?: number | string

	'aria-selected'?: boolean | 'true' | 'false'

	'aria-setsize'?: number | string

	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'

	'aria-valuemax'?: number | string

	'aria-valuemin'?: number | string

	'aria-valuenow'?: number | string

	'aria-valuetext'?: string
}

// React - https://react.dev/
interface AriaAttributes {
	'aria-activedescendant'?: string

	'aria-atomic'?: boolean | 'true' | 'false'

	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'

	'aria-braillelabel'?: string

	'aria-brailleroledescription'?: string
	'aria-busy'?: boolean | 'true' | 'false'

	'aria-checked'?: boolean | 'false' | 'mixed' | 'true'

	'aria-colcount'?: number

	'aria-colindex'?: number

	'aria-colindextext'?: string

	'aria-colspan'?: number

	'aria-controls'?: string

	'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'

	'aria-describedby'?: string

	'aria-description'?: string

	'aria-details'?: string

	'aria-disabled'?: boolean | 'true' | 'false'

	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'

	'aria-errormessage'?: string

	'aria-expanded'?: boolean | 'true' | 'false'

	'aria-flowto'?: string

	'aria-grabbed'?: boolean | 'true' | 'false'

	'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'

	'aria-hidden'?: boolean | 'true' | 'false'

	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'

	'aria-keyshortcuts'?: string

	'aria-label'?: string

	'aria-labelledby'?: string

	'aria-level'?: number

	'aria-live'?: 'off' | 'assertive' | 'polite'

	'aria-modal'?: boolean | 'true' | 'false'

	'aria-multiline'?: boolean | 'true' | 'false'

	'aria-multiselectable'?: boolean | 'true' | 'false'

	'aria-orientation'?: 'horizontal' | 'vertical'

	'aria-owns'?: string

	'aria-placeholder'?: string

	'aria-posinset'?: number

	'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'

	'aria-readonly'?: boolean | 'true' | 'false'

	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'

	'aria-required'?: boolean | 'true' | 'false'

	'aria-roledescription'?: string

	'aria-rowcount'?: number

	'aria-rowindex'?: number

	'aria-rowindextext'?: string

	'aria-rowspan'?: number

	'aria-selected'?: boolean | 'true' | 'false'

	'aria-setsize'?: number

	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'

	'aria-valuemax'?: number

	'aria-valuemin'?: number

	'aria-valuenow'?: number

	'aria-valuetext'?: string
}

// Pota - https://github.com/potahtml/pota
interface CSSAttributes extends NSStyle {
	class?: string | Array<string | false | null> | Record<string, string | boolean | number | null>
	style?: { [P in keyof CSSProperties]: CSSProperties[P] } | string
	'use:css'?: string
	[attr: `class:${string}`]: string | boolean | number | null
}
interface ElementAttributes<Element> extends PotaAttributes<Element>, CSSAttributes, AriaAttributes, EventHandlersElement<Element> {
	'prop:innerHTML'?: number | string
	'prop:textContent'?: number | string

	xmlns?: string
	[attr: `xmlns:${string}`]: string

	autofocus?: boolean | ''
	elementtiming?: string
	id?: string
	nonce?: string
	part?: string
	slot?: string
	tabindex?: number | string
}
interface AriaAttributes {
	'aria-activedescendant'?: string

	'aria-atomic'?: 'false' | 'true'

	'aria-braillelabel'?: string

	'aria-brailleroledescription'?: string

	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'

	'aria-busy'?: 'false' | 'true'

	'aria-checked'?: 'false' | 'true' | 'mixed'

	'aria-colcount'?: number | string

	'aria-colindex'?: number | string

	'aria-colindextext'?: number | string

	'aria-colspan'?: number | string

	'aria-controls'?: string

	'aria-current'?: 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'

	'aria-describedby'?: string

	'aria-description'?: string

	'aria-details'?: string

	'aria-disabled'?: 'false' | 'true'

	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'

	'aria-errormessage'?: string

	'aria-expanded'?: 'false' | 'true'

	'aria-flowto'?: string

	'aria-grabbed'?: 'false' | 'true'

	'aria-haspopup'?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'

	'aria-hidden'?: 'false' | 'true'

	'aria-invalid'?: 'false' | 'true' | 'grammar' | 'spelling'

	'aria-keyshortcuts'?: string

	'aria-label'?: string

	'aria-labelledby'?: string

	'aria-level'?: number | string

	'aria-live'?: 'off' | 'assertive' | 'polite'

	'aria-modal'?: 'false' | 'true'

	'aria-multiline'?: 'false' | 'true'

	'aria-multiselectable'?: 'false' | 'true'

	'aria-orientation'?: 'horizontal' | 'vertical'

	'aria-owns'?: string

	'aria-placeholder'?: string

	'aria-posinset'?: number | string

	'aria-pressed'?: 'false' | 'true' | 'mixed'

	'aria-readonly'?: 'false' | 'true'

	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'

	'aria-required'?: 'false' | 'true'

	'aria-roledescription'?: string

	'aria-rowcount'?: number | string

	'aria-rowindex'?: number | string

	'aria-rowindextext'?: number | string

	'aria-rowspan'?: number | string

	'aria-selected'?: 'false' | 'true'

	'aria-setsize'?: number | string

	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'

	'aria-valuemax'?: number | string

	'aria-valuemin'?: number | string

	'aria-valuenow'?: number | string

	'aria-valuetext'?: string
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'blockquote' | 'button' | 'caption' | 'cell' | 'checkbox' | 'code' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'deletion' | 'dialog' | 'directory' | 'document' | 'emphasis' | 'feed' | 'figure' | 'form' | 'generic' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'insertion' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'mark' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'paragraph' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'strong' | 'subscript' | 'suggestion' | 'superscript' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'time' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem'
}
interface EventHandlersElement<Element> {
	'on:abort'?: EventHandlers<UIEvent, Element>
	'on:animationcancel'?: EventHandlers<AnimationEvent, Element>
	'on:animationend'?: EventHandlers<AnimationEvent, Element>
	'on:animationiteration'?: EventHandlers<AnimationEvent, Element>
	'on:animationstart'?: EventHandlers<AnimationEvent, Element>
	'on:auxclick'?: EventHandlers<PointerEvent, Element>
	'on:beforecopy'?: EventHandlers<ClipboardEvent, Element>
	'on:beforecut'?: EventHandlers<ClipboardEvent, Element>
	'on:beforeinput'?: EventHandlers<InputEvent, Element>
	'on:beforematch'?: EventHandlers<Event, Element>
	'on:beforepaste'?: EventHandlers<ClipboardEvent, Element>
	'on:beforetoggle'?: EventHandlers<ToggleEvent, Element>
	'on:beforexrselect'?: EventHandlers<Event, Element>
	'on:blur'?: EventHandlers<FocusEvent, Element>
	'on:cancel'?: EventHandlers<Event, Element>
	'on:canplay'?: EventHandlers<Event, Element>
	'on:canplaythrough'?: EventHandlers<Event, Element>
	'on:change'?: EventHandlers<Event, Element>
	'on:click'?: EventHandlers<PointerEvent, Element>
	'on:close'?: EventHandlers<Event, Element>
	'on:command'?: EventHandlers<CommandEvent, Element>
	'on:compositionend'?: EventHandlers<CompositionEvent, Element>
	'on:compositionstart'?: EventHandlers<CompositionEvent, Element>
	'on:compositionupdate'?: EventHandlers<CompositionEvent, Element>
	'on:contentvisibilityautostatechange'?: EventHandlers<ContentVisibilityAutoStateChangeEvent, Element>
	'on:contextlost'?: EventHandlers<Event, Element>
	'on:contextmenu'?: EventHandlers<PointerEvent, Element>
	'on:contextrestored'?: EventHandlers<Event, Element>
	'on:copy'?: EventHandlers<ClipboardEvent, Element>
	'on:cuechange'?: EventHandlers<Event, Element>
	'on:cut'?: EventHandlers<ClipboardEvent, Element>
	'on:dblclick'?: EventHandlers<MouseEvent, Element>
	'on:drag'?: EventHandlers<DragEvent, Element>
	'on:dragend'?: EventHandlers<DragEvent, Element>
	'on:dragenter'?: EventHandlers<DragEvent, Element>
	'on:dragexit'?: EventHandlers<DragEvent, Element>
	'on:dragleave'?: EventHandlers<DragEvent, Element>
	'on:dragover'?: EventHandlers<DragEvent, Element>
	'on:dragstart'?: EventHandlers<DragEvent, Element>
	'on:drop'?: EventHandlers<DragEvent, Element>
	'on:durationchange'?: EventHandlers<Event, Element>
	'on:emptied'?: EventHandlers<Event, Element>
	'on:ended'?: EventHandlers<Event, Element>
	'on:error'?: EventHandlers<ErrorEvent, Element>
	'on:focus'?: EventHandlers<FocusEvent, Element>
	'on:focusin'?: EventHandlers<FocusEvent, Element>
	'on:focusout'?: EventHandlers<FocusEvent, Element>
	'on:formdata'?: EventHandlers<FormDataEvent, Element>
	'on:fullscreenchange'?: EventHandlers<Event, Element>
	'on:fullscreenerror'?: EventHandlers<Event, Element>
	'on:gotpointercapture'?: EventHandlers<PointerEvent, Element>
	'on:input'?: EventHandlers<InputEvent, Element>
	'on:invalid'?: EventHandlers<Event, Element>
	'on:keydown'?: EventHandlers<KeyboardEvent, Element>
	'on:keypress'?: EventHandlers<KeyboardEvent, Element>
	'on:keyup'?: EventHandlers<KeyboardEvent, Element>
	'on:load'?: EventHandlers<Event, Element>
	'on:loadeddata'?: EventHandlers<Event, Element>
	'on:loadedmetadata'?: EventHandlers<Event, Element>
	'on:loadstart'?: EventHandlers<Event, Element>
	'on:lostpointercapture'?: EventHandlers<PointerEvent, Element>
	'on:mousedown'?: EventHandlers<MouseEvent, Element>
	'on:mouseenter'?: EventHandlers<MouseEvent, Element>
	'on:mouseleave'?: EventHandlers<MouseEvent, Element>
	'on:mousemove'?: EventHandlers<MouseEvent, Element>
	'on:mouseout'?: EventHandlers<MouseEvent, Element>
	'on:mouseover'?: EventHandlers<MouseEvent, Element>
	'on:mouseup'?: EventHandlers<MouseEvent, Element>
	'on:paste'?: EventHandlers<ClipboardEvent, Element>
	'on:pause'?: EventHandlers<Event, Element>
	'on:play'?: EventHandlers<Event, Element>
	'on:playing'?: EventHandlers<Event, Element>
	'on:pointercancel'?: EventHandlers<PointerEvent, Element>
	'on:pointerdown'?: EventHandlers<PointerEvent, Element>
	'on:pointerenter'?: EventHandlers<PointerEvent, Element>
	'on:pointerleave'?: EventHandlers<PointerEvent, Element>
	'on:pointermove'?: EventHandlers<PointerEvent, Element>
	'on:pointerout'?: EventHandlers<PointerEvent, Element>
	'on:pointerover'?: EventHandlers<PointerEvent, Element>
	'on:pointerrawupdate'?: EventHandlers<PointerEvent, Element>
	'on:pointerup'?: EventHandlers<PointerEvent, Element>
	'on:progress'?: EventHandlers<ProgressEvent, Element>
	'on:ratechange'?: EventHandlers<Event, Element>
	'on:reset'?: EventHandlers<Event, Element>
	'on:resize'?: EventHandlers<UIEvent, Element>
	'on:scroll'?: EventHandlers<Event, Element>
	'on:scrollend'?: EventHandlers<Event, Element>
	'on:scrollsnapchange'?: EventHandlers<Event, Element>
	'on:scrollsnapchanging'?: EventHandlers<Event, Element>
	'on:securitypolicyviolation'?: EventHandlers<SecurityPolicyViolationEvent, Element>
	'on:seeked'?: EventHandlers<Event, Element>
	'on:seeking'?: EventHandlers<Event, Element>
	'on:select'?: EventHandlers<Event, Element>
	'on:selectionchange'?: EventHandlers<Event, Element>
	'on:selectstart'?: EventHandlers<Event, Element>
	'on:slotchange'?: EventHandlers<Event, Element>
	'on:stalled'?: EventHandlers<Event, Element>
	'on:submit'?: EventHandlers<SubmitEvent, Element>
	'on:suspend'?: EventHandlers<Event, Element>
	'on:timeupdate'?: EventHandlers<Event, Element>
	'on:toggle'?: EventHandlers<ToggleEvent, Element>
	'on:touchcancel'?: EventHandlers<TouchEvent, Element>
	'on:touchend'?: EventHandlers<TouchEvent, Element>
	'on:touchmove'?: EventHandlers<TouchEvent, Element>
	'on:touchstart'?: EventHandlers<TouchEvent, Element>
	'on:transitioncancel'?: EventHandlers<TransitionEvent, Element>
	'on:transitionend'?: EventHandlers<TransitionEvent, Element>
	'on:transitionrun'?: EventHandlers<TransitionEvent, Element>
	'on:transitionstart'?: EventHandlers<TransitionEvent, Element>
	'on:volumechange'?: EventHandlers<Event, Element>
	'on:waiting'?: EventHandlers<Event, Element>
	'on:wheel'?: EventHandlers<WheelEvent, Element>
}
interface NSStyle {
	'style:*'?: import('csstype').PropertiesHyphen[Key]
}
