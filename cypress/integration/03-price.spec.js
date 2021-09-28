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
    expect(newBuyPrice).to.be.greaterThan(newSellPrice);
    if (isBuying) {
        expect(newSellPrice).to.be.greaterThan(oldSellPrice);
        expect(newBuyPrice).to.be.greaterThan(oldBuyPrice);
    } else {
        expect(newSellPrice).to.be.lessThan(oldSellPrice);
    }
    expect(newBuyPrice).to.be.equal(expectedBuyPrice);
    expect(newSellPrice).to.be.equal(expectedSellPrice);
}

const buy = (amount, firstTime) => {
    cy.openModalAndBuy(amount, firstTime);
    cy.wait(5000);
    cy.confirmTransaction();
    cy.get('.transaction-success', { timeout: 50000 }).should('be.visible');
}

const sell = (amount) => {
    cy.openModalAndSell(amount);
    cy.wait(5000);
    cy.confirmTransaction();
    cy.get('.transaction-success', { timeout: 50000 }).should('be.visible');
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

        buy(500, true);

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgNotReached(response);
        });
    })

    it('shouldn\'t be able to sell when MFG is not reached', () => {
        cy.visit('/fund-withdraw');

        cy.get('.sell-cta').should('not.exist');
    })

    it('buy and sell price should diverge if MFG is reached', () => {
        cy.visit('/fund-withdraw');

        let amount;

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgNotReached(response);
            oldBuyPrice = response.body.tokenBuyPrice;
            oldSellPrice = response.body.tokenSellPrice;
            amount = format_tez(response.body.minimumFundingGoal - response.body.totalInvestment);

            buy(amount);

            cy.get('.modal-overlay').click('topRight');

            // purchase another 500 tez to pass mfg
            buy(500);

            cy.request('api/investment-numbers').then((resp) => {
                verifyMfgReached(resp);
                checkPrices(oldBuyPrice, oldSellPrice, resp.body.tokenBuyPrice, resp.body.tokenSellPrice, true, 2449000, 2362652);
                oldBuyPrice = resp.body.tokenBuyPrice;
                oldSellPrice = resp.body.tokenSellPrice;
            });
        });
    })

    it('should decrease sell price', () => {
        cy.visit('/fund-withdraw');
        
        sell(500);

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgReached(response);
            checkPrices(oldBuyPrice, oldSellPrice, response.body.tokenBuyPrice, response.body.tokenSellPrice, false, 2449000, 826684);
            oldBuyPrice = response.body.tokenBuyPrice;
            oldSellPrice = response.body.tokenSellPrice;
        });
    })

    it('should increase both buy and sell price', () => {
        cy.visit('/fund-withdraw');
        
        buy(500);

        cy.request('api/investment-numbers').then((response) => {
            verifyMfgReached(response);
            checkPrices(oldBuyPrice, oldSellPrice, response.body.tokenBuyPrice, response.body.tokenSellPrice, true, 3449000, 2125528);
            oldBuyPrice = response.body.tokenBuyPrice;
            oldSellPrice = response.body.tokenSellPrice;
        });
    })
    
})
