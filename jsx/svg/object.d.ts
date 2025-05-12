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
