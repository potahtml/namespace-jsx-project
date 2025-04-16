// Solid - https://www.solidjs.com/
interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
	as?: 'audio' | 'document' | 'embed' | 'fetch' | 'font' | 'image' | 'object' | 'script' | 'style' | 'track' | 'video' | 'worker'
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disabled?: boolean
	fetchpriority?: 'high' | 'low' | 'auto'
	href?: string
	hreflang?: string
	imagesizes?: string
	imagesrcset?: string
	integrity?: string
	media?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	sizes?: string
	type?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}

// Voby - https://github.com/vobyjs/voby
interface LinkHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	as?: string
	crossOrigin?: string
	href?: string
	hrefLang?: string
	integrity?: string
	media?: string
	imageSrcSet?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	sizes?: string
	type?: string
	charSet?: string
}

// Vue - https://vuejs.org/
interface LinkHTMLAttributes extends HTMLAttributes {
	as?: string
	crossorigin?: string
	href?: string
	hreflang?: string
	integrity?: string
	media?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	sizes?: string
	type?: string
	charset?: string
}

// Preact - https://preactjs.com/
interface LinkHTMLAttributes<T extends EventTarget = HTMLLinkElement> extends HTMLAttributes<T> {
	as?: string
	crossorigin?: 'anonymous' | 'use-credentials'
	crossOrigin?: 'anonymous' | 'use-credentials'
	fetchpriority?: 'high' | 'low' | 'auto'
	fetchPriority?: 'high' | 'low' | 'auto'
	href?: string
	hreflang?: string
	hrefLang?: string
	integrity?: string
	media?: string
	imageSrcSet?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	sizes?: string
	type?: string
	charset?: string
	charSet?: string
}

// React - https://react.dev/
interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
	as?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined
	fetchPriority?: 'high' | 'low' | 'auto'
	href?: string
	hrefLang?: string
	integrity?: string
	media?: string
	imageSrcSet?: string
	imageSizes?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	type?: string
	charSet?: string

	// React props
	precedence?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLLinkElementAttributes {
	as?: 'audio' | 'document' | 'embed' | 'fetch' | 'font' | 'image' | 'object' | 'script' | 'style' | 'track' | 'video' | 'worker'

	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disabled?: 'true' | boolean
	fetchpriority?: 'high' | 'low' | 'auto'
	href?: string
	hreflang?: string
	imagesizes?: string
	imagesrcset?: string
	integrity?: string
	media?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	sizes?: string
	type?: string

	/** @experimental */
	blocking?: 'render'

	/** @deprecated */
	charset?: string
	/** @deprecated */
	rev?: string
	/** @deprecated */
	target?: string
}
