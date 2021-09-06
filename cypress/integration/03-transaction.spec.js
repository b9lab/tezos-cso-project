const sell = (amount) => {
    cy.get('h2').contains('Sell TZM now').click();
    cy.get('h1').contains('Sell TZM').should('be.visible');
    cy.get('input').type(amount);
    cy.get('button[type=submit]').contains('Sell').click();
    cy.get('button').contains('Processing').should('be.visible');
}

const buy = (amount) => {
    cy.get('h2').contains('Buy TZM now').click();
    cy.get('h1').contains('Buy TZM').should('be.visible');
    cy.get('input').type(amount);
    cy.get('button[type=submit]').contains('Buy').click();
    cy.get('button').contains('Processing').should('be.visible');
}

describe('Transaction tests', () => {

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

    describe('Fund tests', () => {

        it('should fund some tokens', () => {
            cy.visit('/fund-withdraw');
            cy.confirmAddress(); // the first test needs to confirm the address

            buy(10);

            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');
        })

        it('should throw an invalid amount error', () => {
            cy.visit('/fund-withdraw');

            buy(0);

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })

        it('should throw a operation canceled error', () => {
            cy.visit('/fund-withdraw');

            buy(10);

            cy.wait(5000);
            cy.cancelTransaction();

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })

        it('should throw a not enough tez in account error', () => {
            cy.visit('/fund-withdraw');

            buy(10000);

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })
        
    })

    describe('Withdraw tests', () => {

        it('should withdraw some tokens', () => {
            cy.visit('/fund-withdraw');
            
            sell(2);

            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-success', { timeout: 30000 }).should('be.visible');
        })

        it('should throw an invalid amount error', () => {
            cy.visit('/fund-withdraw');

            sell(0);

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })

        it('should throw a operation canceled error', () => {
            cy.visit('/fund-withdraw');

            sell(2);
            
            cy.wait(5000);
            cy.cancelTransaction();

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })
    })

    describe('Transaction list tests', () => {

        it('should list the previously performed transactions', () => {
            cy.visit('/personal-investment-info');

            cy.get('.transaction-item').should('have.length', 2);
            cy.get('.transaction-item').contains('Funding').should('be.visible');
            cy.get('.transaction-item').contains('Withdrawal').should('be.visible');
        })

    })
    
})
