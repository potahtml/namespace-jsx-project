// Solid - https://www.solidjs.com/
interface SymbolSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes {
	width?: number | string
	height?: number | string
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice'
	refX?: number | string
	refY?: number | string
	viewBox?: string
	x?: number | string
	y?: number | string
}

// Pota - https://github.com/potahtml/pota
interface SVGSymbolElementAttributes {}
