// Preact - https://preactjs.com/
interface MFencedMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	close?: string
	open?: string
	separators?: string
}

// Pota - https://github.com/potahtml/pota
interface MathMLMfencedElementAttributes {
	close?: string
	open?: string
	separators?: string
}
