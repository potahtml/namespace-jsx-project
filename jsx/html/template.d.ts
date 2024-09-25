// Solid - https://www.solidjs.com/
interface TemplateHTMLAttributes<T extends HTMLTemplateElement> extends HTMLAttributes<T> {
	content?: DocumentFragment
}
