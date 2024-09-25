interface MathMLAnnotationElementAttributes {}
interface MathMLAnnotationXmlElementAttributes {}
interface MathMLMactionElementAttributes {}
interface MathMLMathElementAttributes {}
interface MathMLMerrorElementAttributes {}
interface MathMLMfracElementAttributes {}
interface MathMLMiElementAttributes {}
interface MathMLMmultiscriptsElementAttributes {}
interface MathMLMnElementAttributes {}
interface MathMLMoElementAttributes {}
interface MathMLMoverElementAttributes {}
interface MathMLMpaddedElementAttributes {}
interface MathMLMphantomElementAttributes {}
interface MathMLMprescriptsElementAttributes {}
interface MathMLMrootElementAttributes {}
interface MathMLMrowElementAttributes {}
interface MathMLMsElementAttributes {}
interface MathMLMspaceElementAttributes {}
interface MathMLMsqrtElementAttributes {}
interface MathMLMstyleElementAttributes {}
interface MathMLMsubElementAttributes {}
interface MathMLMsubsupElementAttributes {}
interface MathMLMsupElementAttributes {}
interface MathMLMtableElementAttributes {}
interface MathMLMtdElementAttributes {}
interface MathMLMtextElementAttributes {}
interface MathMLMtrElementAttributes {}
interface MathMLMunderElementAttributes {}
interface MathMLMunderoverElementAttributes {}
interface MathMLSemanticsElementAttributes {}

interface MathMLElements {
	annotation: MathMLAttributes<MathMLElement, MathMLAnnotationElementAttributes, MathMLElementEvents<MathMLElement>>
	'annotation-xml': MathMLAttributes<MathMLElement, MathMLAnnotationXmlElementAttributes, MathMLElementEvents<MathMLElement>>
	maction: MathMLAttributes<MathMLElement, MathMLMactionElementAttributes, MathMLElementEvents<MathMLElement>>
	math: MathMLAttributes<MathMLElement, MathMLMathElementAttributes, MathMLElementEvents<MathMLElement>>
	merror: MathMLAttributes<MathMLElement, MathMLMerrorElementAttributes, MathMLElementEvents<MathMLElement>>
	mfrac: MathMLAttributes<MathMLElement, MathMLMfracElementAttributes, MathMLElementEvents<MathMLElement>>
	mi: MathMLAttributes<MathMLElement, MathMLMiElementAttributes, MathMLElementEvents<MathMLElement>>
	mmultiscripts: MathMLAttributes<MathMLElement, MathMLMmultiscriptsElementAttributes, MathMLElementEvents<MathMLElement>>
	mn: MathMLAttributes<MathMLElement, MathMLMnElementAttributes, MathMLElementEvents<MathMLElement>>
	mo: MathMLAttributes<MathMLElement, MathMLMoElementAttributes, MathMLElementEvents<MathMLElement>>
	mover: MathMLAttributes<MathMLElement, MathMLMoverElementAttributes, MathMLElementEvents<MathMLElement>>
	mpadded: MathMLAttributes<MathMLElement, MathMLMpaddedElementAttributes, MathMLElementEvents<MathMLElement>>
	mphantom: MathMLAttributes<MathMLElement, MathMLMphantomElementAttributes, MathMLElementEvents<MathMLElement>>
	mprescripts: MathMLAttributes<MathMLElement, MathMLMprescriptsElementAttributes, MathMLElementEvents<MathMLElement>>
	mroot: MathMLAttributes<MathMLElement, MathMLMrootElementAttributes, MathMLElementEvents<MathMLElement>>
	mrow: MathMLAttributes<MathMLElement, MathMLMrowElementAttributes, MathMLElementEvents<MathMLElement>>
	ms: MathMLAttributes<MathMLElement, MathMLMsElementAttributes, MathMLElementEvents<MathMLElement>>
	mspace: MathMLAttributes<MathMLElement, MathMLMspaceElementAttributes, MathMLElementEvents<MathMLElement>>
	msqrt: MathMLAttributes<MathMLElement, MathMLMsqrtElementAttributes, MathMLElementEvents<MathMLElement>>
	mstyle: MathMLAttributes<MathMLElement, MathMLMstyleElementAttributes, MathMLElementEvents<MathMLElement>>
	msub: MathMLAttributes<MathMLElement, MathMLMsubElementAttributes, MathMLElementEvents<MathMLElement>>
	msubsup: MathMLAttributes<MathMLElement, MathMLMsubsupElementAttributes, MathMLElementEvents<MathMLElement>>
	msup: MathMLAttributes<MathMLElement, MathMLMsupElementAttributes, MathMLElementEvents<MathMLElement>>
	mtable: MathMLAttributes<MathMLElement, MathMLMtableElementAttributes, MathMLElementEvents<MathMLElement>>
	mtd: MathMLAttributes<MathMLElement, MathMLMtdElementAttributes, MathMLElementEvents<MathMLElement>>
	mtext: MathMLAttributes<MathMLElement, MathMLMtextElementAttributes, MathMLElementEvents<MathMLElement>>
	mtr: MathMLAttributes<MathMLElement, MathMLMtrElementAttributes, MathMLElementEvents<MathMLElement>>
	munder: MathMLAttributes<MathMLElement, MathMLMunderElementAttributes, MathMLElementEvents<MathMLElement>>
	munderover: MathMLAttributes<MathMLElement, MathMLMunderoverElementAttributes, MathMLElementEvents<MathMLElement>>
	semantics: MathMLAttributes<MathMLElement, MathMLSemanticsElementAttributes, MathMLElementEvents<MathMLElement>>
}
