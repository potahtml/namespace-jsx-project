// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby
interface TableHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	cellPadding?: number | string
	cellSpacing?: number | string
	summary?: string
	width?: number | string
}

// Vue - https://vuejs.org/
interface TableHTMLAttributes extends HTMLAttributes {
	cellpadding?: number | string
	cellspacing?: number | string
	summary?: string
	width?: number | string
}

// Preact - https://preactjs.com/
interface TableHTMLAttributes<T extends EventTarget = HTMLTableElement> extends HTMLAttributes<T> {
	cellPadding?: string
	cellSpacing?: string
	summary?: string
	width?: number | string
}

// React - https://react.dev/
interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
	align?: 'left' | 'center' | 'right'
	bgcolor?: string
	border?: number
	cellPadding?: number | string
	cellSpacing?: number | string
	frame?: boolean
	rules?: 'none' | 'groups' | 'rows' | 'columns' | 'all'
	summary?: string
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLTableElementAttributes {
	/** @deprecated */
	align?: 'left' | 'center' | 'right'
	/** @deprecated */
	bgcolor?: string
	/** @deprecated */
	border?: number | string
	/** @deprecated */
	cellpadding?: number | string
	/** @deprecated */
	cellspacing?: number | string
	/** @deprecated */
	frame?: 'void' | 'above' | 'below' | 'hsides' | 'vsides' | 'lhs' | 'rhs' | 'box' | 'border'
	/** @deprecated */
	rules?: 'none' | 'groups' | 'rows' | 'cols' | 'all'
	/** @deprecated */
	summary?: string
	/** @deprecated */
	width?: number | string
}
