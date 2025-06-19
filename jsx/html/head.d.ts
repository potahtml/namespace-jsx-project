// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface HeadHTMLAttributes<T extends EventTarget = HTMLHeadElement> extends HTMLAttributes<T> {
	role?: never
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLHeadElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	profile?: string
}
