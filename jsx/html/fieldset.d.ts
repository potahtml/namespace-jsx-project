// Solid Main - https://www.solidjs.com/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	name?: string
}

// Solid Minor - https://www.solidjs.com/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: '' | boolean
	form?: string
	name?: string
}

// Solid Next - https://www.solidjs.com/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: true | false | '' | undefined | false
	form?: string | undefined | false
	name?: string | undefined | false
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

// Preact - https://preactjs.com/
interface FieldsetHTMLAttributes<T extends EventTarget = HTMLFieldSetElement> extends HTMLAttributes<T> {
	disabled?: boolean
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
	disabled?: 'true' | boolean
	form?: string
	name?: string
}
