const { recurse } = require('cypress-recurse')
describe('Email confirmation', () => {
    let userEmail
  
    before(() => {
        // get and check the test email only once before the tests
        cy.task('getUserEmail').then((email) => {
            expect(email).to.be.a('string')
            userEmail = email
        })
    })
  
    it('sends confirmation code', () => {
        cy.visit('/sign-in');

        cy.url().should('include', '/api/auth/signin');

        cy.get('#input-email-for-email-provider').type(userEmail).should('have.value', userEmail);
        
        cy.contains('Sign in with Email').click();
        cy.contains('Check your email');

        recurse(
            () => cy.task('getLastEmail'), // Cypress commands to retry
            Cypress._.isObject, // keep retrying until the task returns an object
            {
              timeout: 60000, // retry up to 1 minute
              delay: 5000, // wait 5 seconds between attempts
            },
        ).its('html').then((html) => {
            cy.document({ log: false }).invoke({ log: false }, 'write', html)
        });

        cy.get('a').invoke('removeAttr', 'target').contains('Sign in').click();

        cy.contains('Profile');
    })
})
