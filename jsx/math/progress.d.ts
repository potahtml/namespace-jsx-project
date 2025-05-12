// Voby - https://github.com/vobyjs/voby
interface ProgressHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | readonly string[] | number
}

// React - https://react.dev/
interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
	max?: number | string
	value?: string | readonly string[] | number
}
