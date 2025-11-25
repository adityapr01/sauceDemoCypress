import loginE2E from '../../page/loginPage.js'

describe ('Proses E2E Sauce Demo dengan POM', () => {
    
    const login = new loginE2E();

    it('Proses E2E dengan Metode POM Sauce Demo' , () => {
        
        //Login Steps
        cy.visit('https://www.saucedemo.com/');
        login.setUsernameField(username)


    });

});