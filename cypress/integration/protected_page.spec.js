const isLoginPage = () => {
    cy.get('.page .signin');
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

        it('Visiting the fund page I should be redirected to login page', () => {
            cy.visit('/fund');
            isLoginPage();
        })

        it('Visiting the withdraw page I should be redirected to login page', () => {
            cy.visit('/withdraw');
            isLoginPage();
        })

        it('Visiting the transactions page I should be redirected to login page', () => {
            cy.visit('/transactions');
            isLoginPage();
        })

    })

})