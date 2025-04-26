// Solid Main - https://www.solidjs.com/
interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
	datetime?: string

	dateTime?: string
}

// Solid Minor - https://www.solidjs.com/
interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
	datetime?: string

	/** @deprecated Use lowercase attributes */
	dateTime?: string
}

// Solid Next - https://www.solidjs.com/
interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
	datetime?: string | false

	/** @deprecated Use lowercase attributes */
	dateTime?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface TimeHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	dateTime?: string
}

// Vue - https://vuejs.org/
interface TimeHTMLAttributes extends HTMLAttributes {
	datetime?: string
}

// Preact - https://preactjs.com/
interface TimeHTMLAttributes<T extends EventTarget = HTMLTimeElement> extends HTMLAttributes<T> {
	datetime?: string
	dateTime?: string
}

// React - https://react.dev/
interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
	dateTime?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLTimeElementAttributes {
	datetime?: string
}
