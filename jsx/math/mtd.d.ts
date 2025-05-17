// Solid Main - https://www.solidjs.com/
interface MathMLMtdElementAttributes<T> extends MathMLAttributes<T> {
	columnspan?: number | string
	rowspan?: number | string
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Solid Next - https://www.solidjs.com/
interface MathMLMtdElementAttributes<T> extends MathMLAttributes<T> {
	columnspan?: number | string | false
	rowspan?: number | string | false
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right' | false
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false
}

// Preact - https://preactjs.com/
interface MTdMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	columnspan?: number
	rowspan?: number
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#columnalign */
	columnalign?: 'center' | 'left' | 'right'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#rowalign */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Pota - https://github.com/potahtml/pota
interface MathMLMtdElementAttributes {
	columnspan?: number | string
	rowspan?: number | string
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
