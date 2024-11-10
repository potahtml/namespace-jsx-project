// Preact - https://preactjs.com/
interface MActionMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#actiontype */
	actiontype?: 'statusline' | 'toggle'
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#selection */
	selection?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMactionElementAttributes {
	/** @deprecated */
	actiontype?: 'statusline' | 'toggle'
	/** @deprecated */
	selection?: string
}
