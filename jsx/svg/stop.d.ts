// Solid Main - https://www.solidjs.com/
interface StopSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'stop-color' | 'stop-opacity'> {
	offset?: number | string
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Pick<PresentationSVGAttributes, 'color' | 'stop-color' | 'stop-opacity'>
interface PresentationSVGAttributes {
	'stop-color'?: string
	'stop-opacity'?: number | string | 'inherit'
	color?: string
}

// Solid Next - https://www.solidjs.com/
interface StopSVGAttributes<T> extends SVGAttributes<T>, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'stop-color' | 'stop-opacity'> {
	offset?: number | string | false
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

// Pick<PresentationSVGAttributes, 'color' | 'stop-color' | 'stop-opacity'>
interface PresentationSVGAttributes {
	'stop-color'?: string | false
	'stop-opacity'?: number | string | 'inherit' | false
	color?: string | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGStopElementAttributes<Element> extends SVGAttributes<Element> {}
