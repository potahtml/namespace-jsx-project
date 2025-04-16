// Solid Main - https://www.solidjs.com/
interface FeFuncSVGAttributes<T> extends CoreSVGAttributes<T> {
	type?: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma'
	tableValues?: string
	slope?: number | string
	intercept?: number | string
	amplitude?: number | string
	exponent?: number | string
	offset?: number | string
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface FeFuncSVGAttributes<T> extends CoreSVGAttributes<T> {
	type?: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma'
	tableValues?: string
	slope?: number | string
	intercept?: number | string
	amplitude?: number | string
	exponent?: number | string
	offset?: number | string
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
	type?: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma' | undefined | false
	tableValues?: string | undefined | false
	slope?: number | string | undefined | false
	intercept?: number | string | undefined | false
	amplitude?: number | string | undefined | false
	exponent?: number | string | undefined | false
	offset?: number | string | undefined | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | undefined | false
	lang?: string | undefined | false
	tabindex?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | undefined | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFEFuncGElementAttributes {}
