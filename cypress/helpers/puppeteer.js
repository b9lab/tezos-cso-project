const puppeteer = require('puppeteer-core');
const fetch = require('node-fetch');

class PuppeteerHelper {
	constructor() {
		this.puppeteerBrowser = null;
		this.mainWindow = null;
		this.walletWindow = null;
	}

	async init() {
		const debuggerDetails = await fetch(`${process.env.REMOTE_DEBUGGING_URL}/json/version`); //DevSkim: ignore DS137138
		const debuggerDetailsConfig = await debuggerDetails.json();
		const webSocketDebuggerUrl = debuggerDetailsConfig.webSocketDebuggerUrl;

		this.puppeteerBrowser = await puppeteer.connect({
			browserWSEndpoint: webSocketDebuggerUrl,
			ignoreHTTPSErrors: true,
			defaultViewport: null,
		});
		return this.puppeteerBrowser.isConnected();
	}

	async assignWindows() {
		let pages = await this.puppeteerBrowser.pages();
		for (const page of pages) {
			if (page.url().includes('integration')) {
				this.mainWindow = page;
			} else if (page.url().includes('extension')) {
				this.walletWindow = page;
			}
		}
		return true;
	}

	async switchToCypressWindow() {
		await this.mainWindow.bringToFront();
		return true;
	}

	async switchToWalletWindow() {
		await this.walletWindow.bringToFront();
		return true;
	}

	async switchToWalletNotification() {
		let pages = await this.puppeteerBrowser.pages();
		for (const page of pages) {
			if (page.url().includes('notification')) {
				await page.bringToFront();
				return page;
			}
		}
	}

	async closeWalletWindow() {
		await this.walletWindow.close();
		this.walletWindow = null;
		return true;
	}

	async waitFor(selector, page = this.walletWindow) {
		await page.waitForFunction(
			`document.querySelector('${selector}') && document.querySelector('${selector}').clientHeight != 0`,
			{ visible: true },
		);
		// puppeteer going too fast breaks wallet extension in corner cases
		await page.waitForTimeout(300);
	}

	async waitAndClick(selector, page = this.walletWindow) {
		await this.waitFor(selector, page);
		await page.evaluate(
			selector => document.querySelector(selector).click(),
			selector,
		);
	}

	async waitAndClickByText(selector, text, page = this.walletWindow) {
		await this.waitFor(selector, page);
		await page.evaluate((selector, text) => {
			[...document.querySelectorAll(selector)]
				.find(element => element.textContent === text)
				.click();
		}, selector, text);
	}

	async waitAndSetValue(text, selector, page = this.walletWindow) {
		await this.waitFor(selector, page);
		await page.evaluate(
			selector => (document.querySelector(selector).value = ''),
			selector,
		);
		await page.focus(selector);
		await page.keyboard.type(text);
	}
}

module.exports = PuppeteerHelper;
