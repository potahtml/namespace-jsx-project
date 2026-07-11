// Solid Main - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: boolean

	tabindex?: never

	closedby?: 'any' | 'closerequest' | 'none'
}

// Solid Next - https://www.solidjs.com/
interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: true | false | '' | false

	tabindex?: never
	'prop:tabIndex'?: never

	closedby?: 'any' | 'closerequest' | 'none' | false
}

// Voby - https://github.com/vobyjs/voby
interface DialogHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	open?: boolean
}

// Vue - https://vuejs.org/
interface DialogHTMLAttributes extends HTMLAttributes {
	open?: boolean | 'true' | 'false'
	onClose?: (payload: Event) => void
	onCancel?: (payload: Event) => void
}

// React - https://react.dev/
interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
	closedby?: 'any' | 'closerequest' | 'none'
	onCancel?: ReactEventHandler<T>
	onClose?: ReactEventHandler<T>
	open?: boolean
}

// Pota - https://github.com/potahtml/pota
interface HTMLDialogElementAttributes<Element> extends HTMLAttributes<Element> {
	open?: boolean | ''
	tabindex?: never
	'prop:tabindex'?: never

	closedby?: 'any' | 'closerequest' | 'none'
}
