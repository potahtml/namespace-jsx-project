// Solid - https://www.solidjs.com/
interface FeColorMatrixSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, SingleInputFilterSVGAttributes, StylableSVGAttributes {
	type?: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha'
	values?: string
}

// Pota - https://github.com/potahtml/pota
interface SVGFEColorMatrixElementAttributes {}
