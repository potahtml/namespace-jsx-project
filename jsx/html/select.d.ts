// Solid - https://www.solidjs.com/
interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
	autocomplete?: string
	autofocus?: boolean
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number | string
	value?: string | string[] | number
}

// Voby - https://github.com/vobyjs/voby
interface SelectHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	autoComplete?: string
	autoFocus?: boolean
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number
	value?: string
	onChange?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
}

// Vue - https://vuejs.org/
interface SelectHTMLAttributes extends HTMLAttributes {
	autocomplete?: string
	autofocus?: boolean | 'true' | 'false'
	disabled?: boolean | 'true' | 'false'
	form?: string
	multiple?: boolean | 'true' | 'false'
	name?: string
	required?: boolean | 'true' | 'false'
	size?: number | string
	value?: any // we support :value to be bound to anything w/ v-model
}

// Preact - https://preactjs.com/
interface SelectHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	autocomplete?: string
	autoComplete?: string
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number
	value?: string | number
	onChange?: GenericEventHandler<T>
}

// React - https://react.dev/
interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
	autoComplete?: string
	disabled?: boolean
	form?: string
	multiple?: boolean
	name?: string
	required?: boolean
	size?: number
	value?: string | readonly string[] | number
	onChange?: ChangeEventHandler<T>
}

// Pota - https://github.com/potahtml/pota
interface HTMLSelectElementAttributes {
	autocomplete?: 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'billing' | 'cc-additional-name' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-number' | 'cc-type' | 'country' | 'country-name' | 'current-password' | 'email' | 'family-name' | 'fax' | 'given-name' | 'home' | 'honorific-prefix' | 'honorific-suffix' | 'impp' | 'language' | 'mobile' | 'name' | 'new-password' | 'nickname' | 'off' | 'on' | 'organization' | 'organization-title' | 'pager' | 'photo' | 'postal-code' | 'sex' | 'shipping' | 'street-address' | 'tel' | 'tel-area-code' | 'tel-country-code' | 'tel-extension' | 'tel-local' | 'tel-local-prefix' | 'tel-local-suffix' | 'tel-national' | 'transaction-amount' | 'transaction-currency' | 'url' | 'username' | 'work' | (string & {})
	autofocus?: boolean
	disabled?: 'true' | boolean
	form?: string
	multiple?: 'true' | boolean
	name?: string
	required?: 'true' | boolean
	size?: number | string
	value?: number | string
}
