// Solid Minor - https://www.solidjs.com/
interface MathMLMsupElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	superscriptshift?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMsupElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	superscriptshift?: string | false
}

// Preact - https://preactjs.com/
interface MSupMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msup#superscriptshift */
	superscriptshift?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMsupElementAttributes {
	/** @deprecated */
	superscriptshift?: string
}
