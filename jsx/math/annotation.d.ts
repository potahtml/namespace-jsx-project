// Solid Main - https://www.solidjs.com/
interface MathMLAnnotationElementAttributes<T> extends MathMLAttributes<T> {
	encoding?: string

	/** @deprecated */
	src?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLAnnotationElementAttributes<T> extends MathMLAttributes<T> {
	encoding?: string | false

	/** @deprecated */
	src?: string | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLAnnotationElementAttributes<Element> extends MathMLAttributes<Element> {
	encoding?: string

	/** @deprecated */
	src?: string
}
