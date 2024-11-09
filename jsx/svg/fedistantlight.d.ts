// Solid - https://www.solidjs.com/
interface FeDistantLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	azimuth?: number | string
	elevation?: number | string
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGFEDistantLightElementAttributes {}
