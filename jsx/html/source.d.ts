// Solid Main - https://www.solidjs.com/
interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	type?: string
	width?: number | string
}

// Solid Next - https://www.solidjs.com/
interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string | false
	media?: string | false
	sizes?: string | false
	src?: string | false
	srcset?: string | false
	type?: string | false
	width?: number | string | false
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

// Preact - https://preactjs.com/
interface SourceHTMLAttributes<T extends EventTarget = HTMLSourceElement> extends HTMLAttributes<T> {
	height?: number | string
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	srcSet?: string
	type?: string
	width?: number | string
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
