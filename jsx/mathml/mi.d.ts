// Preact - https://preactjs.com/
interface MiMathMLAttributes<T extends EventTarget> extends MathMLAttributes<T> {
	/** The only value allowed in the current specification is normal (case insensitive)
	 * See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mi#mathvariant */
	mathvariant?: 'normal' | 'bold' | 'italic' | 'bold-italic' | 'double-struck' | 'bold-fraktur' | 'script' | 'bold-script' | 'fraktur' | 'sans-serif' | 'bold-sans-serif' | 'sans-serif-italic' | 'sans-serif-bold-italic' | 'monospace' | 'initial' | 'tailed' | 'looped' | 'stretched'
}

// Pota - https://github.com/potahtml/pota
interface MathMLMiElementAttributes {
	mathvariant?: 'normal'
}
