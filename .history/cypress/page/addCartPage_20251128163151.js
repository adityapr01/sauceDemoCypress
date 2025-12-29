// cypress/page/addCartPage.js


class addCartPage{

    backToProducts = '#back-to-products';
    productByNameLink = '#item_3_title_link';
    addCart1 = '#add-to-cart-sauce-labs-backpack';
    addCart2 = '#add-to-cart-sauce-labs-bike-light';4
    btnBasket = '#shopping_cart_container';
    removeCartBackpacks = '#remove-sauce-labs-backpack'
    removeCartBikes = '#remove-sauce-labs-bike-light'
    btnContinueShopping = '#continue-shopping'
    btnCheckout = '#checkout';
    firstName = '#first-name';
    lastName = '#last-name';
    postalCode = '#postal-code';
    btnContinue = '#continue';
    btnFinish = '#finish';

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

    setAddToCart() {
        cy.get(this.addCart1).click();
        cy.get(this.addCart2).click();
    }

    setRemoveCart() {
        cy.get(this.removeCartBackpacks).click()
        cy.get(this.removeCartBikes).click()
        cy.get(this.btnContinueShopping).click()

    }

    

}
