import { uniqueKeys } from './utils.js'

export const NS = {
	html: 'http://www.w3.org/1999/xhtml',
	math: 'http://www.w3.org/1998/Math/MathML',
	svg: 'http://www.w3.org/2000/svg',
}

export const NSElements = ['html', 'math', 'svg']

export const NSGlobalInterfaces = [
	'HTMLElement',
	'MathMLElement',
	'SVGElement',
	'Element',
]

export const data = {
	html: {
		ns: NS.html,
		tags: {
			list: uniqueKeys(``),

			deprecated: uniqueKeys(`

				// confirmed deprecated but not in mdn
				applet basefont bgsound blink listing isindex
				keygen menuitem multicol nextid noindex spacer

				// taken from dom-expressions
				content portal image shadow
			`),
		},
		keys: {
			/** Global attributes */
			global: uniqueKeys(
				`
					// obsolete but still global
					xml:lang xml:base
 				`,
			),
		},
	},
	math: {
		ns: NS.math,
		tags: {
			list: uniqueKeys(``),
			deprecated: uniqueKeys(` menclose mfenced`),
		},
		keys: {
			/** Global attributes */
			global: uniqueKeys([]),
		},
	},
	svg: {
		ns: NS.svg,
		tags: {
			list: uniqueKeys(``),
			deprecated: uniqueKeys(
				`
					altGlyph altGlyphDef altGlyphItem animateColor color-profile
					cursor font font-face  font-face-format font-face-name font-face-src
					font-face-uri glyph glyphRef hkern missing-glyph tref vkern
				`,
			),
		},
		keys: {
			/** Global attributes */
			global: uniqueKeys([
				`
					// obsolete but still global
					xml:lang xml:base
				`,
			]),
		},
	},
	hardcoded: {
		// browsers do not mark as readonly but mdn does
		readonly: uniqueKeys(`
			a.HTMLAnchorElement.relList
			area.HTMLAreaElement.relList
			form.HTMLFormElement.relList
			link.HTMLLinkElement.relList
		`),
		/**
		 * Browsers do not report the attribute, or the property is read
		 * only but the attribute can be set
		 */
		confirmed: uniqueKeys(`
			button.HTMLButtonElement.form
			fieldset.HTMLFieldSetElement.form
			input.HTMLInputElement.form

			// label.HTMLLabelElement.form
			meter.HTMLMeterElement.form
			object.HTMLObjectElement.form
			output.HTMLOutputElement.form
			select.HTMLSelectElement.form
			textarea.HTMLTextAreaElement.form
			keygen.HTMLUnknownElement.form
			mo.MathMLElement.form

			//
			object.HTMLObjectElement.wmode
			meta.HTMLMetaElement.charset
			input.HTMLInputElement.capture
			input.HTMLInputElement.list

			button.HTMLButtonElement.commandfor

			button.HTMLButtonElement.popovertarget
			input.HTMLInputElement.popovertarget

			input.HTMLInputElement.results
		`),
		/** Confirmed deprecated */
		deprecated: uniqueKeys(`
			// HTML

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
			img.HTMLImageElement.intrinsicsize

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#bgcolor
			col.HTMLTableColElement.bgcolor

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#bgcolor
			colgroup.HTMLTableColElement.bgcolor

			// non-standard deprecated
			// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/mediaGroup
			audio.HTMLAudioElement.mediagroup
			video.HTMLVideoElement.mediagroup
			track.HTMLTrackElement.mediagroup

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#language
			script.HTMLScriptElement.language

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#accept
			form.HTMLFormElement.accept

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre
			pre.HTMLPreElement.wrap

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head
			head.HTMLHeadElement.profile

			// SVG

			// deprecated https://developer.mozilla.org/en-US/docs/Web/API/SVGStyleElement
			style.SVGStyleElement.type

			// MATHML

			// deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/annotation-xml
			annotation-xml.MathMLElement.src

			// deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/annotation
			annotation.MathMLElement.src

			// deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms
			ms.MathMLElement.lquote
			ms.MathMLElement.rquote

			// legacy deprecated https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle
			mstyle.MathMLElement.scriptminsize
			mstyle.MathMLElement.scriptsizemultiplier

			// deprecated https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
			style.HTMLStyleElement.scoped
			style.SVGStyleElement.scoped

			// not found in mdn
			iframe.HTMLIFrameElement.allowtransparency

			// not found in mdn
			//  keygen.HTMLUnknownElement.autofocus
			keygen.HTMLUnknownElement.challenge
			keygen.HTMLUnknownElement.disabled
			keygen.HTMLUnknownElement.form
			keygen.HTMLUnknownElement.keyparams
			keygen.HTMLUnknownElement.keytype
			keygen.HTMLUnknownElement.name

			// EXTERNAL

			webview.HTMLElement.blinkfeatures
			webview.HTMLElement.disableguestresize
			webview.HTMLElement.guestinstance
		`),
		/**
		 * These attributes/properties are framework specific and do not
		 * exists in x/html.
		 */
		frameworkspecific: uniqueKeys(`
			// react
			link.precedence
			style.href
			style.precedence
		`),
		// Element or HTMLElement provides same key, but $Element has its own
		notglobal: uniqueKeys(`
			bdo.HTMLElement.dir
			abbr.HTMLElement.title
			dfn.HTMLElement.title
			input.HTMLInputElement.title
			link.HTMLLinkElement.title
			style.HTMLStyleElement.title
		`),
		weird: uniqueKeys(`
			iframe.HTMLIFrameElement.seamless
			object.HTMLObjectElement.typemustmatch
			menu.HTMLMenuElement.label
			menu.HTMLMenuElement.type
		`),
	},
}
