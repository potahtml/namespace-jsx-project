// Solid - https://www.solidjs.com/
interface FeCompositeSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
	operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic'
	k1?: number | string
	k2?: number | string
	k3?: number | string
	k4?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGFECompositeElementAttributes {}
