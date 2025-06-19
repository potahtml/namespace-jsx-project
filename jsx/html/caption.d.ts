// Solid Main - https://www.solidjs.com/
interface CaptionHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	align?: 'left' | 'center' | 'right'
}

// Solid Next - https://www.solidjs.com/
interface CaptionHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	align?: 'left' | 'center' | 'right' | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface CaptionHTMLAttributes<T extends EventTarget = HTMLElement> extends HTMLAttributes<T> {
	role?: 'caption'
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLTableCaptionElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	align?: 'left' | 'center' | 'right'
}
