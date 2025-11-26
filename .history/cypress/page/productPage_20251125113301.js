// cypress/page/productPage.js
import 'cypress-xpath';


class productPage{

    backToProducts = '#back-to-products';
    sortProducts = '.product_sort_container';
    sortNameZA = '//option[@value="za"]';
    sortPriceLowtoHigh = '//option[@value="lohi"]';
    productByNameLink = '#item_3_title_link';

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

    setSortZA(){
        cy.get(this.sortProducts).select('Name (Z to A)')
        //Sort ZA
        // cy.get(this.sortNameZA).select('Name (Z to A)')
        //assert after sort ZA
        cy.get('productByNameLink').should('be.visible')
        cy.wait(500)
    }

    setSortPriceLowtoHigh(){
        cy.get(this.sortProducts).click()
        //Sort ZA
        // cy.get(this.sortPriceLowtoHigh).select('Price (low to high)')
        //assert after sort ZA
        cy.xpath('//div[text()="Sauce Labs Onesie"]').should('be.visible')
        cy.wait(500)
    }


}

export default productPage;


