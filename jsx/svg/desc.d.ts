// Solid - https://www.solidjs.com/
interface DescSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabIndex?: number | string
	tabindex?: number | string
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGDescElementAttributes {}
