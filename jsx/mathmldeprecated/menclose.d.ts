// Solid Minor - https://www.solidjs.com/
interface MathMLMencloseElementAttributes<T> extends MathMLAttributes<T> {
	/** @non-standard */
	notation?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMencloseElementAttributes<T> extends MathMLAttributes<T> {
	/** @non-standard */
	notation?: string | false
}

// Preact - https://preactjs.com/
interface MEncloseMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	notation?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMencloseElementAttributes {
	/** @non-standard */
	notation?: string
}
