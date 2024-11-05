// Solid - https://www.solidjs.com/
interface TextSVGAttributes<T> extends TextContentElementSVGAttributes<T>, GraphicsElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'writing-mode' | 'text-rendering'> {
	x?: number | string
	y?: number | string
	dx?: number | string
	dy?: number | string
	rotate?: number | string
	textLength?: number | string
	lengthAdjust?: 'spacing' | 'spacingAndGlyphs'
}

// Pota - https://github.com/potahtml/pota
interface SVGTextElementAttributes {}
