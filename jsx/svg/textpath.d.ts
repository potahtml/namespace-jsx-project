// Solid - https://www.solidjs.com/
interface TextPathSVGAttributes<T> extends TextContentElementSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'> {
	startOffset?: number | string
	method?: 'align' | 'stretch'
	spacing?: 'auto' | 'exact'
	href?: string
}
