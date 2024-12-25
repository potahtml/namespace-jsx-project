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

// Preact - https://preactjs.com/
interface BlockquoteHTMLAttributes<T extends EventTarget = HTMLQuoteElement> extends HTMLAttributes<T> {
	cite?: string
}

// React - https://react.dev/
interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLQuoteElementAttributes {
	cite?: string
}
