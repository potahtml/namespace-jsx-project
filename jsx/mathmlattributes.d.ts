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
	displaystyle?: true | false | '' | undefined | false
	/** @deprecated */
	href?: string | undefined | false
	/** @deprecated */
	mathbackground?: string | undefined | false
	/** @deprecated */
	mathcolor?: string | undefined | false
	/** @deprecated */
	mathsize?: string | undefined | false
	nonce?: string | undefined | false
	scriptlevel?: string | undefined | false
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
