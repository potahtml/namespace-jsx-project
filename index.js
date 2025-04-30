import { render, signal } from 'pota'
import { html } from 'pota/html'

function Namespace(props) {
  const namespace = props.namespace
  const elements = props.elements
  const columns = props.columns

  return html`
    <details open="">
      <summary><h2>${namespace}</h2></summary>
      <nav>
        <For each="${elements.filter(x => !x.deprecated)}"
          >${element =>
            html`<a href="#${element.interface + '.' + element.name}"
                >${element.name}</a
              >, `}
        </For>
        <For each="${elements.filter(x => x.deprecated)}"
          >${element =>
            html`🗑️
              <a href="#${element.interface + '.' + element.name}"
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
  const columns = props.columns

  return html` <section
    id="${element.interface + '.' + element.name}"
    class="table"
  >
    <table>
      <caption>
        <h3>
          ${element.deprecated ? '🗑️' : ''}
          <a href="#${element.interface + '.' + element.name}">#</a>
          <a
            href="${element.elementURL}"
            target="_blank"
            >&lt;${element.name}&gt;</a
          >
          —
          <a
            href="${element.interfaceURL}"
            target="_blank"
            >${element.interface}
          </a>
        </h3>
      </caption>

      <thead>
        <Show when="${Object.keys(attrprops).length}">
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
        <For each="${attrprops.filter(x => !x.deprecated && !x.warn)}"
          >${value =>
            html`<xElementKey
              value="${value}"
              columns="${columns}"
            />`}
        </For>
        <For each="${attrprops.filter(x => x.deprecated)}"
          >${value =>
            html`<xElementKey
              value="${value}"
              columns="${columns}"
            />`}
        </For>
        <For each="${attrprops.filter(x => x.warn && !x.deprecated)}"
          >${value =>
            html`<xElementKey
              value="${value}"
              columns="${columns}"
            />`}
        </For>
      </tbody>
    </table>
    <Show
      when="${
        element.readonly.length + element.notIncludedMDN.length
      }"
    >
      <footer>
        <Show when="${element.readonly.length}">
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
        <Show when="${element.notIncludedMDN.length}">
          MDN Not Included:
          <For each="${element.notIncludedMDN}"
            >${value =>
              html`<a
                target="_blank"
                href="${KeyURL(
                  element.name,
                  element.interface,
                  value,
                )}"
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
    value.globalAttribute && 'attr global',
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
          ${
            value.values[col] !== undefined ? value.values[col] : '❌'
          }
        </td>`}
    </For>
  </tr>`
}

function Events({ events, eventsLib, columns }) {
  return html` <section
    id="events"
    class="table"
  >
   <details open="">
        <summary><h2>Events</h2></summary>
        <table>
          <thead>
              <tr>
                <th>key</th>
                <th>interface</th>
                <For each="${columns}"
                  >${value => html`<th data-col="${value}">${value}</th>`}
                </For>
              </tr>
          </thead>
          <tbody>
            <For each="${Object.keys(eventsLib).sort((a, b) =>
              a
                .toLowerCase()
                .replace(':', '')
                .localeCompare(b.toLowerCase().replace(':', '')),
            )}"
              >${value =>
                html`<EventsKey
                  inter="${
                    events[value.toLowerCase().replace('on:', '')] ||
                    events[
                      value
                        .toLowerCase()
                        .replace('on:', '')
                        .replace(/^on/, '')
                    ] || { interface: 'UNKNOWN' }
                  }"
                  value="${eventsLib[value]}"
                  columns="${columns}"
                />`}
            </For>
          </tbody>
        </table>
    </details>
  </section>`
}

function EventsKey({ value, columns, inter }) {
  return html`<tr>
    <td nowrap="">
        <a target="_blank" href="${'https://developer.mozilla.org/en-US/search?q=' + encodeURIComponent(value.name.replace('on:', '') + ' event')}">${value.name}</a>
    </td>
    <td nowrap="">
        <a target="_blank" href="${'https://developer.mozilla.org/en-US/docs/Web/API/' + inter.interface}">${inter.interface}</a>
    </td>
    <For each="${columns}"
      >${col =>
        html`<td data-col="${col}">
          ${
            value.values[col] !== undefined ? value.values[col] : '❌'
          }
        </td>`}
    </For>
  </tr>`
}

function Aria({ aria, columns }) {
  return html` <section
    id="aria"
    class="table"
  >
   <details open="">
        <summary><h2>Aria</h2></summary>
        <table>
          <thead>
              <tr>
                <th>key</th>
                <For each="${columns}"
                  >${value => html`<th data-col="${value}">${value}</th>`}
                </For>
              </tr>
          </thead>
          <tbody>
            <For each="${Object.keys(aria).sort((a, b) =>
              a
                .toLowerCase()
                .replace('-', '')
                .localeCompare(b.toLowerCase().replace('-', '')),
            )}"
              >${value =>
                html`<AriaKey
                  value="${aria[value]}"
                  columns="${columns}"
                />`}
            </For>
          </tbody>
        </table>
    </details>
  </section>`
}

function AriaKey({ value, columns }) {
  return html`<tr>
    <td nowrap="">
        <a target="_blank" href="${'https://developer.mozilla.org/en-US/search?q=' + encodeURIComponent(value.name)}">${value.name}</a>
    </td>
    <For each="${columns}"
      >${col =>
        html`<td data-col="${col}">
          ${
            value.values[col] !== undefined ? value.values[col] : '❌'
          }
        </td>`}
    </For>
  </tr>`
}

function App() {
  const [read, write] = signal()

  fetch('jsx/data.json')
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
          each="${[
            'http://www.w3.org/1999/xhtml',
            'http://www.w3.org/1998/Math/MathML',
          ]}"
        >
          ${namespace => html`
        <Namespace
          namespace="${namespace}"
          elements="${Object.values(data().elements[namespace])}"
          columns="${data().columns}"
        />
      `}
        </For>
        <Events
          eventsLib="${data().eventsLib}"
          events="${data().events}"
          columns="${data().columns.filter(x => x !== 'Chrome' && x !== 'Firefox' && x !== 'VSCode')}"
        />
        <Aria
          aria="${data().aria}"
          columns="${data().columns.filter(x => x !== 'Chrome' && x !== 'Firefox' && x !== 'VSCode')}"
        />
      `
  }}</Show>`
}

html.define({
  Namespace,
  xElement,
  xElementKey,
  Events,
  EventsKey,
  Aria,
  AriaKey,
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
