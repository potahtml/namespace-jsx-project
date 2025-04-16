// Solid Main - https://www.solidjs.com/
interface SetSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, AnimationTimingSVGAttributes {}
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

interface AnimationTimingSVGAttributes {
	begin?: string
	dur?: string
	end?: string
	min?: string
	max?: string
	restart?: 'always' | 'whenNotActive' | 'never'
	repeatCount?: number | 'indefinite'
	repeatDur?: string
	fill?: 'freeze' | 'remove'
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
	min?: string
	max?: string
	restart?: 'always' | 'whenNotActive' | 'never'
	repeatCount?: number | 'indefinite'
	repeatDur?: string
	fill?: 'freeze' | 'remove'
}

// Solid Next - https://www.solidjs.com/
interface SetSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, AnimationTimingSVGAttributes {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | undefined | false
	lang?: string | undefined | false
	tabindex?: number | string | undefined | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | undefined | false
}

interface StylableSVGAttributes {
	class?: string | ClassList | undefined | false
	style?: CSSProperties | string | undefined | false
}

interface AnimationTimingSVGAttributes {
	begin?: string | undefined | false
	dur?: string | undefined | false
	end?: string | undefined | false
	min?: string | undefined | false
	max?: string | undefined | false
	restart?: 'always' | 'whenNotActive' | 'never' | undefined | false
	repeatCount?: number | 'indefinite' | undefined | false
	repeatDur?: string | undefined | false
	fill?: 'freeze' | 'remove' | undefined | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGSetElementAttributes {}
