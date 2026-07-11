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
	class?: string | number | boolean | null | Record<string, boolean> | ClassValue[] | false
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
