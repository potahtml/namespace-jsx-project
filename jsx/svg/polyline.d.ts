// Solid - https://www.solidjs.com/
interface PolylineSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
	points?: string
}
