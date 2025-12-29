import loginE2E from '../../page/loginPage.js';
import setProduct from '../../page/productPage.js'

describe ('Cek Detail Products', () => {

    const login = new LoginE2E();
    const detailProducts = new setProduct();

    it('Melihat Detail Produk di Sauce Demo', () => {

        //Login Section
        cy.fixture('dataUser').then(data => {

            const user = data.validUser;

            cy.visit('https://www.saucedemo.com/');
            login.setUsernameField(user.username);
            login.setPasswordField(user.password);
            login.clickLogin()

        });
         
         //Check Detail Product
         detailProducts.setProductBackpacks();
         detailProducts.setLabsBikeLight();

         //SortProducts
         detailProducts.setSortZA();
         detailProducts.setSortPriceLowtoHigh();
         detailProducts.setSortHightoLow();
    });


}); 