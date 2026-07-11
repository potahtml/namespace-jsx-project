import { pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer'
import { webkit } from 'playwright'

export const startBrowser = async (browser = 'chrome') => {
	/**
	 * Playwright's webkit build targets ubuntu. On fedora the headless
	 * bundle lacks two library sonames; drop them into the bundle once
	 * per playwright upgrade (from the ubuntu debs `libicu74` and
	 * `libjpeg-turbo8`, extracted with `ar x` + `tar --zstd -xf`):
	 *
	 *     cp libicu*.so.74* libjpeg.so.8* \
	 *       ~/.cache/ms-playwright/webkit-*\/minibrowser-wpe/sys/lib/
	 */
	if (browser === 'webkit') {
		const navigatorInstance = await webkit.launch({ headless: true })
		const page = await navigatorInstance.newPage()
		return [navigatorInstance, page]
	}

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

export const browserData = async (tagNames, browser = 'chrome') => {
	const [navigatorInstance, page] = await startBrowser(browser)

	try {
		await page.exposeFunction('getData', () => tagNames)

		const url = pathToFileURL(
			process.cwd() + '/browser/index.html',
		).href

		await page.goto(url, {
			// playwright spells it without the `0`
			waitUntil: browser === 'webkit' ? 'networkidle' : 'networkidle0',
		})
		await page.evaluate(() => window.runFromPuppeteer())
		// await new Promise(resolve => setTimeout(resolve, 2000))
		const result = await page.evaluate(() => document.body.textContent)

		return JSON.parse(result)
	} finally {
		await navigatorInstance.close()
	}
}
