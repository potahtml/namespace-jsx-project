// Voby - https://github.com/vobyjs/voby
interface OptgroupHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
}

// React - https://react.dev/
interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	label?: string
}
