import{Given,When,Then} from "@cucumber/cucumber";
import { CustomWorld } from "../support/customWorld";
import { expect } from "@playwright/test";
import { ProductPage } from "../pageObject/productPage";

When("I click on Products", async function (this: CustomWorld) {
    this.productPage = new ProductPage(this.page);
    await this.productPage.clickProducts();

    
});

Then("I should be redirected to the Products page", async function(this:CustomWorld){
    await expect(this.page).toHaveURL(
        "https://dailyworkreport.com/products"
    );
})

Then("I should see the Add Product button", async function(this:CustomWorld){
    await expect(this.productPage.addProductButton).toBeVisible();
})

//add product form 

When("I click on the Add Product button", async function(this: CustomWorld) {
    this.productPage = new ProductPage(this.page);
    await this.productPage.addProduct();
});
Then("I should see Add Product form", async function(this: CustomWorld){
     await expect(this.productPage.categoryField).toBeVisible();
});