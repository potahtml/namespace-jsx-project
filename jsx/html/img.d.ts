// Solid Main - https://www.solidjs.com/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'sync' | 'async' | 'auto'
	fetchpriority?: 'high' | 'low' | 'auto'
	height?: number | string
	ismap?: boolean
	loading?: 'eager' | 'lazy'
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	usemap?: string
	width?: number | string

	/** @experimental */
	attributionsrc?: string
	/** @experimental */
	sharedstoragewritable?: boolean

	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	isMap?: boolean
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	srcSet?: string
	useMap?: string

	/** @deprecated */
	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right'
	/** @deprecated */
	border?: string
	/** @deprecated */
	hspace?: number | string
	/** @deprecated */
	intrinsicsize?: string
	/** @deprecated */
	longdesc?: string
	/** @deprecated */
	lowsrc?: string
	/** @deprecated */
	name?: string
	/** @deprecated */
	vspace?: number | string
}

// Solid Next - https://www.solidjs.com/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string | false
	browsingtopics?: string | false
	crossorigin?: 'anonymous' | 'use-credentials' | '' | true | false
	decoding?: 'sync' | 'async' | 'auto' | false
	fetchpriority?: 'high' | 'low' | 'auto' | false
	height?: number | string | false
	ismap?: true | false | '' | false
	loading?: 'eager' | 'lazy' | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false
	sizes?: string | false
	src?: string | false
	srcset?: string | false
	usemap?: string | false
	width?: number | string | false

	/** @experimental */
	attributionsrc?: string | false
	/** @experimental */
	sharedstoragewritable?: true | false | '' | false

	/** @deprecated */
	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right' | false
	/** @deprecated */
	border?: string | false
	/** @deprecated */
	hspace?: number | string | false
	/** @deprecated */
	intrinsicsize?: string | false
	/** @deprecated */
	longdesc?: string | false
	/** @deprecated */
	lowsrc?: string | false
	/** @deprecated */
	name?: string | false
	/** @deprecated */
	vspace?: number | string | false
}

// Voby - https://github.com/vobyjs/voby
interface ImgHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	alt?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'async' | 'auto' | 'sync'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcSet?: string
	useMap?: string
	width?: number | string
}

// Vue - https://vuejs.org/
interface ImgHTMLAttributes extends HTMLAttributes {
	alt?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'async' | 'auto' | 'sync'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	usemap?: string
	width?: number | string
}

// Preact - https://preactjs.com/

// React - https://react.dev/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'async' | 'auto' | 'sync'
	fetchPriority?: 'high' | 'low' | 'auto'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcSet?: string
	useMap?: string
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLImageElementAttributes<Element> extends HTMLAttributes<Element> {
	alt?: string
	attributionsrc?: string
	browsingtopics?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'sync' | 'async' | 'auto'
	fetchpriority?: 'high' | 'low' | 'auto'
	height?: number | string
	ismap?: boolean | ''
	loading?: 'eager' | 'lazy'
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	usemap?: string
	width?: number | string

	/** @experimental */
	sharedstoragewritable?: boolean | ''

	/** @deprecated */
	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right'
	/** @deprecated */
	border?: string
	/** @deprecated */
	hspace?: number | string
	/** @deprecated */
	intrinsicsize?: string
	/** @deprecated */
	longdesc?: string
	/** @deprecated */
	lowsrc?: string
	/** @deprecated */
	name?: string
	/** @deprecated */
	vspace?: number | string
}
