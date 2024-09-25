// Voby - https://github.com/vobyjs/voby
interface HtmlHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	manifest?: string
}

// Vue - https://vuejs.org/
interface HtmlHTMLAttributes extends HTMLAttributes {
	manifest?: string
}

// React - https://react.dev/
interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
	manifest?: string
}
