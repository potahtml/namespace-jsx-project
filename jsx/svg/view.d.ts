// Solid Main - https://www.solidjs.com/
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

// Solid Minor - https://www.solidjs.com/
interface ViewSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes {
	viewTarget?: string
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface FitToViewBoxSVGAttributes {
	viewBox?: string
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice'
}

interface ZoomAndPanSVGAttributes {
	/**
	 * @deprecated
	 * @non-standard
	 */
	zoomAndPan?: 'disable' | 'magnify'
}

// Solid Next - https://www.solidjs.com/
interface ViewSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes {
	viewTarget?: string | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | false
	lang?: string | false
	tabindex?: number | string | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface FitToViewBoxSVGAttributes {
	viewBox?: string | false
	preserveAspectRatio?: 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' | 'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' | 'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice' | false
}

interface ZoomAndPanSVGAttributes {
	/**
	 * @deprecated
	 * @non-standard
	 */
	zoomAndPan?: 'disable' | 'magnify' | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGViewElementAttributes {}
