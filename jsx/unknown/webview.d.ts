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
	allowfullscreen?: boolean
	allowpopups?: boolean
	autofocus?: boolean
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
