// Voby - https://github.com/vobyjs/voby
interface LiHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}

// React - https://react.dev/
interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}
