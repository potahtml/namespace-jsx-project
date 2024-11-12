// Solid - https://www.solidjs.com/
interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	usemap?: string
	width?: number | string
	useMap?: string
}

// Voby - https://github.com/vobyjs/voby
interface ObjectHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	classID?: string
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	useMap?: string
	width?: number | string
	wmode?: string
}

// Vue - https://vuejs.org/
interface ObjectHTMLAttributes extends HTMLAttributes {
	classid?: string
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	usemap?: string
	width?: number | string
	wmode?: string
}

// Preact - https://preactjs.com/
interface ObjectHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	classID?: string
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	usemap?: string
	useMap?: string
	width?: number | string
	wmode?: string
}

// React - https://react.dev/
interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
	classID?: string
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	useMap?: string
	width?: number | string
	wmode?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLObjectElementAttributes {
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	width?: number | string

	/** @deprecated */
	align?: string
	/** @deprecated */
	archive?: string
	/** @deprecated */
	border?: string
	/** @deprecated */
	classid?: string
	/** @deprecated */
	code?: string
	/** @deprecated */
	codebase?: string
	/** @deprecated */
	codetype?: string
	/** @deprecated */
	declare?: 'true' | boolean
	/** @deprecated */
	hspace?: number | string
	/** @deprecated */
	standby?: string
	/** @deprecated */
	typemustmatch?: boolean
	/** @deprecated */
	usemap?: string
	/** @deprecated */
	vspace?: number | string
}
