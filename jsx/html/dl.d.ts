// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface DlHTMLAttributes<T extends EventTarget = HTMLDListElement> extends HTMLAttributes<T> {
	role?: 'group' | 'list' | 'none' | 'presentation'
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLDListElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	compact?: boolean | ''
}
