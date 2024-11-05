// Solid - https://www.solidjs.com/
interface MaskSVGAttributes<T> extends Omit<ContainerElementSVGAttributes<T>, 'opacity' | 'filter'>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes {
	maskUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	maskContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGMaskElementAttributes {}
