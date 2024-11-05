// Solid - https://www.solidjs.com/
interface FeSpecularLightingSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, SingleInputFilterSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'lighting-color'> {
	surfaceScale?: string
	specularConstant?: string
	specularExponent?: string
	kernelUnitLength?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGFESpecularLightingElementAttributes {}
