const confirmWallet = () => {
    cy.wait(5000);
    cy.get('body > div').shadow().find('a').contains('Spire').click();
    cy.wait(2000);
    cy.confirmAddress();
}

const switchToWithdrawPage = () => {
    cy.get('.sell-page-link').click();
    cy.get('h1').contains('Withdraw').should('be.visible');
}

describe('Transaction tests', () => {

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
    })

    describe('Fund tests', () => {

        beforeEach(() => {
            cy.visit('/fund-withdraw');
            confirmWallet();
        })

        it('should fund some tokens', () => {
            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-processing-modal', { timeout: 12000 }).should('be.visible');
            cy.get('.transaction-confirmed-modal', { timeout: 10000 }).should('be.visible');
        })

        it('should throw an invalid amount error', () => {
            cy.get('input').type(0);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.get('.transaction-error-modal', { timeout: 12000 }).should('be.visible');
        })

        it('should throw a operation canceled error', () => {
            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.wait(5000);

            cy.get('.transaction-creating-modal').should('be.visible');

            cy.cancelTransaction();

            cy.get('.transaction-error-modal', { timeout: 12000 }).should('be.visible');
        })
        
    })

    describe('Withdraw tests', () => {

        beforeEach(() => {
            cy.visit('/fund-withdraw');
            confirmWallet();
            cy.wait(5000); // wait for notification to disappear
            switchToWithdrawPage();
        })

        it('should fund some tokens', () => {
            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Sell').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-processing-modal', { timeout: 12000 }).should('be.visible');
            cy.get('.transaction-confirmed-modal', { timeout: 10000 }).should('be.visible');
        })

        it('should throw an invalid amount error', () => {
            cy.get('input').type(0);
            cy.get('button[type=submit]').contains('Sell').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.get('.transaction-error-modal', { timeout: 12000 }).should('be.visible');
        })

        it('should throw a operation canceled error', () => {
            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Sell').click();

            cy.wait(5000);

            cy.get('.transaction-creating-modal').should('be.visible');

            cy.cancelTransaction();

            cy.get('.transaction-error-modal', { timeout: 12000 }).should('be.visible');
        })

    })

    describe('Transaction list tests', () => {
        
    })
    
})
