// Solid Main - https://www.solidjs.com/
interface FeCompositeSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
	k1?: number | string
	k2?: number | string
	k3?: number | string
	k4?: number | string
	operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic'
}

interface FilterPrimitiveElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	height?: number | string
	result?: string
	width?: number | string
	x?: number | string
	y?: number | string
}

interface DoubleInputFilterSVGAttributes {
	in?: string
	in2?: string
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Pick<PresentationSVGAttributes, 'color-interpolation-filters'>
interface PresentationSVGAttributes {
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
}

// Solid Next - https://www.solidjs.com/
interface FeCompositeSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
	k1?: number | string | false
	k2?: number | string | false
	k3?: number | string | false
	k4?: number | string | false
	operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic' | false
}

interface FilterPrimitiveElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	height?: number | string | false
	result?: string | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
}

interface DoubleInputFilterSVGAttributes {
	in?: string | false
	in2?: string | false
}

interface StylableSVGAttributes {
	class?: string | number | boolean | null | Record<string, boolean> | ClassValue[] | false
	style?: CSSProperties | string | false
}

// Pick<PresentationSVGAttributes, 'color-interpolation-filters'>
interface PresentationSVGAttributes {
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}

interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFECompositeElementAttributes<Element> extends SVGAttributes<Element> {}
