// Voby - https://github.com/vobyjs/voby
interface HrHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface HTMLHRElementAttributes {
	/** @deprecated */
	align?: string
	/** @deprecated */
	color?: string
	/** @deprecated */
	noshade?: 'true' | boolean
	/** @deprecated */
	size?: string
	/** @deprecated */
	width?: string
}
