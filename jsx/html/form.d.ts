// Solid - https://www.solidjs.com/
interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
	'accept-charset'?: string
	action?: string
	autocomplete?: string
	encoding?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	method?: 'post' | 'get' | 'dialog'
	name?: string
	novalidate?: boolean
	target?: string
	noValidate?: boolean
}

// Voby - https://github.com/vobyjs/voby
interface FormHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	acceptCharset?: string
	action?: string
	autoComplete?: string
	encType?: string
	method?: string
	name?: string
	noValidate?: boolean
	target?: string
}

// Vue - https://vuejs.org/
interface FormHTMLAttributes extends HTMLAttributes {
	acceptcharset?: string
	action?: string
	autocomplete?: string
	enctype?: string
	method?: string
	name?: string
	novalidate?: boolean | 'true' | 'false'
	target?: string
}

// React - https://react.dev/
interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
	acceptCharset?: string
	action?: string
	autoComplete?: string
	encType?: string
	method?: string
	name?: string
	noValidate?: boolean
	target?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLFormElementAttributes {
	'accept-charset'?: string
	action?: string
	autocomplete?: 'on' | 'off'
	encoding?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	method?: 'post' | 'get' | 'dialog'
	name?: string
	novalidate?: boolean
	rel?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})

	/** @deprecated */
	accept?: string
}
