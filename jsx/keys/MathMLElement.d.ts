// Solid Main - https://www.solidjs.com/
interface MathMLAttributes<T> extends DOMAttributes<T> {
	dir?: 'ltr' | 'rtl' | 'auto'
	displaystyle?: boolean
	scriptlevel?: string
	xmlns?: string

	href?: string

	mathbackground?: string

	mathcolor?: string

	mathsize?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLAttributes<T> extends ElementAttributes<T> {
	dir?: 'ltr' | 'rtl' | 'auto' | false
	displaystyle?: true | false | '' | false
	scriptlevel?: string | false
	xmlns?: string | false

	href?: string | false

	mathbackground?: string | false

	mathcolor?: string | false

	mathsize?: string | false
}

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface MathMLAttributes<Element> extends ElementAttributes<Element> {
	dir?: 'ltr' | 'rtl' | 'auto'
	displaystyle?: boolean | ''
	scriptlevel?: string

	href?: string

	mathbackground?: string

	mathcolor?: string

	mathsize?: string
}
