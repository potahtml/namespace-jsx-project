// Voby - https://github.com/vobyjs/voby
interface MeterHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	form?: string
	high?: number
	low?: number
	max?: number | string
	min?: number | string
	optimum?: number
	value?: string | readonly string[] | number
}

// React - https://react.dev/
interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
	form?: string
	high?: number
	low?: number
	max?: number | string
	min?: number | string
	optimum?: number
	value?: string | readonly string[] | number
}
