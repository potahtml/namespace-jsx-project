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
	shadowrootmode?: 'open' | 'closed' | undefined | false
	shadowrootclonable?: true | false | '' | undefined | false
	shadowrootdelegatesfocus?: true | false | '' | undefined | false

	/** @experimental */
	shadowrootserializable?: true | false | '' | undefined | false

	/** @deprecated */
	content?: DocumentFragment | undefined | false
}

// Pota - https://github.com/potahtml/pota
interface HTMLTemplateElementAttributes {
	shadowrootclonable?: 'true' | boolean
	shadowrootdelegatesfocus?: 'true' | boolean
	shadowrootmode?: 'open' | 'closed'
	shadowrootserializable?: 'true' | boolean
}
