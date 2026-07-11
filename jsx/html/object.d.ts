// Solid Main - https://www.solidjs.com/
interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	width?: number | string

	useMap?: string

	align?: string

	archive?: string

	border?: string

	classid?: string

	code?: string

	codebase?: string

	codetype?: string

	declare?: boolean

	hspace?: number | string

	standby?: string

	usemap?: string

	vspace?: number | string

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
	wmode?: string | false

	align?: string | false

	archive?: string | false

	border?: string | false

	classid?: string | false

	code?: string | false

	codebase?: string | false

	codetype?: string | false

	declare?: true | false | '' | false

	hspace?: number | string | false

	standby?: string | false

	usemap?: string | false

	vspace?: number | string | false

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
interface HTMLObjectElementAttributes<Element> extends HTMLAttributes<Element> {
	data?: string
	form?: string
	height?: number | string
	name?: string
	type?: string
	width?: number | string
	wmode?: string

	align?: string

	archive?: string

	border?: string

	classid?: string

	code?: string

	codebase?: string

	codetype?: string

	declare?: boolean | ''

	hspace?: number | string

	standby?: string

	typemustmatch?: boolean | ''

	usemap?: string

	vspace?: number | string
}
