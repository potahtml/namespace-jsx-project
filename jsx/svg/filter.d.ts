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
