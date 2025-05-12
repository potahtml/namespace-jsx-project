// Voby - https://github.com/vobyjs/voby
interface OlHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	reversed?: boolean
	start?: number
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}

// React - https://react.dev/
interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
	reversed?: boolean
	start?: number
	type?: '1' | 'a' | 'A' | 'i' | 'I'
}
