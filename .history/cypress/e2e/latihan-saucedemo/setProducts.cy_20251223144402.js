import LoginE2E from '../../page/loginPage.js'
import setProduct from '../../page/productPage.js'
import setProduct from '../../page/addCartPage.js'

describe ('Cek Detail Products', () => {

    const login = new LoginE2E();
    const detailProducts = new setProduct();
    const addCart = new setProduct();

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

    it('Add all Cart Product', () => {

        //Login Section
        cy.fixture('dataUser').then(data => {

            const user = data.validUser;

            cy.visit('https://www.saucedemo.com/');
            login.setUsernameField(user.username);
            login.setPasswordField(user.password);
            login.clickLogin()
        });
         //Check Add All Cart Product
         addCart.setAllCart();
    });


}); 