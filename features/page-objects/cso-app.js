module.exports = {

    url: 'http://localhost:3000/',

    paths: {
        investmentInfo: "general-investment-info",
        profile: "profile",
        login: "api/auth/signin",
        myInvestment: "personal-investment-info",
        fund: "fund",
        withdraw: "withdraw",
        transactions: "transactions"
    },

    selectors: {
        title: 'main h1.text-center',
        investmentAmounts: 'h1 > .tez-amount > .amount',
        loginPage: '.page .signin'
    },

    amountsNotEmpty: async function() {
        return sharedObjects.helper.selectorNotEmpty(this.selectors.investmentAmounts)
    }
};