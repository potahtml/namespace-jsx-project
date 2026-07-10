/** Export vsCode data */
import { htmlData as vsCodeData } from 'vscode-html-languageservice/lib/esm/languageFacts/data/webCustomData.js'

export const vsCode = {}

for (const tag of vsCodeData.tags) {
	vsCode[tag.name] = {
		description: tag.description?.value || tag.description || '',
	}
}
