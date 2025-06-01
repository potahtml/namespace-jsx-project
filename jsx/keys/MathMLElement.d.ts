// Solid Main - https://www.solidjs.com/
interface MathMLAttributes<T> extends DOMAttributes<T> {
	dir?: 'ltr' | 'rtl' | 'auto'
	displaystyle?: boolean
	scriptlevel?: string
	xmlns?: string

	/** @deprecated */
	href?: string
	/** @deprecated */
	mathbackground?: string
	/** @deprecated */
	mathcolor?: string
	/** @deprecated */
	mathsize?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLAttributes<T> extends ElementAttributes<T> {
	dir?: 'ltr' | 'rtl' | 'auto' | false
	displaystyle?: true | false | '' | false
	scriptlevel?: string | false
	xmlns?: string | false

	/** @deprecated */
	href?: string | false
	/** @deprecated */
	mathbackground?: string | false
	/** @deprecated */
	mathcolor?: string | false
	/** @deprecated */
	mathsize?: string | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

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

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface MathMLAttributes<Element> extends ElementAttributes<Element> {
	dir?: 'ltr' | 'rtl' | 'auto'
	displaystyle?: boolean | ''
	scriptlevel?: string

	/** @deprecated */
	href?: string
	/** @deprecated */
	mathbackground?: string
	/** @deprecated */
	mathcolor?: string
	/** @deprecated */
	mathsize?: string
}
