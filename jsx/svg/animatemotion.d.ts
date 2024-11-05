// Solid - https://www.solidjs.com/
interface AnimateMotionSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	path?: string
	keyPoints?: string
	rotate?: number | string | 'auto' | 'auto-reverse'
	origin?: 'default'
}

// Pota - https://github.com/potahtml/pota
interface SVGAnimateMotionElementAttributes {}
