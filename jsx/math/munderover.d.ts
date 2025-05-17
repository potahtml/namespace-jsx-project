// Solid Main - https://www.solidjs.com/
interface MathMLMunderoverElementAttributes<T> extends MathMLAttributes<T> {
	accent?: '' | boolean
	accentunder?: '' | boolean
}

// Solid Next - https://www.solidjs.com/
interface MathMLMunderoverElementAttributes<T> extends MathMLAttributes<T> {
	accent?: true | false | '' | false
	accentunder?: true | false | '' | false
}

// Preact - https://preactjs.com/
interface MUnderMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	accentunder?: boolean
}

// Pota - https://github.com/potahtml/pota
interface MathMLMunderoverElementAttributes {
	accent?: 'true' | boolean
	accentunder?: 'true' | boolean
}
