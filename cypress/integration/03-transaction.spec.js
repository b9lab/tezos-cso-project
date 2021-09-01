const closeToastMessage = () => {
    cy.wait(5000);
    cy.get('body > div').shadow().find('#beacon-toast-button-close').click();
}

const switchToWithdrawPage = () => {
    cy.get('.sell-page-link').click();
    cy.get('h1').contains('Withdraw').should('be.visible');
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
            cy.confirmAddress();

            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal', { timeout: 20000 }).should('be.visible');

            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-processing-modal', { timeout: 20000 }).should('be.visible');
            cy.get('.transaction-confirmed-modal', { timeout: 20000 }).should('be.visible');
            // closeToastMessage();
        })

        it('should throw an invalid amount error', () => {
            cy.visit('/fund-withdraw');
            // cy.confirmAddress();

            cy.get('input').type(0);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal', { timeout: 20000 }).should('be.visible');
            cy.get('.transaction-error-modal', { timeout: 20000 }).should('be.visible');
            // closeToastMessage();
        })

        it('should throw a operation canceled error', () => {
            cy.visit('/fund-withdraw');
            // cy.confirmAddress();

            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal', { timeout: 20000 }).should('be.visible');

            cy.wait(5000);
            cy.cancelTransaction();

            cy.get('.transaction-error-modal', { timeout: 20000 }).should('be.visible');
            // closeToastMessage();
        })

        it('should throw a not enough tez in account error', () => {
            cy.visit('/fund-withdraw');
            // cy.confirmAddress();

            cy.get('input').type(110);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal', { timeout: 20000 }).should('be.visible');
            cy.get('.transaction-error-modal', { timeout: 20000 }).should('be.visible');
            // closeToastMessage();
        })
        
    })

    describe('Withdraw tests', () => {

        it('should withdraw some tokens', () => {
            cy.visit('/fund-withdraw');
            // cy.confirmAddress();
            // cy.wait(5000); // wait for notification to disappear
            switchToWithdrawPage();

            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Sell').click();

            cy.get('.transaction-creating-modal', { timeout: 20000 }).should('be.visible');

            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-processing-modal', { timeout: 20000 }).should('be.visible');
            cy.get('.transaction-confirmed-modal', { timeout: 20000 }).should('be.visible');
            // closeToastMessage();
        })

        it('should throw an invalid amount error', () => {
            cy.visit('/fund-withdraw');
            // cy.confirmAddress();
            // cy.wait(5000); // wait for notification to disappear
            switchToWithdrawPage();

            cy.get('input').type(0);
            cy.get('button[type=submit]').contains('Sell').click();

            cy.get('.transaction-creating-modal', { timeout: 20000 }).should('be.visible');
            cy.get('.transaction-error-modal', { timeout: 20000 }).should('be.visible');
            // closeToastMessage();
        })

        it('should throw a operation canceled error', () => {
            cy.visit('/fund-withdraw');
            // cy.confirmAddress();
            // cy.wait(5000); // wait for notification to disappear
            switchToWithdrawPage();

            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Sell').click();
            
            cy.get('.transaction-creating-modal', { timeout: 20000 }).should('be.visible');
            
            cy.wait(5000);
            cy.cancelTransaction();

            cy.get('.transaction-error-modal', { timeout: 20000 }).should('be.visible');
            // closeToastMessage();
        })
    })

    describe('Transaction list tests', () => {

        it('should list the previously performed transactions', () => {
            cy.visit('/transactions');
            // cy.confirmAddress();

            cy.get('.transaction-item').should('have.length', 2);
            cy.get('.transaction-item').contains('Funding').should('be.visible');
            cy.get('.transaction-item').contains('Withdrawal').should('be.visible');
            closeToastMessage();
        })

    })
    
})
