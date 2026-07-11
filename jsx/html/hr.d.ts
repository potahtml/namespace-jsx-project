// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby
interface HrHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {}

// Vue - https://vuejs.org/

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLHRElementAttributes<Element> extends HTMLAttributes<Element> {
	align?: string

	color?: string

	noshade?: boolean | ''

	size?: string

	width?: string
}
