// Solid - https://www.solidjs.com/
interface MetadataSVGAttributes<T> extends CoreSVGAttributes<T> {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGMetadataElementAttributes {}
