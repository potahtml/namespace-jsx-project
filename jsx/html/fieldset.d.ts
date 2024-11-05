// Solid - https://www.solidjs.com/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	name?: string
}

// Voby - https://github.com/vobyjs/voby
interface FieldsetHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	name?: string
}

// Vue - https://vuejs.org/
interface FieldsetHTMLAttributes extends HTMLAttributes {
	disabled?: boolean | 'true' | 'false'
	form?: string
	name?: string
}

// React - https://react.dev/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLFieldSetElementAttributes {
	disabled?: boolean
	form?: string
	name?: string
}
