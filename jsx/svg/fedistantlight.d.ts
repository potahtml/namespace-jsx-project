// Solid Main - https://www.solidjs.com/
interface FeDistantLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	azimuth?: number | string
	elevation?: number | string
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}

// Solid Minor - https://www.solidjs.com/
interface FeDistantLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	azimuth?: number | string
	elevation?: number | string
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}

// Solid Next - https://www.solidjs.com/
interface FeDistantLightSVGAttributes<T> extends LightSourceElementSVGAttributes<T> {
	azimuth?: number | string | false
	elevation?: number | string | false
}

interface LightSourceElementSVGAttributes<T> extends CoreSVGAttributes<T> {}

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGFEDistantLightElementAttributes {}
