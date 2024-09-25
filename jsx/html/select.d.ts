// Solid - https://www.solidjs.com/
interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
	autocomplete?: string
	autofocus?: boolean
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number | string
	value?: string | string[] | number
}

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
	onChange?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
}

// Vue - https://vuejs.org/
interface SelectHTMLAttributes extends HTMLAttributes {
	autocomplete?: string
	autofocus?: boolean | 'true' | 'false'
	disabled?: boolean | 'true' | 'false'
	form?: string
	multiple?: boolean | 'true' | 'false'
	name?: string
	required?: boolean | 'true' | 'false'
	size?: number | string
	value?: any
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
	onChange?: ChangeEventHandler<T>
}
