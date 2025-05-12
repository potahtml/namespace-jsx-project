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

// React - https://react.dev/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
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
