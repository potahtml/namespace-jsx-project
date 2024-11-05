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

// Pota - https://github.com/potahtml/pota
interface SVGFEFuncGElementAttributes {}
