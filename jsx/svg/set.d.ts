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
	onBegin?: EventHandlerUnion<T, TimeEvent>
	onEnd?: EventHandlerUnion<T, TimeEvent>
	onRepeat?: EventHandlerUnion<T, TimeEvent>
}

interface StylableSVGAttributes {
	/**
	 * Class names to apply. Accepts a string, an object whose keys are class
	 * names and values are booleans (`{ active: isActive() }` — truthy keys
	 * are added), or an array merging strings/objects/nested arrays
	 * (`["card", props.class, { active: isActive() }]`).
	 *
	 * For conditional classes, prefer the array+object form. Don't build
	 * class strings manually with concatenation, template literals, or
	 * `.filter(Boolean).join(" ")` — that's the React/`classnames` reflex
	 * and the array+object form replaces it. The array+object form composes
	 * with reactive values directly; manually-built strings re-run the whole
	 * concatenation on every change instead of toggling the affected classes.
	 */
	class?: ClassValue | false
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

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGSetElementAttributes<Element> extends SVGAttributes<Element> {}
