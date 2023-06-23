export class ResultComponent {

    getResults() {
        return cy.get('[data-component-type="s-search-result"]').should("be.visible");
    }

    selectItem(itemName) {
        return cy.get('a').contains(itemName).click();
    }
}