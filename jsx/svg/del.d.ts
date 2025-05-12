// Voby - https://github.com/vobyjs/voby
interface DelHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}

// Vue - https://vuejs.org/
interface DelHTMLAttributes extends HTMLAttributes {
	cite?: string
	datetime?: string
}

// React - https://react.dev/
interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}
