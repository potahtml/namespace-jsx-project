// Solid - https://www.solidjs.com/
interface FeConvolveMatrixSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, SingleInputFilterSVGAttributes, StylableSVGAttributes {
	order?: number | string
	kernelMatrix?: string
	divisor?: number | string
	bias?: number | string
	targetX?: number | string
	targetY?: number | string
	edgeMode?: 'duplicate' | 'wrap' | 'none'
	kernelUnitLength?: number | string
	preserveAlpha?: 'true' | 'false'
}
