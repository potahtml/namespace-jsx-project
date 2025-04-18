// Solid Main - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: boolean
	onClose?: EventHandlerUnion<T, Event>
	onCancel?: EventHandlerUnion<T, Event>
}

// Solid Minor - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: '' | boolean
	tabindex?: never

	onclose?: EventHandlerUnion<T, Event>
	onClose?: EventHandlerUnion<T, Event>
	oncancel?: EventHandlerUnion<T, Event>
	onCancel?: EventHandlerUnion<T, Event>
}

// Solid Next - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: true | false | '' | undefined | false
	tabindex?: never

	onclose?: EventHandlerUnion<T, Event>
	onClose?: EventHandlerUnion<T, Event>
	oncancel?: EventHandlerUnion<T, Event>
	onCancel?: EventHandlerUnion<T, Event>
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
