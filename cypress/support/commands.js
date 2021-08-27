Cypress.Commands.add('setupSpire', () => {
    return cy.task('setupSpire');
});

Cypress.Commands.add('confirmAddress', () => {
    return cy.task('confirmAddress');
});
