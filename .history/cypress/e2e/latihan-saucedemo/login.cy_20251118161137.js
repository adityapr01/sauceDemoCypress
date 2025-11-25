
describe ('login pada sauce demo' , () => {

    it('Login sukses dengan username dan password sesuai' , () => {

        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('.app_logo').should('be.visible')

        //Add cart Product
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

        //Click Basket
        cy.get('#shopping_cart_container').click()

        //Verify Basket Case After Add Cart Product
        cy.get('.cart_list').should('be.visible')

        //checkout
        cy.get("#checkout").click()

        //checkout your information
        cy.get("#first-name").type('John')
        cy.get('#last-name').type('Doe')
        cy.get('#postal-code').type('14532')

        //click continue
        cy.get('#continue').click()

        //click finish
        cy.get('#finish').click(0)

    });

});