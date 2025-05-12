// Voby - https://github.com/vobyjs/voby
interface MenuHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	type?: string
}

// Vue - https://vuejs.org/
interface MenuHTMLAttributes extends HTMLAttributes {
	type?: string
}

// React - https://react.dev/
interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
	type?: string
}
