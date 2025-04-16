// Solid Main - https://www.solidjs.com/
interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
	async?: boolean
	charset?: string
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	defer?: boolean
	integrity?: string
	nomodule?: boolean
	nonce?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	src?: string
	type?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	noModule?: boolean
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
}

// Solid Minor - https://www.solidjs.com/
interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
	async?: '' | boolean
	blocking?: 'render'
	crossorigin?: 'anonymous' | 'use-credentials' | ''
	defer?: '' | boolean
	fetchpriority?: 'high' | 'low' | 'auto'
	integrity?: string
	nomodule?: '' | boolean
	nonce?: string
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	src?: string
	type?: 'importmap' | 'module' | 'speculationrules' | (string & {})

	/** @experimental */
	attributionsrc?: string

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	/** @deprecated Use lowercase attributes */
	noModule?: boolean
	/** @deprecated Use lowercase attributes */
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
	async?: true | false | '' | undefined | false
	blocking?: 'render' | undefined | false
	crossorigin?: 'anonymous' | 'use-credentials' | '' | true | undefined | false
	defer?: true | false | '' | undefined | false
	fetchpriority?: 'high' | 'low' | 'auto' | undefined | false
	integrity?: string | undefined | false
	nomodule?: true | false | '' | undefined | false
	nonce?: string | undefined | false
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false
	src?: string | undefined | false
	type?: 'importmap' | 'module' | 'speculationrules' | (string & {}) | undefined | false

	/** @experimental */
	attributionsrc?: string | undefined | false

	/** @deprecated Use lowercase attributes */
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | true | undefined | false
	/** @deprecated Use lowercase attributes */
	noModule?: boolean | undefined | false
	/** @deprecated Use lowercase attributes */
	referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url' | undefined | false

	/** @deprecated */
	charset?: string | undefined | false
	/** @deprecated */
	event?: string | undefined | false
	/** @deprecated */
	language?: string | undefined | false
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
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined
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
