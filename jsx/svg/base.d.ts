// Voby - https://github.com/vobyjs/voby
interface BaseHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	href?: string
	target?: string
}

// Vue - https://vuejs.org/
interface BaseHTMLAttributes extends HTMLAttributes {
	href?: string
	target?: string
}

// React - https://react.dev/
interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
	href?: string
	target?: string
}
