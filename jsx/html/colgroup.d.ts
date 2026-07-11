// Solid Main - https://www.solidjs.com/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number | string

	align?: 'left' | 'center' | 'right' | 'justify' | 'char'

	bgcolor?: string

	char?: string

	charoff?: string

	valign?: 'baseline' | 'bottom' | 'middle' | 'top'

	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number | string | false

	align?: 'left' | 'center' | 'right' | 'justify' | 'char' | false

	bgcolor?: string | false

	char?: string | false

	charoff?: string | false

	valign?: 'baseline' | 'bottom' | 'middle' | 'top' | false

	width?: number | string | false
}

// Voby - https://github.com/vobyjs/voby
interface ColgroupHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	span?: number
}

// Vue - https://vuejs.org/
interface ColgroupHTMLAttributes extends HTMLAttributes {
	span?: number | string
}

// React - https://react.dev/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number
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
