// Solid Main - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	colSpan?: number | string
	rowSpan?: number | string
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'
}

// Solid Minor - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	abbr?: string
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'

	/** @deprecated Use lowercase attributes */
	colSpan?: number | string
	/** @deprecated Use lowercase attributes */
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
	nowrap?: '' | boolean
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top'
	/** @deprecated */
	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	abbr?: string | undefined | false
	colspan?: number | string | undefined | false
	headers?: string | undefined | false
	rowspan?: number | string | undefined | false
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup' | undefined | false

	/** @deprecated Use lowercase attributes */
	colSpan?: number | string | undefined | false
	/** @deprecated Use lowercase attributes */
	rowSpan?: number | string | undefined | false

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
	height?: string | undefined | false
	/** @deprecated */
	nowrap?: true | false | '' | undefined | false
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | undefined | false
	/** @deprecated */
	width?: number | string | undefined | false
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
interface HTMLTableCellThElementAttributes {
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
	nowrap?: 'true' | boolean
	/** @deprecated */
	valign?: 'baseline' | 'bottom' | 'middle' | 'top'
	/** @deprecated */
	width?: number | string
}
