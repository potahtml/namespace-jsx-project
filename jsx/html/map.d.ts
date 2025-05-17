// Solid Main - https://www.solidjs.com/
interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
}

// Solid Next - https://www.solidjs.com/
interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface MapHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	name?: string
}

// Vue - https://vuejs.org/
interface MapHTMLAttributes extends HTMLAttributes {
	name?: string
}

// Preact - https://preactjs.com/
interface MapHTMLAttributes<T extends EventTarget = HTMLMapElement> extends HTMLAttributes<T> {
	name?: string
}

// React - https://react.dev/
interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLMapElementAttributes {
	name?: string
}
