// Solid Main - https://www.solidjs.com/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsinline?: boolean
	poster?: string
	width?: number | string
	disablepictureinpicture?: boolean
	disableremoteplayback?: boolean
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoplay?: boolean
	controls?: boolean
	controlslist?: 'nodownload' | 'nofullscreen' | 'noplaybackrate' | 'noremoteplayback' | (string & {})
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	loop?: boolean
	mediagroup?: string
	muted?: boolean
	preload?: 'none' | 'metadata' | 'auto' | ''
	src?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	mediaGroup?: string
}

// Solid Minor - https://www.solidjs.com/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsinline?: '' | boolean
	poster?: string
	width?: number | string
	disablepictureinpicture?: '' | boolean
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoplay?: '' | boolean
	controls?: '' | boolean
	controlslist?: 'nodownload' | 'nofullscreen' | 'noplaybackrate' | 'noremoteplayback' | (string & {})
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disableremoteplayback?: '' | boolean
	loop?: '' | boolean
	muted?: '' | boolean
	preload?: 'none' | 'metadata' | 'auto' | ''
	src?: string

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | ''

	/** @deprecated Use lowercase attributes */
	mediaGroup?: string
	/** @deprecated */
	mediagroup?: string
}

// Solid Next - https://www.solidjs.com/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string | undefined | false
	playsinline?: true | false | '' | undefined | false
	poster?: string | undefined | false
	width?: number | string | undefined | false
	disablepictureinpicture?: true | false | '' | undefined | false
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoplay?: true | false | '' | undefined | false
	controls?: true | false | '' | undefined | false
	controlslist?: 'nodownload' | 'nofullscreen' | 'noplaybackrate' | 'noremoteplayback' | (string & {}) | undefined | false
	crossorigin?: 'anonymous' | 'use-credentials' | '' | true | undefined | false
	disableremoteplayback?: true | false | '' | undefined | false
	loop?: true | false | '' | undefined | false
	muted?: true | false | '' | undefined | false
	preload?: 'none' | 'metadata' | 'auto' | '' | true | undefined | false
	src?: string | undefined | false

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | true | undefined | false

	/** @deprecated Use lowercase attributes */
	mediaGroup?: string | undefined | false
	/** @deprecated */
	mediagroup?: string | undefined | false
}

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

// Preact - https://preactjs.com/
interface VideoHTMLAttributes<T extends EventTarget = HTMLVideoElement> extends MediaHTMLAttributes<T> {
	disablePictureInPicture?: boolean
	height?: number | string
	playsinline?: boolean
	playsInline?: boolean
	poster?: string
	width?: number | string
}

interface MediaHTMLAttributes<T extends EventTarget = HTMLMediaElement> extends HTMLAttributes<T> {
	autoplay?: boolean
	autoPlay?: boolean
	controls?: boolean
	controlslist?: string
	controlsList?: string
	crossorigin?: 'anonymous' | 'use-credentials'
	crossOrigin?: 'anonymous' | 'use-credentials'
	currentTime?: number
	defaultMuted?: boolean
	defaultPlaybackRate?: number
	disableremoteplayback?: boolean
	disableRemotePlayback?: boolean
	loop?: boolean
	mediaGroup?: string
	muted?: boolean
	playbackRate?: number
	preload?: 'auto' | 'metadata' | 'none'
	preservesPitch?: boolean
	src?: string
	srcObject?: MediaStream | MediaSource | Blob | File | null
	volume?: string | number
}

// React - https://react.dev/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	height?: number | string
	playsInline?: boolean
	poster?: string
	width?: number | string
	disablePictureInPicture?: boolean
	disableRemotePlayback?: boolean
}

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
	src?: string | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_MEDIA_SRC_TYPES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_MEDIA_SRC_TYPES]
}

// Pota - https://github.com/potahtml/pota
interface HTMLVideoElementAttributes extends HTMLMediaHTMLAttributes {
	disablepictureinpicture?: 'true' | boolean
	height?: number | string
	playsinline?: 'true' | boolean
	poster?: string
	width?: number | string
}

interface HTMLMediaHTMLAttributes {
	autoplay?: 'true' | boolean
	controls?: 'true' | boolean
	controlslist?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disableremoteplayback?: 'true' | boolean
	loop?: 'true' | boolean
	muted?: 'true' | boolean
	preload?: 'none' | 'metadata' | 'auto' | ''
	src?: string

	/** @deprecated */
	mediagroup?: string
}
