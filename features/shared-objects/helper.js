module.exports = {
    waitForSpanText: function(text, exact, waitInSeconds) {
        var timeout = (waitInSeconds) ? (waitInSeconds * 1000) : DEFAULT_TIMEOUT;

        return page.waitForFunction((textToFind, exactMatch) => {

            return Array.prototype.slice.call(document.querySelectorAll('span')).some(link => {

                if (exactMatch) {
                    return link.textContent === textToFind;
                }

                return link.textContent.indexOf(textToFind) > -1;
            });

        }, { timeout: timeout }, text, exact);
    },
    selectorNotEmpty: function(selector, waitInSeconds) {
        var timeout = (waitInSeconds) ? (waitInSeconds * 1000) : DEFAULT_TIMEOUT;

        return page.waitForFunction((sel) => {

            return Array.prototype.slice.call(document.querySelectorAll(sel)).some(el => {
                return el.textContent !== "";
            });

        }, { timeout: timeout }, selector);
    }
};