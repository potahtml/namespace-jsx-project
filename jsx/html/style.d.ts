// Solid Main - https://www.solidjs.com/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	media?: string
	nonce?: string
	scoped?: boolean
	type?: string
}

// Solid Minor - https://www.solidjs.com/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render'
	media?: string
	nonce?: string

	/** @deprecated */
	scoped?: '' | boolean
	/** @deprecated */
	type?: string
}

// Solid Next - https://www.solidjs.com/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render' | undefined | false
	media?: string | undefined | false
	nonce?: string | undefined | false

	/** @deprecated */
	scoped?: true | false | '' | undefined | false
	/** @deprecated */
	type?: string | undefined | false
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
	scoped?: boolean
	type?: string
}

// React - https://react.dev/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	media?: string
	scoped?: boolean
	type?: string

	// React props
	href?: string
	precedence?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLStyleElementAttributes {
	media?: string
	nonce?: string
	title?: string

	/** @experimental */
	blocking?: string

	/** @deprecated */
	scoped?: 'true' | boolean
	/** @deprecated */
	type?: string
}
