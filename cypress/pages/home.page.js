import { ResultComponent } from "../components/results.component";
import { SearchComponent } from "../components/search.component";

export class HomePage {
    searchComponent = new SearchComponent();
    resultComponent = new ResultComponent();

    searchItem(item) {
        this.searchComponent.getSearchBox().type(`${item}{enter}`);
        return this;
    }

    validateResult(itemName) {
        this.resultComponent.getResults().should("contain.text", itemName);
        return this;
    }

    selectItem(itemName) {
        this.resultComponent.selectItem(itemName);
        return this;
    }
}