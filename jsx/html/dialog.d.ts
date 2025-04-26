// Solid Main - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: boolean
	/**
	 * Do not add the tabindex property to the <dialog> element as it is not interactive and does
	 * not receive focus. The dialog's contents, including the close button contained in the dialog,
	 * can receive focus and be interactive.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#usage_notes
	 */
	tabindex?: never

	onClose?: EventHandlerUnion<T, Event>
	'on:close'?: EventHandlerWithOptionsUnion<T, Event>
	onclose?: EventHandlerUnion<T, Event>

	onCancel?: EventHandlerUnion<T, Event>
	'on:cancel'?: EventHandlerWithOptionsUnion<T, Event>
	oncancel?: EventHandlerUnion<T, Event>
}

// Solid Minor - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: '' | boolean
	/**
	 * Do not add the tabindex property to the <dialog> element as it is not interactive and does
	 * not receive focus. The dialog's contents, including the close button contained in the dialog,
	 * can receive focus and be interactive.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#usage_notes
	 */
	tabindex?: never

	onClose?: EventHandlerUnion<T, Event>
	'on:close'?: EventHandlerWithOptionsUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onclose?: EventHandlerUnion<T, Event>

	onCancel?: EventHandlerUnion<T, Event>
	'on:cancel'?: EventHandlerWithOptionsUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncancel?: EventHandlerUnion<T, Event>
}

// Solid Next - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: true | false | '' | false
	/**
	 * Do not add the tabindex property to the <dialog> element as it is not interactive and does
	 * not receive focus. The dialog's contents, including the close button contained in the dialog,
	 * can receive focus and be interactive.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#usage_notes
	 */
	tabindex?: never

	onClose?: EventHandlerUnion<T, Event>
	'on:close'?: EventHandlerWithOptionsUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	onclose?: EventHandlerUnion<T, Event>

	onCancel?: EventHandlerUnion<T, Event>
	'on:cancel'?: EventHandlerWithOptionsUnion<T, Event>
	/** @deprecated Use camelCase event handlers */
	oncancel?: EventHandlerUnion<T, Event>
}

// Voby - https://github.com/vobyjs/voby
interface DialogHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	open?: boolean
}

// Vue - https://vuejs.org/
interface DialogHTMLAttributes extends HTMLAttributes {
	open?: boolean | 'true' | 'false'
	onClose?: (payload: Event) => void
}

// Preact - https://preactjs.com/
interface DialogHTMLAttributes<T extends EventTarget = HTMLDialogElement> extends HTMLAttributes<T> {
	onCancel?: GenericEventHandler<T>
	onClose?: GenericEventHandler<T>
	open?: boolean
	closedby?: 'none' | 'closerequest' | 'any'
	closedBy?: 'none' | 'closerequest' | 'any'
}

// React - https://react.dev/
interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
	onCancel?: ReactEventHandler<T>
	onClose?: ReactEventHandler<T>
	open?: boolean
}

// Pota - https://github.com/potahtml/pota
interface HTMLDialogElementAttributes {
	open?: 'true' | boolean
	tabindex?: never
}
