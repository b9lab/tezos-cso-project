class SpireHelper {
    constructor(puppeteerHelper) {
        this.puppeteerHelper = puppeteerHelper;
    }

    async initialSetup(config) {
        await this.puppeteerHelper.init();
        await this.puppeteerHelper.assignWindows();

        await this._enableDeveloperMode();

        await this._changeNetwork(config.customRpcUrl);

        await this._importAccount(config.accountMnemonic);

        // walletAddress = await module.exports.getWalletAddress();
        await this.puppeteerHelper.switchToCypressWindow();
        return true;
    }

    async confirmAddress() {
        // await this.puppeteerHelper.assignWindows();
        await this.puppeteerHelper.switchToWalletWindow();
        await this.puppeteerHelper.waitAndClick('beacon-request > ion-content > ion-fab > ion-button.ion-color.ion-color-primary.md.button.button-solid.ion-activatable.ion-focusable.hydrated');
        await this.puppeteerHelper.switchToCypressWindow();
        return true;
    }

    async _enableDeveloperMode() {
        await this.puppeteerHelper.waitAndClick('ion-toggle');
        await this.puppeteerHelper.waitAndClick('#ion-overlay-2 > ion-backdrop');
        return true;
    }

    async _changeNetwork(customRpcUrl) {
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

    async _importAccount(mnemonic) {
        // navigate to local secret page
        await this.puppeteerHelper.waitAndClick('body > app-root > ion-app > ion-split-pane > ion-menu > ion-content > ion-list > ion-menu-toggle:nth-child(4) > ion-item > ion-label');
        // type test account mnemonic
        await this.puppeteerHelper.waitAndSetValue(mnemonic, '#main-content > beacon-local-mnemonic > ion-content > ion-list:nth-child(1) > ion-item > ion-textarea > div > textarea');
        // save
        await this.puppeteerHelper.waitAndClick('#main-content > beacon-local-mnemonic > ion-content > ion-list:nth-child(1) > ion-button:nth-child(3)');
        // confirm
        await this.puppeteerHelper.waitAndClick('div.alert-button-group.sc-ion-alert-md > button:nth-child(2)');
        return true;
    }
}

module.exports = SpireHelper;
