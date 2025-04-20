// Solid Minor - https://www.solidjs.com/
interface ModHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	datetime?: string

	/** @deprecated Use lowercase attributes */
	dateTime?: string
}

// Solid Next - https://www.solidjs.com/
interface ModHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string | false
	datetime?: string | false

	/** @deprecated Use lowercase attributes */
	dateTime?: string | false
}

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

// Preact - https://preactjs.com/
interface DelHTMLAttributes<T extends EventTarget = HTMLModElement> extends HTMLAttributes<T> {
	cite?: string
	datetime?: string
	dateTime?: string
}

// React - https://react.dev/
interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLModElementAttributes {
	cite?: string
	datetime?: string
}
