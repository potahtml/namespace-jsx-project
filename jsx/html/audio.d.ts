// Solid Main - https://www.solidjs.com/
interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
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
interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
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
interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoplay?: true | false | '' | false
	controls?: true | false | '' | false
	controlslist?: 'nodownload' | 'nofullscreen' | 'noplaybackrate' | 'noremoteplayback' | (string & {}) | false
	crossorigin?: 'anonymous' | 'use-credentials' | '' | true | false
	disableremoteplayback?: true | false | '' | false
	loop?: true | false | '' | false
	muted?: true | false | '' | false
	preload?: 'none' | 'metadata' | 'auto' | '' | true | false
	src?: string | false

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | true | false

	/** @deprecated Use lowercase attributes */
	mediaGroup?: string | false
	/** @deprecated */
	mediagroup?: string | false
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
interface AudioHTMLAttributes<T extends EventTarget = HTMLAudioElement> extends MediaHTMLAttributes<T> {}
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
interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
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
	src?: string | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_MEDIA_SRC_TYPES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_MEDIA_SRC_TYPES]
}

// Pota - https://github.com/potahtml/pota
interface HTMLAudioElementAttributes extends HTMLMediaHTMLAttributes {}
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
