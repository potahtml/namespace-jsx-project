// Solid Minor - https://www.solidjs.com/
interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
	allowpopups?: '' | boolean
	disableblinkfeatures?: string
	disablewebsecurity?: '' | boolean
	enableblinkfeatures?: string
	httpreferrer?: string
	nodeintegration?: '' | boolean
	nodeintegrationinsubframes?: '' | boolean
	partition?: string
	plugins?: '' | boolean
	preload?: string
	src?: string
	useragent?: string
	webpreferences?: string

	// does this exists?
	allowfullscreen?: '' | boolean
	autofocus?: '' | boolean
	autosize?: '' | boolean

	/** @deprecated */
	blinkfeatures?: string
	/** @deprecated */
	disableguestresize?: '' | boolean
	/** @deprecated */
	guestinstance?: string
}

// Solid Next - https://www.solidjs.com/
interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
	allowpopups?: true | false | '' | undefined | false
	disableblinkfeatures?: string | undefined | false
	disablewebsecurity?: true | false | '' | undefined | false
	enableblinkfeatures?: string | undefined | false
	httpreferrer?: string | undefined | false
	nodeintegration?: true | false | '' | undefined | false
	nodeintegrationinsubframes?: true | false | '' | undefined | false
	partition?: string | undefined | false
	plugins?: true | false | '' | undefined | false
	preload?: string | undefined | false
	src?: string | undefined | false
	useragent?: string | undefined | false
	webpreferences?: string | undefined | false

	// does this exists?
	allowfullscreen?: true | false | '' | undefined | false
	autofocus?: true | false | '' | undefined | false
	autosize?: true | false | '' | undefined | false

	/** @deprecated */
	blinkfeatures?: string | undefined | false
	/** @deprecated */
	disableguestresize?: true | false | '' | undefined | false
	/** @deprecated */
	guestinstance?: string | undefined | false
}

// Voby - https://github.com/vobyjs/voby
interface WebViewHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	allowFullScreen?: boolean
	allowpopups?: boolean
	autoFocus?: boolean
	autosize?: boolean
	blinkfeatures?: string
	disableblinkfeatures?: string
	disableguestresize?: boolean
	disablewebsecurity?: boolean
	guestinstance?: string
	httpreferrer?: string
	nodeintegration?: boolean
	partition?: string
	plugins?: boolean
	preload?: string
	src?: string
	useragent?: string
	webpreferences?: string
}

// Vue - https://vuejs.org/
interface WebViewHTMLAttributes extends HTMLAttributes {
	allowfullscreen?: boolean | 'true' | 'false'
	allowpopups?: boolean | 'true' | 'false'
	autoFocus?: boolean | 'true' | 'false'
	autosize?: boolean | 'true' | 'false'
	blinkfeatures?: string
	disableblinkfeatures?: string
	disableguestresize?: boolean | 'true' | 'false'
	disablewebsecurity?: boolean | 'true' | 'false'
	guestinstance?: string
	httpreferrer?: string
	nodeintegration?: boolean | 'true' | 'false'
	partition?: string
	plugins?: boolean | 'true' | 'false'
	preload?: string
	src?: string
	useragent?: string
	webpreferences?: string
}

// React - https://react.dev/
interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
	allowFullScreen?: boolean
	allowpopups?: boolean
	autosize?: boolean
	blinkfeatures?: string
	disableblinkfeatures?: string
	disableguestresize?: boolean
	disablewebsecurity?: boolean
	guestinstance?: string
	httpreferrer?: string
	nodeintegration?: boolean
	partition?: string
	plugins?: boolean
	preload?: string
	src?: string
	useragent?: string
	webpreferences?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLWebViewElementAttributes {
	allowpopups?: 'true' | boolean
	disableblinkfeatures?: string
	disablewebsecurity?: 'true' | boolean
	enableblinkfeatures?: string
	httpreferrer?: string
	nodeintegration?: 'true' | boolean
	nodeintegrationinsubframes?: 'true' | boolean
	partition?: string
	plugins?: 'true' | boolean
	preload?: string
	src?: string
	useragent?: string
	webpreferences?: string

	// does this exists?
	allowfullscreen?: boolean
	autofocus?: boolean
	autosize?: boolean

	/** @deprecated */
	blinkfeatures?: string
	/** @deprecated */
	disableguestresize?: 'true' | boolean
	/** @deprecated */
	guestinstance?: string
}
