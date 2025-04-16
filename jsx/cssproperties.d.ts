// Solid Main - https://www.solidjs.com/
interface CSSProperties extends csstype.PropertiesHyphen {
	// Override
	[key: `-${string}`]: string | number
}

// Solid Minor - https://www.solidjs.com/
interface CSSProperties extends csstype.PropertiesHyphen {
	// Override
	[key: `-${string}`]: string | number
}

// Solid Next - https://www.solidjs.com/
interface CSSProperties extends csstype.PropertiesHyphen {
	// Override
	[key: `-${string}`]: string | number
}

// Vue - https://vuejs.org/
interface CSSProperties extends CSS.Properties<string | number>, CSS.PropertiesHyphen<string | number> {
	/**
	 * The index signature was removed to enable closed typing for style
	 * using CSSType. You're able to use type assertion or module augmentation
	 * to add properties or an index signature of your own.
	 *
	 * For examples and more information, visit:
	 * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
	 */
	[v: `--${string}`]: string | number
}

// Preact - https://preactjs.com/
interface CSSProperties extends AllCSSProperties, DOMCSSProperties {
	cssText?: string | null
}

// React - https://react.dev/
interface CSSProperties extends CSS.Properties<string | number> {
	/**
	 * The index signature was removed to enable closed typing for style
	 * using CSSType. You're able to use type assertion or module augmentation
	 * to add properties or an index signature of your own.
	 *
	 * For examples and more information, visit:
	 * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
	 */
}

// Pota - https://github.com/potahtml/pota
interface CSSProperties extends csstype.PropertiesHyphen {
	[key: `-${string}`]: number | string
}
