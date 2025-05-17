// Solid Main - https://www.solidjs.com/
interface MathMLMsubElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	subscriptshift?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMsubElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	subscriptshift?: string | false
}

// Preact - https://preactjs.com/
interface MSubMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub#subscriptshift */
	subscriptshift?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMsubElementAttributes {
	/** @deprecated */
	subscriptshift?: string
}
