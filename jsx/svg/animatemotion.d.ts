// Solid Main - https://www.solidjs.com/
interface AnimateMotionSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes {
	keyPoints?: string
	origin?: 'default'
	path?: string
	rotate?: number | string | 'auto' | 'auto-reverse'
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
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
	keyPoints?: string
	origin?: 'default'
	path?: string
	rotate?: number | string | 'auto' | 'auto-reverse'
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
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
	keyPoints?: string | false
	origin?: 'default' | false
	path?: string | false
	rotate?: number | string | 'auto' | 'auto-reverse' | false
}

interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}
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

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
}

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGAnimateMotionElementAttributes {}
