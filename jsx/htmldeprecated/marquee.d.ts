// Preact - https://preactjs.com/
interface HTMLMarqueeElement extends HTMLElement {
	behavior?: 'scroll' | 'slide' | 'alternate'
	bgColor?: string
	direction?: 'left' | 'right' | 'up' | 'down'
	height?: number | string
	hspace?: number | string
	loop?: number | string
	scrollAmount?: number | string
	scrollDelay?: number | string
	trueSpeed?: boolean
	vspace?: number | string
	width?: number | string
}
