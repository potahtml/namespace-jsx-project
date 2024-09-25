// Solid - https://www.solidjs.com/
interface FeMorphologySVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, SingleInputFilterSVGAttributes, StylableSVGAttributes {
	operator?: 'erode' | 'dilate'
	radius?: number | string
}
