// Solid Main - https://www.solidjs.com/
interface AriaAttributes {
	/**
	 * Identifies the currently active element when DOM focus is on a composite widget, textbox,
	 * group, or application.
	 */
	'aria-activedescendant'?: string
	/**
	 * Indicates whether assistive technologies will present all, or only parts of, the changed
	 * region based on the change notifications defined by the aria-relevant attribute.
	 */
	'aria-atomic'?: boolean | 'false' | 'true'
	/**
	 * Similar to the global aria-label. Defines a string value that labels the current element,
	 * which is intended to be converted into Braille.
	 *
	 * @see aria-label.
	 */
	'aria-braillelabel'?: string
	/**
	 * Defines a human-readable, author-localized abbreviated description for the role of an element
	 * intended to be converted into Braille. Braille is not a one-to-one transliteration of letters
	 * and numbers, but rather it includes various abbreviations, contractions, and characters that
	 * represent words (known as logograms).
	 *
	 * Instead of converting long role descriptions to Braille, the aria-brailleroledescription
	 * attribute allows for providing an abbreviated version of the aria-roledescription value,
	 * which is a human-readable, author-localized description for the role of an element, for
	 * improved user experience with braille interfaces.
	 *
	 * @see aria-roledescription.
	 */
	'aria-brailleroledescription'?: string
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the
	 * user's intended value for an input and specifies how predictions would be presented if they
	 * are made.
	 */
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
	/**
	 * Indicates an element is being modified and that assistive technologies MAY want to wait until
	 * the modifications are complete before exposing them to the user.
	 */
	'aria-busy'?: boolean | 'false' | 'true'
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 *
	 * @see aria-pressed @see aria-selected.
	 */
	'aria-checked'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 *
	 * @see aria-colindex.
	 */
	'aria-colcount'?: number | string
	/**
	 * Defines an element's column index or position with respect to the total number of columns
	 * within a table, grid, or treegrid.
	 *
	 * @see aria-colcount @see aria-colspan.
	 */
	'aria-colindex'?: number | string
	/** Defines a human-readable text alternative of the numeric aria-colindex. */
	'aria-colindextext'?: number | string
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or
	 * treegrid.
	 *
	 * @see aria-colindex @see aria-rowspan.
	 */
	'aria-colspan'?: number | string
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current
	 * element.
	 *
	 * @see aria-owns.
	 */
	'aria-controls'?: string
	/**
	 * Indicates the element that represents the current item within a container or set of related
	 * elements.
	 */
	'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'
	/**
	 * Identifies the element (or elements) that describes the object.
	 *
	 * @see aria-labelledby
	 */
	'aria-describedby'?: string
	/**
	 * Defines a string value that describes or annotates the current element.
	 *
	 * @see aria-describedby
	 */
	'aria-description'?: string
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 *
	 * @see aria-describedby.
	 */
	'aria-details'?: string
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
	 * operable.
	 *
	 * @see aria-hidden @see aria-readonly.
	 */
	'aria-disabled'?: boolean | 'false' | 'true'
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop
	 * target.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
	/**
	 * Identifies the element that provides an error message for the object.
	 *
	 * @see aria-invalid @see aria-describedby.
	 */
	'aria-errormessage'?: string
	/**
	 * Indicates whether the element, or another grouping element it controls, is currently expanded
	 * or collapsed.
	 */
	'aria-expanded'?: boolean | 'false' | 'true'
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at
	 * the user's discretion, allows assistive technology to override the general default of reading
	 * in document source order.
	 */
	'aria-flowto'?: string
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-grabbed'?: boolean | 'false' | 'true'
	/**
	 * Indicates the availability and type of interactive popup element, such as menu or dialog,
	 * that can be triggered by an element.
	 */
	'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 *
	 * @see aria-disabled.
	 */
	'aria-hidden'?: boolean | 'false' | 'true'
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 *
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
	/**
	 * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
	 * element.
	 */
	'aria-keyshortcuts'?: string
	/**
	 * Defines a string value that labels the current element.
	 *
	 * @see aria-labelledby.
	 */
	'aria-label'?: string
	/**
	 * Identifies the element (or elements) that labels the current element.
	 *
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: string
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: number | string
	/**
	 * Indicates that an element will be updated, and describes the types of updates the user
	 * agents, assistive technologies, and user can expect from the live region.
	 */
	'aria-live'?: 'off' | 'assertive' | 'polite'
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: boolean | 'false' | 'true'
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	'aria-multiline'?: boolean | 'false' | 'true'
	/**
	 * Indicates that the user may select more than one item from the current selectable
	 * descendants.
	 */
	'aria-multiselectable'?: boolean | 'false' | 'true'
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	'aria-orientation'?: 'horizontal' | 'vertical'
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual
	 * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
	 * represent the relationship.
	 *
	 * @see aria-controls.
	 */
	'aria-owns'?: string
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
	 * the control has no value. A hint could be a sample value or a brief description of the
	 * expected format.
	 */
	'aria-placeholder'?: string
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not
	 * required if all elements in the set are present in the DOM.
	 *
	 * @see aria-setsize.
	 */
	'aria-posinset'?: number | string
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 *
	 * @see aria-checked @see aria-selected.
	 */
	'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 *
	 * @see aria-disabled.
	 */
	'aria-readonly'?: boolean | 'false' | 'true'
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a
	 * live region is modified.
	 *
	 * @see aria-atomic.
	 */
	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
	/** Indicates that user input is required on the element before a form may be submitted. */
	'aria-required'?: boolean | 'false' | 'true'
	/** Defines a human-readable, author-localized description for the role of an element. */
	'aria-roledescription'?: string
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 *
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: number | string
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a
	 * table, grid, or treegrid.
	 *
	 * @see aria-rowcount @see aria-rowspan.
	 */
	'aria-rowindex'?: number | string
	/** Defines a human-readable text alternative of aria-rowindex. */
	'aria-rowindextext'?: number | string
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 *
	 * @see aria-rowindex @see aria-colspan.
	 */
	'aria-rowspan'?: number | string
	/**
	 * Indicates the current "selected" state of various widgets.
	 *
	 * @see aria-checked @see aria-pressed.
	 */
	'aria-selected'?: boolean | 'false' | 'true'
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all
	 * elements in the set are present in the DOM.
	 *
	 * @see aria-posinset.
	 */
	'aria-setsize'?: number | string
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: number | string
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: number | string
	/**
	 * Defines the current value for a range widget.
	 *
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: number | string
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	'aria-valuetext'?: string
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem'
}
interface ElementEventMap<T> {
	onFullscreenChange?: EventHandlerUnion<T, Event>
	onFullscreenError?: EventHandlerUnion<T, Event>

	'on:fullscreenchange'?: EventHandlerWithOptionsUnion<T, Event>
	'on:fullscreenerror'?: EventHandlerWithOptionsUnion<T, Event>

	onfullscreenchange?: EventHandlerUnion<T, Event>
	onfullscreenerror?: EventHandlerUnion<T, Event>
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
interface AriaAttributes {
	/**
	 * Identifies the currently active element when DOM focus is on a composite widget, textbox,
	 * group, or application.
	 */
	'aria-activedescendant'?: string
	/**
	 * Indicates whether assistive technologies will present all, or only parts of, the changed
	 * region based on the change notifications defined by the aria-relevant attribute.
	 */
	'aria-atomic'?: boolean | 'false' | 'true'
	/**
	 * Similar to the global aria-label. Defines a string value that labels the current element,
	 * which is intended to be converted into Braille.
	 *
	 * @see aria-label.
	 */
	'aria-braillelabel'?: string
	/**
	 * Defines a human-readable, author-localized abbreviated description for the role of an element
	 * intended to be converted into Braille. Braille is not a one-to-one transliteration of letters
	 * and numbers, but rather it includes various abbreviations, contractions, and characters that
	 * represent words (known as logograms).
	 *
	 * Instead of converting long role descriptions to Braille, the aria-brailleroledescription
	 * attribute allows for providing an abbreviated version of the aria-roledescription value,
	 * which is a human-readable, author-localized description for the role of an element, for
	 * improved user experience with braille interfaces.
	 *
	 * @see aria-roledescription.
	 */
	'aria-brailleroledescription'?: string
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the
	 * user's intended value for an input and specifies how predictions would be presented if they
	 * are made.
	 */
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
	/**
	 * Indicates an element is being modified and that assistive technologies MAY want to wait until
	 * the modifications are complete before exposing them to the user.
	 */
	'aria-busy'?: boolean | 'false' | 'true'
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 *
	 * @see aria-pressed @see aria-selected.
	 */
	'aria-checked'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 *
	 * @see aria-colindex.
	 */
	'aria-colcount'?: number | string
	/**
	 * Defines an element's column index or position with respect to the total number of columns
	 * within a table, grid, or treegrid.
	 *
	 * @see aria-colcount @see aria-colspan.
	 */
	'aria-colindex'?: number | string
	/** Defines a human-readable text alternative of the numeric aria-colindex. */
	'aria-colindextext'?: number | string
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or
	 * treegrid.
	 *
	 * @see aria-colindex @see aria-rowspan.
	 */
	'aria-colspan'?: number | string
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current
	 * element.
	 *
	 * @see aria-owns.
	 */
	'aria-controls'?: string
	/**
	 * Indicates the element that represents the current item within a container or set of related
	 * elements.
	 */
	'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'
	/**
	 * Identifies the element (or elements) that describes the object.
	 *
	 * @see aria-labelledby
	 */
	'aria-describedby'?: string
	/**
	 * Defines a string value that describes or annotates the current element.
	 *
	 * @see aria-describedby
	 */
	'aria-description'?: string
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 *
	 * @see aria-describedby.
	 */
	'aria-details'?: string
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
	 * operable.
	 *
	 * @see aria-hidden @see aria-readonly.
	 */
	'aria-disabled'?: boolean | 'false' | 'true'
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop
	 * target.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
	/**
	 * Identifies the element that provides an error message for the object.
	 *
	 * @see aria-invalid @see aria-describedby.
	 */
	'aria-errormessage'?: string
	/**
	 * Indicates whether the element, or another grouping element it controls, is currently expanded
	 * or collapsed.
	 */
	'aria-expanded'?: boolean | 'false' | 'true'
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at
	 * the user's discretion, allows assistive technology to override the general default of reading
	 * in document source order.
	 */
	'aria-flowto'?: string
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-grabbed'?: boolean | 'false' | 'true'
	/**
	 * Indicates the availability and type of interactive popup element, such as menu or dialog,
	 * that can be triggered by an element.
	 */
	'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 *
	 * @see aria-disabled.
	 */
	'aria-hidden'?: boolean | 'false' | 'true'
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 *
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
	/**
	 * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
	 * element.
	 */
	'aria-keyshortcuts'?: string
	/**
	 * Defines a string value that labels the current element.
	 *
	 * @see aria-labelledby.
	 */
	'aria-label'?: string
	/**
	 * Identifies the element (or elements) that labels the current element.
	 *
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: string
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: number | string
	/**
	 * Indicates that an element will be updated, and describes the types of updates the user
	 * agents, assistive technologies, and user can expect from the live region.
	 */
	'aria-live'?: 'off' | 'assertive' | 'polite'
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: boolean | 'false' | 'true'
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	'aria-multiline'?: boolean | 'false' | 'true'
	/**
	 * Indicates that the user may select more than one item from the current selectable
	 * descendants.
	 */
	'aria-multiselectable'?: boolean | 'false' | 'true'
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	'aria-orientation'?: 'horizontal' | 'vertical'
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual
	 * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
	 * represent the relationship.
	 *
	 * @see aria-controls.
	 */
	'aria-owns'?: string
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
	 * the control has no value. A hint could be a sample value or a brief description of the
	 * expected format.
	 */
	'aria-placeholder'?: string
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not
	 * required if all elements in the set are present in the DOM.
	 *
	 * @see aria-setsize.
	 */
	'aria-posinset'?: number | string
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 *
	 * @see aria-checked @see aria-selected.
	 */
	'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 *
	 * @see aria-disabled.
	 */
	'aria-readonly'?: boolean | 'false' | 'true'
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a
	 * live region is modified.
	 *
	 * @see aria-atomic.
	 */
	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
	/** Indicates that user input is required on the element before a form may be submitted. */
	'aria-required'?: boolean | 'false' | 'true'
	/** Defines a human-readable, author-localized description for the role of an element. */
	'aria-roledescription'?: string
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 *
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: number | string
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a
	 * table, grid, or treegrid.
	 *
	 * @see aria-rowcount @see aria-rowspan.
	 */
	'aria-rowindex'?: number | string
	/** Defines a human-readable text alternative of aria-rowindex. */
	'aria-rowindextext'?: number | string
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 *
	 * @see aria-rowindex @see aria-colspan.
	 */
	'aria-rowspan'?: number | string
	/**
	 * Indicates the current "selected" state of various widgets.
	 *
	 * @see aria-checked @see aria-pressed.
	 */
	'aria-selected'?: boolean | 'false' | 'true'
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all
	 * elements in the set are present in the DOM.
	 *
	 * @see aria-posinset.
	 */
	'aria-setsize'?: number | string
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: number | string
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: number | string
	/**
	 * Defines the current value for a range widget.
	 *
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: number | string
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	'aria-valuetext'?: string
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem'
}
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
interface AriaAttributes {
	/**
	 * Identifies the currently active element when DOM focus is on a composite widget, textbox,
	 * group, or application.
	 */
	'aria-activedescendant'?: string | false
	/**
	 * Indicates whether assistive technologies will present all, or only parts of, the changed
	 * region based on the change notifications defined by the aria-relevant attribute.
	 */
	'aria-atomic'?: 'false' | 'true' | false
	/**
	 * Similar to the global aria-label. Defines a string value that labels the current element,
	 * which is intended to be converted into Braille.
	 *
	 * @see aria-label.
	 */
	'aria-braillelabel'?: string | false
	/**
	 * Defines a human-readable, author-localized abbreviated description for the role of an element
	 * intended to be converted into Braille. Braille is not a one-to-one transliteration of letters
	 * and numbers, but rather it includes various abbreviations, contractions, and characters that
	 * represent words (known as logograms).
	 *
	 * Instead of converting long role descriptions to Braille, the aria-brailleroledescription
	 * attribute allows for providing an abbreviated version of the aria-roledescription value,
	 * which is a human-readable, author-localized description for the role of an element, for
	 * improved user experience with braille interfaces.
	 *
	 * @see aria-roledescription.
	 */
	'aria-brailleroledescription'?: string | false
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the
	 * user's intended value for an input and specifies how predictions would be presented if they
	 * are made.
	 */
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | false
	/**
	 * Indicates an element is being modified and that assistive technologies MAY want to wait until
	 * the modifications are complete before exposing them to the user.
	 */
	'aria-busy'?: 'false' | 'true' | false
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 *
	 * @see aria-pressed @see aria-selected.
	 */
	'aria-checked'?: 'false' | 'true' | 'mixed' | false
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 *
	 * @see aria-colindex.
	 */
	'aria-colcount'?: number | string | false
	/**
	 * Defines an element's column index or position with respect to the total number of columns
	 * within a table, grid, or treegrid.
	 *
	 * @see aria-colcount @see aria-colspan.
	 */
	'aria-colindex'?: number | string | false
	/** Defines a human-readable text alternative of the numeric aria-colindex. */
	'aria-colindextext'?: number | string | false
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or
	 * treegrid.
	 *
	 * @see aria-colindex @see aria-rowspan.
	 */
	'aria-colspan'?: number | string | false
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current
	 * element.
	 *
	 * @see aria-owns.
	 */
	'aria-controls'?: string | false
	/**
	 * Indicates the element that represents the current item within a container or set of related
	 * elements.
	 */
	'aria-current'?: 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time' | false
	/**
	 * Identifies the element (or elements) that describes the object.
	 *
	 * @see aria-labelledby
	 */
	'aria-describedby'?: string | false
	/**
	 * Defines a string value that describes or annotates the current element.
	 *
	 * @see aria-describedby
	 */
	'aria-description'?: string | false
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 *
	 * @see aria-describedby.
	 */
	'aria-details'?: string | false
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
	 * operable.
	 *
	 * @see aria-hidden @see aria-readonly.
	 */
	'aria-disabled'?: 'false' | 'true' | false
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop
	 * target.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | false
	/**
	 * Identifies the element that provides an error message for the object.
	 *
	 * @see aria-invalid @see aria-describedby.
	 */
	'aria-errormessage'?: string | false
	/**
	 * Indicates whether the element, or another grouping element it controls, is currently expanded
	 * or collapsed.
	 */
	'aria-expanded'?: 'false' | 'true' | false
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at
	 * the user's discretion, allows assistive technology to override the general default of reading
	 * in document source order.
	 */
	'aria-flowto'?: string | false
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-grabbed'?: 'false' | 'true' | false
	/**
	 * Indicates the availability and type of interactive popup element, such as menu or dialog,
	 * that can be triggered by an element.
	 */
	'aria-haspopup'?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | false
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 *
	 * @see aria-disabled.
	 */
	'aria-hidden'?: 'false' | 'true' | false
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 *
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: 'false' | 'true' | 'grammar' | 'spelling' | false
	/**
	 * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
	 * element.
	 */
	'aria-keyshortcuts'?: string | false
	/**
	 * Defines a string value that labels the current element.
	 *
	 * @see aria-labelledby.
	 */
	'aria-label'?: string | false
	/**
	 * Identifies the element (or elements) that labels the current element.
	 *
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: string | false
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: number | string | false
	/**
	 * Indicates that an element will be updated, and describes the types of updates the user
	 * agents, assistive technologies, and user can expect from the live region.
	 */
	'aria-live'?: 'off' | 'assertive' | 'polite' | false
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: 'false' | 'true' | false
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	'aria-multiline'?: 'false' | 'true' | false
	/**
	 * Indicates that the user may select more than one item from the current selectable
	 * descendants.
	 */
	'aria-multiselectable'?: 'false' | 'true' | false
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	'aria-orientation'?: 'horizontal' | 'vertical' | false
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual
	 * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
	 * represent the relationship.
	 *
	 * @see aria-controls.
	 */
	'aria-owns'?: string | false
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
	 * the control has no value. A hint could be a sample value or a brief description of the
	 * expected format.
	 */
	'aria-placeholder'?: string | false
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not
	 * required if all elements in the set are present in the DOM.
	 *
	 * @see aria-setsize.
	 */
	'aria-posinset'?: number | string | false
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 *
	 * @see aria-checked @see aria-selected.
	 */
	'aria-pressed'?: 'false' | 'true' | 'mixed' | false
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 *
	 * @see aria-disabled.
	 */
	'aria-readonly'?: 'false' | 'true' | false
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a
	 * live region is modified.
	 *
	 * @see aria-atomic.
	 */
	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals' | false
	/** Indicates that user input is required on the element before a form may be submitted. */
	'aria-required'?: 'false' | 'true' | false
	/** Defines a human-readable, author-localized description for the role of an element. */
	'aria-roledescription'?: string | false
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 *
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: number | string | false
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a
	 * table, grid, or treegrid.
	 *
	 * @see aria-rowcount @see aria-rowspan.
	 */
	'aria-rowindex'?: number | string | false
	/** Defines a human-readable text alternative of aria-rowindex. */
	'aria-rowindextext'?: number | string | false

	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 *
	 * @see aria-rowindex @see aria-colspan.
	 */
	'aria-rowspan'?: number | string | false
	/**
	 * Indicates the current "selected" state of various widgets.
	 *
	 * @see aria-checked @see aria-pressed.
	 */
	'aria-selected'?: 'false' | 'true' | false
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all
	 * elements in the set are present in the DOM.
	 *
	 * @see aria-posinset.
	 */
	'aria-setsize'?: number | string | false
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | false
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: number | string | false
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: number | string | false
	/**
	 * Defines the current value for a range widget.
	 *
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: number | string | false
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	'aria-valuetext'?: string | false
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | false
}
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
interface DOMAttributes<T extends EventTarget> extends EventAttributes<T> {}
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

// Vue - https://vuejs.org/
interface AriaAttributes {
	/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
	'aria-activedescendant'?: string
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	'aria-atomic'?: boolean | 'true' | 'false'
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
	 * presented if they are made.
	 */
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
	/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
	'aria-busy'?: boolean | 'true' | 'false'
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 * @see aria-pressed @see aria-selected.
	 */
	'aria-checked'?: boolean | 'true' | 'false' | 'mixed'
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 * @see aria-colindex.
	 */
	'aria-colcount'?: number | string
	/**
	 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
	 * @see aria-colcount @see aria-colspan.
	 */
	'aria-colindex'?: number | string
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-colindex @see aria-rowspan.
	 */
	'aria-colspan'?: number | string
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
	 * @see aria-owns.
	 */
	'aria-controls'?: string
	/** Indicates the element that represents the current item within a container or set of related elements. */
	'aria-current'?: boolean | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'
	/**
	 * Identifies the element (or elements) that describes the object.
	 * @see aria-labelledby
	 */
	'aria-describedby'?: string
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 * @see aria-describedby.
	 */
	'aria-details'?: string
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
	 * @see aria-hidden @see aria-readonly.
	 */
	'aria-disabled'?: boolean | 'true' | 'false'
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop target.
	 * @deprecated in ARIA 1.1
	 */
	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
	/**
	 * Identifies the element that provides an error message for the object.
	 * @see aria-invalid @see aria-describedby.
	 */
	'aria-errormessage'?: string
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	'aria-expanded'?: boolean | 'true' | 'false'
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
	 * allows assistive technology to override the general default of reading in document source order.
	 */
	'aria-flowto'?: string
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 * @deprecated in ARIA 1.1
	 */
	'aria-grabbed'?: boolean | 'true' | 'false'
	/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
	'aria-haspopup'?: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 * @see aria-disabled.
	 */
	'aria-hidden'?: boolean | 'true' | 'false'
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling'
	/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
	'aria-keyshortcuts'?: string
	/**
	 * Defines a string value that labels the current element.
	 * @see aria-labelledby.
	 */
	'aria-label'?: string
	/**
	 * Identifies the element (or elements) that labels the current element.
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: string
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: number | string
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	'aria-live'?: 'off' | 'assertive' | 'polite'
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: boolean | 'true' | 'false'
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	'aria-multiline'?: boolean | 'true' | 'false'
	/** Indicates that the user may select more than one item from the current selectable descendants. */
	'aria-multiselectable'?: boolean | 'true' | 'false'
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	'aria-orientation'?: 'horizontal' | 'vertical'
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
	 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
	 * @see aria-controls.
	 */
	'aria-owns'?: string
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
	 * A hint could be a sample value or a brief description of the expected format.
	 */
	'aria-placeholder'?: string
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-setsize.
	 */
	'aria-posinset'?: number | string
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 * @see aria-checked @see aria-selected.
	 */
	'aria-pressed'?: boolean | 'true' | 'false' | 'mixed'
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 * @see aria-disabled.
	 */
	'aria-readonly'?: boolean | 'true' | 'false'
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
	 * @see aria-atomic.
	 */
	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
	/** Indicates that user input is required on the element before a form may be submitted. */
	'aria-required'?: boolean | 'true' | 'false'
	/** Defines a human-readable, author-localized description for the role of an element. */
	'aria-roledescription'?: string
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: number | string
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
	 * @see aria-rowcount @see aria-rowspan.
	 */
	'aria-rowindex'?: number | string
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-rowindex @see aria-colspan.
	 */
	'aria-rowspan'?: number | string
	/**
	 * Indicates the current "selected" state of various widgets.
	 * @see aria-checked @see aria-pressed.
	 */
	'aria-selected'?: boolean | 'true' | 'false'
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-posinset.
	 */
	'aria-setsize'?: number | string
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: number | string
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: number | string
	/**
	 * Defines the current value for a range widget.
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: number | string
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	'aria-valuetext'?: string
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
interface AriaAttributes {
	/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
	'aria-activedescendant'?: string
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	'aria-atomic'?: boolean | 'true' | 'false'
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
	 * presented if they are made.
	 */
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
	/**
	 * Defines a string value that labels the current element, which is intended to be converted into Braille.
	 * @see aria-label.
	 */
	'aria-braillelabel'?: string
	/**
	 * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
	 * @see aria-roledescription.
	 */
	'aria-brailleroledescription'?: string
	/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
	'aria-busy'?: boolean | 'true' | 'false'
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 * @see aria-pressed
	 * @see aria-selected.
	 */
	'aria-checked'?: boolean | 'true' | 'false' | 'mixed'
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 * @see aria-colindex.
	 */
	'aria-colcount'?: number
	/**
	 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
	 * @see aria-colcount
	 * @see aria-colspan.
	 */
	'aria-colindex'?: number
	/**
	 * Defines a human readable text alternative of aria-colindex.
	 * @see aria-rowindextext.
	 */
	'aria-colindextext'?: string
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-colindex
	 * @see aria-rowspan.
	 */
	'aria-colspan'?: number
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
	 * @see aria-owns.
	 */
	'aria-controls'?: string
	/** Indicates the element that represents the current item within a container or set of related elements. */
	'aria-current'?: boolean | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'
	/**
	 * Identifies the element (or elements) that describes the object.
	 * @see aria-labelledby
	 */
	'aria-describedby'?: string
	/**
	 * Defines a string value that describes or annotates the current element.
	 * @see related aria-describedby.
	 */
	'aria-description'?: string
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 * @see aria-describedby.
	 */
	'aria-details'?: string
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
	 * @see aria-hidden
	 * @see aria-readonly.
	 */
	'aria-disabled'?: boolean | 'true' | 'false'
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop target.
	 * @deprecated in ARIA 1.1
	 */
	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
	/**
	 * Identifies the element that provides an error message for the object.
	 * @see aria-invalid
	 * @see aria-describedby.
	 */
	'aria-errormessage'?: string
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	'aria-expanded'?: boolean | 'true' | 'false'
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
	 * allows assistive technology to override the general default of reading in document source order.
	 */
	'aria-flowto'?: string
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 * @deprecated in ARIA 1.1
	 */
	'aria-grabbed'?: boolean | 'true' | 'false'
	/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
	'aria-haspopup'?: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 * @see aria-disabled.
	 */
	'aria-hidden'?: boolean | 'true' | 'false'
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling'
	/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
	'aria-keyshortcuts'?: string
	/**
	 * Defines a string value that labels the current element.
	 * @see aria-labelledby.
	 */
	'aria-label'?: string
	/**
	 * Identifies the element (or elements) that labels the current element.
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: string
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: number
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	'aria-live'?: 'off' | 'assertive' | 'polite'
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: boolean | 'true' | 'false'
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	'aria-multiline'?: boolean | 'true' | 'false'
	/** Indicates that the user may select more than one item from the current selectable descendants. */
	'aria-multiselectable'?: boolean | 'true' | 'false'
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	'aria-orientation'?: 'horizontal' | 'vertical'
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
	 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
	 * @see aria-controls.
	 */
	'aria-owns'?: string
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
	 * A hint could be a sample value or a brief description of the expected format.
	 */
	'aria-placeholder'?: string
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-setsize.
	 */
	'aria-posinset'?: number
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 * @see aria-checked
	 * @see aria-selected.
	 */
	'aria-pressed'?: boolean | 'true' | 'false' | 'mixed'
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 * @see aria-disabled.
	 */
	'aria-readonly'?: boolean | 'true' | 'false'
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
	 * @see aria-atomic.
	 */
	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
	/** Indicates that user input is required on the element before a form may be submitted. */
	'aria-required'?: boolean | 'true' | 'false'
	/** Defines a human-readable, author-localized description for the role of an element. */
	'aria-roledescription'?: string
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: number
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
	 * @see aria-rowcount
	 * @see aria-rowspan.
	 */
	'aria-rowindex'?: number
	/**
	 * Defines a human readable text alternative of aria-rowindex.
	 * @see aria-colindextext.
	 */
	'aria-rowindextext'?: string
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-rowindex
	 * @see aria-colspan.
	 */
	'aria-rowspan'?: number
	/**
	 * Indicates the current "selected" state of various widgets.
	 * @see aria-checked
	 * @see aria-pressed.
	 */
	'aria-selected'?: boolean | 'true' | 'false'
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-posinset.
	 */
	'aria-setsize'?: number
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: number
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: number
	/**
	 * Defines the current value for a range widget.
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: number
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	'aria-valuetext'?: string
}

// React - https://react.dev/
interface AriaAttributes {
	/** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
	'aria-activedescendant'?: string
	/** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
	'aria-atomic'?: boolean | 'true' | 'false'
	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
	 * presented if they are made.
	 */
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
	/** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
	/**
	 * Defines a string value that labels the current element, which is intended to be converted into Braille.
	 * @see aria-label.
	 */
	'aria-braillelabel'?: string
	/**
	 * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
	 * @see aria-roledescription.
	 */
	'aria-brailleroledescription'?: string
	'aria-busy'?: boolean | 'true' | 'false'
	/**
	 * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
	 * @see aria-pressed @see aria-selected.
	 */
	'aria-checked'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Defines the total number of columns in a table, grid, or treegrid.
	 * @see aria-colindex.
	 */
	'aria-colcount'?: number
	/**
	 * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
	 * @see aria-colcount @see aria-colspan.
	 */
	'aria-colindex'?: number
	/**
	 * Defines a human readable text alternative of aria-colindex.
	 * @see aria-rowindextext.
	 */
	'aria-colindextext'?: string
	/**
	 * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-colindex @see aria-rowspan.
	 */
	'aria-colspan'?: number
	/**
	 * Identifies the element (or elements) whose contents or presence are controlled by the current element.
	 * @see aria-owns.
	 */
	'aria-controls'?: string
	/** Indicates the element that represents the current item within a container or set of related elements. */
	'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'
	/**
	 * Identifies the element (or elements) that describes the object.
	 * @see aria-labelledby
	 */
	'aria-describedby'?: string
	/**
	 * Defines a string value that describes or annotates the current element.
	 * @see related aria-describedby.
	 */
	'aria-description'?: string
	/**
	 * Identifies the element that provides a detailed, extended description for the object.
	 * @see aria-describedby.
	 */
	'aria-details'?: string
	/**
	 * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
	 * @see aria-hidden @see aria-readonly.
	 */
	'aria-disabled'?: boolean | 'true' | 'false'
	/**
	 * Indicates what functions can be performed when a dragged object is released on the drop target.
	 * @deprecated in ARIA 1.1
	 */
	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
	/**
	 * Identifies the element that provides an error message for the object.
	 * @see aria-invalid @see aria-describedby.
	 */
	'aria-errormessage'?: string
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	'aria-expanded'?: boolean | 'true' | 'false'
	/**
	 * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
	 * allows assistive technology to override the general default of reading in document source order.
	 */
	'aria-flowto'?: string
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop operation.
	 * @deprecated in ARIA 1.1
	 */
	'aria-grabbed'?: boolean | 'true' | 'false'
	/** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
	'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 * @see aria-disabled.
	 */
	'aria-hidden'?: boolean | 'true' | 'false'
	/**
	 * Indicates the entered value does not conform to the format expected by the application.
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
	/** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
	'aria-keyshortcuts'?: string
	/**
	 * Defines a string value that labels the current element.
	 * @see aria-labelledby.
	 */
	'aria-label'?: string
	/**
	 * Identifies the element (or elements) that labels the current element.
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: string
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: number
	/** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
	'aria-live'?: 'off' | 'assertive' | 'polite'
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: boolean | 'true' | 'false'
	/** Indicates whether a text box accepts multiple lines of input or only a single line. */
	'aria-multiline'?: boolean | 'true' | 'false'
	/** Indicates that the user may select more than one item from the current selectable descendants. */
	'aria-multiselectable'?: boolean | 'true' | 'false'
	/** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
	'aria-orientation'?: 'horizontal' | 'vertical'
	/**
	 * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
	 * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
	 * @see aria-controls.
	 */
	'aria-owns'?: string
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
	 * A hint could be a sample value or a brief description of the expected format.
	 */
	'aria-placeholder'?: string
	/**
	 * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-setsize.
	 */
	'aria-posinset'?: number
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 * @see aria-checked @see aria-selected.
	 */
	'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Indicates that the element is not editable, but is otherwise operable.
	 * @see aria-disabled.
	 */
	'aria-readonly'?: boolean | 'true' | 'false'
	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
	 * @see aria-atomic.
	 */
	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
	/** Indicates that user input is required on the element before a form may be submitted. */
	'aria-required'?: boolean | 'true' | 'false'
	/** Defines a human-readable, author-localized description for the role of an element. */
	'aria-roledescription'?: string
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: number
	/**
	 * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
	 * @see aria-rowcount @see aria-rowspan.
	 */
	'aria-rowindex'?: number
	/**
	 * Defines a human readable text alternative of aria-rowindex.
	 * @see aria-colindextext.
	 */
	'aria-rowindextext'?: string
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
	 * @see aria-rowindex @see aria-colspan.
	 */
	'aria-rowspan'?: number
	/**
	 * Indicates the current "selected" state of various widgets.
	 * @see aria-checked @see aria-pressed.
	 */
	'aria-selected'?: boolean | 'true' | 'false'
	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
	 * @see aria-posinset.
	 */
	'aria-setsize'?: number
	/** Indicates if items in a table or grid are sorted in ascending or descending order. */
	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: number
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: number
	/**
	 * Defines the current value for a range widget.
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: number
	/** Defines the human readable text alternative of aria-valuenow for a range widget. */
	'aria-valuetext'?: string
}

// Pota - https://github.com/potahtml/pota
interface AriaAttributes {
	/**
	 * Identifies the currently active element when DOM focus is on a
	 * composite widget, textbox, group, or application.
	 */
	'aria-activedescendant'?: string
	/**
	 * Indicates whether assistive technologies will present all, or
	 * only parts of, the changed region based on the change
	 * notifications defined by the aria-relevant attribute.
	 */
	'aria-atomic'?: boolean | 'false' | 'true'
	/**
	 * Indicates whether inputting text could trigger display of one or
	 * more predictions of the user's intended value for an input and
	 * specifies how predictions would be presented if they are made.
	 */
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
	/**
	 * Indicates an element is being modified and that assistive
	 * technologies MAY want to wait until the modifications are
	 * complete before exposing them to the user.
	 */
	'aria-busy'?: boolean | 'false' | 'true'
	/**
	 * Indicates the current "checked" state of checkboxes, radio
	 * buttons, and other widgets.
	 *
	 * @see aria-pressed @see aria-selected.
	 */
	'aria-checked'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Defines the total number of columns in a table, grid, or
	 * treegrid.
	 *
	 * @see aria-colindex.
	 */
	'aria-colcount'?: number | string
	/**
	 * Defines an element's column index or position with respect to the
	 * total number of columns within a table, grid, or treegrid.
	 *
	 * @see aria-colcount @see aria-colspan.
	 */
	'aria-colindex'?: number | string
	/**
	 * Defines the number of columns spanned by a cell or gridcell
	 * within a table, grid, or treegrid.
	 *
	 * @see aria-colindex @see aria-rowspan.
	 */
	'aria-colspan'?: number | string
	/**
	 * Identifies the element (or elements) whose contents or presence
	 * are controlled by the current element.
	 *
	 * @see aria-owns.
	 */
	'aria-controls'?: string
	/**
	 * Indicates the element that represents the current item within a
	 * container or set of related elements.
	 */
	'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time'
	/**
	 * Identifies the element (or elements) that describes the object.
	 *
	 * @see aria-labelledby
	 */
	'aria-describedby'?: string
	/**
	 * Identifies the element that provides a detailed, extended
	 * description for the object.
	 *
	 * @see aria-describedby.
	 */
	'aria-details'?: string
	/**
	 * Indicates that the element is perceivable but disabled, so it is
	 * not editable or otherwise operable.
	 *
	 * @see aria-hidden @see aria-readonly.
	 */
	'aria-disabled'?: boolean | 'false' | 'true'
	/**
	 * Indicates what functions can be performed when a dragged object
	 * is released on the drop target.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
	/**
	 * Identifies the element that provides an error message for the
	 * object.
	 *
	 * @see aria-invalid @see aria-describedby.
	 */
	'aria-errormessage'?: string
	/**
	 * Indicates whether the element, or another grouping element it
	 * controls, is currently expanded or collapsed.
	 */
	'aria-expanded'?: boolean | 'false' | 'true'
	/**
	 * Identifies the next element (or elements) in an alternate reading
	 * order of content which, at the user's discretion, allows
	 * assistive technology to override the general default of reading
	 * in document source order.
	 */
	'aria-flowto'?: string
	/**
	 * Indicates an element's "grabbed" state in a drag-and-drop
	 * operation.
	 *
	 * @deprecated In ARIA 1.1
	 */
	'aria-grabbed'?: boolean | 'false' | 'true'
	/**
	 * Indicates the availability and type of interactive popup element,
	 * such as menu or dialog, that can be triggered by an element.
	 */
	'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
	/**
	 * Indicates whether the element is exposed to an accessibility API.
	 *
	 * @see aria-disabled.
	 */
	'aria-hidden'?: boolean | 'false' | 'true'
	/**
	 * Indicates the entered value does not conform to the format
	 * expected by the application.
	 *
	 * @see aria-errormessage.
	 */
	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
	/**
	 * Indicates keyboard shortcuts that an author has implemented to
	 * activate or give focus to an element.
	 */
	'aria-keyshortcuts'?: string
	/**
	 * Defines a string value that labels the current element.
	 *
	 * @see aria-labelledby.
	 */
	'aria-label'?: string
	/**
	 * Identifies the element (or elements) that labels the current
	 * element.
	 *
	 * @see aria-describedby.
	 */
	'aria-labelledby'?: string
	/** Defines the hierarchical level of an element within a structure. */
	'aria-level'?: number | string
	/**
	 * Indicates that an element will be updated, and describes the
	 * types of updates the user agents, assistive technologies, and
	 * user can expect from the live region.
	 */
	'aria-live'?: 'off' | 'assertive' | 'polite'
	/** Indicates whether an element is modal when displayed. */
	'aria-modal'?: boolean | 'false' | 'true'
	/**
	 * Indicates whether a text box accepts multiple lines of input or
	 * only a single line.
	 */
	'aria-multiline'?: boolean | 'false' | 'true'
	/**
	 * Indicates that the user may select more than one item from the
	 * current selectable descendants.
	 */
	'aria-multiselectable'?: boolean | 'false' | 'true'
	/**
	 * Indicates whether the element's orientation is horizontal,
	 * vertical, or unknown/ambiguous.
	 */
	'aria-orientation'?: 'horizontal' | 'vertical'
	/**
	 * Identifies an element (or elements) in order to define a visual,
	 * functional, or contextual parent/child relationship between DOM
	 * elements where the DOM hierarchy cannot be used to represent the
	 * relationship.
	 *
	 * @see aria-controls.
	 */
	'aria-owns'?: string
	/**
	 * Defines a short hint (a word or short phrase) intended to aid the
	 * user with data entry when the control has no value. A hint could
	 * be a sample value or a brief description of the expected format.
	 */
	'aria-placeholder'?: string
	/**
	 * Defines an element's number or position in the current set of
	 * listitems or treeitems. Not required if all elements in the set
	 * are present in the DOM.
	 *
	 * @see aria-setsize.
	 */
	'aria-posinset'?: number | string
	/**
	 * Indicates the current "pressed" state of toggle buttons.
	 *
	 * @see aria-checked @see aria-selected.
	 */
	'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'
	/**
	 * Indicates that the element is not editable, but is otherwise
	 * operable.
	 *
	 * @see aria-disabled.
	 */
	'aria-readonly'?: boolean | 'false' | 'true'
	/**
	 * Indicates what notifications the user agent will trigger when the
	 * accessibility tree within a live region is modified.
	 *
	 * @see aria-atomic.
	 */
	'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals'
	/**
	 * Indicates that user input is required on the element before a
	 * form may be submitted.
	 */
	'aria-required'?: boolean | 'false' | 'true'
	/**
	 * Defines a human-readable, author-localized description for the
	 * role of an element.
	 */
	'aria-roledescription'?: string
	/**
	 * Defines the total number of rows in a table, grid, or treegrid.
	 *
	 * @see aria-rowindex.
	 */
	'aria-rowcount'?: number | string
	/**
	 * Defines an element's row index or position with respect to the
	 * total number of rows within a table, grid, or treegrid.
	 *
	 * @see aria-rowcount @see aria-rowspan.
	 */
	'aria-rowindex'?: number | string
	/**
	 * Defines the number of rows spanned by a cell or gridcell within a
	 * table, grid, or treegrid.
	 *
	 * @see aria-rowindex @see aria-colspan.
	 */
	'aria-rowspan'?: number | string
	/**
	 * Indicates the current "selected" state of various widgets.
	 *
	 * @see aria-checked @see aria-pressed.
	 */
	'aria-selected'?: boolean | 'false' | 'true'
	/**
	 * Defines the number of items in the current set of listitems or
	 * treeitems. Not required if all elements in the set are present in
	 * the DOM.
	 *
	 * @see aria-posinset.
	 */
	'aria-setsize'?: number | string
	/**
	 * Indicates if items in a table or grid are sorted in ascending or
	 * descending order.
	 */
	'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
	/** Defines the maximum allowed value for a range widget. */
	'aria-valuemax'?: number | string
	/** Defines the minimum allowed value for a range widget. */
	'aria-valuemin'?: number | string
	/**
	 * Defines the current value for a range widget.
	 *
	 * @see aria-valuetext.
	 */
	'aria-valuenow'?: number | string
	/**
	 * Defines the human readable text alternative of aria-valuenow for
	 * a range widget.
	 */
	'aria-valuetext'?: string
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'meter' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem'
}
interface HTMLEvents<Element> extends ElementEvents<Element>, GlobalEvents<Element> {}
interface HTMLEvents<Element> extends JSX.HTMLEvents<Element> {}
