// Solid - https://www.solidjs.com/
interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
	form?: string
	high?: number | string
	low?: number | string
	max?: number | string
	min?: number | string
	optimum?: number | string
	value?: string | string[] | number
}

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

// Vue - https://vuejs.org/
interface MeterHTMLAttributes extends HTMLAttributes {
	form?: string
	high?: number | string
	low?: number | string
	max?: number | string
	min?: number | string
	optimum?: number | string
	value?: string | readonly string[] | number
}

// Preact - https://preactjs.com/
interface MeterHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	form?: string
	high?: number
	low?: number
	max?: string
	min?: string
	optimum?: number
	value?: string | number
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

// Pota - https://github.com/potahtml/pota
interface HTMLMeterElementAttributes {
	form?: string
	high?: number | string
	low?: number | string
	max?: number | string
	min?: number | string
	optimum?: number | string
	value?: number | string
}
