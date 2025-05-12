// Voby - https://github.com/vobyjs/voby
interface ParamHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	name?: string
	value?: string | readonly string[] | number
}

// React - https://react.dev/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
	value?: string | readonly string[] | number
}
