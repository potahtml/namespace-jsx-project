interface SVGAElementAttributes {}
interface SVGAnimateElementAttributes {}
interface SVGAnimateMotionElementAttributes {}
interface SVGAnimateTransformElementAttributes {}
interface SVGCircleElementAttributes {}
interface SVGClipPathElementAttributes {}
interface SVGDefsElementAttributes {}
interface SVGDescElementAttributes {}
interface SVGEllipseElementAttributes {}
interface SVGFEBlendElementAttributes {}
interface SVGFEColorMatrixElementAttributes {}
interface SVGFEComponentTransferElementAttributes {}
interface SVGFECompositeElementAttributes {}
interface SVGFEConvolveMatrixElementAttributes {}
interface SVGFEDiffuseLightingElementAttributes {}
interface SVGFEDisplacementMapElementAttributes {}
interface SVGFEDistantLightElementAttributes {}
interface SVGFEDropShadowElementAttributes {}
interface SVGFEFloodElementAttributes {}
interface SVGFEFuncAElementAttributes {}
interface SVGFEFuncBElementAttributes {}
interface SVGFEFuncGElementAttributes {}
interface SVGFEFuncRElementAttributes {}
interface SVGFEGaussianBlurElementAttributes {}
interface SVGFEImageElementAttributes {}
interface SVGFEMergeElementAttributes {}
interface SVGFEMergeNodeElementAttributes {}
interface SVGFEMorphologyElementAttributes {}
interface SVGFEOffsetElementAttributes {}
interface SVGFEPointLightElementAttributes {}
interface SVGFESpecularLightingElementAttributes {}
interface SVGFESpotLightElementAttributes {}
interface SVGFETileElementAttributes {}
interface SVGFETurbulenceElementAttributes {}
interface SVGFilterElementAttributes {}
interface SVGForeignObjectElementAttributes {}
interface SVGGElementAttributes {}
interface SVGImageElementAttributes {}
interface SVGLineElementAttributes {}
interface SVGLinearGradientElementAttributes {}
interface SVGMPathElementAttributes {}
interface SVGMarkerElementAttributes {}
interface SVGMaskElementAttributes {}
interface SVGMetadataElementAttributes {}
interface SVGPathElementAttributes {}
interface SVGPatternElementAttributes {}
interface SVGPolygonElementAttributes {}
interface SVGPolylineElementAttributes {}
interface SVGRadialGradientElementAttributes {}
interface SVGRectElementAttributes {}
interface SVGSVGElementAttributes {}
interface SVGScriptElementAttributes {}
interface SVGSetElementAttributes {}
interface SVGStopElementAttributes {}
interface SVGStyleElementAttributes {}
interface SVGSwitchElementAttributes {}
interface SVGSymbolElementAttributes {}
interface SVGTSpanElementAttributes {}
interface SVGTextElementAttributes {}
interface SVGTextPathElementAttributes {}
interface SVGTitleElementAttributes {}
interface SVGUseElementAttributes {}
interface SVGViewElementAttributes {}

interface SVGElements {
	a: SVGAttributes<SVGAElement, SVGAElementAttributes, SVGElementEvents<SVGAElement>>
	animate: SVGAttributes<SVGAnimateElement, SVGAnimateElementAttributes, SVGElementEvents<SVGAnimateElement>>
	animateMotion: SVGAttributes<SVGAnimateMotionElement, SVGAnimateMotionElementAttributes, SVGElementEvents<SVGAnimateMotionElement>>
	animateTransform: SVGAttributes<SVGAnimateTransformElement, SVGAnimateTransformElementAttributes, SVGElementEvents<SVGAnimateTransformElement>>
	circle: SVGAttributes<SVGCircleElement, SVGCircleElementAttributes, SVGElementEvents<SVGCircleElement>>
	clipPath: SVGAttributes<SVGClipPathElement, SVGClipPathElementAttributes, SVGElementEvents<SVGClipPathElement>>
	defs: SVGAttributes<SVGDefsElement, SVGDefsElementAttributes, SVGElementEvents<SVGDefsElement>>
	desc: SVGAttributes<SVGDescElement, SVGDescElementAttributes, SVGElementEvents<SVGDescElement>>
	ellipse: SVGAttributes<SVGEllipseElement, SVGEllipseElementAttributes, SVGElementEvents<SVGEllipseElement>>
	feBlend: SVGAttributes<SVGFEBlendElement, SVGFEBlendElementAttributes, SVGElementEvents<SVGFEBlendElement>>
	feColorMatrix: SVGAttributes<SVGFEColorMatrixElement, SVGFEColorMatrixElementAttributes, SVGElementEvents<SVGFEColorMatrixElement>>
	feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement, SVGFEComponentTransferElementAttributes, SVGElementEvents<SVGFEComponentTransferElement>>
	feComposite: SVGAttributes<SVGFECompositeElement, SVGFECompositeElementAttributes, SVGElementEvents<SVGFECompositeElement>>
	feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement, SVGFEConvolveMatrixElementAttributes, SVGElementEvents<SVGFEConvolveMatrixElement>>
	feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement, SVGFEDiffuseLightingElementAttributes, SVGElementEvents<SVGFEDiffuseLightingElement>>
	feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement, SVGFEDisplacementMapElementAttributes, SVGElementEvents<SVGFEDisplacementMapElement>>
	feDistantLight: SVGAttributes<SVGFEDistantLightElement, SVGFEDistantLightElementAttributes, SVGElementEvents<SVGFEDistantLightElement>>
	feDropShadow: SVGAttributes<SVGFEDropShadowElement, SVGFEDropShadowElementAttributes, SVGElementEvents<SVGFEDropShadowElement>>
	feFlood: SVGAttributes<SVGFEFloodElement, SVGFEFloodElementAttributes, SVGElementEvents<SVGFEFloodElement>>
	feFuncA: SVGAttributes<SVGFEFuncAElement, SVGFEFuncAElementAttributes, SVGElementEvents<SVGFEFuncAElement>>
	feFuncB: SVGAttributes<SVGFEFuncBElement, SVGFEFuncBElementAttributes, SVGElementEvents<SVGFEFuncBElement>>
	feFuncG: SVGAttributes<SVGFEFuncGElement, SVGFEFuncGElementAttributes, SVGElementEvents<SVGFEFuncGElement>>
	feFuncR: SVGAttributes<SVGFEFuncRElement, SVGFEFuncRElementAttributes, SVGElementEvents<SVGFEFuncRElement>>
	feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement, SVGFEGaussianBlurElementAttributes, SVGElementEvents<SVGFEGaussianBlurElement>>
	feImage: SVGAttributes<SVGFEImageElement, SVGFEImageElementAttributes, SVGElementEvents<SVGFEImageElement>>
	feMerge: SVGAttributes<SVGFEMergeElement, SVGFEMergeElementAttributes, SVGElementEvents<SVGFEMergeElement>>
	feMergeNode: SVGAttributes<SVGFEMergeNodeElement, SVGFEMergeNodeElementAttributes, SVGElementEvents<SVGFEMergeNodeElement>>
	feMorphology: SVGAttributes<SVGFEMorphologyElement, SVGFEMorphologyElementAttributes, SVGElementEvents<SVGFEMorphologyElement>>
	feOffset: SVGAttributes<SVGFEOffsetElement, SVGFEOffsetElementAttributes, SVGElementEvents<SVGFEOffsetElement>>
	fePointLight: SVGAttributes<SVGFEPointLightElement, SVGFEPointLightElementAttributes, SVGElementEvents<SVGFEPointLightElement>>
	feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement, SVGFESpecularLightingElementAttributes, SVGElementEvents<SVGFESpecularLightingElement>>
	feSpotLight: SVGAttributes<SVGFESpotLightElement, SVGFESpotLightElementAttributes, SVGElementEvents<SVGFESpotLightElement>>
	feTile: SVGAttributes<SVGFETileElement, SVGFETileElementAttributes, SVGElementEvents<SVGFETileElement>>
	feTurbulence: SVGAttributes<SVGFETurbulenceElement, SVGFETurbulenceElementAttributes, SVGElementEvents<SVGFETurbulenceElement>>
	filter: SVGAttributes<SVGFilterElement, SVGFilterElementAttributes, SVGElementEvents<SVGFilterElement>>
	foreignObject: SVGAttributes<SVGForeignObjectElement, SVGForeignObjectElementAttributes, SVGElementEvents<SVGForeignObjectElement>>
	g: SVGAttributes<SVGGElement, SVGGElementAttributes, SVGElementEvents<SVGGElement>>
	image: SVGAttributes<SVGImageElement, SVGImageElementAttributes, SVGElementEvents<SVGImageElement>>
	line: SVGAttributes<SVGLineElement, SVGLineElementAttributes, SVGElementEvents<SVGLineElement>>
	linearGradient: SVGAttributes<SVGLinearGradientElement, SVGLinearGradientElementAttributes, SVGElementEvents<SVGLinearGradientElement>>
	marker: SVGAttributes<SVGMarkerElement, SVGMarkerElementAttributes, SVGElementEvents<SVGMarkerElement>>
	mask: SVGAttributes<SVGMaskElement, SVGMaskElementAttributes, SVGElementEvents<SVGMaskElement>>
	metadata: SVGAttributes<SVGMetadataElement, SVGMetadataElementAttributes, SVGElementEvents<SVGMetadataElement>>
	mpath: SVGAttributes<SVGMPathElement, SVGMPathElementAttributes, SVGElementEvents<SVGMPathElement>>
	path: SVGAttributes<SVGPathElement, SVGPathElementAttributes, SVGElementEvents<SVGPathElement>>
	pattern: SVGAttributes<SVGPatternElement, SVGPatternElementAttributes, SVGElementEvents<SVGPatternElement>>
	polygon: SVGAttributes<SVGPolygonElement, SVGPolygonElementAttributes, SVGElementEvents<SVGPolygonElement>>
	polyline: SVGAttributes<SVGPolylineElement, SVGPolylineElementAttributes, SVGElementEvents<SVGPolylineElement>>
	radialGradient: SVGAttributes<SVGRadialGradientElement, SVGRadialGradientElementAttributes, SVGElementEvents<SVGRadialGradientElement>>
	rect: SVGAttributes<SVGRectElement, SVGRectElementAttributes, SVGElementEvents<SVGRectElement>>
	script: SVGAttributes<SVGScriptElement, SVGScriptElementAttributes, SVGElementEvents<SVGScriptElement>>
	set: SVGAttributes<SVGSetElement, SVGSetElementAttributes, SVGElementEvents<SVGSetElement>>
	stop: SVGAttributes<SVGStopElement, SVGStopElementAttributes, SVGElementEvents<SVGStopElement>>
	style: SVGAttributes<SVGStyleElement, SVGStyleElementAttributes, SVGElementEvents<SVGStyleElement>>
	svg: SVGAttributes<SVGSVGElement, SVGSVGElementAttributes, SVGSVGElementEvents<SVGSVGElement>>
	switch: SVGAttributes<SVGSwitchElement, SVGSwitchElementAttributes, SVGElementEvents<SVGSwitchElement>>
	symbol: SVGAttributes<SVGSymbolElement, SVGSymbolElementAttributes, SVGElementEvents<SVGSymbolElement>>
	text: SVGAttributes<SVGTextElement, SVGTextElementAttributes, SVGElementEvents<SVGTextElement>>
	textPath: SVGAttributes<SVGTextPathElement, SVGTextPathElementAttributes, SVGElementEvents<SVGTextPathElement>>
	title: SVGAttributes<SVGTitleElement, SVGTitleElementAttributes, SVGElementEvents<SVGTitleElement>>
	tspan: SVGAttributes<SVGTSpanElement, SVGTSpanElementAttributes, SVGElementEvents<SVGTSpanElement>>
	use: SVGAttributes<SVGUseElement, SVGUseElementAttributes, SVGElementEvents<SVGUseElement>>
	view: SVGAttributes<SVGViewElement, SVGViewElementAttributes, SVGElementEvents<SVGViewElement>>
}
