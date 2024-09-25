// Solid - https://www.solidjs.com/
interface UseSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, ConditionalProcessingSVGAttributes, GraphicsElementSVGAttributes<T>, PresentationSVGAttributes, ExternalResourceSVGAttributes, TransformableSVGAttributes {
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	href?: string
}
