// Solid - https://www.solidjs.com/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number | string
}

// Voby - https://github.com/vobyjs/voby
interface ColgroupHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	span?: number
}

// Vue - https://vuejs.org/
interface ColgroupHTMLAttributes extends HTMLAttributes {
	span?: number | string
}

// React - https://react.dev/
interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
	span?: number
}
