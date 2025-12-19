// Solid Main - https://www.solidjs.com/
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

// Pota - https://github.com/potahtml/pota
interface MathMLMfencedElementAttributes<Element> extends MathMLAttributes<Element> {
	close?: string
	open?: string
	separators?: string
}
