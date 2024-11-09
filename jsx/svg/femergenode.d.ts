// Solid - https://www.solidjs.com/
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

// Pota - https://github.com/potahtml/pota
interface SVGFEMergeNodeElementAttributes {}
