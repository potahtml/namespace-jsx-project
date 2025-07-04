// Voby - https://github.com/vobyjs/voby
interface LabelHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	form?: string
	htmlFor?: string
	for?: string
}

// Vue - https://vuejs.org/
interface LabelHTMLAttributes extends HTMLAttributes {
	for?: string
	form?: string
}

// React - https://react.dev/
interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
	form?: string
	htmlFor?: string
}
