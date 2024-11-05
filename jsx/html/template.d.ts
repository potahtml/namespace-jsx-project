// Solid - https://www.solidjs.com/
interface TemplateHTMLAttributes<T extends HTMLTemplateElement> extends HTMLAttributes<T> {
	content?: DocumentFragment
}

// Pota - https://github.com/potahtml/pota
interface HTMLTemplateElementAttributes {
	shadowrootclonable?: boolean
	shadowrootdelegatesfocus?: boolean
	shadowrootmode?: 'open' | 'closed'
	shadowrootserializable?: boolean
}
