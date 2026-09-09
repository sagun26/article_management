import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { DeleteProductPage } from "../pageObject/deleteAndEditProductPage";

Given("I am on the Products page", async function () {
    await this.page.goto("https://dailyworkreport.com/products");

    await expect(this.page).toHaveURL(/\/products/);
});

When("I edit the product", async function () {
    this.deleteProductPage = new DeleteProductPage(this.page);

    await this.deleteProductPage.EditButton();
    await this.deleteProductPage.EditCategories();
    await this.deleteProductPage.SelectCategories();
    await this.deleteProductPage.SaveButton();
});

Then("the product details should be changed", async function () {
    await expect(this.page).toHaveURL(/\/products/);
});



When( "I delete the product {string}", async function (productName: string) {

        console.log("Deleting product:", productName);

        this.deleteProductPage = new DeleteProductPage(this.page);

        await this.deleteProductPage.DeleteButton();

        await this.deleteProductPage.delete();
    }
);

Then( "the product {string} should no longer be displayed",
    async function (productName: string) {

        await expect(
            this.page.getByText("Product deleted successfully!")
        ).toBeVisible();

        await expect(
            this.page.getByText(productName, { exact: true })
        ).not.toBeVisible();
    }
);