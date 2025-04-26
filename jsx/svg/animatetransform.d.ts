// Solid Main - https://www.solidjs.com/
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
	fill?: 'freeze' | 'remove'
	max?: string
	min?: string
	repeatCount?: number | 'indefinite'
	repeatDur?: string
	restart?: 'always' | 'whenNotActive' | 'never'
}

interface AnimationValueSVGAttributes {
	by?: number | string
	calcMode?: 'discrete' | 'linear' | 'paced' | 'spline'
	from?: number | string
	keySplines?: string
	keyTimes?: string
	to?: number | string
	values?: string
}

interface AnimationAdditionSVGAttributes {
	accumulate?: 'none' | 'sum'
	additive?: 'replace' | 'sum'
	attributeName?: string
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	tabIndex?: number | string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

// Solid Minor - https://www.solidjs.com/
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
	fill?: 'freeze' | 'remove'
	max?: string
	min?: string
	repeatCount?: number | 'indefinite'
	repeatDur?: string
	restart?: 'always' | 'whenNotActive' | 'never'
}

interface AnimationValueSVGAttributes {
	by?: number | string
	calcMode?: 'discrete' | 'linear' | 'paced' | 'spline'
	from?: number | string
	keySplines?: string
	keyTimes?: string
	to?: number | string
	values?: string
}

interface AnimationAdditionSVGAttributes {
	accumulate?: 'none' | 'sum'
	additive?: 'replace' | 'sum'
	attributeName?: string
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

// Solid Next - https://www.solidjs.com/
interface AnimateTransformSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationAttributeTargetSVGAttributes, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	type?: 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY' | false
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
interface AnimationAttributeTargetSVGAttributes {
	attributeName?: string | false
	attributeType?: 'CSS' | 'XML' | 'auto' | false
}

interface AnimationTimingSVGAttributes {
	begin?: string | false
	dur?: string | false
	end?: string | false
	fill?: 'freeze' | 'remove' | false
	max?: string | false
	min?: string | false
	repeatCount?: number | 'indefinite' | false
	repeatDur?: string | false
	restart?: 'always' | 'whenNotActive' | 'never' | false
}

interface AnimationValueSVGAttributes {
	by?: number | string | false
	calcMode?: 'discrete' | 'linear' | 'paced' | 'spline' | false
	from?: number | string | false
	keySplines?: string | false
	keyTimes?: string | false
	to?: number | string | false
	values?: string | false
}

interface AnimationAdditionSVGAttributes {
	accumulate?: 'none' | 'sum' | false
	additive?: 'replace' | 'sum' | false
	attributeName?: string | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | false
	lang?: string | false
	tabindex?: number | string | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGAnimateTransformElementAttributes {}
