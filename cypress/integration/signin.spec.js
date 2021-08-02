const { recurse } = require('cypress-recurse');

describe('Signin tests', () => {

    describe('Signin with google', () => {

        it('should sign in', () => {
            const username = Cypress.env('GOOGLE_USER');
            const password = Cypress.env('GOOGLE_PW');
            const loginUrl = Cypress.env('SITE_NAME') + "/sign-in";
            const cookieName = Cypress.env('COOKIE_NAME');
            const socialLoginOptions = {
                username,
                password,
                loginUrl,
                headless: true,
                logs: true,
                isPopup: false,
                screenshotOnError: true,
                loginSelector: `form[action="${Cypress.env(
                    'SITE_NAME'
                )}/api/auth/signin/google"] > button`,
                postLoginSelector: '.home',
            }

            return cy
                .task('GoogleSocialLogin', socialLoginOptions)
                .then(({ cookies }) => {
                    cy.clearCookies();

                    const cookie = cookies.filter(cookie => cookie.name === cookieName).pop();

                    if (cookie) {
                        cy.setCookie(cookie.name, cookie.value, {
                            domain: cookie.domain,
                            expiry: cookie.expires,
                            httpOnly: cookie.httpOnly,
                            path: cookie.path,
                            secure: cookie.secure,
                        });

                        Cypress.Cookies.defaults({
                            preserve: cookieName,
                        });
                        
                        // remove the two lines below if you need to stay logged in
                        // for your remaining tests
                        cy.visit('/api/auth/signout');
                        cy.get('form').submit();
                        cy.clearCookies();
                    }
                });
        })
    })

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

        it('should throw a link no longer valid error', () => {
            cy.visit('/sign-in');

            cy.task('getLastEmail').its('html').then((html) => {
                cy.document({ log: false }).invoke({ log: false }, 'write', html)
            });

            cy.get('a').invoke('removeAttr', 'target').contains('Sign in').click();

            cy.get('.page .error').contains('Unable to sign in').should('be.visible');
        })
        
    })
    
})
