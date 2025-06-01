// Solid Main - https://www.solidjs.com/
interface HTMLAttributes<T> extends DOMAttributes<T> {
	innerText?: string | number

	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	autocorrect?: 'on' | 'off'
	contenteditable?: 'true' | 'false' | boolean | 'plaintext-only' | 'inherit'
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: boolean | 'false' | 'true'
	enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	inert?: boolean
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
	is?: string
	lang?: string
	part?: string
	popover?: boolean | 'manual' | 'auto'
	spellcheck?: 'true' | 'false' | boolean
	title?: string
	translate?: 'yes' | 'no'

	accessKey?: string
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	contentEditable?: boolean | 'plaintext-only' | 'inherit'
	exportParts?: string
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'

	// Microdata
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: boolean
	itemtype?: string

	itemId?: string
	itemProp?: string
	itemRef?: string
	itemScope?: boolean
	itemType?: string

	// RDFa Attributes
	about?: string
	datatype?: string
	inlist?: any
	prefix?: string
	property?: string
	resource?: string
	typeof?: string
	vocab?: string

	/** @deprecated */
	contextmenu?: string
	/** @deprecated */
	contextMenu?: string
}

// Solid Next - https://www.solidjs.com/
interface HTMLAttributes<T> extends ElementAttributes<T> {
	// properties
	innerText?: string | number

	// attributes
	accesskey?: string | false
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | false
	autocorrect?: 'on' | 'off' | false
	contenteditable?: 'false' | 'true' | '' | true | 'plaintext-only' | 'inherit' | false
	dir?: 'ltr' | 'rtl' | 'auto' | false
	draggable?: 'false' | 'true' | false
	enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | false
	exportparts?: string | false
	hidden?: '' | true | 'hidden' | 'until-found' | false
	inert?: true | false | '' | false
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url' | false
	is?: string | false
	lang?: string | false
	popover?: '' | true | 'manual' | 'auto' | false
	spellcheck?: 'false' | 'true' | '' | true | false
	title?: string | false
	translate?: 'yes' | 'no' | false

	/** @experimental */
	virtualkeyboardpolicy?: '' | true | 'auto' | 'manual' | false
	/** @experimental */
	writingsuggestions?: 'false' | 'true' | false

	// Microdata
	itemid?: string | false
	itemprop?: string | false
	itemref?: string | false
	itemscope?: true | false | '' | false
	itemtype?: string | false

	// RDFa Attributes
	about?: string | false
	datatype?: string | false
	inlist?: any | false
	prefix?: string | false
	property?: string | false
	resource?: string | false
	typeof?: string | false
	vocab?: string | false

	/** @deprecated */
	contextmenu?: string | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface HTMLAttributes<RefType extends EventTarget = EventTarget> extends ClassAttributes<RefType>, DOMAttributes<RefType>, AriaAttributes {
	// Standard HTML Attributes
	accesskey?: string
	accessKey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	autocorrect?: string
	autoCorrect?: string
	autofocus?: boolean
	autoFocus?: boolean
	class?: string
	className?: string
	contenteditable?: boolean | 'true' | 'false' | '' | 'plaintext-only' | 'inherit'
	contentEditable?: boolean | 'true' | 'false' | '' | 'plaintext-only' | 'inherit'
	dir?: 'auto' | 'rtl' | 'ltr'
	draggable?: boolean
	enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	inert?: boolean
	inputmode?: string
	inputMode?: string
	is?: string
	lang?: string
	nonce?: string
	part?: string
	popover?: 'auto' | 'hint' | 'manual' | boolean
	slot?: string
	spellcheck?: boolean
	style?: string | CSSProperties
	tabindex?: number
	tabIndex?: number
	title?: string
	translate?: boolean

	// WAI-ARIA Attributes
	role?: AriaRole

	// Non-standard Attributes
	disablePictureInPicture?: boolean
	elementtiming?: string
	elementTiming?: string
	results?: number

	// RDFa Attributes
	about?: string
	datatype?: string
	inlist?: any
	prefix?: string
	property?: string
	resource?: string
	typeof?: string
	vocab?: string

	// Microdata Attributes
	itemid?: string
	itemID?: string
	itemprop?: string
	itemProp?: string
	itemref?: string
	itemRef?: string
	itemscope?: boolean
	itemScope?: boolean
	itemtype?: string
	itemType?: string
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLAttributes<Element> extends ElementAttributes<Element> {
	// properties
	innerText?: number | string

	// attributes
	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	autocorrect?: 'on' | 'off'
	contenteditable?: 'false' | 'true' | 'plaintext-only' | 'inherit' | ''
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: 'false' | 'true'
	enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	exportparts?: string
	hidden?: '' | 'hidden' | 'until-found'
	inert?: boolean | ''
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
	is?: string
	lang?: string
	popover?: '' | 'manual' | 'auto' | 'hint'
	spellcheck?: '' | 'false' | 'true'
	title?: string
	translate?: 'yes' | 'no'

	// microdata
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: boolean | ''
	itemtype?: string

	// RDFa attributes
	about?: string
	datatype?: string
	inlist?: any
	prefix?: string
	property?: string
	resource?: string
	typeof?: string
	vocab?: string

	/** @experimental */
	virtualkeyboardpolicy?: '' | 'auto' | 'manual'
	/** @experimental */
	writingsuggestions?: 'false' | 'true'

	/** @deprecated */
	contextmenu?: string
}
