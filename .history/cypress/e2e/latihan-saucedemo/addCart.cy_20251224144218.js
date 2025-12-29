import LoginE2E from '../../page/loginPage.js'
import addCart from '../../page/addCartPage.js'


describe('Cek Fungsi Button Add Cart Produk', () => {

    const login = new LoginE2E();
    const addCartButton = new addCart();

    it('Verify untuk klik semua item add cart di sauce demo', () => {

        //Login session
         cy.fixture('dataUser').then(data => {

            const user = data.validUser; 
            cy.visit('https://www.saucedemo.com/');
            login.setUsernameField(user.username);
            login.setPasswordField(user.password);
            login.clickLogin()
         });

         //Add Cart all product section
         addCartButton.setAllCart() //Options Click All Cart
         addCartButton.openBasket() //Options Basket Cart

         const user2 = data.checkoutInformatioValid;
         addCartButton.setFirstName(user2.firstName);
         addCartButton.setLastName(user2.lastName);
         addCartButton.setPostalCode(user2.postalCode);

         addCartButton.clickContinue();
         addCartButton.clickFinish();
    });
});