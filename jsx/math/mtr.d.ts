// Solid Main - https://www.solidjs.com/
interface MathMLMtrElementAttributes<T> extends MathMLAttributes<T> {
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Solid Next - https://www.solidjs.com/
interface MathMLMtrElementAttributes<T> extends MathMLAttributes<T> {
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right' | false
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMtrElementAttributes<Element> extends MathMLAttributes<Element> {
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
