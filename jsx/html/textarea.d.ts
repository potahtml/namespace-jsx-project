// Solid Main - https://www.solidjs.com/
interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
	autocomplete?: 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work' | (string & {})
	cols?: number | string
	dirname?: string
	disabled?: boolean
	form?: string
	maxlength?: number | string
	minlength?: number | string
	name?: string
	placeholder?: string
	readonly?: boolean
	required?: boolean
	rows?: number | string
	value?: string | string[] | number
	wrap?: 'hard' | 'soft' | 'off'

	maxLength?: number | string
	minLength?: number | string
	readOnly?: boolean
}

// Solid Next - https://www.solidjs.com/
interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
	autocomplete?: 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work' | (string & {}) | false
	cols?: number | string | false
	dirname?: string | false
	disabled?: true | false | '' | false

	form?: string | false
	maxlength?: number | string | false
	minlength?: number | string | false
	name?: string | false
	placeholder?: string | false
	readonly?: true | false | '' | false
	required?: true | false | '' | false
	rows?: number | string | false
	value?: string | string[] | number | false
	wrap?: 'hard' | 'soft' | 'off' | false
}

// Voby - https://github.com/vobyjs/voby
interface TextareaHTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T> {
	autoComplete?: string
	autoFocus?: boolean
	cols?: number
	dirName?: string
	disabled?: boolean
	form?: string
	maxLength?: number
	minLength?: number
	name?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	rows?: number
	value?: string | readonly string[] | number
	wrap?: string
	onChange?: KeyboardEventHandler<T>
}

// Vue - https://vuejs.org/
interface TextareaHTMLAttributes extends HTMLAttributes {
	autocomplete?: string
	autofocus?: boolean | 'true' | 'false'
	cols?: number | string
	dirname?: string
	disabled?: boolean | 'true' | 'false'
	form?: string
	maxlength?: number | string
	minlength?: number | string
	name?: string
	placeholder?: string
	readonly?: boolean | 'true' | 'false'
	required?: boolean | 'true' | 'false'
	rows?: number | string
	value?: string | readonly string[] | number | null
	wrap?: string
}

// Preact - https://preactjs.com/
interface TextareaHTMLAttributes<T extends EventTarget = HTMLTextAreaElement> extends HTMLAttributes<T> {
	autocomplete?: string
	autoComplete?: string
	cols?: number
	defaultValue?: string | number
	dirName?: string
	disabled?: boolean
	form?: string
	maxlength?: number
	maxLength?: number
	minlength?: number
	minLength?: number
	name?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	role?: 'textbox'
	rows?: number
	value?: string | number
	wrap?: string
	onChange?: GenericEventHandler<T>
}

// React - https://react.dev/
interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
	autoComplete?: string
	cols?: number
	dirName?: string
	disabled?: boolean
	form?: string
	maxLength?: number
	minLength?: number
	name?: string
	placeholder?: string
	readOnly?: boolean
	required?: boolean
	rows?: number
	value?: string | readonly string[] | number
	wrap?: string

	onChange?: ChangeEventHandler<T>
}

// Pota - https://github.com/potahtml/pota
interface HTMLTextAreaElementAttributes<Element> extends HTMLAttributes<Element> {
	'prop:value'?: string

	autocomplete?: 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work' | (string & {})
	cols?: number | string
	dirname?: string
	disabled?: boolean | ''
	form?: string
	maxlength?: number | string
	minlength?: number | string
	name?: string
	placeholder?: string
	readonly?: boolean | ''
	required?: boolean | ''
	rows?: number | string
	wrap?: 'hard' | 'soft' | 'off'
}
