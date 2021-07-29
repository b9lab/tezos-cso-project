const { recurse } = require('cypress-recurse');

describe('Signin with email', () => {
    let userEmail
  
    before(() => {
        // get and check the test email only once before the tests
        cy.task('getUserEmail').then((email) => {
            expect(email).to.be.a('string')
            userEmail = email
        })
    })
  
    it('should sign in', () => {
        cy.visit('/sign-in');

        cy.url().should('include', '/api/auth/signin');

        cy.get('#input-email-for-email-provider').type(userEmail).should('have.value', userEmail);
        
        cy.contains('Sign in with Email').should('be.visible').click();
        cy.contains('Check your email').should('be.visible');

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

        cy.wait(1000);

        cy.getCookie('next-auth.session-token').should('exist');
    })

    it('should throw a link not valid anymore error', () => {
        cy.visit('/sign-in');

        cy.task('getLastEmail').its('html').then((html) => {
            cy.document({ log: false }).invoke({ log: false }, 'write', html)
        });

        cy.get('a').invoke('removeAttr', 'target').contains('Sign in').click();

        cy.get('.page .error').contains('Unable to sign in').should('be.visible');
    })
    
})
