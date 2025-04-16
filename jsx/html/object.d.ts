// Solid Main - https://www.solidjs.com/
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

// Solid Minor - https://www.solidjs.com/
interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	width?: number | string

	/** @deprecated Use lowercase attributes */
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
	declare?: '' | boolean
	/** @deprecated */
	hspace?: number | string
	/** @deprecated */
	standby?: string
	/** @deprecated */
	usemap?: string
	/** @deprecated */
	vspace?: number | string
	/** @deprecated */
	typemustmatch?: '' | boolean
}

// Solid Next - https://www.solidjs.com/
interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
	data?: string | undefined | false
	form?: string | undefined | false
	height?: number | string | undefined | false
	name?: string | undefined | false
	type?: string | undefined | false
	width?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	useMap?: string | undefined | false

	/** @deprecated */
	align?: string | undefined | false
	/** @deprecated */
	archive?: string | undefined | false
	/** @deprecated */
	border?: string | undefined | false
	/** @deprecated */
	classid?: string | undefined | false
	/** @deprecated */
	code?: string | undefined | false
	/** @deprecated */
	codebase?: string | undefined | false
	/** @deprecated */
	codetype?: string | undefined | false
	/** @deprecated */
	declare?: true | false | '' | undefined | false
	/** @deprecated */
	hspace?: number | string | undefined | false
	/** @deprecated */
	standby?: string | undefined | false
	/** @deprecated */
	usemap?: string | undefined | false
	/** @deprecated */
	vspace?: number | string | undefined | false
	/** @deprecated */
	typemustmatch?: true | false | '' | undefined | false
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
