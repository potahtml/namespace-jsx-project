// Solid Main - https://www.solidjs.com/
interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	type?: string
	width?: number | string
	height?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
	media?: string
	sizes?: string
	src?: string
	srcset?: string
	type?: string
	width?: number | string
	height?: number | string
}

// Solid Next - https://www.solidjs.com/
interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
	media?: string | undefined | false
	sizes?: string | undefined | false
	src?: string | undefined | false
	srcset?: string | undefined | false
	type?: string | undefined | false
	width?: number | string | undefined | false
	height?: number | string | undefined | false
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
