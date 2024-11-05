// Solid - https://www.solidjs.com/
interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}

// Voby - https://github.com/vobyjs/voby
interface InsHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}

// Vue - https://vuejs.org/
interface InsHTMLAttributes extends HTMLAttributes {
	cite?: string
	datetime?: string
}

// React - https://react.dev/
interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLModElementAttributes {
	cite?: string
	datetime?: string
}
