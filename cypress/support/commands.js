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

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

Cypress.Commands.add('openModalAndBuy', (amount, firstTime) => {
    cy.get('.buy-cta').click();
    cy.get('h1').contains('Buy TZM').should('be.visible');
    cy.get('input').type(amount);
    cy.get('button[type=submit]').contains('Buy').click();
    if (firstTime) {
        cy.confirmAddress();
    }
    cy.get('.processing-button').should('be.visible');
});

Cypress.Commands.add('openModalAndSell', (amount, firstTime) => {
    cy.get('.sell-cta').click();
    cy.get('h1').contains('Sell TZM').should('be.visible');
    cy.get('input').type(amount);
    cy.get('button[type=submit]').contains('Sell').click();
    if (firstTime) {
        cy.confirmAddress();
    }
    cy.get('.processing-button').should('be.visible');
});
