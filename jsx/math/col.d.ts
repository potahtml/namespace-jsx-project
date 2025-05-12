// Voby - https://github.com/vobyjs/voby
interface ColHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	span?: number
	width?: number | string
}

// React - https://react.dev/
interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number
	width?: number | string
}
