// Solid Main - https://www.solidjs.com/
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

// Solid Minor - https://www.solidjs.com/
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
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
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
	x1?: number | string | undefined | false
	x2?: number | string | undefined | false
	y1?: number | string | undefined | false
	y2?: number | string | undefined | false
}

interface GradientElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | undefined | false
	gradientTransform?: string | undefined | false
	spreadMethod?: 'pad' | 'reflect' | 'repeat' | undefined | false
	href?: string | undefined | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | undefined | false
	lang?: string | undefined | false
	tabindex?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | undefined | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | undefined | false
}

interface StylableSVGAttributes {
	class?: string | ClassList | undefined | false
	style?: CSSProperties | string | undefined | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGLinearGradientElementAttributes {}
