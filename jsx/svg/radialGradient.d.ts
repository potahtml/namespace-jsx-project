// Solid Main - https://www.solidjs.com/
interface RadialGradientSVGAttributes<T> extends GradientElementSVGAttributes<T> {
	cx?: number | string
	cy?: number | string
	fx?: number | string
	fy?: number | string
	r?: number | string
}

interface GradientElementSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	gradientTransform?: string
	gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	href?: string
	spreadMethod?: 'pad' | 'reflect' | 'repeat'
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Solid Next - https://www.solidjs.com/
interface RadialGradientSVGAttributes<T> extends GradientElementSVGAttributes<T> {
	cx?: number | string | false
	cy?: number | string | false
	fx?: number | string | false
	fy?: number | string | false
	r?: number | string | false
}

interface GradientElementSVGAttributes<T> extends SVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	gradientTransform?: string | false
	gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	href?: string | false
	spreadMethod?: 'pad' | 'reflect' | 'repeat' | false
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'false' | 'true' | false
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

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGRadialGradientElementAttributes<Element> extends SVGAttributes<Element> {}
