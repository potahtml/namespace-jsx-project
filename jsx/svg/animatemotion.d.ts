// Solid Main - https://www.solidjs.com/
interface AnimateMotionSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	path?: string
	keyPoints?: string
	rotate?: number | string | 'auto' | 'auto-reverse'
	origin?: 'default'
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
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

// Solid Minor - https://www.solidjs.com/
interface AnimateMotionSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	path?: string
	keyPoints?: string
	rotate?: number | string | 'auto' | 'auto-reverse'
	origin?: 'default'
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
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
interface AnimateMotionSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	path?: string | false
	keyPoints?: string | false
	rotate?: number | string | 'auto' | 'auto-reverse' | false
	origin?: 'default' | false
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
interface AnimationTimingSVGAttributes {
	begin?: string | false
	dur?: string | false
	end?: string | false
	min?: string | false
	max?: string | false
	restart?: 'always' | 'whenNotActive' | 'never' | false
	repeatCount?: number | 'indefinite' | false
	repeatDur?: string | false
	fill?: 'freeze' | 'remove' | false
}

interface AnimationValueSVGAttributes {
	calcMode?: 'discrete' | 'linear' | 'paced' | 'spline' | false
	values?: string | false
	keyTimes?: string | false
	keySplines?: string | false
	from?: number | string | false
	to?: number | string | false
	by?: number | string | false
}

interface AnimationAdditionSVGAttributes {
	attributeName?: string | false
	additive?: 'replace' | 'sum' | false
	accumulate?: 'none' | 'sum' | false
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
interface SVGAnimateMotionElementAttributes {}
