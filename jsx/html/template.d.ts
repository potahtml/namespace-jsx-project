// Solid - https://www.solidjs.com/
interface TemplateHTMLAttributes<T extends HTMLTemplateElement> extends HTMLAttributes<T> {
	content?: DocumentFragment
}

// Pota - https://github.com/potahtml/pota
interface HTMLTemplateElementAttributes {
	shadowrootclonable?: 'true' | boolean
	shadowrootdelegatesfocus?: 'true' | boolean
	shadowrootmode?: 'open' | 'closed'
	shadowrootserializable?: 'true' | boolean
}
