// Solid Main - https://www.solidjs.com/
interface MathMLMspaceElementAttributes<T> extends MathMLAttributes<T> {
	depth?: string
	height?: string
	width?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMspaceElementAttributes<T> extends MathMLAttributes<T> {
	depth?: string | false
	height?: string | false
	width?: string | false
}

// Preact - https://preactjs.com/
interface MSpaceMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	depth?: string
	height?: string
	width?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMspaceElementAttributes {
	depth?: string
	height?: string
	width?: string
}
