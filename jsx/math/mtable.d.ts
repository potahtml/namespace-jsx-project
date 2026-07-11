// Solid Main - https://www.solidjs.com/
interface MathMLMtableElementAttributes<T> extends MathMLAttributes<T> {
	align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'

	columnalign?: 'center' | 'left' | 'right'

	columnlines?: 'dashed' | 'none' | 'solid'

	columnspacing?: string

	frame?: 'dashed' | 'none' | 'solid'

	framespacing?: string

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'

	rowlines?: 'dashed' | 'none' | 'solid'

	rowspacing?: string

	width?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMtableElementAttributes<T> extends MathMLAttributes<T> {
	align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false

	columnalign?: 'center' | 'left' | 'right' | false

	columnlines?: 'dashed' | 'none' | 'solid' | false

	columnspacing?: string | false

	frame?: 'dashed' | 'none' | 'solid' | false

	framespacing?: string | false

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top' | false

	rowlines?: 'dashed' | 'none' | 'solid' | false

	rowspacing?: string | false

	width?: string | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMtableElementAttributes<Element> extends MathMLAttributes<Element> {
	align?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'

	columnalign?: 'center' | 'left' | 'right'

	columnlines?: 'dashed' | 'none' | 'solid'

	columnspacing?: string

	frame?: 'dashed' | 'none' | 'solid'

	framespacing?: string

	rowalign?: 'axis' | 'baseline' | 'bottom' | 'center' | 'top'

	rowlines?: 'dashed' | 'none' | 'solid'

	rowspacing?: string

	width?: string
}
