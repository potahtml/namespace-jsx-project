// Solid Main - https://www.solidjs.com/
interface ClipPathSVGAttributes<T> extends CoreSVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path'> {
	clipPathUnits?: 'userSpaceOnUse' | 'objectBoundingBox'
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

// Pick<PresentationSVGAttributes, 'clip-path'>
interface PresentationSVGAttributes {
	'clip-path'?: string
}

// Solid Next - https://www.solidjs.com/
interface ClipPathSVGAttributes<T> extends SVGAttributes<T>, ConditionalProcessingSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes, TransformableSVGAttributes, Pick<PresentationSVGAttributes, 'clip-path'> {
	clipPathUnits?: 'userSpaceOnUse' | 'objectBoundingBox' | false
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
	class?: string | number | boolean | null | Record<string, boolean> | ClassValue[] | false
	style?: CSSProperties | string | false
}

interface TransformableSVGAttributes {
	transform?: string | false
}

// Pick<PresentationSVGAttributes, 'clip-path'>
interface PresentationSVGAttributes {
	'clip-path'?: string | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}

interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGClipPathElementAttributes<Element> extends SVGAttributes<Element> {}
