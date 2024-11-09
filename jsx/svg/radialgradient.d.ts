// Solid - https://www.solidjs.com/
interface RadialGradientSVGAttributes<T> extends GradientElementSVGAttributes<T> {
	cx?: number | string
	cy?: number | string
	r?: number | string
	fx?: number | string
	fy?: number | string
}

interface GradientElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	gradientTransform?: string
	spreadMethod?: 'pad' | 'reflect' | 'repeat'
	href?: string
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Pota - https://github.com/potahtml/pota
interface SVGRadialGradientElementAttributes {}
