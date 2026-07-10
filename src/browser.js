import { pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer'

export const startBrowser = async (browser = 'chrome') => {
	const navigatorInstance = await puppeteer.launch({
		headless: true,
		browser,
		args: [
			'--ash-no-nudges',
			'--deny-permission-prompts',
			'--disable-background-timer-throttling',
			'--disable-backgrounding-occluded-windows',
			'--disable-client-side-phishing-detection',
			'--disable-default-apps',
			'--disable-extensions',
			'--disable-features=TranslateUI,Translate,InfiniteSessionRestore,IsolateOrigins',
			'--disable-infobars',
			'--disable-ipc-flooding-protection',
			'--disable-notifications',
			'--disable-renderer-backgrounding',
			'--disable-session-crashed-bubble',
			'--ignore-certificate-errors',
			'--mute-audio',
			'--no-default-browser-check',
			'--no-first-run',
			'--start-maximized',
			'--disable-web-security',
			'--no-sandbox',
		],
		protocolTimeout: 300_000,
		defaultViewport: null,
	})

	const page = await navigatorInstance.newPage()

	return [navigatorInstance, page]
}

export const fetchTable = async file => {
	const [navigatorInstance, page] = await startBrowser()

	try {
		const url = pathToFileURL(process.cwd() + file).href

		await page.goto(url, {
			waitUntil: 'networkidle0',
		})
		// wait until the table count exists and is stable between polls
		await page.waitForFunction(
			() => {
				const count = document.querySelectorAll(
					'.content table',
				).length
				const done = count && count === window.__tableCount
				window.__tableCount = count
				return done
			},
			{ polling: 500, timeout: 120_000 },
		)
		return await page.evaluate(() => {
			return '<!DOCTYPE html>' + document.documentElement.outerHTML
		})
	} finally {
		await navigatorInstance.close()
	}
}

export const browserData = async (
	browserData,
	browser = 'chrome',
) => {
	const [navigatorInstance, page] = await startBrowser(browser)

	try {
		await page.exposeFunction('getData', () => browserData)

		const url = pathToFileURL(
			process.cwd() + '/browser/index.html',
		).href

		await page.goto(url, {
			waitUntil: 'networkidle0',
		})
		await page.evaluate(() => window.runFromPuppeteer())
		// await new Promise(resolve => setTimeout(resolve, 2000))
		const result = await page.evaluate(() => document.body.textContent)

		return JSON.parse(result)
	} finally {
		await navigatorInstance.close()
	}
}
