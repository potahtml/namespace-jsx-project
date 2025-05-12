// Voby - https://github.com/vobyjs/voby
interface TimeHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	dateTime?: string
}

// Vue - https://vuejs.org/
interface TimeHTMLAttributes extends HTMLAttributes {
	datetime?: string
}

// React - https://react.dev/
interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
	dateTime?: string
}
