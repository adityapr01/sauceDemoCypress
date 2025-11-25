import loginPage from '../../page/loginPage.js'

describe ('Proses E2E Sauce Demo dengan POM', () => {

    const login = new loginPage();

    it('Proses E2E dengan Metode POM Sauce Demo' , () => {
        
        //Login Steps
        cy.visit('https://www.saucedemo.com/');
        this.setUsernameField.type(username);
        this.setPasswordField.type(password);
        this.setClickLoginButton;


    });

});