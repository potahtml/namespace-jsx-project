// Preact - https://preactjs.com/
interface HTMLMOElement extends MathMLElement {
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo#accent */
	accent?: boolean
	fence?: boolean
	largeop?: boolean
	lspace?: string
	maxsize?: string
	minsize?: string
	movablelimits?: boolean
	rspace?: string
	separator?: boolean
	stretchy?: boolean
	symmetric?: boolean
}

// Pota - https://github.com/potahtml/pota
interface MathMLMoElementAttributes {
	fence?: boolean
	form?: 'prefix' | 'infix' | 'postfix'
	largeop?: boolean
	lspace?: string
	maxsize?: string
	minsize?: string
	movablelimits?: boolean
	rspace?: string
	separator?: boolean
	stretchy?: boolean
	symmetric?: boolean

	/** @non-standard */
	accent?: boolean
}
