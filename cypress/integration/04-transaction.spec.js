describe('Transaction tests', () => {

    let transactionIds = []; 

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

            cy.openModalAndBuy(10);

            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-success', { timeout: 50000 }).should('be.visible');
            cy.get('.transaction-item').invoke('attr', 'id').then(id => {
                transactionIds.push(id);
            })
        })

        it('should throw an invalid amount error', () => {
            cy.visit('/fund-withdraw');

            cy.openModalAndBuy(0);

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })

        it('should throw a operation canceled error', () => {
            cy.visit('/fund-withdraw');

            cy.openModalAndBuy(10);

            cy.wait(5000);
            cy.cancelTransaction();

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })

        it('should throw a not enough tez in account error', () => {
            cy.visit('/fund-withdraw');

            cy.openModalAndBuy(100000);

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })
        
    })

    describe('Withdraw tests', () => {

        it('should withdraw some tokens', () => {
            cy.visit('/fund-withdraw');
            
            cy.openModalAndSell(2);

            cy.wait(5000);
            cy.confirmTransaction();

            cy.get('.transaction-success', { timeout: 50000 }).should('be.visible');
            cy.get('.transaction-item').invoke('attr', 'id').then(id => {
                transactionIds.push(id);
            });
        })

        it('should throw an invalid amount error', () => {
            cy.visit('/fund-withdraw');

            cy.openModalAndSell(0);

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })

        it('should throw a operation canceled error', () => {
            cy.visit('/fund-withdraw');

            cy.openModalAndSell(2);
            
            cy.wait(5000);
            cy.cancelTransaction();

            cy.get('.transaction-error', { timeout: 30000 }).should('be.visible');
        })
    })

    describe('Transaction list tests', () => {

        it('should list the previously performed transactions', () => {
            cy.visit('/personal-investment-info');

            cy.get(`#${transactionIds[0]}`, { timeout: 10000 }).contains('Funding').should('be.visible');
            cy.get(`#${transactionIds[1]}`).contains('Withdrawal').should('be.visible');
        })

    })
    
})
