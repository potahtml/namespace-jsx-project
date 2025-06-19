// Solid Main - https://www.solidjs.com/
interface DetailsHtmlAttributes<T> extends HTMLAttributes<T> {
	name?: string
	open?: boolean
}

// Solid Next - https://www.solidjs.com/
interface DetailsHtmlAttributes<T> extends HTMLAttributes<T> {
	name?: string | false
	open?: true | false | '' | false
}

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

// Preact - https://preactjs.com/
interface DetailsHTMLAttributes<T extends EventTarget = HTMLDetailsElement> extends HTMLAttributes<T> {
	name?: string
	open?: boolean
	role?: 'group'
}

// React - https://react.dev/
interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
	open?: boolean
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLDetailsElementAttributes<Element> extends HTMLAttributes<Element> {
	name?: string
	open?: boolean | ''
}
