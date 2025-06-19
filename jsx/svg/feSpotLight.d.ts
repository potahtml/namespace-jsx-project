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

interface LightSourceElementSVGAttributes<T> extends SVGAttributes<T> {}

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFESpotLightElementAttributes<Element> extends SVGAttributes<Element> {}
