# The `namespace JSX` Project

The ultimate goal of this project is to become obsolete.

## Context

`namespace JSX` provides typings for `attributes` and `properties` in
HTML tags for various frameworks. This includes things like alignment
styles or event listeners.

_Typings_ is a loaded term, some expect
`FunctionMaybe<'left' | 'center' | 'right'>` while others are content
with just `'left' | 'center' | 'right'`.

The core of the issue is that everything is based on the same
underlying data, `'left' | 'center' | 'right'`, as these possible
values come from the HTML specification and browser implementations.

Despite my best efforts, I couldn't find a comprehensive source, such
as a JSON file, listing all tag names with their associated
attributes/properties, possible values, descriptions, deprecation
notices, and links.

One might expect this information to be available from the
specification, TypeScript, or MDN. However, that doesn't seem to be
the case. While MDN has made efforts to provide such a resource, it
remains incomplete and somewhat disorganized.

The most _reliable_, _complete_ and _condensed_ source of data comes
from the `namespace JSX` files of various modern JavaScript
frameworks.

Unfortunately, a `namespace JSX` files tend to be "write once and
forget" files, rarely updated unless the project becomes widely
adopted. This is because there's no efficient way to generate or track
updates for these files automatically.

## Goals

The ultimate goal of this project is to inspire the powers that
be—HTML specification authors, MDN contributors, and TypeScript
maintainers—to collaborate and provide this data in an easily
consumable format.

## The Project

This project helps track some of the most popular frameworks
`namespace JSX` by parsing, mapping (when necessary), and merging
their interfaces into a unified structure. It also uses VSCode
LSP-HTML and brute forces chrome element setters to see if a property
is reflected as an attribute.

This makes it easier to quickly track and visualize whether any
attribute or property for an HTML, SVG, or MathML element has been
added or updated. So far, that's better than nothing. An attempt to
unify the efforts dedicated to updating this data.

Since the project maps interfaces for tag names, attributes, and
possible values, there's potential to enhance this data by adding
descriptions for what each attribute or property does, deprecation
notices, links to MDN, and more.

It's an ambitious, complex, and tedious task(—likely the reason why
such a comprehensive data file doesn't exist yet).

You can see the current table at
https://github.com/potahtml/namespace-jsx-project/blob/master/jsx/readme.md

## Frameworks

List of frameworks so far: Solid, Voby, Vue, Preact, React.

## Usage

To use this project, simply use `jsx/data.json` or check the commit
list for this file
https://github.com/potahtml/namespace-jsx-project/blob/master/jsx/readme.md
. Over time, I will be commiting "updates" that show the diffs
whenever a framework's `namespace JSX` changes. At least, that's the
idea!

## Generating the data

1. Clone this repository and run `npm install`. This will install the
   necessary frameworks and TypeScript to pull the data.

2. Run `npm run dev`. This will create a jsx directory containing
   numerous `.d.ts` files, generated by parsing and merging the
   `namespace JSX` data from different frameworks.

3. Periodically, run npm update followed by npm run dev. This will
   generate new data and show diffs, allowing you to see whether you
   need to update your own `namespace JSX`.

## TODO

- add aria attributes
- GLobal attributes needs to be generated in some way
- Brute force chrome in reverse, set the attribute and then read the
  getter, if the value changed then the attribute is valid.

## Related

- https://github.com/microsoft/TypeScript-DOM-lib-generator
- https://github.com/microsoft/vscode-custom-data
- https://github.com/mdn/data
- https://github.com/w3c/browser-specs
- https://github.com/w3c/webref

## Sponsor

Check out the Sponsor link! With enough support, I'll be able to
dedicate more time to this project and work on it more frequently.
https://opencollective.com/tito-bouzout
