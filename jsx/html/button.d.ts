// Solid Main - https://www.solidjs.com/
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

// Solid Minor - https://www.solidjs.com/
interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
	autofocus?: '' | boolean
	disabled?: '' | boolean
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: '' | boolean
	formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	popovertarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	name?: string
	type?: 'submit' | 'reset' | 'button' | 'menu'
	value?: string

	/** @experimental */
	command?: 'show-modal' | 'close' | 'show-popover' | 'hide-popover' | 'toggle-popover' | (string & {})
	/** @experimental */
	commandfor?: string

	/** @deprecated Use lowercase attributes */
	formAction?: string
	/** @deprecated Use lowercase attributes */
	formEnctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	/** @deprecated Use lowercase attributes */
	formMethod?: 'post' | 'get' | 'dialog'
	/** @deprecated Use lowercase attributes */
	formNoValidate?: boolean
	/** @deprecated Use lowercase attributes */
	formTarget?: string
	/** @deprecated Use lowercase attributes */
	popoverTarget?: string
	/** @deprecated Use lowercase attributes */
	popoverTargetAction?: 'hide' | 'show' | 'toggle'
}

// Solid Next - https://www.solidjs.com/
interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
	autofocus?: true | false | '' | undefined | false
	disabled?: true | false | '' | undefined | false
	form?: string | undefined | false
	formaction?: string | undefined | false
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | undefined | false
	formmethod?: 'post' | 'get' | 'dialog' | undefined | false
	formnovalidate?: true | false | '' | undefined | false
	formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | undefined | false
	popovertarget?: string | undefined | false
	popovertargetaction?: 'hide' | 'show' | 'toggle' | undefined | false
	name?: string | undefined | false
	type?: 'submit' | 'reset' | 'button' | 'menu' | undefined | false
	value?: string | undefined | false

	/** @experimental */
	command?: 'show-modal' | 'close' | 'show-popover' | 'hide-popover' | 'toggle-popover' | (string & {}) | undefined | false
	/** @experimental */
	commandfor?: string | undefined | false

	/** @deprecated Use lowercase attributes */
	formAction?: string | undefined | false
	/** @deprecated Use lowercase attributes */
	formEnctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | undefined | false
	/** @deprecated Use lowercase attributes */
	formMethod?: 'post' | 'get' | 'dialog' | undefined | false
	/** @deprecated Use lowercase attributes */
	formNoValidate?: boolean | undefined | false
	/** @deprecated Use lowercase attributes */
	formTarget?: string | undefined | false
	/** @deprecated Use lowercase attributes */
	popoverTarget?: string | undefined | false
	/** @deprecated Use lowercase attributes */
	popoverTargetAction?: 'hide' | 'show' | 'toggle' | undefined | false
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

// Preact - https://preactjs.com/
interface ButtonHTMLAttributes<T extends EventTarget = HTMLButtonElement> extends HTMLAttributes<T> {
	command?: string
	commandfor?: string
	commandFor?: string
	disabled?: boolean
	form?: string
	formaction?: string
	formAction?: string
	formenctype?: string
	formEncType?: string
	formmethod?: string
	formMethod?: string
	formnovalidate?: boolean
	formNoValidate?: boolean
	formtarget?: string
	formTarget?: string
	name?: string
	popovertarget?: string
	popoverTarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	popoverTargetAction?: 'hide' | 'show' | 'toggle'
	type?: 'submit' | 'reset' | 'button'
	value?: string | number
}

// React - https://react.dev/
interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	formAction?: string | ((formData: FormData) => void | Promise<void>)
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	name?: string
	type?: 'submit' | 'reset' | 'button'
	value?: string | readonly string[] | number
}

// Pota - https://github.com/potahtml/pota
interface HTMLButtonElementAttributes {
	autofocus?: boolean
	command?: 'show-modal' | 'close' | 'show-popover' | 'hide-popover' | 'toggle-popover' | (string & {})
	commandfor?: string
	disabled?: 'true' | boolean
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: 'true' | boolean
	formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	name?: string
	popovertarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	type?: 'submit' | 'reset' | 'button' | 'menu'
	value?: number | string
}
