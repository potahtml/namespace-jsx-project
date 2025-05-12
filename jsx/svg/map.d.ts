// Voby - https://github.com/vobyjs/voby
interface MapHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	name?: string
}

// Vue - https://vuejs.org/
interface MapHTMLAttributes extends HTMLAttributes {
	name?: string
}

// React - https://react.dev/
interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
}
