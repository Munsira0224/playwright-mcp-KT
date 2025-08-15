import { Page, expect } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  searchInput = () => this.page.getByRole("textbox", { name: "Search Product" });
  searchButton = () => this.page.getByRole("button", { name: "" });
  searchedProductsHeading = () => this.page.getByRole("heading", { name: "Searched Products" });
  productName = (name: string) => this.page.getByText(name);

  async searchProduct(product: string) {
    await this.searchInput().fill(product);
    await this.searchButton().click();
  }

  async expectSearchedProductsVisible() {
    await expect(this.searchedProductsHeading()).toBeVisible();
  }

  async expectProductVisible(product: string) {
    await expect(this.productName(product)).toBeVisible();
  }
}
