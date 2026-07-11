// Voby - https://github.com/vobyjs/voby
interface IframeHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	allow?: string
	allowFullScreen?: boolean
	allowTransparency?: boolean

	frameBorder?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'

	marginHeight?: number

	marginWidth?: number
	name?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: string

	scrolling?: string
	seamless?: boolean
	src?: string
	srcDoc?: string
	width?: number | string
}

// React - https://react.dev/
interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
	allow?: string
	allowFullScreen?: boolean
	allowTransparency?: boolean

	frameBorder?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'

	marginHeight?: number

	marginWidth?: number
	name?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: string

	scrolling?: string
	seamless?: boolean
	src?: string
	srcDoc?: string
	width?: number | string
}
