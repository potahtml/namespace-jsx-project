// Solid Main - https://www.solidjs.com/
interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: number | string

	/** @deprecated */
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}

// Solid Next - https://www.solidjs.com/
interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: number | string | undefined | false

	/** @deprecated */
	type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined | false
}

// Voby - https://github.com/vobyjs/voby
interface LiHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}

// Vue - https://vuejs.org/
interface LiHTMLAttributes extends HTMLAttributes {
	value?: string | readonly string[] | number
}

// Preact - https://preactjs.com/
interface LiHTMLAttributes<T extends EventTarget = HTMLLIElement> extends HTMLAttributes<T> {
	value?: string | number
}

// React - https://react.dev/
interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLLIElementAttributes {
	value?: number | string

	/** @deprecated */
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}
