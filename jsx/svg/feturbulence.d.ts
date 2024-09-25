// Solid - https://www.solidjs.com/
interface FeTurbulanceSVGAttributes<T> extends FilterPrimitiveElementSVGAttributes<T>, StylableSVGAttributes {
	baseFrequency?: number | string
	numOctaves?: number | string
	seed?: number | string
	stitchTiles?: 'stitch' | 'noStitch'
	type?: 'fractalNoise' | 'turbulence'
}
