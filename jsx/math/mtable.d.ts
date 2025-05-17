// Solid Main - https://www.solidjs.com/
interface MathMLMtableElementAttributes<T> extends MathMLAttributes<T> {
	/** @non-standard */
	align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	columnlines?: 'dashed' | 'none' | 'solid'
	/** @non-standard */
	columnspacing?: string
	/** @non-standard */
	frame?: 'dashed' | 'none' | 'solid'
	/** @non-standard */
	framespacing?: string
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
	/** @non-standard */
	rowlines?: 'dashed' | 'none' | 'solid'
	/** @non-standard */
	rowspacing?: string
	/** @non-standard */
	width?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMtableElementAttributes<T> extends MathMLAttributes<T> {
	/** @non-standard */
	align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right' | false
	/** @non-standard */
	columnlines?: 'dashed' | 'none' | 'solid' | false
	/** @non-standard */
	columnspacing?: string | false
	/** @non-standard */
	frame?: 'dashed' | 'none' | 'solid' | false
	/** @non-standard */
	framespacing?: string | false
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false
	/** @non-standard */
	rowlines?: 'dashed' | 'none' | 'solid' | false
	/** @non-standard */
	rowspacing?: string | false
	/** @non-standard */
	width?: string | false
}

// Preact - https://preactjs.com/
interface MTableMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
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

// Pota - https://github.com/potahtml/pota
interface MathMLMtableElementAttributes {
	/** @non-standard */
	align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	columnlines?: 'dashed' | 'none' | 'solid'
	/** @non-standard */
	columnspacing?: string
	/** @non-standard */
	frame?: 'dashed' | 'none' | 'solid'
	/** @non-standard */
	framespacing?: string
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
	/** @non-standard */
	rowlines?: 'dashed' | 'none' | 'solid'
	/** @non-standard */
	rowspacing?: string
	/** @non-standard */
	width?: string
}
