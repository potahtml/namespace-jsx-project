// Voby - https://github.com/vobyjs/voby
interface MetaHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	charSet?: string
	content?: string
	httpEquiv?: string
	name?: string
	media?: string
}

// Vue - https://vuejs.org/
interface MetaHTMLAttributes extends HTMLAttributes {
	charset?: string
	content?: string
	httpequiv?: string
	name?: string
}

// React - https://react.dev/
interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
	charSet?: string
	content?: string
	httpEquiv?: string
	media?: string
	name?: string
}
