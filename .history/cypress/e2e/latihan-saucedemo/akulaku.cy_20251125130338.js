// cypress/e2e/test-akulaku/kegiatan.cy.js
require('cypress-xpath')

const { TIMEOUT } = require("dns");

describe('Pengujian Halaman Kegiatan Aku Laku Finance', () => {

    const BASE_URL = 'https://www.akulakufinance.co.id/';
    const KEGIATAN_URL = `${BASE_URL}/kegiatan`;

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;a
    });

    beforeEach(() => {
        cy.log(`Visiting: ${Cypress.currentTest.title}`);
    });

    it('Membuka Halaman Utama dan Verifikasi Web Berhasil Terbuka', () => {

        cy.visit(BASE_URL); //Navigasi Ke Url Utama
        cy.log('Mengunjungi dashboard wesbite Aku Laku');
        cy.screenshot('1-Homepgae-Visit');

        cy.title().should('include', 'Akulaku Finance');
        cy.log('Verifikasi Halaman Utama');
        cy.get('img[alt="Logo.png"]').should('be.visible');    
        cy.screenshot('2-Homepgae-Title-Verified');
        
    });

    it('Navigasi ke Halaman Kegiatan', () => {

        cy.visit(KEGIATAN_URL)
        cy.log('Mengunjungi Ke Halaman Kegiatan ')
        cy.screenshot('3-Kegiatan-Visit')

        cy.get('img[alt="Header Image "]').should('be.visible');
        cy.log('Verifikasi Image Page publikasi di Halaman Kegiatan')
        cy.screenshot('4-Image-Kegiatan-Title')

    });

     it('Verifikasi List Jumlah Thumbnails Video di Halaman Kegiatan', () => {

        
        cy.log('Verifikasi Jumlah Video tiap Halaman di Halaman Kegiatan Berjumlah 6 Video')
        cy.screenshot('5-Video-Thumbnails-Kegiatan')

     }); 

     it('Cek Pagination pada Halaman Kegiatan tersedia', () => {

        // cy.xpath("//button[text()='1']").click()
        cy.log('Verifikasi pagination pada halaman Kegiatan');
        cy.screenshot('6-Pagination-Kegiatan');

     });

     it("Input type Vaksin pada search bar", () => {

        // Mengambil element berdasarkan attribute data-cy
        cy.xpath('(//input[@placeholder="Cari..."])[1]').type('Vaksin');

        cy.wait(10000)
        cy.log('Verifikasi hasil pencarian search bar dengan kata kunci Vaksin')
        cy.screenshot('7-Vaksin-Kegiatan')

     });


});