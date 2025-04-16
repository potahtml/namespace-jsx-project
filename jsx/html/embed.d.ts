// Solid Main - https://www.solidjs.com/
interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	src?: string
	type?: string
	width?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	src?: string
	type?: string
	width?: number | string

	/** @deprecated */
	align?: 'left' | 'right' | 'justify' | 'center'
	/** @deprecated */
	name?: string
}

// Solid Next - https://www.solidjs.com/
interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string | undefined | false
	src?: string | undefined | false
	type?: string | undefined | false
	width?: number | string | undefined | false

	/** @deprecated */
	align?: 'left' | 'right' | 'justify' | 'center' | undefined | false
	/** @deprecated */
	name?: string | undefined | false
}

// Voby - https://github.com/vobyjs/voby
interface EmbedHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	height?: number | string
	src?: string
	type?: string
	width?: number | string
}

// Vue - https://vuejs.org/
interface EmbedHTMLAttributes extends HTMLAttributes {
	height?: number | string
	src?: string
	type?: string
	width?: number | string
}

// Preact - https://preactjs.com/
interface EmbedHTMLAttributes<T extends EventTarget = HTMLEmbedElement> extends HTMLAttributes<T> {
	height?: number | string
	src?: string
	type?: string
	width?: number | string
}

// React - https://react.dev/
interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	src?: string
	type?: string
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLEmbedElementAttributes {
	height?: number | string
	src?: string
	type?: string
	width?: number | string

	/** @deprecated */
	align?: 'left' | 'right' | 'justify' | 'center'
	/** @deprecated */
	name?: string
}
