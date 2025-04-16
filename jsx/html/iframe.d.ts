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
}

// Solid Minor - https://www.solidjs.com/
interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
	allow?: string
	allowfullscreen?: '' | boolean
	height?: number | string
	loading?: 'eager' | 'lazy'
	name?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: 'allow-downloads-without-user-activation' | 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols' | string
	src?: string
	srcdoc?: string
	width?: number | string

	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

	/** @experimental */
	adauctionheaders?: '' | boolean
	/**
	 * @non-standard
	 * @experimental
	 */
	browsingtopics?: '' | boolean
	/** @experimental */
	credentialless?: '' | boolean
	/** @experimental */
	csp?: string
	/** @experimental */
	privatetoken?: string
	/** @experimental */
	sharedstoragewritable?: '' | boolean

	/** @deprecated */
	align?: string
	/**
	 * @deprecated
	 * @non-standard
	 */
	allowpaymentrequest?: '' | boolean
	/** @deprecated */
	allowtransparency?: '' | boolean
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
	seamless?: '' | boolean
}

// Solid Next - https://www.solidjs.com/
interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
	allow?: string | undefined | false
	allowfullscreen?: true | false | '' | undefined | false
	height?: number | string | undefined | false
	loading?: 'eager' | 'lazy' | undefined | false
	name?: string | undefined | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false
	sandbox?: 'allow-downloads-without-user-activation' | 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols' | string | undefined | false
	src?: string | undefined | false
	srcdoc?: string | undefined | false
	width?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false

	/** @experimental */
	adauctionheaders?: true | false | '' | undefined | false
	/**
	 * @non-standard
	 * @experimental
	 */
	browsingtopics?: true | false | '' | undefined | false
	/** @experimental */
	credentialless?: true | false | '' | undefined | false
	/** @experimental */
	csp?: string | undefined | false
	/** @experimental */
	privatetoken?: string | undefined | false
	/** @experimental */
	sharedstoragewritable?: true | false | '' | undefined | false

	/** @deprecated */
	align?: string | undefined | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	allowpaymentrequest?: true | false | '' | undefined | false
	/** @deprecated */
	allowtransparency?: true | false | '' | undefined | false
	/** @deprecated */
	frameborder?: number | string | undefined | false
	/** @deprecated */
	longdesc?: string | undefined | false
	/** @deprecated */
	marginheight?: number | string | undefined | false
	/** @deprecated */
	marginwidth?: number | string | undefined | false
	/** @deprecated */
	scrolling?: 'yes' | 'no' | 'auto' | undefined | false
	/** @deprecated */
	seamless?: true | false | '' | undefined | false
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
interface HTMLIFrameElementAttributes {
	allow?: string
	allowfullscreen?: 'true' | boolean
	height?: number | string
	loading?: 'eager' | 'lazy'
	name?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: 'allow-downloads-without-user-activation' | 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols' | string
	src?: string
	srcdoc?: string
	width?: number | string

	/** @non-standard */
	browsingtopics?: 'true' | boolean
	/** @experimental */
	credentialless?: 'true' | boolean
	/** @experimental */
	csp?: string
	/** @experimental */
	sharedstoragewritable?: 'true' | boolean

	/** @deprecated */
	allowpaymentrequest?: 'true' | boolean
	/** @deprecated */
	allowtransparency?: 'true' | boolean
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
	seamless?: 'true' | boolean
}
