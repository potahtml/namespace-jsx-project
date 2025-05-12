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
