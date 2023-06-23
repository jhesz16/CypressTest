import { HomePage } from "../pages/home.page";
import { SEARCH_KEYWORDS } from "../fixtures/search-data.fixture";
import { ItemDetailsPage } from "../pages/item-details.page";

describe('Amazon Test Suite', () => {
  const homePage = new HomePage();
  const itemDetailsPage = new ItemDetailsPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should be able to search based on the given criteria', () => {
    homePage
      .searchItem(SEARCH_KEYWORDS.validSearch)
      .validateResult(SEARCH_KEYWORDS.validSearch);
  });

  it('Should be able to add cart the selected item', () => {
    homePage
      .searchItem(SEARCH_KEYWORDS.addToCartItem)
      .validateResult(SEARCH_KEYWORDS.addToCartItem)
      .selectItem(SEARCH_KEYWORDS.addToCartItem);

    itemDetailsPage
      .clickAddToCart()
      .validateItemIsAddedSuccessfully();
  });
});