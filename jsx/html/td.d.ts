// Solid Main - https://www.solidjs.com/
interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
	colspan?: number | string
	headers?: string
	rowspan?: number | string

	colSpan?: number | string
	rowSpan?: number | string

	abbr?: string

	align?: 'left' | 'center' | 'right' | 'justify' | 'char'

	axis?: string

	bgcolor?: string

	char?: string

	charoff?: string

	height?: number | string

	nowrap?: boolean

	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'

	valign?: 'baseline' | 'bottom' | 'middle' | 'top'

	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
	colspan?: number | string | false
	headers?: string | false
	rowspan?: number | string | false

	abbr?: string | false

	align?: 'left' | 'center' | 'right' | 'justify' | 'char' | false

	axis?: string | false

	bgcolor?: string | false

	char?: string | false

	charoff?: string | false

	height?: number | string | false

	nowrap?: true | false | '' | false

	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup' | false

	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | false

	width?: number | string | false
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
interface HTMLTableCellTdElementAttributes<Element> extends HTMLAttributes<Element> {
	colspan?: number | string
	headers?: string
	rowspan?: number | string

	abbr?: string

	align?: 'left' | 'center' | 'right' | 'justify' | 'char'

	axis?: string

	bgcolor?: string

	char?: string

	charoff?: string

	height?: number | string

	nowrap?: boolean | ''

	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'

	valign?: 'baseline' | 'bottom' | 'middle' | 'top'

	width?: number | string
}
