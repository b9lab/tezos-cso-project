module.exports = function () {
    this.Given(/^I visit the root page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url);
    });

    this.Given(/^I visit the investment info page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url + pageObjects.csoApp.paths.investmentInfo);
    });

    this.Then(/^I should be able to focus the title/, async function () {
        await page.waitForSelector(pageObjects.csoApp.selectors.title);    
    });

    this.Then(/^I should have values in all information boxes/, async function () {
        return pageObjects.csoApp.amountsNotEmpty(); 
    });

    this.Given(/^I visit the profile page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url + pageObjects.csoApp.paths.profile);
    });

    this.Then(/^I should be on the login page/, async function () {
        return sharedObjects.helper.selectorNotEmpty(pageObjects.csoApp.selectors.signinPage);
    });

    this.Given(/^I visit the my investment page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url + pageObjects.csoApp.paths.myInvestment);
    });

    this.Given(/^I visit the fund page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url + pageObjects.csoApp.paths.fund);
    });

    this.Given(/^I visit the withdraw page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url + pageObjects.csoApp.paths.withdraw);
    });

    this.Given(/^I visit the transactions page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url + pageObjects.csoApp.paths.transactions);
    });

    this.When(/^I click on "([^"]*)"$/, async function(buttonName) {
        return pageObjects.csoApp.clickElement(buttonName);
    });
}