// Solid Main - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	abbr?: string
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'

	colSpan?: number | string
	rowSpan?: number | string

	align?: 'left' | 'center' | 'right' | 'justify' | 'char'

	axis?: string

	bgcolor?: string

	char?: string

	charoff?: string

	height?: string

	nowrap?: boolean

	valign?: 'baseline' | 'bottom' | 'middle' | 'top'

	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	abbr?: string | false
	colspan?: number | string | false
	headers?: string | false
	rowspan?: number | string | false
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup' | false

	align?: 'left' | 'center' | 'right' | 'justify' | 'char' | false

	axis?: string | false

	bgcolor?: string | false

	char?: string | false

	charoff?: string | false

	height?: string | false

	nowrap?: true | false | '' | false

	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | false

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

	align?: 'left' | 'center' | 'right' | 'justify' | 'char'

	axis?: string

	bgcolor?: string

	char?: string

	charoff?: string

	height?: string

	nowrap?: boolean | ''

	valign?: 'baseline' | 'bottom' | 'middle' | 'top'

	width?: number | string
}
