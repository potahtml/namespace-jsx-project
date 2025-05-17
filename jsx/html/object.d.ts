// Solid Main - https://www.solidjs.com/
interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	width?: number | string

	useMap?: string

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
	declare?: boolean
	/** @deprecated */
	hspace?: number | string
	/** @deprecated */
	standby?: string
	/** @deprecated */
	usemap?: string
	/** @deprecated */
	vspace?: number | string
	/** @deprecated */
	typemustmatch?: boolean
}

// Solid Next - https://www.solidjs.com/
interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
	data?: string | false
	form?: string | false
	height?: number | string | false
	name?: string | false
	type?: string | false
	width?: number | string | false

	/** @deprecated Use lowercase attributes */
	useMap?: string | false

	/** @deprecated */
	align?: string | false
	/** @deprecated */
	archive?: string | false
	/** @deprecated */
	border?: string | false
	/** @deprecated */
	classid?: string | false
	/** @deprecated */
	code?: string | false
	/** @deprecated */
	codebase?: string | false
	/** @deprecated */
	codetype?: string | false
	/** @deprecated */
	declare?: true | false | '' | false
	/** @deprecated */
	hspace?: number | string | false
	/** @deprecated */
	standby?: string | false
	/** @deprecated */
	usemap?: string | false
	/** @deprecated */
	vspace?: number | string | false
	/** @deprecated */
	typemustmatch?: true | false | '' | false
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
interface ObjectHTMLAttributes<T extends EventTarget = HTMLObjectElement> extends HTMLAttributes<T> {
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
