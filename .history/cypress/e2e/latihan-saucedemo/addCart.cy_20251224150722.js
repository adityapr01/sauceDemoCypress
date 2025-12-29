import LoginE2E from '../../page/loginPage.js'
import addCart from '../../page/addCartPage.js'
import { beforeEach } from 'node:test';


describe('Cek Fungsi Button Add Cart Produk', () => {

    const login = new LoginE2E();
    const addCartButton = new addCart();

    beforeEach(() => {
        //Load Bagian Fixture sekali di awal
        cy.fixture('dataUser').then((data) => {
            userData = data;
        });
    });

    it('Verify untuk klik semua item add cart di sauce demo', () => {

        //Gunakan Variabel UserData yang sudah diisi di beforeEach
        login.setUsernameField(userData.validUser.username);
        login.setPasswordField(userData.validUser.password);
        login.clickLogin()

        //Add Cart all product section
        addCartButton.setAllCart() //Options Click All Cart
        addCartButton.openBasket() //Options Basket Cart
        
        const info = userData.checkoutInformatioValid;
        addCartButton.setFirstName(info.firstName);
        addCartButton.setLastName(info.lastName);
        addCartButton.setPostalCode(info.postalCode);
        addCartButton.clickContinue();
        addCartButton.clickFinish();
    });
});