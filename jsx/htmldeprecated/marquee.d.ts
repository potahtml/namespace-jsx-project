// Preact - https://preactjs.com/
interface HTMLMarqueeElement extends HTMLElement {
	behavior?: 'scroll' | 'slide' | 'alternate'
	bgColor?: string
	direction?: 'left' | 'right' | 'up' | 'down'
	height?: number | string
	hspace?: number | string
	loop?: number | string
	scrollAmount?: number | string
	scrollDelay?: number | string
	trueSpeed?: boolean
	vspace?: number | string
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLMarqueeElementAttributes {
	/** @deprecated */
	behavior?: 'scroll' | 'slide' | 'alternate'
	/** @deprecated */
	bgcolor?: string
	/** @deprecated */
	direction?: 'left' | 'right' | 'up' | 'down'
	/** @deprecated */
	height?: number | string
	/** @deprecated */
	hspace?: number | string
	/** @deprecated */
	loop?: number | string
	/** @deprecated */
	scrollamount?: number | string
	/** @deprecated */
	scrolldelay?: number | string
	/** @deprecated */
	truespeed?: 'true' | boolean
	/** @deprecated */
	vspace?: number | string
	/** @deprecated */
	width?: number | string
}
