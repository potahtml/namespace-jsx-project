// Solid Main - https://www.solidjs.com/
interface TemplateHTMLAttributes<T> extends HTMLAttributes<T> {
	shadowrootclonable?: boolean
	shadowrootcustomelementregistry?: boolean
	shadowrootdelegatesfocus?: boolean
	shadowrootmode?: 'open' | 'closed'

	/** @experimental */
	shadowrootserializable?: boolean
}

// Solid Next - https://www.solidjs.com/
interface TemplateHTMLAttributes<T> extends HTMLAttributes<T> {
	shadowrootclonable?: true | false | '' | false
	shadowrootdelegatesfocus?: true | false | '' | false
	shadowrootmode?: 'open' | 'closed' | false
	shadowrootcustomelementregistry?: true | false | '' | false

	/** @experimental */
	shadowrootserializable?: true | false | '' | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface TemplateHTMLAttributes<T extends EventTarget = HTMLTemplateElement> extends HTMLAttributes<T> {
	role?: never
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLTemplateElementAttributes<Element> extends HTMLAttributes<Element> {
	shadowrootclonable?: boolean | ''
	shadowrootcustomelementregistry?: boolean | ''
	shadowrootdelegatesfocus?: boolean | ''
	shadowrootmode?: 'open' | 'closed'
	shadowrootserializable?: boolean | ''
}
