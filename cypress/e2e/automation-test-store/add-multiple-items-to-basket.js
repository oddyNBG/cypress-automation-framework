import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO"
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";

/// <reference types="Cypress" />

describe("Add multiple items to the basket", () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
        // cy.visit("https://www.automationteststore.com/");
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Add specific items to basket", () => {
        // globalThis.data.productName.forEach(function(element) {
        //     cy.addProductToBasket(element)
        // })
        // cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
        autoStore_HairCare_PO.addHairCareProductToBasket();

    });
})