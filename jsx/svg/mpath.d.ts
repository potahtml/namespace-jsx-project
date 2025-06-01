// Solid Main - https://www.solidjs.com/
interface MPathSVGAttributes<T> extends CoreSVGAttributes<T> {}

// Solid Next - https://www.solidjs.com/
interface MPathSVGAttributes<T> extends SVGAttributes<T> {}

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/

// React - https://react.dev/
interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
interface ClassAttributes<T> extends RefAttributes<T> {}

// Pota - https://github.com/potahtml/pota
interface SVGMPathElementAttributes<Element> extends SVGAttributes<Element> {}
