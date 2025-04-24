// Solid Minor - https://www.solidjs.com/
interface MathMLMmultiscriptsElementAttributes<T> extends MathMLAttributes<T> {
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
interface MathMLMmultiscriptsElementAttributes<T> extends MathMLAttributes<T> {
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

// Preact - https://preactjs.com/
interface MmultiScriptsMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#subscriptshift */
	subscriptshift?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#superscriptshift */
	superscriptshift?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMmultiscriptsElementAttributes {
	/** @deprecated */
	subscriptshift?: string
	/** @deprecated */
	superscriptshift?: string
}
