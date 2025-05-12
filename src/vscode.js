import { read } from './utils.js'

/** Export vsCode data */
const vsCodeData = JSON.parse(
	read(
		'./node_modules/vscode-html-languageservice/lib/esm/languageFacts/data/webCustomData.js',
	)
		.trim()
		.replace('export const htmlData =', '')
		.replace(/^\/\*[^\/]+\*\//, '')
		.replace(/\n\/\/[^\n]+\n/, '\n')
		.replace(/;$/, ''),
)

export const vsCode = {}

for (const tag of vsCodeData.tags) {
	vsCode[tag.name] = {
		description: tag.description?.value || tag.description || '',
		keys: {},
	}
	for (const attr of tag.attributes) {
		vsCode[tag.name].keys[attr.name] = attr.valueSet
			? vsCodeData.valueSets
					.find(item => item.name === attr.valueSet)
					?.values?.map(value => "'" + value.name + "'")
					.join(' | ')
			: 'string'

		// attr.valueSet.v is missing in vsCode data, its boolean

		vsCode[tag.name].keys[attr.name] =
			vsCode[tag.name].keys[attr.name] || 'boolean'
	}
}
