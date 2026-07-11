// Solid Main - https://www.solidjs.com/
interface MathMLMtrElementAttributes<T> extends MathMLAttributes<T> {
	columnalign?: 'center' | 'left' | 'right'

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Solid Next - https://www.solidjs.com/
interface MathMLMtrElementAttributes<T> extends MathMLAttributes<T> {
	columnalign?: 'center' | 'left' | 'right' | false

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMtrElementAttributes<Element> extends MathMLAttributes<Element> {
	columnalign?: 'center' | 'left' | 'right'

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
