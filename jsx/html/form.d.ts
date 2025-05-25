// Solid Main - https://www.solidjs.com/
interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
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

	noValidate?: boolean

	/** @deprecated */
	accept?: string
}

// Solid Next - https://www.solidjs.com/
interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
	'accept-charset'?: string | false
	action?: string | false
	autocomplete?: 'on' | 'off' | false
	encoding?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | false
	enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | false
	method?: 'post' | 'get' | 'dialog' | false
	name?: string | false
	novalidate?: true | false | '' | false
	rel?: string | false
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | false

	/** @deprecated */
	accept?: string | false
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

// Preact - https://preactjs.com/
interface FormHTMLAttributes<T extends EventTarget = HTMLFormElement> extends HTMLAttributes<T> {
	'accept-charset'?: string
	acceptCharset?: string
	action?: string
	autocomplete?: string
	autoComplete?: string
	enctype?: string
	encType?: string
	method?: string
	name?: string
	novalidate?: boolean
	noValidate?: boolean
	rel?: string
	target?: string
}

// React - https://react.dev/
interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
	acceptCharset?: string
	action?: string | ((formData: FormData) => void | Promise<void>)
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
	novalidate?: 'true' | boolean
	rel?: string
	target?: '_self' | '_blank' | '_parent' | '_top' | (string & {})

	/** @deprecated */
	accept?: string
}
