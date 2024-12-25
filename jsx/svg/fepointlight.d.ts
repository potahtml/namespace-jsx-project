// Solid - https://www.solidjs.com/
interface FePointLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	x?: number | string
	y?: number | string
	z?: number | string
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFEPointLightElementAttributes {}
