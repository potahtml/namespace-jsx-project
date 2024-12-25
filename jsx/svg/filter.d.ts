// Solid - https://www.solidjs.com/
interface FilterSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	filterRes?: number | string
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

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFilterElementAttributes {}
