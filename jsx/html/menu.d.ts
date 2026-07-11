// Solid Main - https://www.solidjs.com/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	compact?: boolean

	label?: string

	type?: 'context' | 'toolbar'
}

// Solid Next - https://www.solidjs.com/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	compact?: true | false | '' | false

	label?: string | false

	type?: 'context' | 'toolbar' | false
}

// Voby - https://github.com/vobyjs/voby
interface MenuHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	type?: string
}

// Vue - https://vuejs.org/
interface MenuHTMLAttributes extends HTMLAttributes {
	type?: string
}

// React - https://react.dev/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	type?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLMenuElementAttributes<Element> extends HTMLAttributes<Element> {
	compact?: boolean | ''

	label?: string

	type?: 'context' | 'toolbar'
}
