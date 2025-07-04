// Solid Main - https://www.solidjs.com/
interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: boolean
	formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	name?: string
	popovertarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	type?: 'submit' | 'reset' | 'button' | 'menu'
	value?: string

	/** @experimental */
	command?: 'show-modal' | 'close' | 'show-popover' | 'hide-popover' | 'toggle-popover' | (string & {})
	/** @experimental */
	commandfor?: string

	formAction?: string
	formEnctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formMethod?: 'post' | 'get' | 'dialog'
	formNoValidate?: boolean
	formTarget?: string
	popoverTarget?: string
	popoverTargetAction?: 'hide' | 'show' | 'toggle'
}

// Solid Next - https://www.solidjs.com/
interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
	disabled?: true | false | '' | false
	form?: string | false
	formaction?: string | false
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | false
	formmethod?: 'post' | 'get' | 'dialog' | false
	formnovalidate?: true | false | '' | false
	formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | false
	name?: string | false
	popovertarget?: string | false
	popovertargetaction?: 'hide' | 'show' | 'toggle' | false
	type?: 'submit' | 'reset' | 'button' | 'menu' | false
	value?: string | false

	/** @experimental */
	command?: 'show-modal' | 'close' | 'show-popover' | 'hide-popover' | 'toggle-popover' | (string & {}) | false
	/** @experimental */
	commandfor?: string | false
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
	role?: 'button' | 'checkbox' | 'combobox' | 'gridcell' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'radio' | 'separator' | 'slider' | 'switch' | 'tab' | 'treeitem'
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
interface HTMLButtonElementAttributes<Element> extends HTMLAttributes<Element> {
	command?: 'show-modal' | 'close' | 'show-popover' | 'hide-popover' | 'toggle-popover' | (string & {})
	commandfor?: string
	disabled?: boolean | ''
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: boolean | ''
	formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {})
	name?: string
	popovertarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	type?: 'submit' | 'reset' | 'button' | 'menu'
	value?: number | string
}
