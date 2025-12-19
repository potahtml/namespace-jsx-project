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

// Pota - https://github.com/potahtml/pota
interface MathMLMactionElementAttributes<Element> extends MathMLAttributes<Element> {
	/** @deprecated */
	actiontype?: 'statusline' | 'toggle'
	/** @deprecated */
	selection?: string
}
