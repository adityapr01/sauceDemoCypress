// cypress/page/productPage.js
import 'cypress-xpath';


class productPage{

    backToProducts = '#back-to-products';
    sortProducts = '.product_sort_container';
    sortNameZA = '//option[@value="za"]';
    sortPriceLowtoHigh = '//option[@value="lohi"]';
    productByNameLink = '#item_3_title_link';
    addCart1 = '#add-to-cart-sauce-labs-backpack';
    addCart2 = '#add-to-cart-sauce-labs-bike-light';
    addCart3 = '#add-to-cart-sauce-labs-bolt-t-shirt'
    addCart4 = '#add-to-cart-sauce-labs-fleece-jacket'
    addCart5 = '#add-to-cart-sauce-labs-onesie'
    addCart6 = '#add-to-cart-test.allthethings()-t-shirt-(red)'
    btnBasket = '#shopping_cart_container';
    btnCheckout = '#checkout';

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
        //assert after sort ZA
        cy.get(this.productByNameLink).should('be.visible')
        cy.wait(500)
    }
    

    setSortPriceLowtoHigh(){
        cy.get(this.sortProducts).select('Price (low to high)')
        //assert after sort ZA
        cy.xpath('//div[text()="Sauce Labs Onesie"]').should('be.visible')
        cy.wait(500)
    }
    
    setSortHightoLow(){
        cy.get(this.sortProducts).select('Price (high to low)')
        //assert after sort high to low
        cy.xpath('//div[text()="Sauce Labs Fleece Jacket"]').should('be.visible')
        cy.wait(400)
        
    }

    setAllCart() {
        cy.wait(500)
        cy.get(this.addCart1).click();
        cy.get(this.addCart2).click();
        cy.get(this.addCart3).click();
        cy.get(this.addCart4).click();
        cy.get(this.addCart5).click();
        cy.get(this.addCart6).click();
        cy.wait(200)

        //Click Basket Case
        cy.get(this.btnBasket).click();
        cy.wait(500);
        cy.get('.cart_list').should('be.visible');
        cy.get(this.btnCheckout).click();




    }


}

export default productPage;


