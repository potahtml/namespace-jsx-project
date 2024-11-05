// Solid - https://www.solidjs.com/
interface CircleSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes {
	cx?: number | string
	cy?: number | string
	r?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGCircleElementAttributes {}
