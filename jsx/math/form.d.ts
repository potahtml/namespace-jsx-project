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
