// Solid - https://www.solidjs.com/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'sync' | 'async' | 'auto'
	height?: number | string
	ismap?: boolean
	isMap?: boolean
	loading?: 'eager' | 'lazy'
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	srcSet?: string
	usemap?: string
	useMap?: string
	width?: number | string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	elementtiming?: string
	fetchpriority?: 'high' | 'low' | 'auto'
}

// Voby - https://github.com/vobyjs/voby
interface ImgHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	alt?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'async' | 'auto' | 'sync'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcSet?: string
	useMap?: string
	width?: number | string
}

// Vue - https://vuejs.org/
interface ImgHTMLAttributes extends HTMLAttributes {
	alt?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'async' | 'auto' | 'sync'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	usemap?: string
	width?: number | string
}

// React - https://react.dev/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined
	decoding?: 'async' | 'auto' | 'sync'
	fetchPriority?: 'high' | 'low' | 'auto'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcSet?: string
	useMap?: string
	width?: number | string
}
