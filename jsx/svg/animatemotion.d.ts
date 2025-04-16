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
	path?: string | undefined | false
	keyPoints?: string | undefined | false
	rotate?: number | string | 'auto' | 'auto-reverse' | undefined | false
	origin?: 'default' | undefined | false
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
interface AnimationTimingSVGAttributes {
	begin?: string | undefined | false
	dur?: string | undefined | false
	end?: string | undefined | false
	min?: string | undefined | false
	max?: string | undefined | false
	restart?: 'always' | 'whenNotActive' | 'never' | undefined | false
	repeatCount?: number | 'indefinite' | undefined | false
	repeatDur?: string | undefined | false
	fill?: 'freeze' | 'remove' | undefined | false
}

interface AnimationValueSVGAttributes {
	calcMode?: 'discrete' | 'linear' | 'paced' | 'spline' | undefined | false
	values?: string | undefined | false
	keyTimes?: string | undefined | false
	keySplines?: string | undefined | false
	from?: number | string | undefined | false
	to?: number | string | undefined | false
	by?: number | string | undefined | false
}

interface AnimationAdditionSVGAttributes {
	attributeName?: string | undefined | false
	additive?: 'replace' | 'sum' | undefined | false
	accumulate?: 'none' | 'sum' | undefined | false
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | undefined | false
	lang?: string | undefined | false
	tabindex?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | undefined | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | undefined | false
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | undefined | false
	requiredFeatures?: string | undefined | false
	systemLanguage?: string | undefined | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGAnimateMotionElementAttributes {}
