// Solid - https://www.solidjs.com/
interface FeDisplacementMapSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
	scale?: number | string
	xChannelSelector?: 'R' | 'G' | 'B' | 'A'
	yChannelSelector?: 'R' | 'G' | 'B' | 'A'
}

// Pota - https://github.com/potahtml/pota
interface SVGFEDisplacementMapElementAttributes {}
