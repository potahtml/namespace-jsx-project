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
	filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | undefined | false
	primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | undefined | false
	x?: number | string | undefined | false
	y?: number | string | undefined | false
	width?: number | string | undefined | false
	height?: number | string | undefined | false
	filterRes?: number | string | undefined | false
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
interface SVGFilterElementAttributes {}
