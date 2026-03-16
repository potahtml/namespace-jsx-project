// Voby - https://github.com/vobyjs/voby
interface SelectHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	autoComplete?: string
	autoFocus?: boolean
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number
	value?: string
	onChange?: KeyboardEventHandler<T>
}

// React - https://react.dev/
interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
	autoComplete?: string
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number
	value?: string | readonly string[] | number
	// No other element dispatching change events can be nested in a <select>
	// so we know the target will be a HTMLSelectElement.
	onChange?: ChangeEventHandler<T, HTMLSelectElement>
}
