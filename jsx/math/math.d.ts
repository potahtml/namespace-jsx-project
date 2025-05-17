// Solid Main - https://www.solidjs.com/
interface MathMLMathElementAttributes<T> extends MathMLAttributes<T> {
	display?: 'block' | 'inline'
}

// Solid Next - https://www.solidjs.com/
interface MathMLMathElementAttributes<T> extends MathMLAttributes<T> {
	display?: 'block' | 'inline' | false
}

// Preact - https://preactjs.com/
interface MathMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	display?: 'block' | 'inline'
}

// Pota - https://github.com/potahtml/pota
interface MathMLMathElementAttributes {
	display?: 'block' | 'inline'
}
