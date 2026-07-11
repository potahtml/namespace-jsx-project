// Solid Main - https://www.solidjs.com/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render'
	media?: string

	scoped?: boolean

	type?: string
}

// Solid Next - https://www.solidjs.com/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render' | false
	media?: string | false

	scoped?: true | false | '' | false

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

// React - https://react.dev/
interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
	blocking?: 'render' | (string & {})
	media?: string
	scoped?: boolean
	type?: string

	href?: string
	precedence?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLStyleElementAttributes<Element> extends HTMLAttributes<Element> {
	media?: string

	blocking?: 'render'

	scoped?: boolean | ''

	type?: string
}
