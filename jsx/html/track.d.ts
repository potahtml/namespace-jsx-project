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
	default?: boolean
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
