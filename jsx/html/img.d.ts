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

	attributionsrc?: string

	sharedstoragewritable?: boolean

	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	isMap?: boolean
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	srcSet?: string
	useMap?: string

	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right'

	border?: string

	hspace?: number | string

	intrinsicsize?: string

	longdesc?: string

	lowsrc?: string

	name?: string

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

	attributionsrc?: string | false

	sharedstoragewritable?: true | false | '' | false

	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right' | false

	border?: string | false

	hspace?: number | string | false

	intrinsicsize?: string | false

	longdesc?: string | false

	lowsrc?: string | false

	name?: string | false

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
	fetchpriority?: 'high' | 'low' | 'auto'
	height?: number | string
	loading?: 'eager' | 'lazy'
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sizes?: string
	src?: string
	srcset?: string
	usemap?: string
	width?: number | string
}

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

	sharedstoragewritable?: boolean | ''

	align?: 'top' | 'middle' | 'bottom' | 'left' | 'right'

	border?: string

	hspace?: number | string

	intrinsicsize?: string

	longdesc?: string

	lowsrc?: string

	name?: string

	vspace?: number | string
}
