// Voby - https://github.com/vobyjs/voby
interface TextareaHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	autoComplete?: string
	autoFocus?: boolean
	cols?: number
	dirName?: string
	disabled?: boolean
	form?: string
	maxLength?: number
	minLength?: number
	name?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	rows?: number
	value?: string | readonly string[] | number
	wrap?: string
	onChange?: KeyboardEventHandler<T>
}

// React - https://react.dev/
interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoComplete?: string
	cols?: number
	dirName?: string
	disabled?: boolean
	form?: string
	maxLength?: number
	minLength?: number
	name?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	rows?: number
	value?: string | readonly string[] | number
	wrap?: string

	onChange?: ChangeEventHandler<T>
}
