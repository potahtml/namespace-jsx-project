// Solid - https://www.solidjs.com/
interface PolygonSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
	points?: string
}

// Pota - https://github.com/potahtml/pota
interface SVGPolygonElementAttributes {}
