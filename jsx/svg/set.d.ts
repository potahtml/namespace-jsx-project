// Solid Main - https://www.solidjs.com/
interface SetSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, AnimationTimingSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	tabIndex?: number | string
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

// Solid Minor - https://www.solidjs.com/
interface SetSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, AnimationTimingSVGAttributes {}
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

// Solid Next - https://www.solidjs.com/
interface SetSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, AnimationTimingSVGAttributes {}
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

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGSetElementAttributes {}
