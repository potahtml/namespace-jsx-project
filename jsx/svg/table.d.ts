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
