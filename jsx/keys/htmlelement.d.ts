// Solid Main - https://www.solidjs.com/
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// [key: ClassKeys]: boolean;
	about?: string
	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	class?: string
	color?: string
	contenteditable?: 'true' | 'false' | boolean | 'plaintext-only' | 'inherit'
	contextmenu?: string
	datatype?: string
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: boolean | 'false' | 'true'
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	inert?: boolean
	inlist?: any
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
	is?: string
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: boolean
	itemtype?: string
	lang?: string
	part?: string
	popover?: boolean | 'manual' | 'auto'
	prefix?: string
	property?: string
	resource?: string
	slot?: string
	spellcheck?: 'true' | 'false' | boolean
	style?: CSSProperties | string
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'
	typeof?: string
	vocab?: string

	accessKey?: string
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	contentEditable?: boolean | 'plaintext-only' | 'inherit'
	contextMenu?: string
	exportParts?: string
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	itemId?: string
	itemProp?: string
	itemRef?: string
	itemScope?: boolean
	itemType?: string
	tabIndex?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// [key: ClassKeys]: boolean;
	about?: string
	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	class?: string
	color?: string
	contenteditable?: 'true' | 'false' | boolean | 'plaintext-only' | 'inherit'
	contextmenu?: string
	datatype?: string
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: boolean | 'false' | 'true'
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	inert?: '' | boolean
	inlist?: any
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
	is?: string
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: '' | boolean
	itemtype?: string
	lang?: string
	part?: string
	popover?: boolean | 'manual' | 'auto'
	prefix?: string
	property?: string
	resource?: string
	slot?: string
	spellcheck?: 'true' | 'false' | boolean
	style?: CSSProperties | string
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'
	typeof?: string
	vocab?: string

	/** @deprecated Use lowercase attributes */
	accessKey?: string
	/** @deprecated Use lowercase attributes */
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	/** @deprecated Use lowercase attributes */
	contentEditable?: boolean | 'plaintext-only' | 'inherit'
	/** @deprecated Use lowercase attributes */
	contextMenu?: string
	/** @deprecated Use lowercase attributes */
	exportParts?: string
	/** @deprecated Use lowercase attributes */
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	/** @deprecated Use lowercase attributes */
	itemId?: string
	/** @deprecated Use lowercase attributes */
	itemProp?: string
	/** @deprecated Use lowercase attributes */
	itemRef?: string
	/** @deprecated Use lowercase attributes */
	itemScope?: boolean
	/** @deprecated Use lowercase attributes */
	itemType?: string
	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

// Solid Next - https://www.solidjs.com/
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// [key: ClassKeys]: boolean;
	about?: string | false
	accesskey?: string | false
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | false
	class?: string | ClassList | false
	color?: string | false
	contenteditable?: 'false' | 'true' | '' | true | 'plaintext-only' | 'inherit' | false
	contextmenu?: string | false
	datatype?: string | false
	dir?: 'ltr' | 'rtl' | 'auto' | false
	draggable?: 'false' | 'true' | false
	exportparts?: string | false
	hidden?: '' | true | 'hidden' | 'until-found' | false
	id?: string | false
	inert?: true | false | '' | false
	inlist?: any | false
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url' | false
	is?: string | false
	itemid?: string | false
	itemprop?: string | false
	itemref?: string | false
	itemscope?: true | false | '' | false
	itemtype?: string | false
	lang?: string | false
	part?: string | false
	popover?: '' | true | 'manual' | 'auto' | false
	prefix?: string | false
	property?: string | false
	resource?: string | false
	slot?: string | false
	spellcheck?: 'false' | 'true' | '' | true | false
	style?: CSSProperties | string | false
	tabindex?: number | string | false
	title?: string | false
	translate?: 'yes' | 'no' | false
	typeof?: string | false
	vocab?: string | false

	/** @deprecated Use lowercase attributes */
	accessKey?: string | false
	/** @deprecated Use lowercase attributes */
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | false
	/** @deprecated Use lowercase attributes */
	contentEditable?: 'false' | 'true' | 'plaintext-only' | 'inherit' | false
	/** @deprecated Use lowercase attributes */
	contextMenu?: string | false
	/** @deprecated Use lowercase attributes */
	exportParts?: string | false
	/** @deprecated Use lowercase attributes */
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | false
	/** @deprecated Use lowercase attributes */
	itemId?: string | false
	/** @deprecated Use lowercase attributes */
	itemProp?: string | false
	/** @deprecated Use lowercase attributes */
	itemRef?: string | false
	/** @deprecated Use lowercase attributes */
	itemScope?: true | false | '' | false
	/** @deprecated Use lowercase attributes */
	itemType?: string | false
	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

// Voby - https://github.com/vobyjs/voby
interface VoidHTMLAttributes<T extends EventTarget> extends AriaAttributes, DOMAttributes<T>, DirectiveAttributes {
	ref?: Refs<T>

	accept?: string
	acceptCharset?: string
	accessKey?: string
	action?: string
	allow?: string
	allowFullScreen?: boolean
	allowTransparency?: boolean
	alt?: string
	as?: string
	async?: boolean
	autoComplete?: string
	autoCorrect?: string
	autofocus?: boolean
	autoFocus?: boolean
	autoPlay?: boolean
	capture?: boolean | string
	cellPadding?: number | string
	cellSpacing?: number | string
	charSet?: string
	challenge?: string
	checked?: boolean
	cite?: string
	class?: Class
	cols?: number
	colSpan?: number
	content?: string
	contentEditable?: boolean | 'caret' | 'events' | 'plaintext-only' | 'typing' | 'inherit'
	contextMenu?: string
	controls?: boolean
	controlsList?: string
	coords?: string
	crossOrigin?: string
	data?: string
	dateTime?: string
	default?: boolean
	defer?: boolean
	dir?: 'auto' | 'rtl' | 'ltr'
	disabled?: boolean
	disableRemotePlayback?: boolean
	download?: any
	decoding?: 'sync' | 'async' | 'auto'
	draggable?: boolean | 'true' | 'false'
	encType?: string
	enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	form?: string
	formAction?: string
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	frameBorder?: number | string
	headers?: string
	height?: number | string
	hidden?: boolean
	high?: number
	href?: string
	hrefLang?: string
	for?: string
	htmlFor?: string
	httpEquiv?: string
	icon?: string
	id?: string | number
	inert?: boolean
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	integrity?: string
	is?: string
	keyParams?: string
	keyType?: string
	kind?: string
	label?: string
	lang?: string
	list?: string
	loading?: 'eager' | 'lazy'
	loop?: boolean
	low?: number
	manifest?: string
	marginHeight?: number
	marginWidth?: number
	max?: number | string
	maxLength?: number
	media?: string
	mediaGroup?: string
	method?: string
	min?: number | string
	minLength?: number
	multiple?: boolean
	muted?: boolean
	name?: string
	nomodule?: boolean
	nonce?: string
	noValidate?: boolean
	open?: boolean
	optimum?: number
	part?: string
	pattern?: string
	ping?: string
	placeholder?: string
	playsInline?: boolean
	poster?: string
	preload?: string
	radioGroup?: string
	readonly?: boolean
	readOnly?: boolean
	referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
	rel?: string
	required?: boolean
	reversed?: boolean
	/* WAI-ARIA */
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem'
	rows?: number
	rowSpan?: number
	sandbox?: string
	scope?: string
	scoped?: boolean
	scrolling?: string
	seamless?: boolean
	selected?: boolean
	shape?: string
	size?: number
	sizes?: string
	slot?: string
	span?: number
	spellCheck?: boolean | 'true' | 'false'
	src?: string
	srcset?: string
	srcDoc?: string
	srcLang?: string
	srcSet?: string
	start?: number
	step?: number | string
	style?: Style
	summary?: string
	tabIndex?: boolean | number
	target?: string
	title?: string
	type?: string
	useMap?: string
	value?: string | readonly string[] | number
	volume?: string | number
	width?: number | string
	wmode?: string
	wrap?: string

	// Non-standard Attributes
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	autoSave?: string
	color?: string
	disablePictureInPicture?: boolean
	results?: number
	security?: string
	translate?: 'yes' | 'no'
	unselectable?: 'on' | 'off'
	virtualKeyboardPolicy?: 'auto' | 'manual'

	// RDFa Attributes
	about?: string
	datatype?: string
	inlist?: boolean
	prefix?: string
	property?: string
	resource?: string
	typeof?: string
	vocab?: string

	// Microdata Attributes
	itemProp?: string
	itemScope?: boolean
	itemType?: string
	itemID?: string
	itemRef?: string
}

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
