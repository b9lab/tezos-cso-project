module.exports = {

    url: 'http://localhost:3000/',

    paths: {
        investmentInfo: "general-investment-info"
    },

    selectors: {
        title: 'main h1.text-center',
        investmentAmounts: 'h1 > .tez-amount > .amount'
    },

    amountsNotEmpty: async function() {
        return sharedObjects.helper.selectorNotEmpty(this.selectors.investmentAmounts)
    }
};