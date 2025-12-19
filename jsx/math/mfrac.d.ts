// Solid Main - https://www.solidjs.com/
interface MathMLMfracElementAttributes<T> extends MathMLAttributes<T> {
	linethickness?: string

	/**
	 * @deprecated
	 * @non-standard
	 */
	denomalign?: 'center' | 'left' | 'right'
	/**
	 * @deprecated
	 * @non-standard
	 */
	numalign?: 'center' | 'left' | 'right'
}

// Solid Next - https://www.solidjs.com/
interface MathMLMfracElementAttributes<T> extends MathMLAttributes<T> {
	linethickness?: string | false

	/**
	 * @deprecated
	 * @non-standard
	 */
	denomalign?: 'center' | 'left' | 'right' | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	numalign?: 'center' | 'left' | 'right' | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMfracElementAttributes<Element> extends MathMLAttributes<Element> {
	linethickness?: string

	/** @deprecated */
	denomalign?: 'center' | 'left' | 'right'
	/** @deprecated */
	numalign?: 'center' | 'left' | 'right'
}
