// Solid Main - https://www.solidjs.com/
interface MathMLMfencedElementAttributes<T> extends MathMLAttributes<T> {
	close?: string
	open?: string
	separators?: string
}

// Solid Minor - https://www.solidjs.com/
interface MathMLMfencedElementAttributes<T> extends MathMLAttributes<T> {
	close?: string
	open?: string
	separators?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMfencedElementAttributes<T> extends MathMLAttributes<T> {
	close?: string | false
	open?: string | false
	separators?: string | false
}

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
