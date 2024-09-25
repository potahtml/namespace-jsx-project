// Solid - https://www.solidjs.com/
interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
}

// Voby - https://github.com/vobyjs/voby
interface BlockquoteHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	cite?: string
}

// Vue - https://vuejs.org/
interface BlockquoteHTMLAttributes extends HTMLAttributes {
	cite?: string
}

// React - https://react.dev/
interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
}
