// Solid - https://www.solidjs.com/
interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
	accept?: string
	alt?: string
	autocomplete?: string
	autocorrect?: 'on' | 'off'
	autofocus?: boolean
	capture?: boolean | string
	checked?: boolean
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	disabled?: boolean
	enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	form?: string
	formaction?: string
	formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formmethod?: 'post' | 'get' | 'dialog'
	formnovalidate?: boolean
	formtarget?: string
	height?: number | string
	incremental?: boolean
	list?: string
	max?: number | string
	maxlength?: number | string
	min?: number | string
	minlength?: number | string
	multiple?: boolean
	name?: string
	pattern?: string
	placeholder?: string
	readonly?: boolean
	results?: number
	required?: boolean
	size?: number | string
	src?: string
	step?: number | string
	type?: string
	value?: string | string[] | number
	width?: number | string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	formAction?: string
	formEnctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
	formMethod?: 'post' | 'get' | 'dialog'
	formNoValidate?: boolean
	formTarget?: string
	maxLength?: number | string
	minLength?: number | string
	readOnly?: boolean
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
	onChange?: ObservableMaybe<Nullable<KeyboardEventHandler<T>>>
}

// Vue - https://vuejs.org/
interface InputHTMLAttributes extends HTMLAttributes {
	accept?: string
	alt?: string
	autocomplete?: string
	autofocus?: boolean | 'true' | 'false'
	capture?: boolean | 'user' | 'environment' // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
	checked?: boolean | 'true' | 'false' | any[] | Set<any> // for IDE v-model multi-checkbox support
	crossorigin?: string
	disabled?: boolean | 'true' | 'false'
	enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
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
	type?: InputTypeHTMLAttribute
	value?: any // we support :value to be bound to anything w/ v-model
	width?: number | string
}

// React - https://react.dev/
interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
	accept?: string
	alt?: string
	autoComplete?: AutoFill | (string & {})
	capture?: boolean | 'user' | 'environment' // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
	checked?: boolean
	disabled?: boolean
	form?: string
	formAction?: string
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

	onChange?: ChangeEventHandler<T>
}
