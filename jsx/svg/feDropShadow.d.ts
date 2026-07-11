// Solid Main - https://www.solidjs.com/
interface FeDropShadowSVGAttributes<T> extends CoreSVGAttributes<T>, FilterPrimitiveElementSVGAttributes<T>, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'flood-color' | 'flood-opacity'> {
	dx?: number | string
	dy?: number | string
	stdDeviation?: number | string
}

interface FilterPrimitiveElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	height?: number | string
	result?: string
	width?: number | string
	x?: number | string
	y?: number | string
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Pick<PresentationSVGAttributes, 'color' | 'flood-color' | 'flood-opacity'>
interface PresentationSVGAttributes {
	'flood-color'?: string
	'flood-opacity'?: number | string | 'inherit'
	color?: string
}
// Pick<PresentationSVGAttributes, 'color-interpolation-filters'>
interface PresentationSVGAttributes {
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
}

// Solid Next - https://www.solidjs.com/
interface FeDropShadowSVGAttributes<T> extends SVGAttributes<T>, FilterPrimitiveElementSVGAttributes<T>, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'flood-color' | 'flood-opacity'> {
	dx?: number | string | false
	dy?: number | string | false
	stdDeviation?: number | string | false
}

interface FilterPrimitiveElementSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
	height?: number | string | false
	result?: string | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
}

interface StylableSVGAttributes {
	class?: string | number | boolean | null | Record<string, boolean> | ClassValue[] | false
	style?: CSSProperties | string | false
}

// Pick<PresentationSVGAttributes, 'color' | 'flood-color' | 'flood-opacity'>
interface PresentationSVGAttributes {
	'flood-color'?: string | false
	'flood-opacity'?: number | string | 'inherit' | false
	color?: string | false
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
interface SVGFEDropShadowElementAttributes<Element> extends SVGAttributes<Element> {}
