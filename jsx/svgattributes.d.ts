// Voby - https://github.com/vobyjs/voby
interface SVGAttributes<T extends EventTarget = SVGElement> extends HTMLAttributes<T>, DirectiveAttributes {
	ref?: Refs<T>

	accentHeight?: number | string
	accumulate?: 'none' | 'sum'
	additive?: 'replace' | 'sum'
	alignmentBaseline?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit'
	allowReorder?: 'no' | 'yes'
	alphabetic?: number | string
	amplitude?: number | string
	arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated'
	ascent?: number | string
	attributeName?: string
	attributeType?: string
	autoReverse?: number | string
	azimuth?: number | string
	baseFrequency?: number | string
	baselineShift?: number | string
	baseProfile?: number | string
	bbox?: number | string
	begin?: number | string
	bias?: number | string
	by?: number | string
	calcMode?: number | string
	capHeight?: number | string
	clip?: number | string
	clipPath?: string
	clipPathUnits?: number | string
	clipRule?: number | string
	colorInterpolation?: number | string
	colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	colorProfile?: number | string
	colorRendering?: number | string
	contentScriptType?: number | string
	contentStyleType?: number | string
	cursor?: number | string
	cx?: number | string
	cy?: number | string
	d?: string
	decelerate?: number | string
	descent?: number | string
	diffuseConstant?: number | string
	direction?: number | string
	display?: number | string
	divisor?: number | string
	dominantBaseline?: number | string
	dur?: number | string
	dx?: number | string
	dy?: number | string
	edgeMode?: number | string
	elevation?: number | string
	enableBackground?: number | string
	end?: number | string
	exponent?: number | string
	externalResourcesRequired?: number | string
	fill?: string
	fillOpacity?: number | string
	fillRule?: 'nonzero' | 'evenodd' | 'inherit'
	filter?: string
	filterRes?: number | string
	filterUnits?: number | string
	floodColor?: number | string
	floodOpacity?: number | string
	focusable?: number | string
	fontFamily?: string
	fontSize?: number | string
	fontSizeAdjust?: number | string
	fontStretch?: number | string
	fontStyle?: number | string
	fontVariant?: number | string
	fontWeight?: number | string
	format?: number | string
	from?: number | string
	fx?: number | string
	fy?: number | string
	g1?: number | string
	g2?: number | string
	glyphName?: number | string
	glyphOrientationHorizontal?: number | string
	glyphOrientationVertical?: number | string
	glyphRef?: number | string
	gradientTransform?: string
	gradientUnits?: string
	hanging?: number | string
	horizAdvX?: number | string
	horizOriginX?: number | string
	ideographic?: number | string
	imageRendering?: number | string
	in2?: number | string
	in?: string
	intercept?: number | string
	k1?: number | string
	k2?: number | string
	k3?: number | string
	k4?: number | string
	k?: number | string
	kernelMatrix?: number | string
	kernelUnitLength?: number | string
	kerning?: number | string
	keyPoints?: number | string
	keySplines?: number | string
	keyTimes?: number | string
	lengthAdjust?: number | string
	letterSpacing?: number | string
	lightingColor?: number | string
	limitingConeAngle?: number | string
	local?: number | string
	markerEnd?: string
	markerHeight?: number | string
	markerMid?: string
	markerStart?: string
	markerUnits?: number | string
	markerWidth?: number | string
	mask?: string
	maskContentUnits?: number | string
	maskUnits?: number | string
	mathematical?: number | string
	mode?: number | string
	numOctaves?: number | string
	offset?: number | string
	opacity?: number | string
	operator?: number | string
	order?: number | string
	orient?: number | string
	orientation?: number | string
	origin?: number | string
	overflow?: number | string
	overlinePosition?: number | string
	overlineThickness?: number | string
	paintOrder?: number | string
	panose1?: number | string
	pathLength?: number | string
	patternContentUnits?: string
	patternTransform?: number | string
	patternUnits?: string
	pointerEvents?: number | string
	points?: string
	pointsAtX?: number | string
	pointsAtY?: number | string
	pointsAtZ?: number | string
	preserveAlpha?: number | string
	preserveAspectRatio?: string
	primitiveUnits?: number | string
	r?: number | string
	radius?: number | string
	refX?: number | string
	refY?: number | string
	renderingIntent?: number | string
	repeatCount?: number | string
	repeatDur?: number | string
	requiredExtensions?: number | string
	requiredFeatures?: number | string
	restart?: number | string
	result?: string
	rotate?: number | string
	rx?: number | string
	ry?: number | string
	scale?: number | string
	seed?: number | string
	shapeRendering?: number | string
	slope?: number | string
	spacing?: number | string
	specularConstant?: number | string
	specularExponent?: number | string
	speed?: number | string
	spreadMethod?: string
	startOffset?: number | string
	stdDeviation?: number | string
	stemh?: number | string
	stemv?: number | string
	stitchTiles?: number | string
	stopColor?: string
	stopOpacity?: number | string
	strikethroughPosition?: number | string
	strikethroughThickness?: number | string
	string?: number | string
	stroke?: string
	strokeDasharray?: string | number
	strokeDashoffset?: string | number
	strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
	strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
	strokeMiterlimit?: string | number
	strokeOpacity?: number | string
	strokeWidth?: number | string
	surfaceScale?: number | string
	systemLanguage?: number | string
	tableValues?: number | string
	targetX?: number | string
	targetY?: number | string
	textAnchor?: string
	textDecoration?: number | string
	textLength?: number | string
	textRendering?: number | string
	to?: number | string
	transform?: string
	u1?: number | string
	u2?: number | string
	underlinePosition?: number | string
	underlineThickness?: number | string
	unicode?: number | string
	unicodeBidi?: number | string
	unicodeRange?: number | string
	unitsPerEm?: number | string
	vAlphabetic?: number | string
	values?: string
	vectorEffect?: number | string
	version?: string
	vertAdvY?: number | string
	vertOriginX?: number | string
	vertOriginY?: number | string
	vHanging?: number | string
	vIdeographic?: number | string
	viewBox?: string
	viewTarget?: number | string
	visibility?: number | string
	vMathematical?: number | string
	widths?: number | string
	wordSpacing?: number | string
	writingMode?: number | string
	x1?: number | string
	x2?: number | string
	x?: number | string
	xChannelSelector?: string
	xHeight?: number | string
	xlinkActuate?: string
	xlinkArcrole?: string
	xlinkHref?: string
	xlinkRole?: string
	xlinkShow?: string
	xlinkTitle?: string
	xlinkType?: string
	xmlBase?: string
	xmlLang?: string
	xmlns?: string
	xmlnsXlink?: string
	xmlSpace?: string
	y1?: number | string
	y2?: number | string
	y?: number | string
	yChannelSelector?: string
	z?: number | string
	zoomAndPan?: string

	// XMLNS
	'xlink:href'?: string
	'xmlns:xlink'?: string
}

// Vue - https://vuejs.org/
interface SVGAttributes extends AriaAttributes, EventHandlers<Events> {
	innerHTML?: string
	/**
	 * SVG Styling Attributes
	 * @see https://www.w3.org/TR/SVG/styling.html#ElementSpecificStyling
	 */
	class?: any
	style?: StyleValue
	color?: string
	height?: number | string
	id?: string
	lang?: string
	max?: number | string
	media?: string
	method?: string
	min?: number | string
	name?: string
	target?: string
	type?: string
	width?: number | string
	role?: string
	tabindex?: number | string
	crossOrigin?: 'anonymous' | 'use-credentials' | ''
	'accent-height'?: number | string
	accumulate?: 'none' | 'sum'
	additive?: 'replace' | 'sum'
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit'
	allowReorder?: 'no' | 'yes'
	alphabetic?: number | string
	amplitude?: number | string
	'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
	ascent?: number | string
	attributeName?: string
	attributeType?: string
	autoReverse?: number | string
	azimuth?: number | string
	baseFrequency?: number | string
	'baseline-shift'?: number | string
	baseProfile?: number | string
	bbox?: number | string
	begin?: number | string
	bias?: number | string
	by?: number | string
	calcMode?: number | string
	'cap-height'?: number | string
	clip?: number | string
	'clip-path'?: string
	clipPathUnits?: number | string
	'clip-rule'?: number | string
	'color-interpolation'?: number | string
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-profile'?: number | string
	'color-rendering'?: number | string
	contentScriptType?: number | string
	contentStyleType?: number | string
	cursor?: number | string
	cx?: number | string
	cy?: number | string
	d?: string
	decelerate?: number | string
	descent?: number | string
	diffuseConstant?: number | string
	direction?: number | string
	display?: number | string
	divisor?: number | string
	'dominant-baseline'?: number | string
	dur?: number | string
	dx?: number | string
	dy?: number | string
	edgeMode?: number | string
	elevation?: number | string
	'enable-background'?: number | string
	end?: number | string
	exponent?: number | string
	externalResourcesRequired?: number | string
	fill?: string
	'fill-opacity'?: number | string
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	filter?: string
	filterRes?: number | string
	filterUnits?: number | string
	'flood-color'?: number | string
	'flood-opacity'?: number | string
	focusable?: number | string
	'font-family'?: string
	'font-size'?: number | string
	'font-size-adjust'?: number | string
	'font-stretch'?: number | string
	'font-style'?: number | string
	'font-variant'?: number | string
	'font-weight'?: number | string
	format?: number | string
	from?: number | string
	fx?: number | string
	fy?: number | string
	g1?: number | string
	g2?: number | string
	'glyph-name'?: number | string
	'glyph-orientation-horizontal'?: number | string
	'glyph-orientation-vertical'?: number | string
	glyphRef?: number | string
	gradientTransform?: string
	gradientUnits?: string
	hanging?: number | string
	'horiz-adv-x'?: number | string
	'horiz-origin-x'?: number | string
	href?: string
	ideographic?: number | string
	'image-rendering'?: number | string
	in2?: number | string
	in?: string
	intercept?: number | string
	k1?: number | string
	k2?: number | string
	k3?: number | string
	k4?: number | string
	k?: number | string
	kernelMatrix?: number | string
	kernelUnitLength?: number | string
	kerning?: number | string
	keyPoints?: number | string
	keySplines?: number | string
	keyTimes?: number | string
	lengthAdjust?: number | string
	'letter-spacing'?: number | string
	'lighting-color'?: number | string
	limitingConeAngle?: number | string
	local?: number | string
	'marker-end'?: string
	markerHeight?: number | string
	'marker-mid'?: string
	'marker-start'?: string
	markerUnits?: number | string
	markerWidth?: number | string
	mask?: string
	maskContentUnits?: number | string
	maskUnits?: number | string
	mathematical?: number | string
	mode?: number | string
	numOctaves?: number | string
	offset?: number | string
	opacity?: number | string
	operator?: number | string
	order?: number | string
	orient?: number | string
	orientation?: number | string
	origin?: number | string
	overflow?: number | string
	'overline-position'?: number | string
	'overline-thickness'?: number | string
	'paint-order'?: number | string
	'panose-1'?: number | string
	pathLength?: number | string
	patternContentUnits?: string
	patternTransform?: number | string
	patternUnits?: string
	'pointer-events'?: number | string
	points?: string
	pointsAtX?: number | string
	pointsAtY?: number | string
	pointsAtZ?: number | string
	preserveAlpha?: number | string
	preserveAspectRatio?: string
	primitiveUnits?: number | string
	r?: number | string
	radius?: number | string
	refX?: number | string
	refY?: number | string
	renderingIntent?: number | string
	repeatCount?: number | string
	repeatDur?: number | string
	requiredExtensions?: number | string
	requiredFeatures?: number | string
	restart?: number | string
	result?: string
	rotate?: number | string
	rx?: number | string
	ry?: number | string
	scale?: number | string
	seed?: number | string
	'shape-rendering'?: number | string
	slope?: number | string
	spacing?: number | string
	specularConstant?: number | string
	specularExponent?: number | string
	speed?: number | string
	spreadMethod?: string
	startOffset?: number | string
	stdDeviation?: number | string
	stemh?: number | string
	stemv?: number | string
	stitchTiles?: number | string
	'stop-color'?: string
	'stop-opacity'?: number | string
	'strikethrough-position'?: number | string
	'strikethrough-thickness'?: number | string
	string?: number | string
	stroke?: string
	'stroke-dasharray'?: number | string
	'stroke-dashoffset'?: number | string
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
	'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit'
	'stroke-miterlimit'?: number | string
	'stroke-opacity'?: number | string
	'stroke-width'?: number | string
	surfaceScale?: number | string
	systemLanguage?: number | string
	tableValues?: number | string
	targetX?: number | string
	targetY?: number | string
	'text-anchor'?: string
	'text-decoration'?: number | string
	textLength?: number | string
	'text-rendering'?: number | string
	to?: number | string
	transform?: string
	u1?: number | string
	u2?: number | string
	'underline-position'?: number | string
	'underline-thickness'?: number | string
	unicode?: number | string
	'unicode-bidi'?: number | string
	'unicode-range'?: number | string
	'unitsPer-em'?: number | string
	'v-alphabetic'?: number | string
	values?: string
	'vector-effect'?: number | string
	version?: string
	'vert-adv-y'?: number | string
	'vert-origin-x'?: number | string
	'vert-origin-y'?: number | string
	'v-hanging'?: number | string
	'v-ideographic'?: number | string
	viewBox?: string
	viewTarget?: number | string
	visibility?: number | string
	'v-mathematical'?: number | string
	widths?: number | string
	'word-spacing'?: number | string
	'writing-mode'?: number | string
	x1?: number | string
	x2?: number | string
	x?: number | string
	xChannelSelector?: string
	'x-height'?: number | string
	xlinkActuate?: string
	xlinkArcrole?: string
	xlinkHref?: string
	xlinkRole?: string
	xlinkShow?: string
	xlinkTitle?: string
	xlinkType?: string
	xmlns?: string
	xmlnsXlink?: string
	y1?: number | string
	y2?: number | string
	y?: number | string
	yChannelSelector?: string
	z?: number | string
	zoomAndPan?: string
}

// Preact - https://preactjs.com/
interface SVGAttributes<Target extends EventTarget = SVGElement> extends HTMLAttributes<Target> {
	accentHeight?: number | string
	accumulate?: 'none' | 'sum'
	additive?: 'replace' | 'sum'
	alignmentBaseline?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit'
	'alignment-baseline'?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit'
	allowReorder?: 'no' | 'yes'
	'allow-reorder'?: 'no' | 'yes'
	alphabetic?: number | string
	amplitude?: number | string
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
	arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated'
	/** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
	'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
	ascent?: number | string
	attributeName?: string
	attributeType?: string
	azimuth?: number | string
	baseFrequency?: number | string
	baselineShift?: number | string
	'baseline-shift'?: number | string
	baseProfile?: number | string
	bbox?: number | string
	begin?: number | string
	bias?: number | string
	by?: number | string
	calcMode?: number | string
	capHeight?: number | string
	'cap-height'?: number | string
	clip?: number | string
	clipPath?: string
	'clip-path'?: string
	clipPathUnits?: number | string
	clipRule?: number | string
	'clip-rule'?: number | string
	colorInterpolation?: number | string
	'color-interpolation'?: number | string
	colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	colorProfile?: number | string
	'color-profile'?: number | string
	colorRendering?: number | string
	'color-rendering'?: number | string
	contentScriptType?: number | string
	'content-script-type'?: number | string
	contentStyleType?: number | string
	'content-style-type'?: number | string
	cursor?: number | string
	cx?: number | string
	cy?: number | string
	d?: string
	decelerate?: number | string
	descent?: number | string
	diffuseConstant?: number | string
	direction?: number | string
	display?: number | string
	divisor?: number | string
	dominantBaseline?: number | string
	'dominant-baseline'?: number | string
	dur?: number | string
	dx?: number | string
	dy?: number | string
	edgeMode?: number | string
	elevation?: number | string
	enableBackground?: number | string
	'enable-background'?: number | string
	end?: number | string
	exponent?: number | string
	externalResourcesRequired?: number | string
	fill?: string
	fillOpacity?: number | string
	'fill-opacity'?: number | string
	fillRule?: 'nonzero' | 'evenodd' | 'inherit'
	'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
	filter?: string
	filterRes?: number | string
	filterUnits?: number | string
	floodColor?: number | string
	'flood-color'?: number | string
	floodOpacity?: number | string
	'flood-opacity'?: number | string
	focusable?: number | string
	fontFamily?: string
	'font-family'?: string
	fontSize?: number | string
	'font-size'?: number | string
	fontSizeAdjust?: number | string
	'font-size-adjust'?: number | string
	fontStretch?: number | string
	'font-stretch'?: number | string
	fontStyle?: number | string
	'font-style'?: number | string
	fontVariant?: number | string
	'font-variant'?: number | string
	fontWeight?: number | string
	'font-weight'?: number | string
	format?: number | string
	from?: number | string
	fx?: number | string
	fy?: number | string
	g1?: number | string
	g2?: number | string
	glyphName?: number | string
	'glyph-name'?: number | string
	glyphOrientationHorizontal?: number | string
	'glyph-orientation-horizontal'?: number | string
	glyphOrientationVertical?: number | string
	'glyph-orientation-vertical'?: number | string
	glyphRef?: number | string
	gradientTransform?: string
	gradientUnits?: string
	hanging?: number | string
	horizAdvX?: number | string
	'horiz-adv-x'?: number | string
	horizOriginX?: number | string
	'horiz-origin-x'?: number | string
	ideographic?: number | string
	imageRendering?: number | string
	'image-rendering'?: number | string
	in2?: number | string
	in?: string
	intercept?: number | string
	k1?: number | string
	k2?: number | string
	k3?: number | string
	k4?: number | string
	k?: number | string
	kernelMatrix?: number | string
	kernelUnitLength?: number | string
	kerning?: number | string
	keyPoints?: number | string
	keySplines?: number | string
	keyTimes?: number | string
	lengthAdjust?: number | string
	letterSpacing?: number | string
	'letter-spacing'?: number | string
	lightingColor?: number | string
	'lighting-color'?: number | string
	limitingConeAngle?: number | string
	local?: number | string
	markerEnd?: string
	'marker-end'?: string
	markerHeight?: number | string
	markerMid?: string
	'marker-mid'?: string
	markerStart?: string
	'marker-start'?: string
	markerUnits?: number | string
	markerWidth?: number | string
	mask?: string
	maskContentUnits?: number | string
	maskUnits?: number | string
	mathematical?: number | string
	mode?: number | string
	numOctaves?: number | string
	offset?: number | string
	opacity?: number | string
	operator?: number | string
	order?: number | string
	orient?: number | string
	orientation?: number | string
	origin?: number | string
	overflow?: number | string
	overlinePosition?: number | string
	'overline-position'?: number | string
	overlineThickness?: number | string
	'overline-thickness'?: number | string
	paintOrder?: number | string
	'paint-order'?: number | string
	panose1?: number | string
	'panose-1'?: number | string
	pathLength?: number | string
	patternContentUnits?: string
	patternTransform?: number | string
	patternUnits?: string
	pointerEvents?: number | string
	'pointer-events'?: number | string
	points?: string
	pointsAtX?: number | string
	pointsAtY?: number | string
	pointsAtZ?: number | string
	preserveAlpha?: number | string
	preserveAspectRatio?: string
	primitiveUnits?: number | string
	r?: number | string
	radius?: number | string
	refX?: number | string
	refY?: number | string
	renderingIntent?: number | string
	'rendering-intent'?: number | string
	repeatCount?: number | string
	'repeat-count'?: number | string
	repeatDur?: number | string
	'repeat-dur'?: number | string
	requiredExtensions?: number | string
	requiredFeatures?: number | string
	restart?: number | string
	result?: string
	rotate?: number | string
	rx?: number | string
	ry?: number | string
	scale?: number | string
	seed?: number | string
	shapeRendering?: number | string
	'shape-rendering'?: number | string
	slope?: number | string
	spacing?: number | string
	specularConstant?: number | string
	specularExponent?: number | string
	speed?: number | string
	spreadMethod?: string
	startOffset?: number | string
	stdDeviation?: number | string
	stemh?: number | string
	stemv?: number | string
	stitchTiles?: number | string
	stopColor?: string
	'stop-color'?: string
	stopOpacity?: number | string
	'stop-opacity'?: number | string
	strikethroughPosition?: number | string
	'strikethrough-position'?: number | string
	strikethroughThickness?: number | string
	'strikethrough-thickness'?: number | string
	string?: number | string
	stroke?: string
	strokeDasharray?: string | number
	'stroke-dasharray'?: string | number
	strokeDashoffset?: string | number
	'stroke-dashoffset'?: string | number
	strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
	'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
	strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
	'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit'
	strokeMiterlimit?: string | number
	'stroke-miterlimit'?: string | number
	strokeOpacity?: number | string
	'stroke-opacity'?: number | string
	strokeWidth?: number | string
	'stroke-width'?: number | string
	surfaceScale?: number | string
	systemLanguage?: number | string
	tableValues?: number | string
	targetX?: number | string
	targetY?: number | string
	textAnchor?: string
	'text-anchor'?: string
	textDecoration?: number | string
	'text-decoration'?: number | string
	textLength?: number | string
	textRendering?: number | string
	'text-rendering'?: number | string
	to?: number | string
	transform?: string
	transformOrigin?: string
	'transform-origin'?: string
	u1?: number | string
	u2?: number | string
	underlinePosition?: number | string
	'underline-position'?: number | string
	underlineThickness?: number | string
	'underline-thickness'?: number | string
	unicode?: number | string
	unicodeBidi?: number | string
	'unicode-bidi'?: number | string
	unicodeRange?: number | string
	'unicode-range'?: number | string
	unitsPerEm?: number | string
	'units-per-em'?: number | string
	vAlphabetic?: number | string
	'v-alphabetic'?: number | string
	values?: string
	vectorEffect?: number | string
	'vector-effect'?: number | string
	version?: string
	vertAdvY?: number | string
	'vert-adv-y'?: number | string
	vertOriginX?: number | string
	'vert-origin-x'?: number | string
	vertOriginY?: number | string
	'vert-origin-y'?: number | string
	vHanging?: number | string
	'v-hanging'?: number | string
	vIdeographic?: number | string
	'v-ideographic'?: number | string
	viewBox?: string
	viewTarget?: number | string
	visibility?: number | string
	vMathematical?: number | string
	'v-mathematical'?: number | string
	widths?: number | string
	wordSpacing?: number | string
	'word-spacing'?: number | string
	writingMode?: number | string
	'writing-mode'?: number | string
	x1?: number | string
	x2?: number | string
	x?: number | string
	xChannelSelector?: string
	xHeight?: number | string
	'x-height'?: number | string
	xlinkActuate?: string
	'xlink:actuate'?: SVGAttributes['xlinkActuate']
	xlinkArcrole?: string
	'xlink:arcrole'?: string
	xlinkHref?: string
	'xlink:href'?: string
	xlinkRole?: string
	'xlink:role'?: string
	xlinkShow?: string
	'xlink:show'?: string
	xlinkTitle?: string
	'xlink:title'?: string
	xlinkType?: string
	'xlink:type'?: string
	xmlBase?: string
	'xml:base'?: string
	xmlLang?: string
	'xml:lang'?: string
	xmlns?: string
	xmlnsXlink?: string
	xmlSpace?: string
	'xml:space'?: string
	y1?: number | string
	y2?: number | string
	y?: number | string
	yChannelSelector?: string
	z?: number | string
	zoomAndPan?: string
}

// React - https://react.dev/
interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
	// React-specific Attributes
	suppressHydrationWarning?: boolean

	// Attributes which also defined in HTMLAttributes
	// See comment in SVGDOMPropertyConfig.js
	className?: string
	color?: string
	height?: number | string
	id?: string
	lang?: string
	max?: number | string
	media?: string
	method?: string
	min?: number | string
	name?: string
	style?: CSSProperties
	target?: string
	type?: string
	width?: number | string

	// Other HTML properties supported by SVG elements in browsers
	role?: 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem' | (string & {})
	tabIndex?: number
	crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined

	// SVG Specific attributes
	accentHeight?: number | string
	accumulate?: 'none' | 'sum'
	additive?: 'replace' | 'sum'
	alignmentBaseline?: 'auto' | 'baseline' | 'before-edge' | 'text-before-edge' | 'middle' | 'central' | 'after-edge' | 'text-after-edge' | 'ideographic' | 'alphabetic' | 'hanging' | 'mathematical' | 'inherit'
	allowReorder?: 'no' | 'yes'
	alphabetic?: number | string
	amplitude?: number | string
	arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated'
	ascent?: number | string
	attributeName?: string
	attributeType?: string
	autoReverse?: boolean | 'true' | 'false'
	azimuth?: number | string
	baseFrequency?: number | string
	baselineShift?: number | string
	baseProfile?: number | string
	bbox?: number | string
	begin?: number | string
	bias?: number | string
	by?: number | string
	calcMode?: number | string
	capHeight?: number | string
	clip?: number | string
	clipPath?: string
	clipPathUnits?: number | string
	clipRule?: number | string
	colorInterpolation?: number | string
	colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
	colorProfile?: number | string
	colorRendering?: number | string
	contentScriptType?: number | string
	contentStyleType?: number | string
	cursor?: number | string
	cx?: number | string
	cy?: number | string
	d?: string
	decelerate?: number | string
	descent?: number | string
	diffuseConstant?: number | string
	direction?: number | string
	display?: number | string
	divisor?: number | string
	dominantBaseline?: number | string
	dur?: number | string
	dx?: number | string
	dy?: number | string
	edgeMode?: number | string
	elevation?: number | string
	enableBackground?: number | string
	end?: number | string
	exponent?: number | string
	externalResourcesRequired?: boolean | 'true' | 'false'
	fill?: string
	fillOpacity?: number | string
	fillRule?: 'nonzero' | 'evenodd' | 'inherit'
	filter?: string
	filterRes?: number | string
	filterUnits?: number | string
	floodColor?: number | string
	floodOpacity?: number | string
	focusable?: boolean | 'true' | 'false' | 'auto'
	fontFamily?: string
	fontSize?: number | string
	fontSizeAdjust?: number | string
	fontStretch?: number | string
	fontStyle?: number | string
	fontVariant?: number | string
	fontWeight?: number | string
	format?: number | string
	fr?: number | string
	from?: number | string
	fx?: number | string
	fy?: number | string
	g1?: number | string
	g2?: number | string
	glyphName?: number | string
	glyphOrientationHorizontal?: number | string
	glyphOrientationVertical?: number | string
	glyphRef?: number | string
	gradientTransform?: string
	gradientUnits?: string
	hanging?: number | string
	horizAdvX?: number | string
	horizOriginX?: number | string
	href?: string
	ideographic?: number | string
	imageRendering?: number | string
	in2?: number | string
	in?: string
	intercept?: number | string
	k1?: number | string
	k2?: number | string
	k3?: number | string
	k4?: number | string
	k?: number | string
	kernelMatrix?: number | string
	kernelUnitLength?: number | string
	kerning?: number | string
	keyPoints?: number | string
	keySplines?: number | string
	keyTimes?: number | string
	lengthAdjust?: number | string
	letterSpacing?: number | string
	lightingColor?: number | string
	limitingConeAngle?: number | string
	local?: number | string
	markerEnd?: string
	markerHeight?: number | string
	markerMid?: string
	markerStart?: string
	markerUnits?: number | string
	markerWidth?: number | string
	mask?: string
	maskContentUnits?: number | string
	maskUnits?: number | string
	mathematical?: number | string
	mode?: number | string
	numOctaves?: number | string
	offset?: number | string
	opacity?: number | string
	operator?: number | string
	order?: number | string
	orient?: number | string
	orientation?: number | string
	origin?: number | string
	overflow?: number | string
	overlinePosition?: number | string
	overlineThickness?: number | string
	paintOrder?: number | string
	panose1?: number | string
	path?: string
	pathLength?: number | string
	patternContentUnits?: string
	patternTransform?: number | string
	patternUnits?: string
	pointerEvents?: number | string
	points?: string
	pointsAtX?: number | string
	pointsAtY?: number | string
	pointsAtZ?: number | string
	preserveAlpha?: boolean | 'true' | 'false'
	preserveAspectRatio?: string
	primitiveUnits?: number | string
	r?: number | string
	radius?: number | string
	refX?: number | string
	refY?: number | string
	renderingIntent?: number | string
	repeatCount?: number | string
	repeatDur?: number | string
	requiredExtensions?: number | string
	requiredFeatures?: number | string
	restart?: number | string
	result?: string
	rotate?: number | string
	rx?: number | string
	ry?: number | string
	scale?: number | string
	seed?: number | string
	shapeRendering?: number | string
	slope?: number | string
	spacing?: number | string
	specularConstant?: number | string
	specularExponent?: number | string
	speed?: number | string
	spreadMethod?: string
	startOffset?: number | string
	stdDeviation?: number | string
	stemh?: number | string
	stemv?: number | string
	stitchTiles?: number | string
	stopColor?: string
	stopOpacity?: number | string
	strikethroughPosition?: number | string
	strikethroughThickness?: number | string
	string?: number | string
	stroke?: string
	strokeDasharray?: string | number
	strokeDashoffset?: string | number
	strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
	strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
	strokeMiterlimit?: number | string
	strokeOpacity?: number | string
	strokeWidth?: number | string
	surfaceScale?: number | string
	systemLanguage?: number | string
	tableValues?: number | string
	targetX?: number | string
	targetY?: number | string
	textAnchor?: string
	textDecoration?: number | string
	textLength?: number | string
	textRendering?: number | string
	to?: number | string
	transform?: string
	u1?: number | string
	u2?: number | string
	underlinePosition?: number | string
	underlineThickness?: number | string
	unicode?: number | string
	unicodeBidi?: number | string
	unicodeRange?: number | string
	unitsPerEm?: number | string
	vAlphabetic?: number | string
	values?: string
	vectorEffect?: number | string
	version?: string
	vertAdvY?: number | string
	vertOriginX?: number | string
	vertOriginY?: number | string
	vHanging?: number | string
	vIdeographic?: number | string
	viewBox?: string
	viewTarget?: number | string
	visibility?: number | string
	vMathematical?: number | string
	widths?: number | string
	wordSpacing?: number | string
	writingMode?: number | string
	x1?: number | string
	x2?: number | string
	x?: number | string
	xChannelSelector?: string
	xHeight?: number | string
	xlinkActuate?: string
	xlinkArcrole?: string
	xlinkHref?: string
	xlinkRole?: string
	xlinkShow?: string
	xlinkTitle?: string
	xlinkType?: string
	xmlBase?: string
	xmlLang?: string
	xmlns?: string
	xmlnsXlink?: string
	xmlSpace?: string
	y1?: number | string
	y2?: number | string
	y?: number | string
	yChannelSelector?: string
	z?: number | string
	zoomAndPan?: string
}
