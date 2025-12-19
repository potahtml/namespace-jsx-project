// Solid Main - https://www.solidjs.com/
interface MathMLMoElementAttributes<T> extends MathMLAttributes<T> {
	fence?: boolean
	form?: 'prefix' | 'infix' | 'postfix'
	largeop?: boolean
	lspace?: string
	maxsize?: string
	minsize?: string
	movablelimits?: boolean
	rspace?: string
	separator?: boolean
	stretchy?: boolean
	symmetric?: boolean

	/** @non-standard */
	accent?: boolean
}

// Solid Next - https://www.solidjs.com/
interface MathMLMoElementAttributes<T> extends MathMLAttributes<T> {
	fence?: true | false | '' | false
	form?: 'prefix' | 'infix' | 'postfix' | false
	largeop?: true | false | '' | false
	lspace?: string | false
	maxsize?: string | false
	minsize?: string | false
	movablelimits?: true | false | '' | false
	rspace?: string | false
	separator?: true | false | '' | false
	stretchy?: true | false | '' | false
	symmetric?: true | false | '' | false

	/** @non-standard */
	accent?: true | false | '' | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMoElementAttributes<Element> extends MathMLAttributes<Element> {
	fence?: boolean | ''
	form?: 'prefix' | 'infix' | 'postfix'
	largeop?: boolean | ''
	lspace?: string
	maxsize?: string
	minsize?: string
	movablelimits?: boolean | ''
	rspace?: string
	separator?: boolean | ''
	stretchy?: boolean | ''
	symmetric?: boolean | ''

	/** @non-standard */
	accent?: boolean | ''
}
