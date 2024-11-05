// Solid - https://www.solidjs.com/
interface IntrinsicAttributes {
	ref?: unknown | ((e: unknown) => void)
}

// Voby - https://github.com/vobyjs/voby
interface IntrinsicAttributes {}

// Preact - https://preactjs.com/
interface IntrinsicAttributes {
	key?: any
}

// React - https://react.dev/
interface Attributes {
	key?: string | number | bigint | null
}
interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
	// Standard HTML Attributes
	accept?: string
	acceptCharset?: string
	action?: string
	allowFullScreen?: boolean
	allowTransparency?: boolean
	alt?: string
	as?: string
	async?: boolean
	autoComplete?: string
	autoPlay?: boolean
	capture?: boolean | 'user' | 'environment'
	cellPadding?: number | string
	cellSpacing?: number | string
	charSet?: string
	challenge?: string
	checked?: boolean
	cite?: string
	classID?: string
	cols?: number
	colSpan?: number
	controls?: boolean
	coords?: string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	data?: string
	dateTime?: string
	default?: boolean
	defer?: boolean
	disabled?: boolean
	download?: any
	encType?: string
	form?: string
	formAction?: string
	formEncType?: string
	formMethod?: string
	formNoValidate?: boolean
	formTarget?: string
	frameBorder?: number | string
	headers?: string
	height?: number | string
	high?: number
	href?: string
	hrefLang?: string
	htmlFor?: string
	httpEquiv?: string
	integrity?: string
	keyParams?: string
	keyType?: string
	kind?: string
	label?: string
	list?: string
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
	noValidate?: boolean
	open?: boolean
	optimum?: number
	pattern?: string
	placeholder?: string
	playsInline?: boolean
	poster?: string
	preload?: string
	readOnly?: boolean
	required?: boolean
	reversed?: boolean
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
	span?: number
	src?: string
	srcDoc?: string
	srcLang?: string
	srcSet?: string
	start?: number
	step?: number | string
	summary?: string
	target?: string
	type?: string
	useMap?: string
	value?: string | readonly string[] | number
	width?: number | string
	wmode?: string
	wrap?: string
}
interface IntrinsicAttributes extends GlobalJSXIntrinsicAttributes {}
interface IntrinsicAttributes extends React.Attributes {}

// Pota - https://github.com/potahtml/pota
interface DOMHTMLProperties {
	innerHTML?: string | number
	innerText?: string | number
	textContent?: string | number
}
interface DOMHTMLAttributes extends DOMHTMLProperties {
	about?: string
	accesskey?: string
	autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'

	color?: string
	contenteditable?: boolean | 'plaintext-only' | 'inherit'
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
	spellcheck?: boolean
	tabindex?: number | string
	title?: string
	translate?: 'yes' | 'no'
	typeof?: string
	vocab?: string
}
