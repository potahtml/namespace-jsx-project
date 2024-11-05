// Solid - https://www.solidjs.com/
interface ClipPathSVGAttributes<T> extends CoreSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path'> {
	clipPathUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
}

// Pota - https://github.com/potahtml/pota
interface SVGClipPathElementAttributes {}
