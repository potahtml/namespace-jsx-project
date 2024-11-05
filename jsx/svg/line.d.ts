// Solid - https://www.solidjs.com/
interface LineSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
	x1?: number | string
	y1?: number | string
	x2?: number | string
	y2?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGLineElementAttributes {}
