// Voby - https://github.com/vobyjs/voby
interface QuoteHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	cite?: string
}

// React - https://react.dev/
interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
}
