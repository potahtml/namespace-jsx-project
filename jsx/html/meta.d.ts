// Solid - https://www.solidjs.com/
interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
	charset?: string
	content?: string
	'http-equiv'?: string
	name?: string
	media?: string
}

// Voby - https://github.com/vobyjs/voby
interface MetaHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	charSet?: string
	content?: string
	httpEquiv?: string
	name?: string
	media?: string
}

// Vue - https://vuejs.org/
interface MetaHTMLAttributes extends HTMLAttributes {
	charset?: string
	content?: string
	httpequiv?: string
	name?: string
}

// Preact - https://preactjs.com/
interface MetaHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	charSet?: string
	httpEquiv?: string
	name?: string
	media?: string
}

// React - https://react.dev/
interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
	charSet?: string
	content?: string
	httpEquiv?: string
	media?: string
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLMetaElementAttributes {
	charset?: string
	content?: string
	'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'x-ua-compatible' | 'refresh'
	media?: string
	name?: string

	/** @deprecated */
	scheme?: string
}
