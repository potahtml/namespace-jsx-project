// Pota - https://github.com/potahtml/pota
interface HTMLFrameElementAttributes<Element> extends HTMLAttributes<Element> {
	frameborder?: string

	longdesc?: string

	marginheight?: string

	marginwidth?: string

	name?: string

	noresize?: boolean | ''

	scrolling?: 'yes' | 'no'

	src?: string
}
