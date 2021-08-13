class SpireHelper {
    constructor(puppeteerHelper) {
        this.puppeteerHelper = puppeteerHelper;
    }

    async initialSetup(config) {
        await this.puppeteerHelper.init();
        await this.puppeteerHelper.assignWindows();

        // await this.confirmWelcomePage();

        await this.changeNetwork(config.customRpcUrl);

        // walletAddress = await module.exports.getWalletAddress();
        await this.puppeteerHelper.switchToCypressWindow();
        return true;
    }

    async confirmWelcomePage() {
        await this.puppeteerHelper.waitAndClick('ion-toggle');
        await this.puppeteerHelper.waitAndClick('ion-backdrop');
        return true;
    }

    async changeNetwork(customRpcUrl) {
        // click settings
        await this.puppeteerHelper.waitAndClick('body > app-root > ion-app > ion-split-pane > ion-menu > ion-content > ion-list > ion-menu-toggle:nth-child(3) > ion-item > ion-label');
        // click network select
        await this.puppeteerHelper.waitAndClick('#main-content > beacon-settings > ion-content > ion-list > ion-item > ion-select');

        if (customRpcUrl) {
            await this.puppeteerHelper.waitAndClickByText('.alert-radio-label.sc-ion-alert-md', 'Custom');
            // confirm network
            await this.puppeteerHelper.waitAndClickByText('.alert-button-inner.sc-ion-alert-md', 'OK');
            await this.puppeteerHelper.waitAndSetValue(customRpcUrl, '#main-content > beacon-settings > ion-content > ion-list > ion-item:nth-child(6) > ion-input > input');
            await this.puppeteerHelper.waitAndClickByText('ion-button', 'Save');
        } else {
            // select default network: florencenet
            await this.puppeteerHelper.waitAndClickByText('.alert-radio-label.sc-ion-alert-md', 'Florencenet');
            // confirm network
            await this.puppeteerHelper.waitAndClickByText('.alert-button-inner.sc-ion-alert-md', 'OK');
        }
    
        return true;
      }
}

module.exports = SpireHelper;
