// Solid Main - https://www.solidjs.com/
interface ForeignObjectSVGAttributes<T> extends NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'display' | 'visibility'> {
	height?: number | string
	width?: number | string
	x?: number | string
	y?: number | string
}

interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	viewBox?: string
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string
	requiredFeatures?: string
	systemLanguage?: string
}

interface ExternalResourceSVGAttributes {
	externalResourcesRequired?: 'true' | 'false'
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

interface TransformableSVGAttributes {
	transform?: string
}

// Pick<PresentationSVGAttributes, 'display' | 'visibility'>
interface PresentationSVGAttributes {
	display?: string
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit'
}
// Pick<PresentationSVGAttributes, 'overflow' | 'clip'>
interface PresentationSVGAttributes {
	clip?: string
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit'
}

// Solid Next - https://www.solidjs.com/
interface ForeignObjectSVGAttributes<T> extends NewViewportSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'display' | 'visibility'> {
	height?: number | string | false
	width?: number | string | false
	x?: number | string | false
	y?: number | string | false
}

interface NewViewportSVGAttributes<T> extends SVGAttributes<T>, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
	viewBox?: string | false
}

interface ConditionalProcessingSVGAttributes {
	requiredExtensions?: string | false
	requiredFeatures?: string | false
	systemLanguage?: string | false
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

interface TransformableSVGAttributes {
	transform?: string | false
}

// Pick<PresentationSVGAttributes, 'display' | 'visibility'>
interface PresentationSVGAttributes {
	display?: string | false
	visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit' | false
}
// Pick<PresentationSVGAttributes, 'overflow' | 'clip'>
interface PresentationSVGAttributes {
	clip?: string | false
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGForeignObjectElementAttributes<Element> extends SVGAttributes<Element> {}
