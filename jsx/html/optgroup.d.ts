// Solid Main - https://www.solidjs.com/
interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
}

// Solid Next - https://www.solidjs.com/
interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: true | false | '' | false
	label?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface OptgroupHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
}

// Vue - https://vuejs.org/
interface OptgroupHTMLAttributes extends HTMLAttributes {
	disabled?: boolean | 'true' | 'false'
	label?: string
}

// Preact - https://preactjs.com/
interface OptgroupHTMLAttributes<T extends EventTarget = HTMLOptGroupElement> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
	role?: 'group'
}

// React - https://react.dev/
interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLOptGroupElementAttributes<Element> extends HTMLAttributes<Element> {
	disabled?: boolean | ''
	label?: string
}
