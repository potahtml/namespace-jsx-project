// Solid Main - https://www.solidjs.com/
interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
	for?: string
}

// Solid Minor - https://www.solidjs.com/
interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
	for?: string
	form?: string
}

// Solid Next - https://www.solidjs.com/
interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
	for?: string | false
	form?: string | false
}

// Voby - https://github.com/vobyjs/voby
interface LabelHTMLAttributes<T extends EventTarget> extends HTMLAttributes<T> {
	form?: string
	htmlFor?: string
	for?: string
}

// Vue - https://vuejs.org/
interface LabelHTMLAttributes extends HTMLAttributes {
	for?: string
	form?: string
}

// Preact - https://preactjs.com/
interface LabelHTMLAttributes<T extends EventTarget = HTMLLabelElement> extends HTMLAttributes<T> {
	for?: string
	form?: string
	htmlFor?: string
}

// React - https://react.dev/
interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
	form?: string
	htmlFor?: string
}

// Pota - https://github.com/potahtml/pota
interface HTMLLabelElementAttributes {
	for?: string
	form?: string
}
