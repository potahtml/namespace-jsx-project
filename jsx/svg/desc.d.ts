// Solid Main - https://www.solidjs.com/
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

// Solid Minor - https://www.solidjs.com/
interface DescSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

interface StylableSVGAttributes {
	class?: string
	style?: CSSProperties | string
}

// Solid Next - https://www.solidjs.com/
interface DescSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | false
	lang?: string | false
	tabindex?: number | string | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

interface StylableSVGAttributes {
	class?: string | ClassList | false
	style?: CSSProperties | string | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGDescElementAttributes {}
