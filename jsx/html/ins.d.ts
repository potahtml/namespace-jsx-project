// Solid Main - https://www.solidjs.com/
interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	dateTime?: string
}

// Solid Minor - https://www.solidjs.com/
interface ModHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string
	datetime?: string

	/** @deprecated Use lowercase attributes */
	dateTime?: string
}

// Solid Next - https://www.solidjs.com/
interface ModHTMLAttributes<T> extends HTMLAttributes<T> {
	cite?: string | undefined | false
	datetime?: string | undefined | false

	/** @deprecated Use lowercase attributes */
	dateTime?: string | undefined | false
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

// Preact - https://preactjs.com/
interface InsHTMLAttributes<T extends EventTarget = HTMLModElement> extends HTMLAttributes<T> {
	cite?: string
	datetime?: string
	dateTime?: string
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
