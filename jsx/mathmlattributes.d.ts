// Solid Minor - https://www.solidjs.com/
interface MathMLAttributes<T> extends HTMLAttributes<T> {
	displaystyle?: '' | boolean
	/** @deprecated */
	href?: string
	/** @deprecated */
	mathbackground?: string
	/** @deprecated */
	mathcolor?: string
	/** @deprecated */
	mathsize?: string
	nonce?: string
	scriptlevel?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLAttributes<T> extends HTMLAttributes<T> {
	displaystyle?: true | false | '' | false
	/** @deprecated */
	href?: string | false
	/** @deprecated */
	mathbackground?: string | false
	/** @deprecated */
	mathcolor?: string | false
	/** @deprecated */
	mathsize?: string | false
	nonce?: string | false
	scriptlevel?: string | false
}

// Preact - https://preactjs.com/
interface MathMLAttributes<Target extends EventTarget = MathMLElement> extends HTMLAttributes<Target> {
	dir?: 'ltr' | 'rtl'
	displaystyle?: boolean
	/** @deprecated This feature is non-standard. See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/href  */
	href?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathbackground */
	mathbackground?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathcolor */
	mathcolor?: string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathsize */
	mathsize?: string
	nonce?: string
	scriptlevel?: string
}

// Pota - https://github.com/potahtml/pota
interface DOMMathMLAttributes {
	displaystyle?: 'true' | boolean
	/** @deprecated */
	href?: string
	/** @deprecated */
	mathbackground?: string
	/** @deprecated */
	mathcolor?: string
	/** @deprecated */
	mathsize?: string
	nonce?: string
	scriptlevel?: string
}
