// Solid Main - https://www.solidjs.com/
interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
}

// Solid Next - https://www.solidjs.com/
interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface QuoteHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	cite?: string
}

// Vue - https://vuejs.org/
interface QuoteHTMLAttributes extends HTMLAttributes {
	cite?: string
}

// Preact - https://preactjs.com/
interface QuoteHTMLAttributes<T extends EventTarget = HTMLQuoteElement> extends HTMLAttributes<T> {
	cite?: string
}

// React - https://react.dev/
interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLQuoteElementAttributes<Element> extends HTMLAttributes<Element> {
	cite?: string
}
