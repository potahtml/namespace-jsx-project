// Solid - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: boolean
	onClose?: EventHandlerUnion<T, Event>
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
interface DialogHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	onCancel?: GenericEventHandler<T>
	onClose?: GenericEventHandler<T>
	open?: boolean
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
