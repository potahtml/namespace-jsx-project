// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface LegendHTMLAttributes<T extends EventTarget = HTMLLegendElement> extends HTMLAttributes<T> {
	role?: never
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLLegendElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	align?: string
}
