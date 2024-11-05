// Solid - https://www.solidjs.com/
interface DetailsHtmlAttributes<T> extends HTMLAttributes<T> {
	open?: boolean
	onToggle?: EventHandlerUnion<T, Event>
	ontoggle?: EventHandlerUnion<T, Event>
}

// Voby - https://github.com/vobyjs/voby
interface DetailsHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	open?: boolean
	onToggle?: ObservableMaybe<Nullable<GenericEventHandler<T>>>
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
	onToggle?: ReactEventHandler<T>
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLDetailsElementAttributes {
	name?: string
	open?: boolean
}
