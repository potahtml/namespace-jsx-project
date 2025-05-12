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

// React - https://react.dev/
interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
}
