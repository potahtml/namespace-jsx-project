// Solid Minor - https://www.solidjs.com/
interface MathMLMpaddedElementAttributes<T> extends MathMLAttributes<T> {
	depth?: string
	height?: string
	lspace?: string
	voffset?: string
	width?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMpaddedElementAttributes<T> extends MathMLAttributes<T> {
	depth?: string | false
	height?: string | false
	lspace?: string | false
	voffset?: string | false
	width?: string | false
}

// Preact - https://preactjs.com/
interface MPaddedMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	depth?: string
	height?: string
	lspace?: string
	voffset?: string
	width?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMpaddedElementAttributes {
	depth?: string
	height?: string
	lspace?: string
	voffset?: string
	width?: string
}
