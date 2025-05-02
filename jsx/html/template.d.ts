// Solid Main - https://www.solidjs.com/
interface TemplateHTMLAttributes<T> extends HTMLAttributes<T> {
	shadowrootclonable?: boolean
	shadowrootdelegatesfocus?: boolean
	shadowrootmode?: 'open' | 'closed'

	/** @experimental */
	shadowrootserializable?: boolean
}

// Solid Minor - https://www.solidjs.com/
interface TemplateHTMLAttributes<T> extends HTMLAttributes<T> {
	shadowrootclonable?: '' | boolean
	shadowrootdelegatesfocus?: '' | boolean
	shadowrootmode?: 'open' | 'closed'

	/** @experimental */
	shadowrootserializable?: '' | boolean

	/** @deprecated */
	content?: DocumentFragment
}

// Solid Next - https://www.solidjs.com/
interface TemplateHTMLAttributes<T> extends HTMLAttributes<T> {
	shadowrootclonable?: true | false | '' | false
	shadowrootdelegatesfocus?: true | false | '' | false
	shadowrootmode?: 'open' | 'closed' | false

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
