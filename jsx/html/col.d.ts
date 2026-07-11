// Solid Main - https://www.solidjs.com/
interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number | string

	align?: 'left' | 'center' | 'right' | 'justify' | 'char'

	bgcolor?: string

	char?: string

	charoff?: string

	valign?: 'baseline' | 'bottom' | 'middle' | 'top'

	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number | string | false

	align?: 'left' | 'center' | 'right' | 'justify' | 'char' | false

	bgcolor?: string | false

	char?: string | false

	charoff?: string | false

	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | false

	width?: number | string | false
}

// Voby - https://github.com/vobyjs/voby
interface ColHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	span?: number
	width?: number | string
}

// Vue - https://vuejs.org/
interface ColHTMLAttributes extends HTMLAttributes {
	span?: number | string
	width?: number | string
}

// React - https://react.dev/
interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLTableColElementAttributes<Element> extends HTMLAttributes<Element> {
	span?: number | string

	align?: 'left' | 'center' | 'right' | 'justify' | 'char'

	bgcolor?: string

	char?: string

	charoff?: string

	valign?: 'baseline' | 'bottom' | 'middle' | 'top'

	width?: number | string
}
