// Solid Main - https://www.solidjs.com/
interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
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

	onEncrypted?: EventHandlerUnion<T, MediaEncryptedEvent>
	'on:encrypted'?: EventHandlerWithOptionsUnion<T, MediaEncryptedEvent>

	onWaitingForKey?: EventHandlerUnion<T, Event>
	'on:waitingforkey'?: EventHandlerWithOptionsUnion<T, Event>

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
	src?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLAudioElementAttributes<Element> extends HTMLAttributes<Element>, HTMLMediaHTMLAttributes<Element> {}
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

	'on:encrypted'?: EventHandlers<MediaEncryptedEvent, Element>
	'on:waitingforkey'?: EventHandlers<Event, Element>

	/** @deprecated */
	mediagroup?: string
}
