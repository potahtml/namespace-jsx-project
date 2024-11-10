// Solid - https://www.solidjs.com/
interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
	datetime?: string
	dateTime?: string
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
interface TimeHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
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
