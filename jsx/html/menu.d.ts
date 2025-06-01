// Solid Main - https://www.solidjs.com/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	compact?: boolean
	/** @deprecated */
	label?: string
	/** @deprecated */
	type?: 'context' | 'toolbar'
}

// Solid Next - https://www.solidjs.com/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	/** @deprecated */
	compact?: true | false | '' | false
	/** @deprecated */
	label?: string | false
	/** @deprecated */
	type?: 'context' | 'toolbar' | false
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
interface HTMLMenuElementAttributes<Element> extends HTMLAttributes<Element> {
	/** @deprecated */
	compact?: boolean | ''
	/** @deprecated */
	label?: string
	/** @deprecated */
	type?: 'context' | 'toolbar'
}
