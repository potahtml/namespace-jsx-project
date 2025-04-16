// Solid Main - https://www.solidjs.com/
interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
	selected?: boolean
	value?: string | string[] | number
}

// Solid Minor - https://www.solidjs.com/
interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: '' | boolean
	label?: string
	selected?: '' | boolean
	value?: string | string[] | number
}

// Solid Next - https://www.solidjs.com/
interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: true | false | '' | undefined | false
	label?: string | undefined | false
	selected?: true | false | '' | undefined | false
	value?: string | string[] | number | undefined | false
}

// Voby - https://github.com/vobyjs/voby
interface OptionHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
	selected?: boolean
	value?: string | readonly string[] | number
}

// Vue - https://vuejs.org/
interface OptionHTMLAttributes extends HTMLAttributes {
	disabled?: boolean | 'true' | 'false'
	label?: string
	selected?: boolean | 'true' | 'false'
	value?: any // we support :value to be bound to anything w/ v-model
}

// Preact - https://preactjs.com/
interface OptionHTMLAttributes<T extends EventTarget = HTMLOptionElement> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
	selected?: boolean
	value?: string | number
}

// React - https://react.dev/
interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
	selected?: boolean
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLOptionElementAttributes {
	disabled?: 'true' | boolean
	label?: string
	selected?: 'true' | boolean
	value?: number | string
}
