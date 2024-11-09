// Solid - https://www.solidjs.com/
interface AnimateTransformSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationAttributeTargetSVGAttributes, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	type?: 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY'
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
interface AnimationAttributeTargetSVGAttributes {
	attributeName?: string
	attributeType?: 'CSS' | 'XML' | 'auto'
}

interface AnimationTimingSVGAttributes {
	begin?: string
	dur?: string
	end?: string
	min?: string
	max?: string
	restart?: 'always' | 'whenNotActive' | 'never'
	repeatCount?: number | 'indefinite'
	repeatDur?: string
	fill?: 'freeze' | 'remove'
}

interface AnimationValueSVGAttributes {
	calcMode?: 'discrete' | 'linear' | 'paced' | 'spline'
	values?: string
	keyTimes?: string
	keySplines?: string
	from?: number | string
	to?: number | string
	by?: number | string
}

interface AnimationAdditionSVGAttributes {
	attributeName?: string
	additive?: 'replace' | 'sum'
	accumulate?: 'none' | 'sum'
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

// Pota - https://github.com/potahtml/pota
interface SVGAnimateTransformElementAttributes {}
