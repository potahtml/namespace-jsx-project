// Solid - https://www.solidjs.com/
interface EllipseSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes {
	cx?: number | string
	cy?: number | string
	rx?: number | string
	ry?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGEllipseElementAttributes {}
