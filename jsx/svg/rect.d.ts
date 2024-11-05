// Solid - https://www.solidjs.com/
interface RectSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes {
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	rx?: number | string
	ry?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGRectElementAttributes {}
