// cypress/page/loginPage.js

class LoginPage {
    usernameField = '#user-name';
    passwordField = '#password';
    btnLogin = '#login-button';
    addCart1 = '#add-to-cart-sauce-labs-backpack';
    addCart2 = '#add-to-cart-sauce-labs-bike-light';
    btnBasket = '#shopping_cart_container';
    btnCheckout = '#checkout';
    firstName = '#first-name';
    lastName = '#last-name';
    postalCode = '#postal-code';
    btnContinue = '#continue';
    btnFinish = '#finish';

    setUsernameField(username) {
        cy.get(this.usernameField).type(username);
    }

    setPasswordField(password) {
        cy.get(this.passwordField).type(password);

    }
    clickLogin() {
        cy.get(this.btnLogin).click();
        cy.title().should('include', 'Swag Labs');

    }

    addToCart() {
        cy.get(this.addCart1).click();
        cy.get(this.addCart2).click();
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

export default LoginPage;
