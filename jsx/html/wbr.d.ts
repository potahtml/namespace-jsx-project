// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby
interface WbrHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {}

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface WbrHTMLAttributes<T extends EventTarget = HTMLElement> extends HTMLAttributes<T> {
	role?: 'none' | 'presentation'
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLElementAttributes<Element> extends HTMLAttributes<Element> {}
