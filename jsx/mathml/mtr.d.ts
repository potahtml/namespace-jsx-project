// Solid Main - https://www.solidjs.com/
interface MathMLMtrElementAttributes<T> extends MathMLAttributes<T> {
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Solid Minor - https://www.solidjs.com/
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

// Preact - https://preactjs.com/
interface MTrMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#columnalign */
	columnalign?: 'center' | 'left' | 'right'
	/** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#rowalign */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Pota - https://github.com/potahtml/pota
interface MathMLMtrElementAttributes {
	/** @non-standard */
	columnalign?: 'center' | 'left' | 'right'
	/** @non-standard */
	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
