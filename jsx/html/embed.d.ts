// Solid - https://www.solidjs.com/
interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	src?: string
	type?: string
	width?: number | string
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

// React - https://react.dev/
interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	src?: string
	type?: string
	width?: number | string
}
