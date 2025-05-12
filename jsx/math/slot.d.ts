// Voby - https://github.com/vobyjs/voby
interface SlotHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	name?: string
}

// React - https://react.dev/
interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
}
