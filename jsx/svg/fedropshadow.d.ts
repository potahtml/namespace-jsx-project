// Solid - https://www.solidjs.com/
interface FeDropShadowSVGAttributes<T> extends CoreSVGAttributes<T>, FilterPrimitiveElementSVGAttributes<T>, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'flood-color' | 'flood-opacity'> {
	dx?: number | string
	dy?: number | string
	stdDeviation?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGFEDropShadowElementAttributes {}
