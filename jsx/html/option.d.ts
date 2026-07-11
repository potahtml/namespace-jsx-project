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

	// special cases locked to properties

	selected?: true | false
	/** @error use `<option selected={..}/>` instead */
	'prop:selected'?: never

	defaultSelected?: true | false
	/** @error use `<option defaultSelected={..}/>` instead */
	'prop:defaultSelected'?: never

	value?: string | string[] | number
	/** @error use `<option value={..}/>` instead */
	'prop:value'?: never

	// for sanity

	/** @error This doesn't exists for `<option/>` */
	'prop:defaultValue'?: never
	/** @error This doesn't exists for `<option/>` */
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
	value?: any // we support :value to be bound to anything w/ v-model
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
