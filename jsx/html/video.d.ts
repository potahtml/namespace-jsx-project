// Solid Main - https://www.solidjs.com/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	disablepictureinpicture?: boolean
	height?: number | string
	playsinline?: boolean
	poster?: string
	width?: number | string

	onEnterPictureInPicture?: EventHandlerUnion<T, PictureInPictureEvent>
	'on:enterpictureinpicture'?: EventHandlerWithOptionsUnion<T, PictureInPictureEvent>
	onenterpictureinpicture?: EventHandlerUnion<T, PictureInPictureEvent>

	onLeavePictureInPicture?: EventHandlerUnion<T, PictureInPictureEvent>
	'on:leavepictureinpicture'?: EventHandlerWithOptionsUnion<T, PictureInPictureEvent>
	onleavepictureinpicture?: EventHandlerUnion<T, PictureInPictureEvent>
}

interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoplay?: boolean
	controls?: boolean
	controlslist?: 'nodownload' | 'nofullscreen' | 'noplaybackrate' | 'noremoteplayback' | (string & {})
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disableremoteplayback?: boolean
	loop?: boolean
	muted?: boolean
	preload?: 'none' | 'metadata' | 'auto' | ''
	src?: string

	onEncrypted?: EventHandlerUnion<T, MediaEncryptedEvent>
	'on:encrypted'?: EventHandlerWithOptionsUnion<T, MediaEncryptedEvent>
	onencrypted?: EventHandlerUnion<T, MediaEncryptedEvent>

	onWaitingForKey?: EventHandlerUnion<T, Event>
	'on:waitingforkey'?: EventHandlerWithOptionsUnion<T, Event>
	onwaitingforkey?: EventHandlerUnion<T, Event>

	crossOrigin?: 'anonymous' | 'use-credentials' | ''

	mediaGroup?: string
	/** @deprecated */
	mediagroup?: string
}

// Solid Next - https://www.solidjs.com/
interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
	disablepictureinpicture?: true | false | '' | false
	height?: number | string | false
	playsinline?: true | false | '' | false
	poster?: string | false
	width?: number | string | false

	onEnterPictureInPicture?: EventHandlerUnion<T, PictureInPictureEvent>
	'on:enterpictureinpicture'?: EventHandlerWithOptionsUnion<T, PictureInPictureEvent>

	onLeavePictureInPicture?: EventHandlerUnion<T, PictureInPictureEvent>
	'on:leavepictureinpicture'?: EventHandlerWithOptionsUnion<T, PictureInPictureEvent>
}

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

	onEncrypted?: EventHandlerUnion<T, MediaEncryptedEvent>
	'on:encrypted'?: EventHandlerWithOptionsUnion<T, MediaEncryptedEvent>

	onWaitingForKey?: EventHandlerUnion<T, Event>
	'on:waitingforkey'?: EventHandlerWithOptionsUnion<T, Event>

	/** @deprecated */
	mediagroup?: string | false
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
	role?: 'application'
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

// Pota - https://github.com/potahtml/pota
interface HTMLVideoElementAttributes<Element> extends HTMLAttributes<Element>, HTMLMediaHTMLAttributes<Element> {
	disablepictureinpicture?: boolean | ''
	height?: number | string
	playsinline?: boolean | ''
	poster?: string
	width?: number | string

	'on:enterpictureinpicture'?: EventHandler<PictureInPictureEvent, Element>
	'on:leavepictureinpicture'?: EventHandler<PictureInPictureEvent, Element>
}

interface HTMLMediaHTMLAttributes<Element> {
	// properties
	'prop:srcObject'?: MediaStream | MediaSource | Blob | File

	// attributes
	autoplay?: boolean | ''
	controls?: boolean | ''
	controlslist?: 'nodownload' | 'nofullscreen' | 'noplaybackrate' | 'noremoteplayback' | (string & {})
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disableremoteplayback?: boolean | ''
	loop?: boolean | ''
	muted?: boolean | ''
	preload?: 'none' | 'metadata' | 'auto' | ''
	src?: string

	'on:encrypted'?: EventHandler<MediaEncryptedEvent, Element>
	'on:waitingforkey'?: EventHandler<Event, Element>

	/** @deprecated */
	mediagroup?: string
}
