import LoginE2E from '../../page/LoginPage.js'

describe ('Proses E2E Sauce Demo dengan POM', () => {

    const login = new LoginE2E();

    it('Proses E2E dengan Metode POM Sauce Demo' , () => {

        cy.fixture('dataUser').then(data => {
            const user = data.validUser;

            //Login Steps
            cy.visit('https://www.saucedemo.com/');
            login.setUsernameField(user.username);
            login.setPasswordField(user.password);
            login.clickLogin()
            //Verify Dashboard
            cy.get('.app_logo').should('be.visible')
            login.addToCart()
            //Click Basket
            login.openBasket()
        });
        cy.fixture('dataUser').then(data => {
            const user2 = data.checkoutInformatioValid
            login.setFirstName(user2.firstName)
            login.setLastName(user2.lastName)
            login.setPostalCode(user2.PostalCode)


        });
        
        
        


    });

}); 