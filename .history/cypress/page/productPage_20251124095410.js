// cypress/page/productPage.js
/// <reference types="cypress-xpath" />


class productPage{

    setProductBackpacks() {
        cy.xpath('//div[text()="Sauce Labs Backpack"]').should('be.visible');
        cy.get('//div[text()="Sauce Labs Backpack"]').click()
    }   
    
}


