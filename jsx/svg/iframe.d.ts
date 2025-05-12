// Voby - https://github.com/vobyjs/voby
interface IframeHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	allow?: string
	allowFullScreen?: boolean
	allowTransparency?: boolean
	/** @deprecated */
	frameBorder?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'
	/** @deprecated */
	marginHeight?: number
	/** @deprecated */
	marginWidth?: number
	name?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: string
	/** @deprecated */
	scrolling?: string
	seamless?: boolean
	src?: string
	srcDoc?: string
	width?: number | string
}

// Vue - https://vuejs.org/
interface IframeHTMLAttributes extends HTMLAttributes {
	allow?: string
	allowfullscreen?: boolean | 'true' | 'false'
	allowtransparency?: boolean | 'true' | 'false'
	/** @deprecated */
	frameborder?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'
	/** @deprecated */
	marginheight?: number | string
	/** @deprecated */
	marginwidth?: number | string
	name?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: string
	/** @deprecated */
	scrolling?: string
	seamless?: boolean | 'true' | 'false'
	src?: string
	srcdoc?: string
	width?: number | string
}

// React - https://react.dev/
interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
	allow?: string
	allowFullScreen?: boolean
	allowTransparency?: boolean
	/** @deprecated */
	frameBorder?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'
	/** @deprecated */
	marginHeight?: number
	/** @deprecated */
	marginWidth?: number
	name?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: string
	/** @deprecated */
	scrolling?: string
	seamless?: boolean
	src?: string
	srcDoc?: string
	width?: number | string
}
