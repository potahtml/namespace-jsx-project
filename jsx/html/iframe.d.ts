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

	adauctionheaders?: boolean

	browsingtopics?: boolean

	credentialless?: boolean

	csp?: string

	privatetoken?: string

	sharedstoragewritable?: boolean

	align?: string

	allowpaymentrequest?: boolean

	allowtransparency?: boolean

	frameborder?: number | string

	longdesc?: string

	marginheight?: number | string

	marginwidth?: number | string

	scrolling?: 'yes' | 'no' | 'auto'

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

	adauctionheaders?: true | false | '' | false

	browsingtopics?: true | false | '' | false

	credentialless?: true | false | '' | false

	csp?: string | false

	privatetoken?: string | false

	sharedstoragewritable?: true | false | '' | false

	align?: string | false

	allowpaymentrequest?: true | false | '' | false

	allowtransparency?: true | false | '' | false

	frameborder?: number | string | false

	longdesc?: string | false

	marginheight?: number | string | false

	marginwidth?: number | string | false

	scrolling?: 'yes' | 'no' | 'auto' | false

	seamless?: true | false | '' | false
}

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

// Vue - https://vuejs.org/
interface IframeHTMLAttributes extends HTMLAttributes {
	allow?: string
	allowfullscreen?: boolean | 'true' | 'false'
	allowtransparency?: boolean | 'true' | 'false'

	frameborder?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'

	marginheight?: number | string

	marginwidth?: number | string
	name?: string
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	sandbox?: string

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

	browsingtopics?: boolean | ''

	credentialless?: boolean | ''

	csp?: string

	sharedstoragewritable?: boolean | ''

	adauctionheaders?: boolean | ''

	privatetoken?: string

	allowpaymentrequest?: boolean | ''

	allowtransparency?: boolean | ''

	align?: string

	frameborder?: number | string

	longdesc?: string

	marginheight?: number | string

	marginwidth?: number | string

	scrolling?: 'yes' | 'no' | 'auto'

	seamless?: boolean | ''
}
