// Solid - https://www.solidjs.com/
interface PathSVGAttributes<T> extends GraphicsElementSVGAttributes<T>, ShapeElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
	d?: string
	pathLength?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGPathElementAttributes {}
