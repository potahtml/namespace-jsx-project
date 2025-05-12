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
