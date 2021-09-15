describe('Wallet tests', () => {

    describe('Select account', () => {

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

        it('Should select and confirm spire account', () => {
            cy.visit('/profile');
            cy.get('.fetch-address-button').click();
            cy.confirmAddress();
        })

    })

})
