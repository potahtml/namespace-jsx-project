// Solid Main - https://www.solidjs.com/
interface AnimateSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationAttributeTargetSVGAttributes, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes, Pick<PresentationSVGAttributes, 'color-interpolation' | 'color-rendering'> {}
interface AnimationElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {
	// TODO TimeEvent is currently undefined on TS
	onBegin?: EventHandlerUnion<T, Event>
	onbegin?: EventHandlerUnion<T, Event>
	'on:begin'?: EventHandlerWithOptionsUnion<T, Event>

	// TODO TimeEvent is currently undefined on TS
	onEnd?: EventHandlerUnion<T, Event>
	onend?: EventHandlerUnion<T, Event>
	'on:end'?: EventHandlerWithOptionsUnion<T, Event>

	// TODO TimeEvent is currently undefined on TS
	onRepeat?: EventHandlerUnion<T, Event>
	onrepeat?: EventHandlerUnion<T, Event>
	'on:repeat'?: EventHandlerWithOptionsUnion<T, Event>
}

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

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

// Pick<PresentationSVGAttributes, 'color-interpolation' | 'color-rendering'>
interface PresentationSVGAttributes {
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit'
}

// Solid Next - https://www.solidjs.com/
interface AnimateSVGAttributes<T> extends AnimationElementSVGAttributes<T>, AnimationAttributeTargetSVGAttributes, AnimationTimingSVGAttributes, AnimationValueSVGAttributes, AnimationAdditionSVGAttributes, Pick<PresentationSVGAttributes, 'color-interpolation' | 'color-rendering'> {}
interface AnimationElementSVGAttributes<T> extends SVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {
	onBegin?: EventHandlerUnion<T, TimeEvent>
	onEnd?: EventHandlerUnion<T, TimeEvent>
	onRepeat?: EventHandlerUnion<T, TimeEvent>
}

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

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
}

// Pick<PresentationSVGAttributes, 'color-interpolation' | 'color-rendering'>
interface PresentationSVGAttributes {
	'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit' | false
	'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit' | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGAnimateElementAttributes<Element> extends SVGAttributes<Element> {}
