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

// Pota - https://github.com/potahtml/pota
interface MathMLMtdElementAttributes<Element> extends MathMLAttributes<Element> {
	columnspan?: number | string
	rowspan?: number | string
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
