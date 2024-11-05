// Solid - https://www.solidjs.com/
interface FeDiffuseLightingSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, SingleInputFilterSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'lighting-color'> {
	surfaceScale?: number | string
	diffuseConstant?: number | string
	kernelUnitLength?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGFEDiffuseLightingElementAttributes {}
