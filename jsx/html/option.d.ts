// Solid Main - https://www.solidjs.com/
interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
	selected?: boolean
	value?: string | string[] | number
}

// Solid Next - https://www.solidjs.com/
interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: true | false | '' | false
	label?: string | false

	selected?: true | false

	'prop:selected'?: never

	defaultSelected?: true | false

	'prop:defaultSelected'?: never

	value?: string | string[] | number

	'prop:value'?: never

	'prop:defaultValue'?: never

	defaultValue?: never
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
	value?: any
}

// React - https://react.dev/
interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
	selected?: boolean
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLOptionElementAttributes<Element> extends HTMLAttributes<Element> {
	disabled?: boolean | ''
	label?: string
	selected?: boolean | ''
	value?: number | string
}
