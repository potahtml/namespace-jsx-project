// Solid - https://www.solidjs.com/
interface FeBlendSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
	mode?: 'normal' | 'multiply' | 'screen' | 'darken' | 'lighten'
}
