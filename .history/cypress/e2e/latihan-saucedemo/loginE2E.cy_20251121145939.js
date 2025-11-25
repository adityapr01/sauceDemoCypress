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
            login.clickLogin

        });
        
        
        


    });

}); 