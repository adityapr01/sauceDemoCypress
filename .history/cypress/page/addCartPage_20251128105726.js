// cypress/page/addCartPage.js


class addCartPage{

    backToProducts = '#back-to-products';
    sortProducts = '.product_sort_container';
    sortNameZA = '//option[@value="za"]';
    sortPriceLowtoHigh = '//option[@value="lohi"]';
    productByNameLink = '#item_3_title_link';
    addCart1 = '#add-to-cart-sauce-labs-backpack';
    addCart2 = '#add-to-cart-sauce-labs-bike-light';
    btnBasket = '#shopping_cart_container';
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

     addToCart() {
        cy.get(this.addCart1).click();
        cy.get(this.addCart2).click();
    }




}
