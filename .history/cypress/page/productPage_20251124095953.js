// cypress/page/productPage.js
/// <reference types="cypress-xpath" />


class productPage{

    backToProducts = '#back-to-products';

    
    setProductBackpacks() {
        cy.xpath('//div[text()="Sauce Labs Backpack"]').should('be.visible');
        cy.get('//div[text()="Sauce Labs Backpack"]').click()
    } 
    
    

    
}


