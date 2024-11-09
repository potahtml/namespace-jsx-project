// Solid - https://www.solidjs.com/
interface LinearGradientSVGAttributes<T> extends GradientElementSVGAttributes<T> {
	x1?: number | string
	x2?: number | string
	y1?: number | string
	y2?: number | string
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
interface SVGLinearGradientElementAttributes {}
