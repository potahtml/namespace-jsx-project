// Solid - https://www.solidjs.com/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	label?: string
	type?: 'context' | 'toolbar'
}

// Voby - https://github.com/vobyjs/voby
interface MenuHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	type?: string
}

// Vue - https://vuejs.org/
interface MenuHTMLAttributes extends HTMLAttributes {
	type?: string
}

// Preact - https://preactjs.com/
interface MenuHTMLAttributes<T extends EventTarget = HTMLMenuElement> extends HTMLAttributes<T> {
	type?: string
}

// React - https://react.dev/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	type?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLMenuElementAttributes {
	/** @deprecated */
	compact?: 'true' | boolean
	/** @deprecated */
	label?: string
	/** @deprecated */
	type?: 'context' | 'toolbar'
}
