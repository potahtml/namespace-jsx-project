// Pota - https://github.com/potahtml/pota
interface HTMLMarqueeElementAttributes<Element> extends HTMLAttributes<Element> {
	behavior?: 'scroll' | 'slide' | 'alternate'

	bgcolor?: string

	direction?: 'left' | 'right' | 'up' | 'down'

	height?: number | string

	hspace?: number | string

	loop?: number | string

	scrollamount?: number | string

	scrolldelay?: number | string

	truespeed?: boolean | ''

	vspace?: number | string

	width?: number | string
}
