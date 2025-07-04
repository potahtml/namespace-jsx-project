// Solid Main - https://www.solidjs.com/
interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | string[] | number
}

// Solid Next - https://www.solidjs.com/
interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
	max?: number | string | false
	value?: string | string[] | number | false
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
	role?: 'progressbar'
	value?: string | number
}

// React - https://react.dev/
interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLProgressElementAttributes<Element> extends HTMLAttributes<Element> {
	max?: number | string
	value?: number | string
}
