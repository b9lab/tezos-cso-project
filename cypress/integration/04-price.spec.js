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
    expect(response.body.minimumFundingGoal).to.be.greaterThanOrEqual(response.body.totalInvestment);
    expect(response.body.tokenBuyPrice).to.be.equal(response.body.tokenSellPrice);
}

const checkPrices = (oldBuyPrice, oldSellPrice, newBuyPrice, newSellPrice, isBuying, expectedBuyPrice, expectedSellPrice) => {
    expect(oldBuyPrice).to.be.greaterThan(oldSellPrice);
    expect(newBuyPrice).to.be.greaterThan(newSellPrice);
    if (isBuying) {
        expect(newSellPrice).to.be.greaterThan(oldSellPrice);
        expect(newBuyPrice).to.be.greaterThan(oldBuyPrice);
    } else {
        expect(newSellPrice).to.be.lessThan(oldSellPrice);
        expect(newBuyPrice).to.be.lessThan(oldBuyPrice);
    }
    expect(newBuyPrice).to.be.equal(expectedBuyPrice);
    expect(newSellPrice).to.be.equal(expectedSellPrice);
}

describe('Price tests', () => {
    let oldBuyPrice;
    let oldSellPrice;

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

        cy.openModalAndBuy(500);
        cy.wait(5000);
        cy.confirmTransaction();
        cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgNotReached(response);
        });
    })

    it('buy and sell price should diverge if MFG is reached', () => {
        cy.visit('/fund-withdraw');

        let amount;

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgNotReached(response);
            oldBuyPrice = response.body.tokenBuyPrice;
            oldSellPrice = response.body.tokenSellPrice;
            amount = format_tez(response.body.minimumFundingGoal - response.body.totalInvestment);

            cy.openModalAndBuy(amount);
            cy.wait(5000);
            cy.confirmTransaction();
            cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');

            // purchase another 500 tez to pass mfg
            cy.get('.modal-overlay').click('topRight');
            cy.openModalAndBuy(500); 
            cy.wait(5000);
            cy.confirmTransaction();
            cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');

            cy.request('api/investment-numbers').then((resp) => {
                verifyMfgReached(resp);
                checkPrices(oldBuyPrice, oldSellPrice, resp.body.tokenBuyPrice, resp.body.tokenSellPrice, true, 1730300, 2253383);
                oldBuyPrice = resp.body.tokenBuyPrice;
                oldSellPrice = resp.body.tokenSellPrice;
            });
        });
    })

    it('should decrease both buy and sell price', () => {
        cy.visit('/fund-withdraw');
        
        cy.openModalAndSell(500);
        cy.wait(5000);
        cy.confirmTransaction();
        cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgReached(response);
            checkPrices(oldBuyPrice, oldSellPrice, response.body.tokenBuyPrice, response.body.tokenSellPrice, false, 1730300, 1964556);
            oldBuyPrice = response.body.tokenBuyPrice;
            oldSellPrice = response.body.tokenSellPrice;
        });
    })

    it('should increase both buy and sell price', () => {
        cy.visit('/fund-withdraw');
        
        cy.openModalAndBuy(500);
        cy.wait(5000);
        cy.confirmTransaction();
        cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgReached(response);
            checkPrices(oldBuyPrice, oldSellPrice, response.body.tokenBuyPrice, response.body.tokenSellPrice, false, 2070900, 1119879);
            oldBuyPrice = response.body.tokenBuyPrice;
            oldSellPrice = response.body.tokenSellPrice;
        });
    })
    
})
