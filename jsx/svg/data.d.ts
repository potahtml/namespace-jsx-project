// Voby - https://github.com/vobyjs/voby
interface DataHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}

// Vue - https://vuejs.org/
interface DataHTMLAttributes extends HTMLAttributes {
	value?: string | readonly string[] | number
}

// React - https://react.dev/
interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}
