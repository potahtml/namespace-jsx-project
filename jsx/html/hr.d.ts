// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby
interface HrHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {}

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface HrHTMLAttributes<T extends EventTarget = HTMLHRElement> extends HTMLAttributes<T> {
	role?: 'separator' | 'none' | 'presentation' | 'doc-pagebreak'
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLHRElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	align?: string
	/** @deprecated */
	color?: string
	/** @deprecated */
	noshade?: boolean | ''
	/** @deprecated */
	size?: string
	/** @deprecated */
	width?: string
}
