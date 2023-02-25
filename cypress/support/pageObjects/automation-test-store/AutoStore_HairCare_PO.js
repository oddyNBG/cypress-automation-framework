class AutoStore_HairCare_PO {
    addHairCareProductToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then(() => {
                // debugger
            })
        })
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click().debug();
    }
}
export default AutoStore_HairCare_PO;