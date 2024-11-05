// Solid - https://www.solidjs.com/
interface MarkerSVGAttributes<T> extends ContainerElementSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	markerUnits?: 'strokeWidth' | 'userSpaceOnUse'
	refX?: number | string
	refY?: number | string
	markerWidth?: number | string
	markerHeight?: number | string
	orient?: string
}

// Pota - https://github.com/potahtml/pota
interface SVGMarkerElementAttributes {}
