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

// React - https://react.dev/
interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
	as?: string
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
