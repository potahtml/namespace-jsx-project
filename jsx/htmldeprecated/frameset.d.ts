// Pota - https://github.com/potahtml/pota
interface HTMLFrameSetElementAttributes {
	/** @deprecated */
	cols?: string
	/** @deprecated */
	rows?: string
}

interface HTMLFrameSetElementEvents<Element> extends HTMLElementEvents<Element>, WindowEventHandlersEvents<Element> {}
