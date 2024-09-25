// Solid - https://www.solidjs.com/
interface AnimateSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationAttributeTargetSVGAttributes, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes, Pick<PresentationSVGAttributes, 'color-interpolation' | 'color-rendering'> {}
