const { expect } = require("chai");
const { format_tez } = require("../../src/helpers");

const verifyMfgReached = (response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('minimumFundingGoal');
    expect(response.body).to.have.property('totalInvestment');
    expect(response.body.totalInvestment).to.be.greaterThan(response.body.minimumFundingGoal);
    expect(response.body.tokenBuyPrice).to.be.not.equal(response.body.tokenSellPrice);
}

const verifyMfgNotReached = (response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('minimumFundingGoal');
    expect(response.body).to.have.property('totalInvestment');
    expect(response.body.minimumFundingGoal).to.be.greaterThan(response.body.totalInvestment);
    expect(response.body.tokenBuyPrice).to.be.equal(response.body.tokenSellPrice);
}

describe('Price tests', () => {

    before(() => {
        cy.wait(2000);
        cy.setupSpire();
    })

    beforeEach(() => {
        cy.intercept(
            {
              method: 'GET',
              url: '/api/auth/session',
            },
            { fixture: 'session' }
        );
        cy.intercept(
            {
              method: 'GET',
              url: '/api/users/profile',
            },
            { fixture: 'profile' }
        );
        cy.restoreLocalStorageCache();
    })
      
    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    it('buy and sell price should be equal if MFG is not reached', () => {
        cy.visit('/fund-withdraw');
        cy.confirmAddress();

        let amount;

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgNotReached(response);
            amount = format_tez((response.body.minimumFundingGoal - response.body.totalInvestment) / 2);

            cy.openModalAndBuy(amount);
            cy.wait(5000);
            cy.confirmTransaction();
            cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');

            cy.request('api/investment-numbers').then((response) => {
                verifyMfgNotReached(response);
            });
        });
    })

    it('buy and sell price should diverge if MFG is reached', () => {
        cy.visit('/fund-withdraw');

        let amount;

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgNotReached(response);
            amount = format_tez((response.body.minimumFundingGoal - response.body.totalInvestment)) + 10;

            cy.openModalAndBuy(amount);
            cy.wait(5000);
            cy.confirmTransaction();
            cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');

            cy.request('api/investment-numbers').then((response) => {
                verifyMfgReached(response);
            });
        });
    })
    
})
