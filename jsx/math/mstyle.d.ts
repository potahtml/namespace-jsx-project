// Solid Main - https://www.solidjs.com/
interface MathMLMstyleElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	background?: string
	/**
	 * @deprecated
	 * @non-standard
	 */
	color?: string
	/**
	 * @deprecated
	 * @non-standard
	 */
	fontsize?: string
	/**
	 * @deprecated
	 * @non-standard
	 */
	fontstyle?: string
	/**
	 * @deprecated
	 * @non-standard
	 */
	fontweight?: string

	/** @deprecated */
	scriptminsize?: string
	/** @deprecated */
	scriptsizemultiplier?: string
}

// Solid Next - https://www.solidjs.com/
interface MathMLMstyleElementAttributes<T> extends MathMLAttributes<T> {
	/**
	 * @deprecated
	 * @non-standard
	 */
	background?: string | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	color?: string | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	fontsize?: string | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	fontstyle?: string | false
	/**
	 * @deprecated
	 * @non-standard
	 */
	fontweight?: string | false

	/** @deprecated */
	scriptminsize?: string | false
	/** @deprecated */
	scriptsizemultiplier?: string | false
}

// Pota - https://github.com/potahtml/pota
interface MathMLMstyleElementAttributes<Element> extends MathMLAttributes<Element> {
	/** @deprecated */
	background?: string
	/** @deprecated */
	color?: string
	/** @deprecated */
	fontsize?: string
	/** @deprecated */
	fontstyle?: string
	/** @deprecated */
	fontweight?: string
	/** @deprecated */
	scriptminsize?: string
	/** @deprecated */
	scriptsizemultiplier?: string
}
