// Pota - https://github.com/potahtml/pota
interface HTMLFrameSetElementAttributes {
	/** @deprecated */
	cols?: number | string
	/** @deprecated */
	rows?: number | string
}

interface HTMLFrameSetElementEvents<Element> extends HTMLElementEvents<Element>, WindowEventHandlersEvents<Element> {}
