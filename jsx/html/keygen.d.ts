// Solid Main - https://www.solidjs.com/
interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	autofocus?: boolean
	/** @deprecated */
	challenge?: string
	/** @deprecated */
	disabled?: boolean
	/** @deprecated */
	form?: string
	/** @deprecated */
	keyparams?: string
	/** @deprecated */
	keytype?: string
	/** @deprecated */
	name?: string
}

// Solid Next - https://www.solidjs.com/
interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	autofocus?: true | false | '' | false
	/** @deprecated */
	challenge?: string | false
	/** @deprecated */
	disabled?: true | false | '' | false
	/** @deprecated */
	form?: string | false
	/** @deprecated */
	keyparams?: string | false
	/** @deprecated */
	keytype?: string | false
	/** @deprecated */
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

// Preact - https://preactjs.com/
interface KeygenHTMLAttributes<T extends EventTarget = HTMLUnknownElement> extends HTMLAttributes<T> {
	challenge?: string
	disabled?: boolean
	form?: string
	keyType?: string
	keyParams?: string
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
interface HTMLKeygenElementAttributes {
	/** @deprecated */
	autofocus?: boolean
	/** @deprecated */
	challenge?: string
	/** @deprecated */
	disabled?: 'true' | boolean
	/** @deprecated */
	form?: string
	/** @deprecated */
	keyparams?: string
	/** @deprecated */
	keytype?: string
	/** @deprecated */
	name?: string
}
