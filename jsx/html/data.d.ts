// Solid Main - https://www.solidjs.com/
interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | string[] | number
}

// Solid Next - https://www.solidjs.com/
interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | string[] | number | false
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
interface DataHTMLAttributes<T extends EventTarget = HTMLDataElement> extends HTMLAttributes<T> {
	value?: string | number
}

// React - https://react.dev/
interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLDataElementAttributes<Element> extends HTMLAttributes<Element> {
	value?: number | string
}
