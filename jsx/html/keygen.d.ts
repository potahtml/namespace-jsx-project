// Solid Main - https://www.solidjs.com/
interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
	challenge?: string

	disabled?: boolean

	form?: string

	keyparams?: string

	keytype?: string

	name?: string
}

// Solid Next - https://www.solidjs.com/
interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
	challenge?: string | false

	disabled?: true | false | '' | false

	form?: string | false

	keyparams?: string | false

	keytype?: string | false

	name?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface KeygenHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	autoFocus?: boolean
	challenge?: string
	disabled?: boolean
	form?: string
	keyType?: string
	keyParams?: string
	name?: string
}

// Vue - https://vuejs.org/
interface KeygenHTMLAttributes extends HTMLAttributes {
	autofocus?: boolean | 'true' | 'false'
	challenge?: string
	disabled?: boolean | 'true' | 'false'
	form?: string
	keytype?: string
	keyparams?: string
	name?: string
}

// React - https://react.dev/
interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
	challenge?: string
	disabled?: boolean
	form?: string
	keyType?: string
	keyParams?: string
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLKeygenElementAttributes<Element> extends HTMLAttributes<Element> {
	challenge?: string

	disabled?: boolean | ''

	form?: string

	keyparams?: string

	keytype?: string

	name?: string
}
