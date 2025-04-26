// Solid Main - https://www.solidjs.com/
interface FeSpotLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	limitingConeAngle?: number | string
	pointsAtX?: number | string
	pointsAtY?: number | string
	pointsAtZ?: number | string
	specularExponent?: number | string
	x?: number | string
	y?: number | string
	z?: number | string
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	tabIndex?: number | string
}

// Solid Minor - https://www.solidjs.com/
interface FeSpotLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	limitingConeAngle?: number | string
	pointsAtX?: number | string
	pointsAtY?: number | string
	pointsAtZ?: number | string
	specularExponent?: number | string
	x?: number | string
	y?: number | string
	z?: number | string
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string
	lang?: string
	tabindex?: number | string

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string
}

// Solid Next - https://www.solidjs.com/
interface FeSpotLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	limitingConeAngle?: number | string | false
	pointsAtX?: number | string | false
	pointsAtY?: number | string | false
	pointsAtZ?: number | string | false
	specularExponent?: number | string | false
	x?: number | string | false
	y?: number | string | false
	z?: number | string | false
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	id?: string | false
	lang?: string | false
	tabindex?: number | string | false

	/** @deprecated Use lowercase attributes */
	tabIndex?: number | string | false
}

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFESpotLightElementAttributes {}
