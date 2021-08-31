Cypress.Commands.add('setupSpire', () => {
    return cy.task('setupSpire');
});

Cypress.Commands.add('confirmAddress', () => {
    return cy.task('confirmAddress');
});

Cypress.Commands.add('confirmTransaction', () => {
    return cy.task('confirmTransaction');
});

Cypress.Commands.add('cancelTransaction', () => {
    return cy.task('cancelTransaction');
});
