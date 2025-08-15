import { Page, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  productsNav = () => this.page.getByRole("link", { name: " Products" });

  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async clickProducts() {
    await this.productsNav().click();
  }
}
