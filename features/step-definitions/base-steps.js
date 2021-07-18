module.exports = function () {
    this.Given(/^I am online at the root page/, function() {
        return helpers.loadPage(pageObjects.csoApp.url);
    });

    this.Then(/^I should be able to focus the title/, async function () {
        await page.waitForSelector(pageObjects.csoApp.selectors.title);    
    });
}