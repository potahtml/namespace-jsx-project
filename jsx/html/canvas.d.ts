// Solid Main - https://www.solidjs.com/
interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	width?: number | string

	/**
	 * @deprecated
	 * @non-standard
	 */
	'moz-opaque'?: boolean
}

// Solid Next - https://www.solidjs.com/
interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string | false
	width?: number | string | false

	/**
	 * @deprecated
	 * @non-standard
	 */
	'moz-opaque'?: true | false | '' | false
}

// Voby - https://github.com/vobyjs/voby
interface CanvasHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	height?: number | string
	width?: number | string
}

// Vue - https://vuejs.org/
interface CanvasHTMLAttributes extends HTMLAttributes {
	height?: number | string
	width?: number | string
}

// Preact - https://preactjs.com/
interface CanvasHTMLAttributes<T extends EventTarget = HTMLCanvasElement> extends HTMLAttributes<T> {
	height?: number | string
	width?: number | string
}

// React - https://react.dev/
interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLCanvasElementAttributes<Element> extends HTMLAttributes<Element> {
	height?: number | string
	width?: number | string

	/** @deprecated */
	'moz-opaque'?: boolean | ''
}
