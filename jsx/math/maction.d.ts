// Solid Main - https://www.solidjs.com/
interface MathMLMactionElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	actiontype?: 'statusline' | 'toggle'
	/**
	 * @deprecated
	 * @non-standard
	 */
	selection?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMactionElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	actiontype?: 'statusline' | 'toggle' | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	selection?: string | false
}

// Preact - https://preactjs.com/
interface MActionMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#actiontype */
	actiontype?: 'statusline' | 'toggle'
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#selection */
	selection?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMactionElementAttributes<Element> extends MathMLAttributes<Element> {
	/** @deprecated */
	actiontype?: 'statusline' | 'toggle'
	/** @deprecated */
	selection?: string
}
