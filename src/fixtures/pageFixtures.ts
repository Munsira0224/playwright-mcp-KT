import { test as base, expect, Page } from "@playwright/test";
import { HomePage } from "@pages/HomePage";
import { ProductsPage } from "@pages/ProductsPage";

export const test = base.extend<{ homePage: HomePage; productsPage: ProductsPage }>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export { expect };
