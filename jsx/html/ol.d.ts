// Solid Main - https://www.solidjs.com/
interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
	reversed?: boolean
	start?: number | string
	type?: '1' | 'a' | 'A' | 'i' | 'I'

	/**
	 * @deprecated
	 * @non-standard
	 */
	compact?: boolean
}

// Solid Next - https://www.solidjs.com/
interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
	reversed?: true | false | '' | false
	start?: number | string | false
	type?: '1' | 'a' | 'A' | 'i' | 'I' | false

	/**
	 * @deprecated
	 * @non-standard
	 */
	compact?: true | false | '' | false
}

// Voby - https://github.com/vobyjs/voby
interface OlHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	reversed?: boolean
	start?: number
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}

// Vue - https://vuejs.org/
interface OlHTMLAttributes extends HTMLAttributes {
	reversed?: boolean | 'true' | 'false'
	start?: number | string
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}

// Preact - https://preactjs.com/
interface OlHTMLAttributes<T extends EventTarget = HTMLOListElement> extends HTMLAttributes<T> {
	reversed?: boolean
	role?: 'list' | 'group' | 'listbox' | 'menu' | 'menubar' | 'none' | 'presentation' | 'radiogroup' | 'tablist' | 'toolbar' | 'tree'
	start?: number
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}

// React - https://react.dev/
interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
	reversed?: boolean
	start?: number
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}

// Pota - https://github.com/potahtml/pota
interface HTMLOListElementAttributes<Element> extends HTMLAttributes<Element> {
	reversed?: boolean | ''
	start?: number | string
	type?: '1' | 'a' | 'A' | 'i' | 'I'

	/** @deprecated */
	compact?: boolean | ''
}
