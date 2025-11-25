import LoginPage from '../../page/loginPage.js';

describe('Proses E2E POM Sauce Demo', () => {

    const login = new LoginPage();

    it('E2E Flow', () => {
        cy.visit('https://www.saucedemo.com/');

        login.setUsernameField('standard_user');
        login.setPasswordField('secret_sauce');
        login.clickLogin();

        login.addToCart();
        login.openBasket();

        login.setFirstName('Aditya');
        login.setLastName('Pratama');
        login.setPostalCode('12345');

        login.clickContinue();
        login.clickFinish();
    });

});