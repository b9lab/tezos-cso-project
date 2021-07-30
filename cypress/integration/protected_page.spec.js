const isLoginPage = () => {
    cy.get('.page .signin').should('be.visible');
}

describe('Protected pages tests', () => {

    describe('Accessing protected pages without login', () => {

        it('Visiting the profile page I should be redirected to login page', () => {
            cy.visit('/profile');
            isLoginPage();
        })

        it('Visiting the my investment page I should be redirected to login page', () => {
            cy.visit('/personal-investment-info');
            isLoginPage();
        })

        it('Visiting the fund/withdraw page I should be redirected to login page', () => {
            cy.visit('/fund-withdraw');
            isLoginPage();
        })

        it('Visiting the transactions page I should be redirected to login page', () => {
            cy.visit('/transactions');
            isLoginPage();
        })

    })

    describe('Accessing protected pages as logged user', () => {

        beforeEach(() => {
            cy.intercept(
                {
                  method: 'GET',
                  url: '/api/auth/session',
                },
                { fixture: 'session' }
            );
        })

        it('Visiting the profile page I should see my data in the form', () => {
            cy.intercept(
                {
                  method: 'GET',
                  url: '/api/users/profile',
                },
                { fixture: 'profile' }
            );

            cy.visit('/profile');
            
            cy.get('form').should('be.visible');

            cy.fixture('profile').then((profile) => {
                cy.get('input[name="Email"][readonly]').type('test', {force: true}).should('have.value', profile.email);
                cy.get('input[name="Username"]').should('have.value', profile.name ?? '');
                cy.get('input[name="Country"]').should('have.value', profile.country ?? '');
                cy.get('input[name="Address"]').should('have.value', profile.address ?? '');
            });
        })

        it('Visiting the my investment page', () => {
            cy.visit('/personal-investment-info');
            cy.get('h1').contains('My Investment').should('be.visible');
        })

        it('Visiting the fund page', () => {
            cy.visit('/fund-withdraw');
            cy.get('h1').contains('Fund').should('be.visible');
            cy.get('h1').contains('Withdraw').should('be.visible');
        })

        it('Visiting the transactions page', () => {
            cy.visit('/transactions');
            cy.get('h1').contains('Transactions').should('be.visible');
        })

    })

})
