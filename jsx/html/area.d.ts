// Solid Main - https://www.solidjs.com/
interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	coords?: string
	download?: any
	href?: string
	hreflang?: string
	ping?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	shape?: 'rect' | 'circle' | 'poly' | 'default'
	target?: string
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}

// Solid Minor - https://www.solidjs.com/
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

	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

	/** @deprecated */
	nohref?: '' | boolean
}

// Solid Next - https://www.solidjs.com/
interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string | undefined | false
	coords?: string | undefined | false
	download?: string | undefined | false
	href?: string | undefined | false
	ping?: string | undefined | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false
	rel?: string | undefined | false
	shape?: 'rect' | 'circle' | 'poly' | 'default' | undefined | false
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | undefined | false

	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false

	/** @deprecated */
	nohref?: true | false | '' | undefined | false
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
interface AreaHTMLAttributes<T extends EventTarget = HTMLAreaElement> extends HTMLAttributes<T> {
	alt?: string
	coords?: string
	download?: any
	href?: string
	hreflang?: string
	hrefLang?: string
	media?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	shape?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
}

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
interface HTMLAreaElementAttributes {
	alt?: string
	coords?: string
	download?: string
	href?: string
	ping?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	shape?: 'rect' | 'circle' | 'poly' | 'default'
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})

	/** @deprecated */
	nohref?: 'true' | boolean
}
