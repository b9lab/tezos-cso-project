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

        it('should throw an error', () => {
            cy.visit('/fund-withdraw');

            confirmWallet();

            cy.get('input').type(0);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.wait(5000);
            cy.get('.transaction-error-modal').should('be.visible');
        })

        it('should fund some tokens', () => {
            cy.visit('/fund-withdraw');

            confirmWallet();

            cy.get('input').type(10);
            cy.get('button[type=submit]').contains('Buy').click();

            cy.get('.transaction-creating-modal').should('be.visible');
            cy.wait(5000);
            cy.confirmTransaction();

            cy.wait(5000);
            cy.get('.transaction-processing-modal').should('be.visible');
            cy.wait(5000);
            cy.get('.transaction-confirmed-modal').should('be.visible');
        })
        
    })

    describe('Withdraw tests', () => {
        
    })

    describe('Transaction list tests', () => {
        
    })
    
})
