// Solid - https://www.solidjs.com/
interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number | string
	width?: number | string
}

// Voby - https://github.com/vobyjs/voby
interface ColHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	span?: number
	width?: number | string
}

// Vue - https://vuejs.org/
interface ColHTMLAttributes extends HTMLAttributes {
	span?: number | string
	width?: number | string
}

// Preact - https://preactjs.com/
interface ColHTMLAttributes<T extends EventTarget = HTMLTableColElement> extends HTMLAttributes<T> {
	span?: number
	width?: number | string
}

// React - https://react.dev/
interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLTableColElementAttributes {
	span?: number | string

	/** @deprecated */
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	/** @deprecated */
	bgcolor?: string
	/** @deprecated */
	char?: string
	/** @deprecated */
	charoff?: string
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top'
	/** @deprecated */
	width?: number | string
}
