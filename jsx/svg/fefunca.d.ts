// Solid Main - https://www.solidjs.com/
interface FeFuncSVGAttributes<T> extends CoreSVGAttributes<T> {
	amplitude?: number | string
	exponent?: number | string
	intercept?: number | string
	offset?: number | string
	slope?: number | string
	tableValues?: string
	type?: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma'
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	tabIndex?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface FeFuncSVGAttributes<T> extends CoreSVGAttributes<T> {
	amplitude?: number | string
	exponent?: number | string
	intercept?: number | string
	offset?: number | string
	slope?: number | string
	tableValues?: string
	type?: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma'
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

// Solid Next - https://www.solidjs.com/
interface FeFuncSVGAttributes<T> extends CoreSVGAttributes<T> {
	amplitude?: number | string | false
	exponent?: number | string | false
	intercept?: number | string | false
	offset?: number | string | false
	slope?: number | string | false
	tableValues?: string | false
	type?: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma' | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | false
	lang?: string | false
	tabindex?: number | string | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFEFuncAElementAttributes {}
