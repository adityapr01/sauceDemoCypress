// cypress/page/addCartPage.js


class addCartPage{

    backToProducts = '#back-to-products';
    productByNameLink = '#item_3_title_link';
    addCart1 = '#add-to-cart-sauce-labs-backpack';
    addCart2 = '#add-to-cart-sauce-labs-bike-light';
    addCart3 = '#add-to-cart-sauce-labs-bolt-t-shirt'
    addCart4 = '#add-to-cart-sauce-labs-fleece-jacket'
    addCart5 = '#add-to-cart-sauce-labs-onesie'
    addCart6 = '#add-to-cart-test.allthethings()-t-shirt-(red)'
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

    setAllCart() {
        cy.get(this.addCart1).click();
        cy.get(this.addCart2).click();
        cy.get(this.addCart3).click();
        cy.get(this.addCart4).click();
        cy.get(this.addCart5).click();
        cy.get(this.addCart6).click();
    }
    
    openBasket() {
        cy.get(this.btnBasket).click();
        cy.get('.cart_list').should('be.visible')
        cy.get(this.btnCheckout).click()
    }
    
    setFirstName(firstName) {
        cy.get(this.firstName).type(firstName);
    }

    setLastName(lastName) {
        cy.get(this.lastName).type(lastName);
    }

    setPostalCode(postalCode) {
        cy.get(this.postalCode).type(postalCode);
    }
     
    clickContinue() {
        cy.get(this.btnContinue).click();
    }

    clickFinish() {
        cy.get(this.btnFinish).click();
    }







}
