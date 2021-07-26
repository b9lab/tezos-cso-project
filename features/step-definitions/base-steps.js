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
}