// Solid - https://www.solidjs.com/
interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | string[] | number
}

// Voby - https://github.com/vobyjs/voby
interface ProgressHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | readonly string[] | number
}

// Vue - https://vuejs.org/
interface ProgressHTMLAttributes extends HTMLAttributes {
	max?: number | string
	value?: string | readonly string[] | number
}

// Preact - https://preactjs.com/
interface ProgressHTMLAttributes<T extends EventTarget = HTMLProgressElement> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | number
}

// React - https://react.dev/
interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLProgressElementAttributes {
	max?: number | string
	value?: number | string
}
