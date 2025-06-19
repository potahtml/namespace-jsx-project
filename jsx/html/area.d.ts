// Solid Main - https://www.solidjs.com/
interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	coords?: string
	download?: string
	href?: string
	ping?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	shape?: 'rect' | 'circle' | 'poly' | 'default'
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})

	/** @experimental */
	attributionsrc?: string

	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

	/** @deprecated */
	nohref?: boolean
}

// Solid Next - https://www.solidjs.com/
interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string | false
	coords?: string | false
	download?: string | false
	href?: string | false
	ping?: string | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false
	rel?: string | false
	shape?: 'rect' | 'circle' | 'poly' | 'default' | false
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | false

	/** @experimental */
	attributionsrc?: string | false

	/** @deprecated */
	nohref?: true | false | '' | false
}

// Voby - https://github.com/vobyjs/voby
interface AreaHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	alt?: string
	coords?: string
	download?: boolean
	href?: string
	hrefLang?: string
	media?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	shape?: string
	target?: string
}

// Vue - https://vuejs.org/
interface AreaHTMLAttributes extends HTMLAttributes {
	alt?: string
	coords?: string
	download?: any
	href?: string
	hreflang?: string
	media?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	shape?: string
	target?: string
}

// Preact - https://preactjs.com/

// React - https://react.dev/
interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	coords?: string
	download?: any
	href?: string
	hrefLang?: string
	media?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	shape?: string
	target?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLAreaElementAttributes<Element> extends HTMLAttributes<Element> {
	alt?: string
	coords?: string
	download?: string
	href?: string
	ping?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	shape?: 'rect' | 'circle' | 'poly' | 'default'
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})

	/** @experimental */
	attributionsrc?: string

	/** @deprecated */
	nohref?: boolean | ''
}
