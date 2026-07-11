// Solid Main - https://www.solidjs.com/
interface MathMLMtdElementAttributes<T> extends MathMLAttributes<T> {
	columnspan?: number | string
	rowspan?: number | string

	columnalign?: 'center' | 'left' | 'right'

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}

// Solid Next - https://www.solidjs.com/
interface MathMLMtdElementAttributes<T> extends MathMLAttributes<T> {
	columnspan?: number | string | false
	rowspan?: number | string | false

	columnalign?: 'center' | 'left' | 'right' | false

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMtdElementAttributes<Element> extends MathMLAttributes<Element> {
	columnspan?: number | string
	rowspan?: number | string

	columnalign?: 'center' | 'left' | 'right'

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'
}
