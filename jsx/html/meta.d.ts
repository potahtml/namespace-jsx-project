// Solid Main - https://www.solidjs.com/
interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
	charset?: string
	content?: string
	'http-equiv'?: string
	name?: string
	media?: string
}

// Solid Minor - https://www.solidjs.com/
interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
	charset?: string
	content?: string
	'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'x-ua-compatible' | 'refresh'
	name?: string
	media?: string

	/** @deprecated */
	scheme?: string
}

// Solid Next - https://www.solidjs.com/
interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
	charset?: string | undefined | false
	content?: string | undefined | false
	'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'x-ua-compatible' | 'refresh' | undefined | false
	name?: string | undefined | false
	media?: string | undefined | false

	/** @deprecated */
	scheme?: string | undefined | false
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
interface MetaHTMLAttributes<T extends EventTarget = HTMLMetaElement> extends HTMLAttributes<T> {
	charset?: string
	charSet?: string
	content?: string
	'http-equiv'?: string
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
