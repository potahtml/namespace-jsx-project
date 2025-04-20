// Solid Main - https://www.solidjs.com/
interface TemplateHTMLAttributes<T extends HTMLTemplateElement> extends HTMLAttributes<T> {
	content?: DocumentFragment
}

// Solid Minor - https://www.solidjs.com/
interface TemplateHTMLAttributes<T> extends HTMLAttributes<T> {
	shadowrootmode?: 'open' | 'closed'
	shadowrootclonable?: '' | boolean
	shadowrootdelegatesfocus?: '' | boolean

	/** @experimental */
	shadowrootserializable?: '' | boolean

	/** @deprecated */
	content?: DocumentFragment
}

// Solid Next - https://www.solidjs.com/
interface TemplateHTMLAttributes<T> extends HTMLAttributes<T> {
	shadowrootmode?: 'open' | 'closed' | false
	shadowrootclonable?: true | false | '' | false
	shadowrootdelegatesfocus?: true | false | '' | false

	/** @experimental */
	shadowrootserializable?: true | false | '' | false

	/** @deprecated */
	content?: DocumentFragment | false
}

// Pota - https://github.com/potahtml/pota
interface HTMLTemplateElementAttributes {
	shadowrootclonable?: 'true' | boolean
	shadowrootdelegatesfocus?: 'true' | boolean
	shadowrootmode?: 'open' | 'closed'
	shadowrootserializable?: 'true' | boolean
}
