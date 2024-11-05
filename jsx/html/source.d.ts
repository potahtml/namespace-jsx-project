// Solid - https://www.solidjs.com/
interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	type?: string
	width?: number | string
	height?: number | string
}

// Voby - https://github.com/vobyjs/voby
interface SourceHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	height?: number | string
	media?: string
	sizes?: string
	src?: string
	srcSet?: string
	type?: string
	width?: number | string
}

// Vue - https://vuejs.org/
interface SourceHTMLAttributes extends HTMLAttributes {
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	type?: string
}

// React - https://react.dev/
interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	media?: string
	sizes?: string
	src?: string
	srcSet?: string
	type?: string
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLSourceElementAttributes {
	height?: number | string
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	type?: string
	width?: number | string
}
