// Solid Main - https://www.solidjs.com/
interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
	for?: string
	form?: string
	name?: string
}

// Solid Next - https://www.solidjs.com/
interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
	for?: string | false
	form?: string | false
	name?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface OutputHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	form?: string
	htmlFor?: string
	for?: string
	name?: string
}

// Vue - https://vuejs.org/
interface OutputHTMLAttributes extends HTMLAttributes {
	for?: string
	form?: string
	name?: string
}

// Preact - https://preactjs.com/
interface OutputHTMLAttributes<T extends EventTarget = HTMLOutputElement> extends HTMLAttributes<T> {
	for?: string
	form?: string
	htmlFor?: string
	name?: string
}

// React - https://react.dev/
interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
	form?: string
	htmlFor?: string
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLOutputElementAttributes<Element> extends HTMLAttributes<Element> {
	for?: string
	form?: string
	name?: string
}
