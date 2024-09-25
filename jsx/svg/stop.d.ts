// Solid - https://www.solidjs.com/
interface StopSVGAttributes<T> extends CoreSVGAttributes<T>, StylableSVGAttributes, Pick<PresentationSVGAttributes, 'color' | 'stop-color' | 'stop-opacity'> {
	offset?: number | string
}
