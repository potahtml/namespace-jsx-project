// Preact - https://preactjs.com/
interface HTMLMFracElement extends MathMLElement {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#denomalign */
	denomalign?: 'center' | 'left' | 'right'
	linethickness?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#numalign */
	numalign?: 'center' | 'left' | 'right'
}
