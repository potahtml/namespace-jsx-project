// Solid Main - https://www.solidjs.com/
interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
	download?: string
	href?: string
	hreflang?: string
	ping?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	type?: string

	/** @experimental */
	attributionsrc?: string

	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

	/** @deprecated */
	charset?: string
	/** @deprecated */
	coords?: string
	/** @deprecated */
	name?: string
	/** @deprecated */
	rev?: string
	/** @deprecated */
	shape?: 'rect' | 'circle' | 'poly' | 'default'
}

// Solid Next - https://www.solidjs.com/
interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
	download?: string | false
	href?: string | false
	hreflang?: string | false
	ping?: string | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false
	rel?: string | false
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | false
	type?: string | false

	/** @experimental */
	attributionsrc?: string | false

	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false

	/** @deprecated */
	charset?: string | false
	/** @deprecated */
	coords?: string | false
	/** @deprecated */
	name?: string | false
	/** @deprecated */
	rev?: string | false
	/** @deprecated */
	shape?: 'rect' | 'circle' | 'poly' | 'default' | false
}

// Voby - https://github.com/vobyjs/voby
interface AnchorHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	download?: boolean
	href?: string
	hrefLang?: string
	media?: string
	ping?: string
	rel?: string
	target?: '_self' | '_blank' | '_parent' | '_top'
	type?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}

// Vue - https://vuejs.org/
interface AnchorHTMLAttributes extends HTMLAttributes {
	download?: any
	href?: string
	hreflang?: string
	media?: string
	ping?: string
	rel?: string
	target?: string
	type?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}

// Preact - https://preactjs.com/
interface AnchorHTMLAttributes<T extends EventTarget = HTMLAnchorElement> extends HTMLAttributes<T> {
	download?: any
	href?: string
	hreflang?: string
	hrefLang?: string
	media?: string
	ping?: string
	rel?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	type?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}

// React - https://react.dev/
interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
	download?: any
	href?: string
	hrefLang?: string
	media?: string
	ping?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	type?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}

// Pota - https://github.com/potahtml/pota
interface HTMLAnchorElementAttributes {
	download?: string
	href?: string
	hreflang?: string
	ping?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	type?: string

	/** @experimental */
	attributionsrc?: string

	/** @deprecated */
	charset?: string
	/** @deprecated */
	coords?: string
	/** @deprecated */
	name?: string
	/** @deprecated */
	rev?: string
	/** @deprecated */
	shape?: 'rect' | 'circle' | 'poly' | 'default'
}
