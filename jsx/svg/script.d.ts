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
