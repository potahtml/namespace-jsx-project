// Preact - https://preactjs.com/
interface HTMLMTdElement extends MathMLElement {
	columnspan?: number
	rowspan?: number
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#columnalign */
	columnalign?: 'center' | 'left' | 'right'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#rowalign */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Pota - https://github.com/potahtml/pota
interface MathMLMtdElementAttributes {
	columnspan?: number
	rowspan?: number
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
