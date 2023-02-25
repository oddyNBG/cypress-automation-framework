/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(() => {
        // cy.log(Cypress.env("name"));
        cy.navigateTo_WebdriverUni_Checkbox_Page();
        // cy.navigateTo_WebdriverUni_Homepage();
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({forece:true});
    })
    
    it("Check and validate checkbox", () => {
        // cy.visit("http://www.webdriveruniversity.com");
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({forece:true});

        // cy.get('#checkboxes > :nth-child(1) > input').click()
        // cy.get('#checkboxes > :nth-child(1) > input').click().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        // cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    });

    it("Uncheck and validate checkbox", () => {
        // cy.visit("http://www.webdriveruniversity.com");
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({forece:true});

        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')

    })

    it("Check multiple checkboxes", () => {
        // cy.visit("http://www.webdriveruniversity.com");
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({forece:true});

        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')

    })
})