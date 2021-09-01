Cypress.Commands.add('setupSpire', () => {
    return cy.task('setupSpire');
});

Cypress.Commands.add('confirmAddress', () => {
    cy.wait(5000);
    cy.get('body > div').shadow().find('a').contains('Spire').click();
    cy.wait(2000);
    return cy.task('confirmAddress');
});

Cypress.Commands.add('confirmTransaction', () => {
    return cy.task('confirmTransaction');
});

Cypress.Commands.add('cancelTransaction', () => {
    return cy.task('cancelTransaction');
});
