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
