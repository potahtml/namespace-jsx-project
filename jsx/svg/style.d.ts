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

	// React props
	href?: string
	precedence?: string
}
