// Solid - https://www.solidjs.com/
interface ForeignObjectSVGAttributes<T> extends NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'display' | 'visibility'> {
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
}
