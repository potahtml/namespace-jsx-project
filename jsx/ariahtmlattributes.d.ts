// Solid - https://www.solidjs.com/
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
