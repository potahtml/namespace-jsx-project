// Solid Main - https://www.solidjs.com/
interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
	accept?: string
	alpha?: boolean
	alt?: string
	autocomplete?: 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work' | (string & {})
	capture?: 'user' | 'environment'
	checked?: boolean
	colorspace?: string
	dirname?: string
	disabled?: boolean
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: boolean
	formtarget?: string
	height?: number | string
	list?: string
	max?: number | string
	maxlength?: number | string
	min?: number | string
	minlength?: number | string
	multiple?: boolean
	name?: string
	pattern?: string
	placeholder?: string
	popovertarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	readonly?: boolean
	required?: boolean

	results?: number
	size?: number | string
	src?: string
	step?: number | string
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {})
	value?: string | string[] | number
	width?: number | string

	incremental?: boolean

	formAction?: string
	formEnctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formMethod?: 'post' | 'get' | 'dialog'
	formNoValidate?: boolean
	formTarget?: string
	maxLength?: number | string
	minLength?: number | string
	readOnly?: boolean

	align?: string

	usemap?: string
}

// Solid Next - https://www.solidjs.com/
interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
	accept?: string | false
	alpha?: true | false | '' | false
	alt?: string | false
	autocomplete?: 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work' | (string & {}) | false
	capture?: 'user' | 'environment' | false

	colorspace?: string | false
	dirname?: string | false
	disabled?: true | false | '' | false
	form?: string | false
	formaction?: string | false
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | false
	formmethod?: 'post' | 'get' | 'dialog' | false
	formnovalidate?: true | false | '' | false
	formtarget?: string | false
	height?: number | string | false
	list?: string | false
	max?: number | string | false
	maxlength?: number | string | false
	min?: number | string | false
	minlength?: number | string | false
	multiple?: true | false | '' | false
	name?: string | false
	pattern?: string | false
	placeholder?: string | false
	popovertarget?: string | false
	popovertargetaction?: 'hide' | 'show' | 'toggle' | false
	readonly?: true | false | '' | false
	required?: true | false | '' | false

	results?: number | false
	size?: number | string | false
	src?: string | false
	step?: number | string | false
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {}) | false
	width?: number | string | false
	webkitdirectory?: true | false | '' | false

	incremental?: true | false | '' | false

	align?: string | false

	usemap?: string | false

	checked?: true | false

	'prop:checked'?: never

	defaultChecked?: true | false

	'prop:defaultChecked'?: never

	value?: string | string[] | number

	'prop:value'?: never

	defaultValue?: string | string[] | number

	'prop:defaultValue'?: never
}

// Voby - https://github.com/vobyjs/voby
interface InputHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	accept?: string
	alt?: string
	autoComplete?: string
	autoFocus?: boolean
	capture?: boolean | 'user' | 'environment'
	checked?: boolean
	crossOrigin?: string
	disabled?: boolean
	enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	form?: string
	formAction?: string
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	height?: number | string
	indeterminate?: boolean
	list?: string
	max?: number | string
	maxLength?: number
	min?: number | string
	minLength?: number
	multiple?: boolean
	name?: string
	pattern?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	size?: number
	src?: string
	step?: number | string
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
	value?: string | readonly string[] | number
	width?: number | string
	onChange?: KeyboardEventHandler<T>
}

// Vue - https://vuejs.org/
interface InputHTMLAttributes extends HTMLAttributes {
	accept?: string
	alt?: string
	autocomplete?: AutoFill | (string & {})
	autofocus?: boolean | 'true' | 'false'
	capture?: boolean | 'user' | 'environment'
	checked?: boolean | 'true' | 'false' | any[] | Set<any>
	crossorigin?: string
	disabled?: boolean | 'true' | 'false'
	form?: string
	formaction?: string
	formenctype?: string
	formmethod?: string
	formnovalidate?: boolean | 'true' | 'false'
	formtarget?: string
	height?: number | string
	indeterminate?: boolean
	list?: string
	max?: number | string
	maxlength?: number | string
	min?: number | string
	minlength?: number | string
	multiple?: boolean | 'true' | 'false'
	name?: string
	pattern?: string
	placeholder?: string
	readonly?: boolean | 'true' | 'false'
	required?: boolean | 'true' | 'false'
	size?: number | string
	src?: string
	step?: number | string
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {})
	value?: any
	width?: number | string
	onCancel?: (payload: Event) => void
}

// React - https://react.dev/
interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
	accept?: string
	alt?: string
	autoComplete?: AutoFill | (string & {})
	capture?: boolean | 'user' | 'environment'
	checked?: boolean
	disabled?: boolean
	form?: string
	formAction?: string | ((formData: FormData) => void | Promise<void>)
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	height?: number | string
	list?: string
	max?: number | string
	maxLength?: number
	min?: number | string
	minLength?: number
	multiple?: boolean
	name?: string
	pattern?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	size?: number
	src?: string
	step?: number | string
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {})
	value?: string | readonly string[] | number
	width?: number | string

	onChange?: ChangeEventHandler<T, HTMLInputElement>
}

// Pota - https://github.com/potahtml/pota
interface HTMLInputElementAttributes<Element> extends HTMLAttributes<Element> {
	accept?: string
	alt?: string
	alpha?: boolean | ''
	autocomplete?: 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work' | (string & {})
	capture?: 'user' | 'environment' | boolean | '' | (string & {})
	checked?: boolean | ''
	colorspace?: string
	dirname?: string
	disabled?: boolean | ''
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: boolean | ''
	formtarget?: string
	height?: number | string
	incremental?: boolean | ''
	list?: string
	max?: number | string
	maxlength?: number | string
	min?: number | string
	minlength?: number | string
	multiple?: boolean | ''
	name?: string
	pattern?: string
	placeholder?: string
	popovertarget?: string
	popovertargetaction?: 'hide' | 'show' | 'toggle'
	readonly?: boolean | ''
	required?: boolean | ''
	results?: number | string
	size?: number | string
	src?: string
	step?: number | string
	type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
	value?: number | string
	webkitdirectory?: boolean | ''
	width?: number | string

	align?: string

	usemap?: string
}
