// Voby - https://github.com/vobyjs/voby
interface InputHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	accept?: string
	alt?: string
	autoComplete?: string
	autoFocus?: boolean
	capture?: boolean | 'user' | 'environment'
	checked?: boolean
	crossOrigin?: string
	disabled?: boolean
	enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	form?: string
	formAction?: string
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	height?: number | string
	indeterminate?: boolean
	list?: string
	max?: number | string
	maxLength?: number
	min?: number | string
	minLength?: number
	multiple?: boolean
	name?: string
	pattern?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	size?: number
	src?: string
	step?: number | string
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
	value?: string | readonly string[] | number
	width?: number | string
	onChange?: KeyboardEventHandler<T>
}

// React - https://react.dev/
interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
	accept?: string
	alt?: string
	autoComplete?: AutoFill | (string & {})
	capture?: boolean | 'user' | 'environment' // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
	checked?: boolean
	disabled?: boolean
	form?: string
	formAction?: string | ((formData: FormData) => void | Promise<void>)
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	height?: number | string
	list?: string
	max?: number | string
	maxLength?: number
	min?: number | string
	minLength?: number
	multiple?: boolean
	name?: string
	pattern?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	size?: number
	src?: string
	step?: number | string
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {})
	value?: string | readonly string[] | number
	width?: number | string

	onChange?: ChangeEventHandler<T>
}
