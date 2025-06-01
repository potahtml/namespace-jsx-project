// Solid Main - https://www.solidjs.com/
interface MathMLAnnotationXmlElementAttributes<T> extends MathMLAttributes<T> {
	encoding?: string

	/** @deprecated */
	src?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLAnnotationXmlElementAttributes<T> extends MathMLAttributes<T> {
	encoding?: string | false

	/** @deprecated */
	src?: string | false
}

// Preact - https://preactjs.com/
interface AnnotationXmlMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	encoding?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
	src?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLAnnotationXmlElementAttributes<Element> extends MathMLAttributes<Element> {
	encoding?: string

	/** @deprecated */
	src?: string
}
