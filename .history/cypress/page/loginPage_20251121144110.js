class LoginPage{
    usernameField = '#user-name';
    passwordField = '#password';
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
        cy.get(this.usernameField).type(this.username);

    }
    static setPasswordField(password){
        cy.get(this.passwordField).type(this.password);

    }
    static setClickLoginButton(){
        cy.get(this.btnLogin).click();
    }
    static setAddCart(){
        cy.get(this.addCart1).click();
        cy.get(this.addCart2).click();
    }
    static setbtnBasket(){
        cy.get(this.btnBasket).click();
    }
    static setFirstName(firstName){
        cy.get(this.firstName).type(this.firstName);
    }
    static setLastName(lastName){
        cy.get(this.lastName).type(this.lastName)
    }
    static setPostalCode(postalCode){
        cy.get(this.postalCode).type(this.postalCode)
    }
    static setClickContinue(){
        cy.get(this.btnContinue).click()
    }
    static setClickFinish(){
        cy.get(this.btnFinish).click()
    }

    export default LoginPage;


}