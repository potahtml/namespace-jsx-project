// Solid Minor - https://www.solidjs.com/
interface MathMLMunderElementAttributes<T> extends MathMLAttributes<T> {
	accentunder?: '' | boolean
}

// Solid Next - https://www.solidjs.com/
interface MathMLMunderElementAttributes<T> extends MathMLAttributes<T> {
	accentunder?: true | false | '' | false
}

// Preact - https://preactjs.com/
interface MUnderMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	accentunder?: boolean
}

// Pota - https://github.com/potahtml/pota
interface MathMLMunderElementAttributes {
	accentunder?: 'true' | boolean
}
