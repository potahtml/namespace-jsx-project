// Voby - https://github.com/vobyjs/voby
interface CanvasHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	height?: number | string
	width?: number | string
}

// Vue - https://vuejs.org/
interface CanvasHTMLAttributes extends HTMLAttributes {
	height?: number | string
	width?: number | string
}

// React - https://react.dev/
interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
	height?: number | string
	width?: number | string
}
