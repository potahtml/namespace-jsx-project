// Solid Main - https://www.solidjs.com/
interface MathMLMactionElementAttributes<T> extends MathMLAttributes<T> {
	actiontype?: 'statusline' | 'toggle'

	selection?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMactionElementAttributes<T> extends MathMLAttributes<T> {
	actiontype?: 'statusline' | 'toggle' | false

	selection?: string | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMactionElementAttributes<Element> extends MathMLAttributes<Element> {
	actiontype?: 'statusline' | 'toggle'

	selection?: string
}
