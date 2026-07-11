// Solid Main - https://www.solidjs.com/
interface FeOffsetSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, SingleInputFilterSVGAttributes, StylableSVGAttributes {
	dx?: number | string
	dy?: number | string
}

interface FilterPrimitiveElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	height?: number | string
	result?: string
	width?: number | string
	x?: number | string
	y?: number | string
}

interface SingleInputFilterSVGAttributes {
	in?: string
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
interface FeOffsetSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, SingleInputFilterSVGAttributes, StylableSVGAttributes {
	dx?: number | string | false
	dy?: number | string | false
}

interface FilterPrimitiveElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	height?: number | string | false
	result?: string | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
}

interface SingleInputFilterSVGAttributes {
	in?: string | false
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
interface SVGFEOffsetElementAttributes<Element> extends SVGAttributes<Element> {}
