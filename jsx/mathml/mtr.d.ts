// Preact - https://preactjs.com/
interface HTMLMTrElement extends MathMLElement {
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#columnalign */
	columnalign?: 'center' | 'left' | 'right'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#rowalign */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
