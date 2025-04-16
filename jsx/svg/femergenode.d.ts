// Solid Main - https://www.solidjs.com/
interface FeMergeNodeSVGAttributes<T> extends CoreSVGAttributes<T>, SingleInputFilterSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

interface SingleInputFilterSVGAttributes {
	in?: string
}

// Solid Minor - https://www.solidjs.com/
interface FeMergeNodeSVGAttributes<T> extends CoreSVGAttributes<T>, SingleInputFilterSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

interface SingleInputFilterSVGAttributes {
	in?: string
}

// Solid Next - https://www.solidjs.com/
interface FeMergeNodeSVGAttributes<T> extends CoreSVGAttributes<T>, SingleInputFilterSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | undefined | false
	lang?: string | undefined | false
	tabindex?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | undefined | false
}

interface SingleInputFilterSVGAttributes {
	in?: string | undefined | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFEMergeNodeElementAttributes {}
