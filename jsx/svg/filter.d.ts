// Solid Main - https://www.solidjs.com/
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

// Solid Minor - https://www.solidjs.com/
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
interface FilterSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	x?: number | string | false
	y?: number | string | false
	width?: number | string | false
	height?: number | string | false
	filterRes?: number | string | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | false
	lang?: string | false
	tabindex?: number | string | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface StylableSVGAttributes {
	class?: string | ClassList | false
	style?: CSSProperties | string | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFilterElementAttributes {}
