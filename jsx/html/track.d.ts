// Solid - https://www.solidjs.com/
interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
	default?: boolean
	kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
	label?: string
	src?: string
	srclang?: string
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
	srclang?: string
	srcLang?: string
}

interface MediaHTMLAttributes<T extends EventTarget = HTMLMediaElement> extends HTMLAttributes<T> {
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
interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
	default?: boolean
	kind?: string
	label?: string
	src?: string
	srcLang?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLTrackElementAttributes {
	default?: 'true' | boolean
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
