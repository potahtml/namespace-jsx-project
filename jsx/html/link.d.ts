// Solid Main - https://www.solidjs.com/
interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
	as?: 'audio' | 'document' | 'embed' | 'fetch' | 'font' | 'image' | 'object' | 'script' | 'style' | 'track' | 'video' | 'worker'
	blocking?: 'render'
	color?: string
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

	/** @deprecated */
	charset?: string
	/** @deprecated */
	rev?: string
	/** @deprecated */
	target?: string
}

// Solid Next - https://www.solidjs.com/
interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
	as?: 'audio' | 'document' | 'embed' | 'fetch' | 'font' | 'image' | 'object' | 'script' | 'style' | 'track' | 'video' | 'worker' | false
	blocking?: 'render' | false
	color?: string | false
	crossorigin?: 'anonymous' | 'use-credentials' | '' | true | false
	disabled?: true | false | '' | false
	fetchpriority?: 'high' | 'low' | 'auto' | false
	href?: string | false
	hreflang?: string | false
	imagesizes?: string | false
	imagesrcset?: string | false
	integrity?: string | false
	media?: string | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false
	rel?: string | false
	sizes?: string | false
	type?: string | false

	/** @deprecated */
	charset?: string | false
	/** @deprecated */
	rev?: string | false
	/** @deprecated */
	target?: string | false
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
	blocking?: 'render' | (string & {})
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
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
interface HTMLLinkElementAttributes<Element> extends HTMLAttributes<Element> {
	as?: 'audio' | 'document' | 'embed' | 'fetch' | 'font' | 'image' | 'object' | 'script' | 'style' | 'track' | 'video' | 'worker'
	color?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disabled?: boolean | ''
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
