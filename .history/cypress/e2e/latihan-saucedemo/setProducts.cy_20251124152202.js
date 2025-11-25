import LoginE2E from '../../page/LoginPage.js'
import setProduct from '/../../page/productPage.js'

describe ('Cek Detail Products', () => {

    const login = new LoginE2E();
    const detailProducts = new setProduct();

    it('Melihat Detail Produk di Sauce Demo', () => {

         cy.visit('https://www.saucedemo.com/');
         login.setUsernameField(user.username);
         login.setPasswordField(user.password);
         login.clickLogin()
    });


}); 