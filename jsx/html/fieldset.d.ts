// Solid Main - https://www.solidjs.com/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	name?: string
}

// Solid Next - https://www.solidjs.com/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: true | false | '' | false
	form?: string | false
	name?: string | false
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
	role?: 'group' | 'none' | 'presentation' | 'radiogroup'
}

// React - https://react.dev/
interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLFieldSetElementAttributes<Element> extends HTMLAttributes<Element> {
	disabled?: boolean | ''
	form?: string
	name?: string
}
