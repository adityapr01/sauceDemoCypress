const { describe } = require("node:test");

describe ('login pada sauce demo' , () => {

    it('Login sukses dengan username dan password sesuai' , () => {
        cy.get('user-name').type('standard_user')

    });

});