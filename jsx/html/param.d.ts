// Solid Main - https://www.solidjs.com/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string

	type?: string

	value?: string | number

	valuetype?: 'data' | 'ref' | 'object'
}

// Solid Next - https://www.solidjs.com/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string | false

	type?: string | false

	value?: string | number | false

	valuetype?: 'data' | 'ref' | 'object' | false
}

// Voby - https://github.com/vobyjs/voby
interface ParamHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	name?: string
	value?: string | readonly string[] | number
}

// Vue - https://vuejs.org/
interface ParamHTMLAttributes extends HTMLAttributes {
	name?: string
	value?: string | readonly string[] | number
}

// React - https://react.dev/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLParamElementAttributes<Element> extends HTMLAttributes<Element> {
	name?: string

	value?: number | string

	type?: string

	valuetype?: 'data' | 'ref' | 'object'
}
