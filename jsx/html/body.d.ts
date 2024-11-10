// Pota - https://github.com/potahtml/pota
interface HTMLBodyElementAttributes {
	/** @deprecated */
	alink?: string
	/** @deprecated */
	background?: string
	/** @deprecated */
	bgcolor?: string
	/** @deprecated */
	bottommargin?: number | string
	/** @deprecated */
	leftmargin?: number | string
	/** @deprecated */
	link?: string
	/** @deprecated */
	rightmargin?: number | string
	/** @deprecated */
	text?: string
	/** @deprecated */
	topmargin?: number | string
	/** @deprecated */
	vlink?: string
}

interface HTMLBodyElementEvents<Element> extends HTMLElementEvents<Element>, WindowEventHandlersEvents<Element> {}
