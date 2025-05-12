// Voby - https://github.com/vobyjs/voby
interface InsHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}

// React - https://react.dev/
interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}
