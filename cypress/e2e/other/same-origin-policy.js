/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it.skip("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://www.automationteststore.com/')
    });

    it("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr','target').click();
    });

    it('Origin command', () => {
        cy.origin('webdriveruniversity.com/', () => {
            cy.visit('/');
        })
        cy.origin('automationteststore.com/', () => {
            cy.visit('/')
        })

        //Ove posete bi trebalo da rade bez cy.origin, ali meni ne rade, daje mi info da su razliciti origini...
        // cy.visit('http://www.webdriveruniversity.com/');
        // cy.visit('https://selectors.webdriveruniversity.com/');

        })
    })