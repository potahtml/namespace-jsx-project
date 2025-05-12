// Voby - https://github.com/vobyjs/voby
interface VideoHTMLAttributes<T extends EventTarget> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsInline?: boolean
	poster?: string
	width?: number | string
	disablePictureInPicture?: boolean
	disableRemotePlayback?: boolean
}

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
interface VideoHTMLAttributes extends MediaHTMLAttributes {
	height?: number | string
	playsinline?: boolean | 'true' | 'false'
	poster?: string
	width?: number | string
	disablePictureInPicture?: boolean | 'true' | 'false'
	disableRemotePlayback?: boolean | 'true' | 'false'
}

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

// React - https://react.dev/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsInline?: boolean
	poster?: string
	width?: number | string
	disablePictureInPicture?: boolean
	disableRemotePlayback?: boolean

	onResize?: ReactEventHandler<T>
	onResizeCapture?: ReactEventHandler<T>
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoPlay?: boolean
	controls?: boolean
	controlsList?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	loop?: boolean
	mediaGroup?: string
	muted?: boolean
	playsInline?: boolean
	preload?: string
	src?: string
}
