// Solid - https://www.solidjs.com/
interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
	colspan?: number | string
	headers?: string
	rowspan?: number | string
	colSpan?: number | string
	rowSpan?: number | string
	scope?: 'col' | 'row' | 'rowgroup' | 'colgroup'
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
