// Solid - https://www.solidjs.com/
interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
	autofocus?: boolean
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: boolean
	formtarget?: string
	popovertarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	name?: string
	type?: 'submit' | 'reset' | 'button'
	value?: string
	formAction?: string
	formEnctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formMethod?: 'post' | 'get' | 'dialog'
	formNoValidate?: boolean
	formTarget?: string
	popoverTarget?: string
	popoverTargetAction?: 'hide' | 'show' | 'toggle'
}

// Voby - https://github.com/vobyjs/voby
interface ButtonHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	autoFocus?: boolean
	disabled?: boolean
	form?: string
	formAction?: string
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	name?: string
	type?: 'submit' | 'reset' | 'button'
	value?: string | readonly string[] | number
}

// Vue - https://vuejs.org/
interface ButtonHTMLAttributes extends HTMLAttributes {
	autofocus?: boolean | 'true' | 'false'
	disabled?: boolean | 'true' | 'false'
	form?: string
	formaction?: string
	formenctype?: string
	formmethod?: string
	formnovalidate?: boolean | 'true' | 'false'
	formtarget?: string
	name?: string
	type?: 'submit' | 'reset' | 'button'
	value?: string | readonly string[] | number
}

// React - https://react.dev/
interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	formAction?: string
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	name?: string
	type?: 'submit' | 'reset' | 'button'
	value?: string | readonly string[] | number
}
