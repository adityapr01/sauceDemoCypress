// cypress/page/productPage.js
/// <reference types="cypress-xpath" />




setProductBackpacks() {
    cy.xpath('//div[text()="Sauce Labs Backpack"]').should('be.visible');

}
