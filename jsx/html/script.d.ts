// Solid Main - https://www.solidjs.com/
interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
	async?: boolean
	blocking?: 'render'
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	defer?: boolean
	fetchpriority?: 'high' | 'low' | 'auto'
	integrity?: string
	nomodule?: boolean
	nonce?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	src?: string
	type?: 'importmap' | 'module' | 'speculationrules' | (string & {})

	/** @experimental */
	attributionsrc?: string

	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	noModule?: boolean
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'

	/** @deprecated */
	charset?: string
	/** @deprecated */
	event?: string
	/** @deprecated */
	language?: string
}

// Solid Next - https://www.solidjs.com/
interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
	async?: true | false | '' | false
	blocking?: 'render' | false
	crossorigin?: 'anonymous' | 'use-credentials' | '' | true | false
	defer?: true | false | '' | false
	fetchpriority?: 'high' | 'low' | 'auto' | false
	integrity?: string | false
	nomodule?: true | false | '' | false
	nonce?: string | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false
	src?: string | false
	type?: 'importmap' | 'module' | 'speculationrules' | (string & {}) | false

	/** @experimental */
	attributionsrc?: string | false

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | true | false
	/** @deprecated Use lowercase attributes */
	noModule?: boolean | false
	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | false

	/** @deprecated */
	charset?: string | false
	/** @deprecated */
	event?: string | false
	/** @deprecated */
	language?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface ScriptHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	async?: boolean
	/** @deprecated */
	charSet?: string
	crossOrigin?: string
	defer?: boolean
	integrity?: string
	noModule?: boolean
	nonce?: string
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	src?: string
	type?: string
}

// Vue - https://vuejs.org/
interface ScriptHTMLAttributes extends HTMLAttributes {
	async?: boolean | 'true' | 'false'
	/** @deprecated */
	charset?: string
	crossorigin?: string
	defer?: boolean | 'true' | 'false'
	integrity?: string
	nomodule?: boolean | 'true' | 'false'
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	nonce?: string
	src?: string
	type?: string
}

// Preact - https://preactjs.com/
interface ScriptHTMLAttributes<T extends EventTarget = HTMLScriptElement> extends HTMLAttributes<T> {
	async?: boolean
	/** @deprecated */
	charset?: string
	/** @deprecated */
	charSet?: string
	crossorigin?: 'anonymous' | 'use-credentials'
	crossOrigin?: 'anonymous' | 'use-credentials'
	defer?: boolean
	integrity?: string
	nomodule?: boolean
	noModule?: boolean
	referrerpolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	src?: string
	type?: string
}

// React - https://react.dev/
interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
	async?: boolean
	/** @deprecated */
	charSet?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	defer?: boolean
	integrity?: string
	noModule?: boolean
	referrerPolicy?: '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	src?: string
	type?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLScriptElementAttributes {
	async?: 'true' | boolean
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	defer?: 'true' | boolean
	fetchpriority?: 'high' | 'low' | 'auto'
	integrity?: string
	nomodule?: 'true' | boolean
	nonce?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	src?: string
	type?: 'importmap' | 'module' | 'speculationrules' | (string & {})

	/** @experimental */
	attributionsrc?: string
	/** @experimental */
	blocking?: string

	/** @deprecated */
	charset?: string
	/** @deprecated */
	event?: string
	/** @deprecated */
	language?: string
}
