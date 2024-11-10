// Solid - https://www.solidjs.com/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
	value?: string | string[] | number
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
interface HTMLParamElementAttributes {
	/** @deprecated */
	name?: string
	/** @deprecated */
	value?: number | string
	/** @deprecated */
	type?: string
	/** @deprecated */
	valuetype?: 'data' | 'ref' | 'object'
}
