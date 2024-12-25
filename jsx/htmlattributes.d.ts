// Solid - https://www.solidjs.com/
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// [key: ClassKeys]: boolean;
	accessKey?: string
	class?: string
	contenteditable?: boolean | 'plaintext-only' | 'inherit'
	contextmenu?: string
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: boolean | 'false' | 'true'
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	is?: string
	inert?: boolean
	lang?: string
	spellcheck?: boolean
	style?: CSSProperties | string
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'
	about?: string
	datatype?: string
	inlist?: any
	popover?: boolean | 'manual' | 'auto'
	prefix?: string
	property?: string
	resource?: string
	typeof?: string
	vocab?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	slot?: string
	color?: string
	itemprop?: string
	itemscope?: boolean
	itemtype?: string
	itemid?: string
	itemref?: string
	part?: string
	exportparts?: string
	inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	contentEditable?: boolean | 'plaintext-only' | 'inherit'
	contextMenu?: string
	tabIndex?: number | string
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'
	itemProp?: string
	itemScope?: boolean
	itemType?: string
	itemId?: string
	itemRef?: string
	exportParts?: string
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
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
interface HTMLAttributes<T extends EventTarget> extends VoidHTMLAttributes<T>, ViewAttributes {}

// Vue - https://vuejs.org/
interface HTMLAttributes extends AriaAttributes, EventHandlers<Events> {
	innerHTML?: string

	class?: any
	style?: StyleValue

	// Standard HTML Attributes
	accesskey?: string
	contenteditable?: boolean | 'true' | 'false' | 'inherit' | 'plaintext-only'
	contextmenu?: string
	dir?: string
	draggable?: boolean | 'true' | 'false'
	hidden?: boolean | 'true' | 'false' | '' | 'hidden' | 'until-found'
	id?: string
	inert?: boolean | 'true' | 'false'
	lang?: string
	placeholder?: string
	spellcheck?: boolean | 'true' | 'false'
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'

	// Unknown
	radiogroup?: string // <command>, <menuitem>

	// WAI-ARIA
	role?: string

	// RDFa Attributes
	about?: string
	datatype?: string
	inlist?: any
	prefix?: string
	property?: string
	resource?: string
	typeof?: string
	vocab?: string

	// Non-standard Attributes
	autocapitalize?: string
	autocorrect?: string
	autosave?: string
	color?: string
	itemprop?: string
	itemscope?: boolean | 'true' | 'false'
	itemtype?: string
	itemid?: string
	itemref?: string
	results?: number | string
	security?: string
	unselectable?: 'on' | 'off'

	// Living Standard
	/**
	 * Hints at the type of data that might be entered by the user while editing the element or its contents
	 * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
	 */
	inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	/**
	 * Specify that a standard HTML element should behave like a defined custom built-in element
	 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
	 */
	is?: string
}

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
interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// React-specific Attributes
	defaultChecked?: boolean
	defaultValue?: string | number | readonly string[]
	suppressContentEditableWarning?: boolean
	suppressHydrationWarning?: boolean

	// Standard HTML Attributes
	accessKey?: string
	autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | (string & {})
	autoFocus?: boolean
	className?: string
	contentEditable?: boolean | 'true' | 'false' | 'inherit' | 'plaintext-only'
	contextMenu?: string
	dir?: string
	draggable?: boolean | 'true' | 'false'
	enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'
	hidden?: boolean
	id?: string
	lang?: string
	nonce?: string
	slot?: string
	spellCheck?: boolean | 'true' | 'false'
	style?: CSSProperties
	tabIndex?: number
	title?: string
	translate?: 'yes' | 'no'

	// Unknown
	radioGroup?: string // <command>, <menuitem>

	// WAI-ARIA
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | (string & {})

	// RDFa Attributes
	about?: string
	content?: string
	datatype?: string
	inlist?: any
	prefix?: string
	property?: string
	rel?: string
	resource?: string
	rev?: string
	typeof?: string
	vocab?: string

	// Non-standard Attributes
	autoCorrect?: string
	autoSave?: string
	color?: string
	itemProp?: string
	itemScope?: boolean
	itemType?: string
	itemID?: string
	itemRef?: string
	results?: number
	security?: string
	unselectable?: 'on' | 'off'

	// Popover API
	popover?: '' | 'auto' | 'manual'
	popoverTargetAction?: 'toggle' | 'show' | 'hide'
	popoverTarget?: string

	// Living Standard
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert
	 */
	inert?: boolean
	/**
	 * Hints at the type of data that might be entered by the user while editing the element or its contents
	 * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
	 */
	inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
	/**
	 * Specify that a standard HTML element should behave like a defined custom built-in element
	 * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}
	 */
	is?: string
}

// Pota - https://github.com/potahtml/pota
interface DOMHTMLProperties {
	innerHTML?: number | string
	innerText?: number | string
	textContent?: number | string
}
interface DOMHTMLAttributes extends DOMHTMLProperties {
	about?: string
	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'

	color?: string
	contenteditable?: 'true' | 'false' | 'plaintext-only' | 'inherit' | boolean
	contextmenu?: string
	datatype?: string
	dir?: 'ltr' | 'rtl' | 'auto'
	draggable?: 'true' | 'false' | boolean
	exportparts?: string
	hidden?: boolean | 'hidden' | 'until-found'
	id?: string
	inert?: 'true' | boolean
	inlist?: any
	inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url'
	is?: string
	itemid?: string
	itemprop?: string
	itemref?: string
	itemscope?: 'true' | boolean
	itemtype?: string
	lang?: string
	part?: string
	popover?: boolean | 'manual' | 'auto'
	prefix?: string
	property?: string
	resource?: string
	slot?: string
	spellcheck?: 'true' | boolean
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'
	typeof?: string
	vocab?: string
}
