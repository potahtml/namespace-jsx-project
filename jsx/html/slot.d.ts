// Solid Main - https://www.solidjs.com/
interface HTMLSlotElementAttributes<T> extends HTMLAttributes<T> {
	name?: string
}

// Solid Minor - https://www.solidjs.com/
interface HTMLSlotElementAttributes<T> extends HTMLAttributes<T> {
	name?: string
}

// Solid Next - https://www.solidjs.com/
interface HTMLSlotElementAttributes<T> extends HTMLAttributes<T> {
	name?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface SlotHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	name?: string
}

// Preact - https://preactjs.com/
interface SlotHTMLAttributes<T extends EventTarget = HTMLSlotElement> extends HTMLAttributes<T> {
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
