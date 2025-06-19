// Solid Main - https://www.solidjs.com/
interface LinearGradientSVGAttributes<T> extends GradientElementSVGAttributes<T> {
	x1?: number | string
	x2?: number | string
	y1?: number | string
	y2?: number | string
}

interface GradientElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	gradientTransform?: string
	gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	href?: string
	spreadMethod?: 'pad' | 'reflect' | 'repeat'
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Solid Next - https://www.solidjs.com/
interface LinearGradientSVGAttributes<T> extends GradientElementSVGAttributes<T> {
	x1?: number | string | false
	x2?: number | string | false
	y1?: number | string | false
	y2?: number | string | false
}

interface GradientElementSVGAttributes<T> extends SVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	gradientTransform?: string | false
	gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	href?: string | false
	spreadMethod?: 'pad' | 'reflect' | 'repeat' | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface StylableSVGAttributes {
	class?: string | ClassList | false
	style?: CSSProperties | string | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGLinearGradientElementAttributes<Element> extends SVGAttributes<Element> {}
