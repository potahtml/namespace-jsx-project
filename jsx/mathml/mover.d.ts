// Solid Minor - https://www.solidjs.com/
interface MathMLMoverElementAttributes<T> extends MathMLAttributes<T> {
	accent?: '' | boolean
}

// Solid Next - https://www.solidjs.com/
interface MathMLMoverElementAttributes<T> extends MathMLAttributes<T> {
	accent?: true | false | '' | false
}

// Preact - https://preactjs.com/
interface MOverMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	accent?: boolean
}

// Pota - https://github.com/potahtml/pota
interface MathMLMoverElementAttributes {
	accent?: 'true' | boolean
}
