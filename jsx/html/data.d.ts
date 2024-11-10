// Solid - https://www.solidjs.com/
interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | string[] | number
}

// Voby - https://github.com/vobyjs/voby
interface DataHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}

// Vue - https://vuejs.org/
interface DataHTMLAttributes extends HTMLAttributes {
	value?: string | readonly string[] | number
}

// Preact - https://preactjs.com/
interface DataHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	value?: string | number
}

// React - https://react.dev/
interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLDataElementAttributes {
	value?: number | string
}
