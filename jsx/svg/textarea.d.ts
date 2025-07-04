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

// Vue - https://vuejs.org/
interface TextareaHTMLAttributes extends HTMLAttributes {
	autocomplete?: string
	autofocus?: boolean | 'true' | 'false'
	cols?: number | string
	dirname?: string
	disabled?: boolean | 'true' | 'false'
	form?: string
	maxlength?: number | string
	minlength?: number | string
	name?: string
	placeholder?: string
	readonly?: boolean | 'true' | 'false'
	required?: boolean | 'true' | 'false'
	rows?: number | string
	value?: string | readonly string[] | number | null
	wrap?: string
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
