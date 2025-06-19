// Solid Main - https://www.solidjs.com/
interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
	href?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
}

// Solid Next - https://www.solidjs.com/
interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
	href?: string | false
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | false
}

// Voby - https://github.com/vobyjs/voby
interface BaseHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	href?: string
	target?: string
}

// Vue - https://vuejs.org/
interface BaseHTMLAttributes extends HTMLAttributes {
	href?: string
	target?: string
}

// Preact - https://preactjs.com/
interface BaseHTMLAttributes<T extends EventTarget = HTMLBaseElement> extends HTMLAttributes<T> {
	href?: string
	role?: never
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
}

// React - https://react.dev/
interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
	href?: string
	target?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLBaseElementAttributes<Element> extends HTMLAttributes<Element> {
	href?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
}
