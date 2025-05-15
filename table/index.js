import { render, signal } from 'pota'
import { html } from 'pota/html'

function xElements(props) {
  const namespace = props.namespace
  const elements = props.elements
  const columns = props.columns

  return html`
    <details open="">
      <summary><h2>${namespace}</h2></summary>
      <nav>
        <For each="${elements.filter(x => !x.deprecated)}"
          >${element =>
            html`<a href="#${element.tagInterfaceName + '.' + element.name}"
                >${element.name}</a
              >, `}
        </For>
        <For each="${elements.filter(x => x.deprecated)}"
          >${element =>
            html`🗑️
              <a href="#${element.tagInterfaceName + '.' + element.name}"
                >${element.name}
              </a> `}
        </For>
      </nav>

      <For each="${elements.filter(x => !x.deprecated)}"
        >${element =>
          html` <xElement
            element="${element}"
            columns="${columns}"
          />`}
      </For>
      <For each="${elements.filter(x => x.deprecated)}"
        >${element =>
          html` <xElement
            element="${element}"
            columns="${columns}"
          />`}
      </For>
    </details>
  `
}

function xElement(props) {
  const element = props.element
  const attrprops = Object.values(element.keys)
  // sort by priority
  const keys = []
  for (const key of attrprops) {
    if (!key.deprecated && !key.warn && !key.danger) {
      keys.push(key)
    }
  }
  for (const key of attrprops) {
    if (key.deprecated) {
      keys.push(key)
    }
  }
  for (const key of attrprops) {
    if (key.warn && !key.deprecated) {
      keys.push(key)
    }
  }
  for (const key of attrprops) {
    if (key.danger && !key.deprecated && !key.warn) {
      keys.push(key)
    }
  }

  const columns = props.columns

  return html` <section
    id="${element.tagInterfaceName + '.' + element.name}"
    class="table"
  >
    <table>
      <caption>
        <h3>
          ${element.deprecated ? '🗑️' : ''}
          <a href="#${element.tagInterfaceName + '.' + element.name}">#</a>
          <a
            href="${element.elementURL}"
            target="_blank"
            >&lt;${element.name}&gt;</a
          >
          —
          <a
            href="${element.interfaceURL}"
            target="_blank"
            >${element.tagInterfaceName}
          </a>
        </h3>
      </caption>

      <thead>
        <Show when="${Object.keys(keys).length}">
          <tr>
            <th>key</th>
            <th>kind</th>
            <For each="${columns}"
              >${value => html`<th data-col="${value}">${value}</th>`}
            </For>
          </tr>
        </Show>
      </thead>
      <tbody>
        <For each="${keys}"
          >${value =>
            html`<xElementKey
              value="${value}"
              columns="${columns}"
            />`}
        </For>
      </tbody>
    </table>
    <Show
      when="${element.readonly?.length + element.notIncludedMDN?.length}"
    >
      <footer>
        <Show when="${element.readonly?.length}">
          Read only properties:
          <For each="${element.readonly}"
            >${value => {
              const data = value.split('.')
              return html`<a
                target="_blank"
                href="${KeyURL(element.name, data[0], data[1])}"
                >${value}</a
              >`
            }}
          </For>
          <br />
        </Show>
        <Show when="${element.notIncludedMDN?.length}">
          MDN Not Included:
          <For each="${element.notIncludedMDN}"
            >${value =>
              html`<a
                target="_blank"
                href="${KeyURL(element.name, element.tagInterfaceName, value)}"
                >${value}</a
              >`}
          </For>
        </Show>
      </footer>
    </Show>
  </section>`
}

function xElementKey(props) {
  const value = props.value
  const columns = props.columns

  const kind = [
    value.prop && 'prop',
    value.readonly && 'prop readonly',
    value.global && 'global',
    value.attr && 'attr',
    ,
  ]
    .filter(x => x)
    .join('/')

  const danger = value.danger ? '❗❗❗' : ''
  const warn = value.warn ? '🛑' : ''
  const deprecated = value.deprecated ? '🗑️' : ''
  const weird = value.weird ? '⁉' : ''

  const inherited = value.inherited ? '🔗' : ''
  const experimental = value.experimental ? '☢' : ''
  const nonstandard = value.nonstandard ? '⚠' : ''

  return html`<tr>
    <td nowrap="">
      <a
        href="${value.url}"
        target="_blank"
        >${props.warn ? html`<s>${value.name}</s>` : value.name}</a
      >
      ${deprecated} ${warn} ${inherited} ${weird} ${experimental}
      ${nonstandard} ${danger}
    </td>
    <td nowrap="">${kind}</td>
    <For each="${columns}"
      >${col =>
        html`<td data-col="${col}">
          ${value.values[col] !== undefined ? value.values[col] : '❌'}
        </td>`}
    </For>
  </tr>`
}

function App() {
  const [read, write] = signal()

  fetch('../jsx/data.json')
    .then(x => x.json())
    .then(x => write(x))
    .then(x => {
      location.hash &&
        document
          .querySelector('[id="' + location.hash.slice(1) + '"]')
          .scrollIntoView()
    })

  return html`<Show when="${read}">${data => {
    return html`
        <form>
          <input
            class="filter"
            name="search"
            type="search"
            placeholder="Filter…"
          />
        </form>
        <For
          each="${['html', 'math']}"
        >
          ${namespace => html`
            <xElements
              namespace="${namespace}"
              elements="${Object.values(data().elements[namespace])}"
              columns="${data().columns}"
            />
          `}
        </For>
        <For
          each="${['element', 'htmlelement', 'mathelement', 'svgelement']}"
        >
            ${namespace => html`
                <xInterfaces
                  namespace="${namespace}"
                  items="${Object.values(data().keys[namespace].keys)}"
                  columns="${data().columns}"
                  showAria="${false}"
                  showEvents="${false}"
                />
               <xInterfaces
                  namespace="${namespace}"
                  items="${Object.values(data().keys[namespace].keys)}"
                  columns="${data().columns}"
                  showAria="${true}"
                  showEvents="${false}"
                />
               <xInterfaces
                  namespace="${namespace}"
                  items="${Object.values(data().keys[namespace].keys)}"
                  columns="${data().columns}"
                  showAria="${false}"
                  showEvents="${true}"
                />
            `}
        </For>


    `
  }}</Show>`
}

function xInterfaces(props) {
  const namespace = props.namespace

  const columns = props.columns

  const showAria = props.showAria
  const showEvents = props.showEvents

  const items = props.items.filter(function filter(x) {
    if (showAria) {
      return x.name.startsWith('aria')
    }
    if (showEvents) {
      return x.name.startsWith('on')
    }
    return !x.name.startsWith('aria') && !x.name.startsWith('on')
  })

  if (!items.length) return null

  const namespaceTitle = [
    namespace === 'htmlelement'
      ? 'HTMLElement'
      : namespace === 'svgelement'
        ? 'SVGElement'
        : namespace === 'mathelement'
          ? 'MathMLElement'
          : 'Element',
    'Interface',
    showAria && 'Aria',
    showEvents && 'Events',
  ]
    .filter(x => x)
    .join(' ')

  return html`
        <details open="" id="${namespaceTitle.replace(/ /g, '-')}">
            <summary><h2>${namespaceTitle}</h2></summary>
            <section class="table">
                <table>
                    <caption>
                        This only includes frameworks that respect the hierarchy of the inheritance
                    </caption>
                    <thead>
                      <tr>
                        <th>key</th>
                        <th>kind</th>
                        <For each="${columns}"
                          >${value => html`<th data-col="${value}">${value}</th>`}
                        </For>
                      </tr>
                    </thead>
                    <tbody>
                      <For each="${items.filter(x => !x.deprecated)}"
                        >${value =>
                          html` <xElementKey
                            value="${value}"
                            columns="${columns}"
                          />`}
                      </For>
                      <For each="${items.filter(x => x.deprecated)}"
                        >${value =>
                          html` <xElementKey
                            value="${value}"
                            columns="${columns}"
                          />`}
                      </For>
                    </tbody>
                </table>
            </section>
        </details>
`
}

html.define({
  xElements,
  xElement,
  xElementKey,
  xInterfaces,
})

render(App, document.querySelector('.content'), { clear: true })

function KeyURL(tagName, inter, attr) {
  if (tagName === 'webview') {
    return (
      'https://www.electronjs.org/docs/latest/api/webview-tag#' + attr
    )
  }
  return (
    'https://developer.mozilla.org/en-US/docs/Web/API/' +
    inter +
    '#' +
    inter.toLowerCase() +
    '.' +
    attr.toLowerCase()
  )
}

document.querySelector('script[type="importmap"]').remove()
