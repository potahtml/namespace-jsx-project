// Solid Main - https://www.solidjs.com/
interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
	default?: boolean
	kind?: 'alternative' | 'descriptions' | 'main' | 'main-desc' | 'translation' | 'commentary' | 'subtitles' | 'captions' | 'chapters' | 'metadata'
	label?: string
	src?: string
	srclang?: string

	mediaGroup?: string
	/** @deprecated */
	mediagroup?: string
}

// Solid Next - https://www.solidjs.com/
interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
	default?: true | false | '' | false
	kind?: 'alternative' | 'descriptions' | 'main' | 'main-desc' | 'translation' | 'commentary' | 'subtitles' | 'captions' | 'chapters' | 'metadata' | false
	label?: string | false
	src?: string | false
	srclang?: string | false

	/** @deprecated */
	mediagroup?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface TrackHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	default?: boolean
	kind?: string
	label?: string
	src?: string
	srcLang?: string
}

// Vue - https://vuejs.org/
interface TrackHTMLAttributes extends HTMLAttributes {
	default?: boolean | 'true' | 'false'
	kind?: string
	label?: string
	src?: string
	srclang?: string
}

// Preact - https://preactjs.com/
interface TrackHTMLAttributes<T extends EventTarget = HTMLTrackElement> extends MediaHTMLAttributes<T> {
	default?: boolean
	kind?: string
	label?: string
	role?: never
	srclang?: string
	srcLang?: string
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
interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
	default?: boolean
	kind?: string
	label?: string
	src?: string
	srcLang?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLTrackElementAttributes<Element> extends HTMLAttributes<Element> {
	default?: boolean | ''
	kind?:
		| 'alternative'
		| 'descriptions'
		| 'main'
		| 'main-desc'
		| 'translation'
		| 'commentary'
		// ??
		| 'subtitles'
		| 'captions'
		| 'chapters'
		| 'metadata'

	label?: string
	src?: string
	srclang?: string
}
