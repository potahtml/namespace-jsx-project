// Solid - https://www.solidjs.com/
interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
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
interface AudioHTMLAttributes<T extends EventTarget> extends MediaHTMLAttributes<T> {}
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
interface AudioHTMLAttributes extends MediaHTMLAttributes {}
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
interface AudioHTMLAttributes<T extends EventTarget> extends MediaHTMLAttributes<T> {}
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
interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
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

// Pota - https://github.com/potahtml/pota
interface HTMLAudioElementAttributes extends HTMLMediaHTMLAttributes {}
interface HTMLMediaHTMLAttributes {
	autoplay?: 'true' | boolean
	controls?: 'true' | boolean
	controlslist?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	loop?: 'true' | boolean
	muted?: 'true' | boolean
	preload?: 'none' | 'metadata' | 'auto' | ''
	src?: string

	/** @deprecated */
	mediagroup?: string
}
