// Solid Main - https://www.solidjs.com/
interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
	form?: string
	high?: number | string
	low?: number | string
	max?: number | string
	min?: number | string
	optimum?: number | string
	value?: string | string[] | number
}

// Solid Next - https://www.solidjs.com/
interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
	form?: string | false
	high?: number | string | false
	low?: number | string | false
	max?: number | string | false
	min?: number | string | false
	optimum?: number | string | false
	value?: string | string[] | number | false
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
interface MeterHTMLAttributes<T extends EventTarget = HTMLMeterElement> extends HTMLAttributes<T> {
	form?: string
	high?: number
	low?: number
	max?: number | string
	min?: number | string
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
