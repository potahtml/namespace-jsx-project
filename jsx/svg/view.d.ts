// Solid - https://www.solidjs.com/
interface ViewSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes {
	viewTarget?: string
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface FitToViewBoxSVGAttributes {
	viewBox?: string
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice'
}

interface ZoomAndPanSVGAttributes {
	zoomAndPan?: 'disable' | 'magnify'
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGViewElementAttributes {}
