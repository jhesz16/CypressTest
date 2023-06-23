export class ItemDetailsPage {

    clickAddToCart() {
        cy.get('input#add-to-cart-button').should("be.visible").click();
        return this;
    }

    validateItemIsAddedSuccessfully() {
        //cy.get('#attachAddBaseItemSuccessAlert .a-alert-heading').contains("Added to Cart");
        cy.get('span:contains(\'Added to Cart\')').should("be.visible");
        return this;
    }
}