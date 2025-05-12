// Solid Main - https://www.solidjs.com/

// Solid Minor - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby
interface HtmlHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	manifest?: string
}

// Vue - https://vuejs.org/
interface HtmlHTMLAttributes extends HTMLAttributes {
	manifest?: string
}

// Preact - https://preactjs.com/

// React - https://react.dev/
interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
	manifest?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLHtmlElementAttributes {
	manifest?: string

	/** @deprecated */
	version?: string
}
