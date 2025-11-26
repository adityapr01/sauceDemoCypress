// cypress/page/productPage.js
import 'cypress-xpath';


class productPage{

    backToProducts = '#back-to-products';
    sortProducts = '.product_sort_container'
    sortNameZA = '//option[@value="za"]'
    sortPriceLowtoHigh = '//option[@value="lohi"]'

    setProductBackpacks() {
        cy.xpath('//div[text()="Sauce Labs Backpack"]').should('be.visible');
        cy.xpath('//div[text()="Sauce Labs Backpack"]').click();


        //After Click product assert page detail product
        cy.xpath('//div[text()="Sauce Labs Backpack"]').should('be.visible');
        cy.get(this.backToProducts).click();

    }
    
    setLabsBikeLight() {
        
        cy.xpath('//div[text()="Sauce Labs Bike Light"]').should('be.visible');
        cy.xpath('//div[text()="Sauce Labs Bike Light"]').click()

        //After Click product assert page detail product
        cy.xpath('//div[text()="Sauce Labs Bike Light"]').should('be.visible');
        cy.get(this.backToProducts).click();

    }

    set
}

export default productPage;


