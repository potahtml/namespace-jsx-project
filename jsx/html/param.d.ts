// Solid Main - https://www.solidjs.com/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	name?: string
	/** @deprecated */
	type?: string
	/** @deprecated */
	value?: string | number
	/** @deprecated */
	valuetype?: 'data' | 'ref' | 'object'
}

// Solid Next - https://www.solidjs.com/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	name?: string | false
	/** @deprecated */
	type?: string | false
	/** @deprecated */
	value?: string | number | false
	/** @deprecated */
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

// Preact - https://preactjs.com/
interface ParamHTMLAttributes<T extends EventTarget = HTMLParamElement> extends HTMLAttributes<T> {
	name?: string
	role?: never
	value?: string | number
}

// React - https://react.dev/
interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLParamElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	name?: string
	/** @deprecated */
	value?: number | string
	/** @deprecated */
	type?: string
	/** @deprecated */
	valuetype?: 'data' | 'ref' | 'object'
}
