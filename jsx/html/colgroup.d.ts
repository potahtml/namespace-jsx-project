// Solid Main - https://www.solidjs.com/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
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

// Solid Next - https://www.solidjs.com/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number | string | false

	/** @deprecated */
	align?: 'left' | 'center' | 'right' | 'justify' | 'char' | false
	/** @deprecated */
	bgcolor?: string | false
	/** @deprecated */
	char?: string | false
	/** @deprecated */
	charoff?: string | false
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | false
	/** @deprecated */
	width?: number | string | false
}

// Voby - https://github.com/vobyjs/voby
interface ColgroupHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	span?: number
}

// Vue - https://vuejs.org/
interface ColgroupHTMLAttributes extends HTMLAttributes {
	span?: number | string
}

// Preact - https://preactjs.com/
interface ColgroupHTMLAttributes<T extends EventTarget = HTMLTableColElement> extends HTMLAttributes<T> {
	span?: number
}

// React - https://react.dev/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number
}

// Pota - https://github.com/potahtml/pota
interface HTMLTableColElementAttributes<Element> extends HTMLAttributes<Element> {
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
