// Solid Main - https://www.solidjs.com/
interface SetSVGAttributes<T> extends AnimationElementSVGAttributes<T>, StylableSVGAttributes, AnimationTimingSVGAttributes {}
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

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
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

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

// Solid Next - https://www.solidjs.com/
interface SetSVGAttributes<T> extends AnimationElementSVGAttributes<T>, StylableSVGAttributes, AnimationTimingSVGAttributes {}
interface AnimationElementSVGAttributes<T> extends SVGAttributes<T>, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {
	// TODO TimeEvent is currently undefined on TS
	onBegin?: EventHandlerUnion<T, Event>
	'on:begin'?: EventHandlerWithOptionsUnion<T, Event>

	// TODO TimeEvent is currently undefined on TS
	onEnd?: EventHandlerUnion<T, Event>
	'on:end'?: EventHandlerWithOptionsUnion<T, Event>

	// TODO TimeEvent is currently undefined on TS
	onRepeat?: EventHandlerUnion<T, Event>
	'on:repeat'?: EventHandlerWithOptionsUnion<T, Event>
}

interface StylableSVGAttributes {
	class?: string | ClassList | false
	style?: CSSProperties | string | false
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

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
}

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGSetElementAttributes<Element> extends SVGAttributes<Element> {}
