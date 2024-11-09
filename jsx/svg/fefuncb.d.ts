// Solid - https://www.solidjs.com/
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

// Pota - https://github.com/potahtml/pota
interface SVGFEFuncBElementAttributes {}
