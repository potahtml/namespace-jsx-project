// Solid - https://www.solidjs.com/
interface TSpanSVGAttributes<T> extends TextContentElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'> {
	x?: number | string
	y?: number | string
	dx?: number | string
	dy?: number | string
	rotate?: number | string
	textLength?: number | string
	lengthAdjust?: 'spacing' | 'spacingAndGlyphs'
}
