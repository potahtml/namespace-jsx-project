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
