// Solid - https://www.solidjs.com/
interface HTMLSlotElementAttributes<T = HTMLSlotElement> extends HTMLAttributes<T> {
	name?: string
}

// Voby - https://github.com/vobyjs/voby
interface SlotHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	name?: string
}

// Preact - https://preactjs.com/
interface SlotHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	name?: string
}

// React - https://react.dev/
interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
	name?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLSlotElementAttributes {
	name?: string
}
