import { test, expect } from "@fixtures/pageFixtures";
import { ENV } from "@utils/env";

test.describe("Product Search - Blue Top", () => {
  test("should search for 'Blue Top' and display results", async ({ homePage, productsPage }) => {
    await test.step("Navigate to Home Page", async () => {
      await homePage.page.goto(ENV.BASE_URL);
      await expect(homePage.page).toHaveTitle(/Automation Exercise/);
    });

    await test.step("Navigate to Products Page", async () => {
      await homePage.clickProducts();
      await expect(productsPage.page).toHaveURL(/\/products/);
    });

    await test.step("Search for 'Blue Top'", async () => {
      await productsPage.searchProduct("Blue Top");
      await productsPage.expectSearchedProductsVisible();
      await productsPage.expectProductVisible("Blue Top");
    });
  });
});
