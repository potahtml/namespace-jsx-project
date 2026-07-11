// Solid Main - https://www.solidjs.com/
interface FilterSVGAttributes<T> extends CoreSVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	filterRes?: number | string
	filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	height?: number | string
	primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
	width?: number | string
	x?: number | string
	y?: number | string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Solid Next - https://www.solidjs.com/
interface FilterSVGAttributes<T> extends SVGAttributes<T>, ExternalResourceSVGAttributes, StylableSVGAttributes {
	filterRes?: number | string | false
	filterUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	height?: number | string | false
	primitiveUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
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
interface SVGFilterElementAttributes<Element> extends SVGAttributes<Element> {}
