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
