// Solid - https://www.solidjs.com/
interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoplay?: boolean
	controls?: boolean
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	loop?: boolean
	mediagroup?: string
	muted?: boolean
	preload?: 'none' | 'metadata' | 'auto' | ''
	src?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	mediaGroup?: string
}

// Voby - https://github.com/vobyjs/voby
interface MediaHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	autoPlay?: boolean
	controls?: boolean
	controlsList?: string
	crossOrigin?: string
	loop?: boolean
	mediaGroup?: string
	muted?: boolean
	playsInline?: boolean
	preload?: string
	src?: string
}

// Vue - https://vuejs.org/
interface MediaHTMLAttributes extends HTMLAttributes {
	autoplay?: boolean | 'true' | 'false'
	controls?: boolean | 'true' | 'false'
	controlslist?: string
	crossorigin?: string
	loop?: boolean | 'true' | 'false'
	mediagroup?: string
	muted?: boolean | 'true' | 'false'
	playsinline?: boolean | 'true' | 'false'
	preload?: string
	src?: string
}

// Preact - https://preactjs.com/
interface MediaHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	autoplay?: boolean
	autoPlay?: boolean
	controls?: boolean
	controlsList?: string
	crossorigin?: 'anonymous' | 'use-credentials'
	crossOrigin?: 'anonymous' | 'use-credentials'
	loop?: boolean
	mediaGroup?: string
	muted?: boolean
	playsinline?: boolean
	playsInline?: boolean
	preload?: string
	src?: string
	volume?: string | number
}

// React - https://react.dev/
interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoPlay?: boolean
	controls?: boolean
	controlsList?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined
	loop?: boolean
	mediaGroup?: string
	muted?: boolean
	playsInline?: boolean
	preload?: string
	src?: string
}
