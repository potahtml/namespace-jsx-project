// Solid - https://www.solidjs.com/
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes {
	version?: string
	baseProfile?: string
	x?: number | string
	y?: number | string
	width?: number | string
	height?: number | string
	contentScriptType?: string
	contentStyleType?: string
	xmlns?: string
	'xmlns:xlink'?: string
}

// Pota - https://github.com/potahtml/pota
interface SVGSVGElementAttributes {}
interface SVGSVGElementEvents<Element> extends SVGElementEvents<Element>, WindowEventHandlersEvents<Element> {}
