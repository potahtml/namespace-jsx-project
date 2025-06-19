import { render, signal } from 'pota'
import { xml } from 'pota/xml'

const columns = [
  'Chrome',
  'Firefox',
  'Pota',
  'Solid Main',
  'Solid Next',
  'Voby',
  'Vue',
  'Preact',
  'React',
]

function xElements(props) {
  const namespace = props.namespace
  const elements = props.elements

  return xml`
    <details open="">
      <summary><h2>${namespace}</h2></summary>
      <nav>
        <For each="${elements.filter(x => !x.deprecated)}"
          >${element =>
            xml`<a href="#${element.tagInterfaceName + '.' + element.name}"
                >${element.name}</a
              >, `}
        </For>
        <For each="${elements.filter(x => x.deprecated)}"
          >${element =>
            xml`🗑️
              <a href="#${element.tagInterfaceName + '.' + element.name}"
                >${element.name}
              </a> `}
        </For>
      </nav>

      <For each="${elements.filter(x => !x.deprecated)}"
        >${element => xml` <xElement element="${element}" />`}
      </For>
      <For each="${elements.filter(x => x.deprecated)}"
        >${element => xml` <xElement element="${element}" />`}
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

  return xml` <section
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
            <th>interface</th>
            <For each="${columns}"
              >${value => xml`<th data-col="${value}">${value}</th>`}
            </For>
          </tr>
        </Show>
      </thead>
      <tbody>
        <For each="${keys}"
          >${value => xml`<xElementKey value="${value}"  />`}
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
              return xml`<a
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
              xml`<a
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

  return xml`<tr>
    <td nowrap="">
      <a
        href="${value.url}"
        target="_blank"
        >${props.warn ? xml`<s>${value.name}</s>` : value.name}</a
      >
      ${deprecated} ${warn} ${inherited} ${weird} ${experimental}
      ${nonstandard} ${danger}
    </td>
    <td nowrap="">${kind}</td>
    <td nowrap="">${value.keyInterfaceName}${value.eventInterface && ' ' + value.eventInterface}</td>
    <For each="${columns}"
      >${col =>
        xml`<td data-col="${col}">
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
  return xml`<Show when="${read}">${data => {
    return xml`
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
          ${namespace => xml`
            <xElements
              namespace="${namespace}"
              elements="${Object.values(data().elements[namespace])}"
            />
          `}
        </For>
        <For
          each="${['Element', 'HTMLElement', 'MathMLElement', 'SVGElement']}"
        >
            ${namespace => xml`
                <xInterfaces
                  namespace="${namespace}"
                  items="${Object.values(data().keys[namespace].keys)}"
                  showAria="${false}"
                  showEvents="${false}"
                />
               <xInterfaces
                  namespace="${namespace}"
                  items="${Object.values(data().keys[namespace].keys)}"
                  showAria="${true}"
                  showEvents="${false}"
                />
               <xInterfaces
                  namespace="${namespace}"
                  items="${Object.values(data().keys[namespace].keys)}"
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
    namespace,
    'Interface',
    showAria && 'Aria',
    showEvents && 'Events',
  ]
    .filter(x => x)
    .join(' ')

  return xml`
        <details open="" id="${namespaceTitle.replace(/ /g, '-')}">
            <summary><h2><a href="#${namespaceTitle.replace(/ /g, '-')}">#</a> ${namespaceTitle}</h2></summary>
            <section class="table">
                <table>
                    <caption>
                        This only includes frameworks that respect the hierarchy of the inheritance
                    </caption>
                    <thead>
                      <tr>
                        <th>key</th>
                        <th>kind</th>
                        <th>interface</th>
                        <For each="${columns}"
                          >${value => xml`<th data-col="${value}">${value}</th>`}
                        </For>
                      </tr>
                    </thead>
                    <tbody>
                      <For each="${items.filter(x => !x.deprecated)}"
                        >${value =>
                          xml` <xElementKey value="${value}" />`}
                      </For>
                      <For each="${items.filter(x => x.deprecated)}"
                        >${value =>
                          xml` <xElementKey value="${value}" />`}
                      </For>
                    </tbody>
                </table>
            </section>
        </details>
`
}

xml.define({
  xElements,
  xElement,
  xElementKey,
  xInterfaces,
})

render(App, document.querySelector('.content'), { clear: true })

function KeyURL(tagName, keyInterfaceName, key) {
  if (!keyInterfaceName) {
    return (
      'https://developer.mozilla.org/en-US/search?q=' +
      encodeURIComponent(key)
    )
  }
  if (tagName === 'webview') {
    return (
      'https://www.electronjs.org/docs/latest/api/webview-tag#' + key
    )
  }
  if (key.startsWith('on')) {
    key = key.replace(/^on:/, '').replace(/^on/, '')

    return (
      'https://developer.mozilla.org/en-US/docs/Web/API/' +
      keyInterfaceName +
      '#' +
      key.toLowerCase()
    )
  }
  return (
    'https://developer.mozilla.org/en-US/docs/Web/API/' +
    keyInterfaceName +
    '#' +
    keyInterfaceName.toLowerCase() +
    '.' +
    key.toLowerCase()
  )
}

document.querySelector('script[type="importmap"]').remove()
