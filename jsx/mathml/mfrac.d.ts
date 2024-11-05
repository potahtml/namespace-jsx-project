// Preact - https://preactjs.com/
interface HTMLMFracElement extends MathMLElement {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#denomalign */
	denomalign?: 'center' | 'left' | 'right'
	linethickness?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#numalign */
	numalign?: 'center' | 'left' | 'right'
}

// Pota - https://github.com/potahtml/pota
interface MathMLMfracElementAttributes {
	linethickness?: string

	/** @deprecated */
	denomalign?: 'center' | 'left' | 'right'
	/** @deprecated */
	numalign?: 'center' | 'left' | 'right'
}
