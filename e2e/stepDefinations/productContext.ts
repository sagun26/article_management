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

//add product form 

When("I click on the Add Product button", async function(this: CustomWorld) {
    this.productPage = new ProductPage(this.page);
    await this.productPage.addProduct();
});
Then("I should see the Add Product form", async function(this: CustomWorld){
     await expect(this.productPage.categoryField).toBeVisible();
});
Then("I select the categories", async function(this: CustomWorld){
    await this.productPage.selectCategories();
    await expect(this.productPage.continueButton).toBeVisible();
});
Then("I click on the Continue button", async function(this: CustomWorld){
    await this.productPage.continueButton.click();
});

// Then("I enter the product details and add the product", async function(this: CustomWorld){
//     await this.productPage.enterProductDetails("Test Product");
// });

Then("I enter the product details and add the product", async function ( this: CustomWorld,dataTable)
 {
 
   await this.productPage.singleProduct();
   await this.productPage.removeUnwantedSites();
   await this.productPage.continueToAddProduct();

   await this.productPage.enterProductDetails(dataTable.rawTable[1][0]);
//   await this.productPage.clickSitesIncluded();
//   await this.productPage.ProductCategoriesSelection();
//   await this.productPage.affilateSelection();
//   await this.productPage.trendLinkField();
//   await this.productPage.previewLinkField();
      await this.productPage.clickAddProductButton();
    
});

Then("the product should be added successfully", async function(this: CustomWorld){
    await expect(this.page.getByText("Successfully added product!")).toBeVisible();
});