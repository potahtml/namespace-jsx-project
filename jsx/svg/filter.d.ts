// Solid Main - https://www.solidjs.com/
interface FilterSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	filterRes?: number | string
	filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	height?: number | string
	primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	width?: number | string
	x?: number | string
	y?: number | string
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
	filterRes?: number | string | false
	filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	height?: number | string | false
	primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
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
interface SVGFilterElementAttributes {}
