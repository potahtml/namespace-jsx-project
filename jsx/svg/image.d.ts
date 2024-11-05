// Solid - https://www.solidjs.com/
interface ImageSVGAttributes<T> extends NewViewportSVGAttributes<T>, GraphicsElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'color-profile' | 'image-rendering'> {
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	preserveAspectRatio?: SVGPreserveAspectRatio | 'defer none' | 'defer xMinYMin' | 'defer xMidYMin' | 'defer xMaxYMin' | 'defer xMinYMid' | 'defer xMidYMid' | 'defer xMaxYMid' | 'defer xMinYMax' | 'defer xMidYMax' | 'defer xMaxYMax' | 'defer xMinYMin meet' | 'defer xMidYMin meet' | 'defer xMaxYMin meet' | 'defer xMinYMid meet' | 'defer xMidYMid meet' | 'defer xMaxYMid meet' | 'defer xMinYMax meet' | 'defer xMidYMax meet' | 'defer xMaxYMax meet' | 'defer xMinYMin slice' | 'defer xMidYMin slice' | 'defer xMaxYMin slice' | 'defer xMinYMid slice' | 'defer xMidYMid slice' | 'defer xMaxYMid slice' | 'defer xMinYMax slice' | 'defer xMidYMax slice' | 'defer xMaxYMax slice'
	href?: string
}

// Pota - https://github.com/potahtml/pota
interface SVGImageElementAttributes {}
