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

// Preact - https://preactjs.com/
interface MFracMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#denomalign */
	denomalign?: 'center' | 'left' | 'right'
	linethickness?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#numalign */
	numalign?: 'center' | 'left' | 'right'
}

// Pota - https://github.com/potahtml/pota
interface MathMLMfracElementAttributes<Element> extends MathMLAttributes<Element> {
	linethickness?: string

	/** @deprecated */
	denomalign?: 'center' | 'left' | 'right'
	/** @deprecated */
	numalign?: 'center' | 'left' | 'right'
}
