// Solid - https://www.solidjs.com/
interface PatternSVGAttributes<T> extends ContainerElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	patternUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	patternContentUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	patternTransform?: string
	href?: string
}
