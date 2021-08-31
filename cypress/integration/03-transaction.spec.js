const confirmWallet = () => {
    cy.wait(5000);
    cy.get('body > div').shadow().find('a').contains('Spire').click();
    cy.wait(2000);
    cy.confirmAddress();
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
    })

    describe('Fund tests', () => {

        it('should fund some tokens', () => {
            cy.visit('/fund-withdraw');

            confirmWallet();

            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-processing-modal', { timeout: 12000 }).should('be.visible');
            cy.get('.transaction-confirmed-modal', { timeout: 10000 }).should('be.visible');
        })

        it('should throw an invalid amount error', () => {
            cy.visit('/fund-withdraw');

            confirmWallet();

            cy.get('input').type(0);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.get('.transaction-error-modal', { timeout: 12000 }).should('be.visible');
        })

        it('should throw a operation canceled error', () => {
            cy.visit('/fund-withdraw');

            confirmWallet();

            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.wait(5000);

            cy.get('.transaction-creating-modal').should('be.visible');
            
            cy.cancelTransaction();

            cy.get('.transaction-error-modal', { timeout: 12000 }).should('be.visible');
        })
        
    })

    describe('Withdraw tests', () => {
        
    })

    describe('Transaction list tests', () => {
        
    })
    
})
