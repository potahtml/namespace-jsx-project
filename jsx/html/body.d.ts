// Pota - https://github.com/potahtml/pota
interface HTMLBodyElementAttributes {
	/** @deprecated */
	alink?: string
	/** @deprecated */
	background?: string
	/** @deprecated */
	bgcolor?: string
	/** @deprecated */
	bottommargin?: string
	/** @deprecated */
	leftmargin?: string
	/** @deprecated */
	link?: string
	/** @deprecated */
	rightmargin?: string
	/** @deprecated */
	text?: string
	/** @deprecated */
	topmargin?: string
	/** @deprecated */
	vlink?: string
}

interface HTMLBodyElementEvents<Element> extends HTMLElementEvents<Element>, WindowEventHandlersEvents<Element> {}
