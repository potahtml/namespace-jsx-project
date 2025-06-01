// Solid Main - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	abbr?: string
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'

	colSpan?: number | string
	rowSpan?: number | string

	/** @deprecated */
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	/** @deprecated */
	axis?: string
	/** @deprecated */
	bgcolor?: string
	/** @deprecated */
	char?: string
	/** @deprecated */
	charoff?: string
	/** @deprecated */
	height?: string
	/** @deprecated */
	nowrap?: boolean
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top'
	/** @deprecated */
	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	abbr?: string | false
	colspan?: number | string | false
	headers?: string | false
	rowspan?: number | string | false
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup' | false

	/** @deprecated */
	align?: 'left' | 'center' | 'right' | 'justify' | 'char' | false
	/** @deprecated */
	axis?: string | false
	/** @deprecated */
	bgcolor?: string | false
	/** @deprecated */
	char?: string | false
	/** @deprecated */
	charoff?: string | false
	/** @deprecated */
	height?: string | false
	/** @deprecated */
	nowrap?: true | false | '' | false
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | false
	/** @deprecated */
	width?: number | string | false
}

// Voby - https://github.com/vobyjs/voby
interface ThHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colSpan?: number
	headers?: string
	rowSpan?: number
	scope?: string
	abbr?: string
}

// Vue - https://vuejs.org/
interface ThHTMLAttributes extends HTMLAttributes {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	scope?: string
	abbr?: string
}

// Preact - https://preactjs.com/
interface ThHTMLAttributes<T extends EventTarget = HTMLTableCellElement> extends HTMLAttributes<T> {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colspan?: number
	colSpan?: number
	headers?: string
	rowspan?: number
	rowSpan?: number
	scope?: string
	abbr?: string
}

// React - https://react.dev/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colSpan?: number
	headers?: string
	rowSpan?: number
	scope?: string
	abbr?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLTableCellThElementAttributes<Element> extends HTMLAttributes<Element> {
	abbr?: string
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'

	/** @deprecated */
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	/** @deprecated */
	axis?: string
	/** @deprecated */
	bgcolor?: string
	/** @deprecated */
	char?: string
	/** @deprecated */
	charoff?: string
	/** @deprecated */
	height?: string
	/** @deprecated */
	nowrap?: boolean | ''
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top'
	/** @deprecated */
	width?: number | string
}
