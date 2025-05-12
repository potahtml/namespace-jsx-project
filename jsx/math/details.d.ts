// Voby - https://github.com/vobyjs/voby
interface DetailsHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	open?: boolean
	onToggle?: GenericEventHandler<T>
}

// React - https://react.dev/
interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
	open?: boolean
	name?: string
}
