/// <reference types="Cypress" />

describe('Test File upload via webdriveruni', () => {
    it('Upload a file...', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({forece:true});

        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')
        cy.get('#submit-button').click();
        
    });

    it('Upload No file', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({forece:true})
        
        cy.get('#submit-button').click();
    });
});