// Solid Main - https://www.solidjs.com/
interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
	allow?: string
	allowfullscreen?: boolean
	height?: number | string
	loading?: 'eager' | 'lazy'
	name?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: 'allow-downloads-without-user-activation' | 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols' | string
	src?: string
	srcdoc?: string
	width?: number | string

	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

	/** @experimental */
	adauctionheaders?: boolean
	/**
	 * @non-standard
	 * @experimental
	 */
	browsingtopics?: boolean
	/** @experimental */
	credentialless?: boolean
	/** @experimental */
	csp?: string
	/** @experimental */
	privatetoken?: string
	/** @experimental */
	sharedstoragewritable?: boolean

	/** @deprecated */
	align?: string
	/**
	 * @deprecated
	 * @non-standard
	 */
	allowpaymentrequest?: boolean
	/** @deprecated */
	allowtransparency?: boolean
	/** @deprecated */
	frameborder?: number | string
	/** @deprecated */
	longdesc?: string
	/** @deprecated */
	marginheight?: number | string
	/** @deprecated */
	marginwidth?: number | string
	/** @deprecated */
	scrolling?: 'yes' | 'no' | 'auto'
	/** @deprecated */
	seamless?: boolean
}

// Solid Next - https://www.solidjs.com/
interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
	allow?: string | false
	allowfullscreen?: true | false | '' | false
	height?: number | string | false
	loading?: 'eager' | 'lazy' | false
	name?: string | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false
	sandbox?: 'allow-downloads-without-user-activation' | 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols' | string | false
	src?: string | false
	srcdoc?: string | false
	width?: number | string | false

	/** @experimental */
	adauctionheaders?: true | false | '' | false
	/**
	 * @non-standard
	 * @experimental
	 */
	browsingtopics?: true | false | '' | false
	/** @experimental */
	credentialless?: true | false | '' | false
	/** @experimental */
	csp?: string | false
	/** @experimental */
	privatetoken?: string | false
	/** @experimental */
	sharedstoragewritable?: true | false | '' | false

	/** @deprecated */
	align?: string | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	allowpaymentrequest?: true | false | '' | false
	/** @deprecated */
	allowtransparency?: true | false | '' | false
	/** @deprecated */
	frameborder?: number | string | false
	/** @deprecated */
	longdesc?: string | false
	/** @deprecated */
	marginheight?: number | string | false
	/** @deprecated */
	marginwidth?: number | string | false
	/** @deprecated */
	scrolling?: 'yes' | 'no' | 'auto' | false
	/** @deprecated */
	seamless?: true | false | '' | false
}

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

// Preact - https://preactjs.com/
interface IframeHTMLAttributes<T extends EventTarget = HTMLIFrameElement> extends HTMLAttributes<T> {
	allow?: string
	allowFullScreen?: boolean
	allowTransparency?: boolean
	/** @deprecated */
	frameborder?: number | string
	/** @deprecated */
	frameBorder?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'
	/** @deprecated */
	marginHeight?: number
	/** @deprecated */
	marginWidth?: number
	name?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: string
	/** @deprecated */
	scrolling?: string
	seamless?: boolean
	src?: string
	srcdoc?: string
	srcDoc?: string
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

// Pota - https://github.com/potahtml/pota
interface HTMLIFrameElementAttributes<Element> extends HTMLAttributes<Element> {
	allow?: string
	allowfullscreen?: boolean | ''
	height?: number | string
	loading?: 'eager' | 'lazy'
	name?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: 'allow-downloads-without-user-activation' | 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols' | string
	src?: string
	srcdoc?: string
	width?: number | string

	/** @non-standard */
	browsingtopics?: boolean | ''

	/** @experimental */
	credentialless?: boolean | ''
	/** @experimental */
	csp?: string
	/** @experimental */
	sharedstoragewritable?: boolean | ''
	/** @experimental */
	adauctionheaders?: boolean | ''
	/** @experimental */
	privatetoken?: string

	/** @deprecated */
	allowpaymentrequest?: boolean | ''
	/** @deprecated */
	allowtransparency?: boolean | ''
	/** @deprecated */
	align?: string
	/** @deprecated */
	frameborder?: number | string
	/** @deprecated */
	longdesc?: string
	/** @deprecated */
	marginheight?: number | string
	/** @deprecated */
	marginwidth?: number | string
	/** @deprecated */
	scrolling?: 'yes' | 'no' | 'auto'
	/** @deprecated */
	seamless?: boolean | ''
}
