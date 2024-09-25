// Solid - https://www.solidjs.com/
interface AnimateTransformSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationAttributeTargetSVGAttributes, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	type?: 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY'
}
