// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby
interface BrHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {}

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface BrHTMLAttributes<T extends EventTarget = HTMLBRElement> extends HTMLAttributes<T> {
	role?: 'none' | 'presentation'
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLBRElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	clear?: string
}
