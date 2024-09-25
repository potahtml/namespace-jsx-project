// Preact - https://preactjs.com/
interface HTMLMTableElement extends MathMLElement {
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#align */
	align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnalign */
	columnalign?: 'center' | 'left' | 'right'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnlines */
	columnlines?: 'dashed' | 'none' | 'solid'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnspacing */
	columnspacing?: string
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#frame */
	frame?: 'dashed' | 'none' | 'solid'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#framespacing */
	framespacing?: string
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowalign */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowlines */
	rowlines?: 'dashed' | 'none' | 'solid'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowspacing */
	rowspacing?: string
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#width */
	width?: string
}
