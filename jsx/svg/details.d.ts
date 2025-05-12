// Voby - https://github.com/vobyjs/voby
interface DetailsHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	open?: boolean
	onToggle?: GenericEventHandler<T>
}

// Vue - https://vuejs.org/
interface DetailsHTMLAttributes extends HTMLAttributes {
	name?: string
	open?: boolean | 'true' | 'false'
	onToggle?: (payload: ToggleEvent) => void
}

// React - https://react.dev/
interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
	open?: boolean
	name?: string
}
