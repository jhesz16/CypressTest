export class SearchComponent {

    getSearchBox() {
        return cy.get('#twotabsearchtextbox').should("be.visible");
    }
}