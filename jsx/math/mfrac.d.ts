// Solid Main - https://www.solidjs.com/
interface MathMLMfracElementAttributes<T> extends MathMLAttributes<T> {
	linethickness?: string

	denomalign?: 'center' | 'left' | 'right'

	numalign?: 'center' | 'left' | 'right'
}

// Solid Next - https://www.solidjs.com/
interface MathMLMfracElementAttributes<T> extends MathMLAttributes<T> {
	linethickness?: string | false

	denomalign?: 'center' | 'left' | 'right' | false

	numalign?: 'center' | 'left' | 'right' | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMfracElementAttributes<Element> extends MathMLAttributes<Element> {
	linethickness?: string

	denomalign?: 'center' | 'left' | 'right'

	numalign?: 'center' | 'left' | 'right'
}
