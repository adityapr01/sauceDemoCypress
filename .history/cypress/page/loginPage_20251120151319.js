class loginPage{
    usernameField = '#user-name';
    password = '#password';
    btnLogin = '#login-button';
    addcart1 = '#add-to-cart-sauce-labs-backpack';
    addCart2 = '#add-to-cart-sauce-labs-bike-light';
    btnBasket = '#shopping_cart_container';
    btnCheckout = '#checkout';
    firstName = '#first-name';
    lastName = '#last-name';
    postalCode = '#postal-code';
    btnContinue = '#continue';
    btnFinish = '#finish';
     
    static setUsernameField(username){
        cy.get(this.usernameField).type(this.username)

    }


}