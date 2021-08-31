/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
require('dotenv').config();

const makeEmailAccount = require('./email-account');
const PuppeteerHelper = require('../helpers/puppeteer');
const SpireHelper = require('../helpers/spire');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async (on, config) => {
  const emailAccount = await makeEmailAccount();
  const puppeteerHelper = new PuppeteerHelper();
  const spireHelper = new SpireHelper(puppeteerHelper);

  on('task', {
    getUserEmail() {
      return emailAccount.email
    },
    getLastEmail() {
      return emailAccount.getLastEmail();
    },
    setupSpire: async () => {
      const config = {
        accountMnemonic: process.env.TEST_ACCOUNT_MNEMONIC,
        customRpcUrl: process.env.NEXT_PUBLIC_NODE_PROVIDER,
      }
      return await spireHelper.initialSetup(config);
    },
    confirmAddress: async () => {
      return await spireHelper.confirm();
    },
    confirmTransaction: async () => {
      return await spireHelper.confirm();
    },
    cancelTransaction: async () => {
      return await spireHelper.cancel();
    }
  })

  on('before:browser:launch', (browser, launchOptions) => {
    launchOptions.extensions.push(__dirname + '/extensions/gpfndedineagiepkpinficbcbbgjoenn')
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-background-timer-throttling');
      launchOptions.args.push('--disable-backgrounding-occluded-windows');
      launchOptions.args.push('--disable-renderer-backgrounding');

      const hostArg = launchOptions.args.find(arg => arg.startsWith('--remote-debugging-address'));
      const host = hostArg.split('=')[1];
      const rdpArgument = launchOptions.args.find(arg => arg.startsWith('--remote-debugging-port'));
      const port = parseInt(rdpArgument.split('=')[1]);
      process.env.REMOTE_DEBUGGING_URL = `http://${host}:${port}`;
    }

    return launchOptions
  })

  return config;
}
