// Solid Main - https://www.solidjs.com/

// Solid Next - https://www.solidjs.com/

// Voby - https://github.com/vobyjs/voby

// Vue - https://vuejs.org/

// Preact - https://preactjs.com/
interface ArticleHTMLAttributes<T extends EventTarget = HTMLElement> extends HTMLAttributes<T> {
	role?: 'article' | 'application' | 'document' | 'feed' | 'main' | 'none' | 'presentation' | 'region'
}

// React - https://react.dev/

// Pota - https://github.com/potahtml/pota
interface HTMLElementAttributes<Element> extends HTMLAttributes<Element> {}
