// Preact - https://preactjs.com/
interface AnnotationMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	encoding?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
	src?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLAnnotationElementAttributes {
	encoding?: string

	/** @deprecated */
	src?: string
}
