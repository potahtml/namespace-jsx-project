// Preact - https://preactjs.com/
interface MSubsupMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#subscriptshift */
	subscriptshift?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#superscriptshift */
	superscriptshift?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMsubsupElementAttributes {
	/** @deprecated */
	subscriptshift?: string
	/** @deprecated */
	superscriptshift?: string
}
