// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface HeadingHTMLAttributes<T extends EventTarget = HTMLHeadingElement> extends HTMLAttributes<T> {
	role?: 'heading' | 'none' | 'presentation' | 'tab' | 'doc-subtitle'
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLHeadingElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	align?: 'left' | 'right' | 'justify' | 'center'
}
