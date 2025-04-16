// Solid Main - https://www.solidjs.com/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'sync' | 'async' | 'auto'
	height?: number | string
	ismap?: boolean
	isMap?: boolean
	loading?: 'eager' | 'lazy'
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	srcSet?: string
	usemap?: string
	useMap?: string
	width?: number | string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	elementtiming?: string
	fetchpriority?: 'high' | 'low' | 'auto'
}

// Solid Minor - https://www.solidjs.com/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'sync' | 'async' | 'auto'
	height?: number | string
	ismap?: '' | boolean
	loading?: 'eager' | 'lazy'
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	usemap?: string
	width?: number | string
	elementtiming?: string
	fetchpriority?: 'high' | 'low' | 'auto'

	/** @experimental */
	attributionsrc?: string
	/** @experimental */
	sharedstoragewritable?: '' | boolean

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	/** @deprecated Use lowercase attributes */
	isMap?: boolean
	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	/** @deprecated Use lowercase attributes */
	srcSet?: string
	/** @deprecated Use lowercase attributes */
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
	alt?: string | undefined | false
	crossorigin?: 'anonymous' | 'use-credentials' | '' | true | undefined | false
	decoding?: 'sync' | 'async' | 'auto' | undefined | false
	height?: number | string | undefined | false
	ismap?: true | false | '' | undefined | false
	loading?: 'eager' | 'lazy' | undefined | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false
	sizes?: string | undefined | false
	src?: string | undefined | false
	srcset?: string | undefined | false
	usemap?: string | undefined | false
	width?: number | string | undefined | false
	elementtiming?: string | undefined | false
	fetchpriority?: 'high' | 'low' | 'auto' | undefined | false

	/** @experimental */
	attributionsrc?: string | undefined | false
	/** @experimental */
	sharedstoragewritable?: true | false | '' | undefined | false

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | true | undefined | false
	/** @deprecated Use lowercase attributes */
	isMap?: boolean | undefined | false
	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false
	/** @deprecated Use lowercase attributes */
	srcSet?: string | undefined | false
	/** @deprecated Use lowercase attributes */
	useMap?: string | undefined | false

	/** @deprecated */
	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right' | undefined | false
	/** @deprecated */
	border?: string | undefined | false
	/** @deprecated */
	hspace?: number | string | undefined | false
	/** @deprecated */
	intrinsicsize?: string | undefined | false
	/** @deprecated */
	longdesc?: string | undefined | false
	/** @deprecated */
	lowsrc?: string | undefined | false
	/** @deprecated */
	name?: string | undefined | false
	/** @deprecated */
	vspace?: number | string | undefined | false
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
interface ImgHTMLAttributes<T extends EventTarget = HTMLImageElement> extends HTMLAttributes<T> {
	alt?: string
	crossorigin?: 'anonymous' | 'use-credentials'
	crossOrigin?: 'anonymous' | 'use-credentials'
	decoding?: 'async' | 'auto' | 'sync'
	fetchpriority?: 'high' | 'auto' | 'low'
	fetchPriority?: 'high' | 'auto' | 'low'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	srcSet?: string
	usemap?: string
	useMap?: string
	width?: number | string
}

// React - https://react.dev/
interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
	alt?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined
	decoding?: 'async' | 'auto' | 'sync'
	fetchPriority?: 'high' | 'low' | 'auto'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_IMG_SRC_TYPES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_IMG_SRC_TYPES]
	srcSet?: string
	useMap?: string
	width?: number | string
}

// Pota - https://github.com/potahtml/pota
interface HTMLImageElementAttributes {
	alt?: string
	attributionsrc?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	decoding?: 'sync' | 'async' | 'auto'
	elementtiming?: string
	fetchpriority?: 'high' | 'low' | 'auto'
	height?: number | string
	ismap?: 'true' | boolean
	loading?: 'eager' | 'lazy'
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	usemap?: string
	width?: number | string

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
