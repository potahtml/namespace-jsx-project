// Solid Main - https://www.solidjs.com/
interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	colSpan?: number | string
	rowSpan?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
	colspan?: number | string
	headers?: string
	rowspan?: number | string

	/** @deprecated Use lowercase attributes */
	colSpan?: number | string
	/** @deprecated Use lowercase attributes */
	rowSpan?: number | string

	/** @deprecated */
	abbr?: string
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
	height?: number | string
	/** @deprecated */
	nowrap?: '' | boolean
	/** @deprecated */
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top'
	/** @deprecated */
	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
	colspan?: number | string | undefined | false
	headers?: string | undefined | false
	rowspan?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	colSpan?: number | string | undefined | false
	/** @deprecated Use lowercase attributes */
	rowSpan?: number | string | undefined | false

	/** @deprecated */
	abbr?: string | undefined | false
	/** @deprecated */
	align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined | false
	/** @deprecated */
	axis?: string | undefined | false
	/** @deprecated */
	bgcolor?: string | undefined | false
	/** @deprecated */
	char?: string | undefined | false
	/** @deprecated */
	charoff?: string | undefined | false
	/** @deprecated */
	height?: number | string | undefined | false
	/** @deprecated */
	nowrap?: true | false | '' | undefined | false
	/** @deprecated */
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup' | undefined | false
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | undefined | false
	/** @deprecated */
	width?: number | string | undefined | false
}

// Voby - https://github.com/vobyjs/voby
interface TdHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colSpan?: number
	headers?: string
	rowSpan?: number
	scope?: string
	abbr?: string
	height?: number | string
	width?: number | string
	valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

// Vue - https://vuejs.org/
interface TdHTMLAttributes extends HTMLAttributes {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	scope?: string
	abbr?: string
	height?: number | string
	width?: number | string
	valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

// Preact - https://preactjs.com/
interface TdHTMLAttributes<T extends EventTarget = HTMLTableCellElement> extends HTMLAttributes<T> {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colspan?: number
	colSpan?: number
	headers?: string
	rowspan?: number
	rowSpan?: number
	scope?: string
	abbr?: string
	height?: number | string
	width?: number | string
	valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

// React - https://react.dev/
interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
	align?: 'left' | 'center' | 'right' | 'justify' | 'char'
	colSpan?: number
	headers?: string
	rowSpan?: number
	scope?: string
	abbr?: string
	height?: number | string
	width?: number | string
	valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

// Pota - https://github.com/potahtml/pota
interface HTMLTableCellTdElementAttributes {
	colspan?: number | string
	headers?: string
	rowspan?: number | string

	/** @deprecated */
	abbr?: string
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
	height?: number | string
	/** @deprecated */
	nowrap?: 'true' | boolean
	/** @deprecated */
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top'
	/** @deprecated */
	width?: number | string
}
