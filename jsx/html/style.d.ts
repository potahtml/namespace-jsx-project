// Solid Main - https://www.solidjs.com/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render'
	media?: string

	/** @deprecated */
	scoped?: boolean
	/** @deprecated */
	type?: string
}

// Solid Next - https://www.solidjs.com/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render' | false
	media?: string | false

	/** @deprecated */
	scoped?: true | false | '' | false
	/** @deprecated */
	type?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface StyleHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	media?: string
	nonce?: string
	scoped?: boolean
	type?: string
}

// Vue - https://vuejs.org/
interface StyleHTMLAttributes extends HTMLAttributes {
	media?: string
	nonce?: string
	scoped?: boolean | 'true' | 'false'
	type?: string
}

// Preact - https://preactjs.com/
interface StyleHTMLAttributes<T extends EventTarget = HTMLStyleElement> extends HTMLAttributes<T> {
	media?: string
	role?: never
	scoped?: boolean
	type?: string
}

// React - https://react.dev/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render' | (string & {})
	media?: string
	scoped?: boolean
	type?: string

	// React props
	href?: string
	precedence?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLStyleElementAttributes<Element> extends HTMLAttributes<Element> {
	media?: string

	/** @experimental */
	blocking?: 'render'

	/** @deprecated */
	scoped?: boolean | ''
	/** @deprecated */
	type?: string
}
