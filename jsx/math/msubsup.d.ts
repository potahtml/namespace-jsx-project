// Solid Main - https://www.solidjs.com/
interface MathMLMsubsupElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	subscriptshift?: string
	/**
	 * @deprecated
	 * @non-standard
	 */
	superscriptshift?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMsubsupElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	subscriptshift?: string | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	superscriptshift?: string | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMsubsupElementAttributes<Element> extends MathMLAttributes<Element> {
	/** @deprecated */
	subscriptshift?: string
	/** @deprecated */
	superscriptshift?: string
}
