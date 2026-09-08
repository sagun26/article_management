import{Locator, Page} from "@playwright/test";
export class ProductPage{

    readonly page:Page;
    readonly productTab:Locator;
    readonly productsHeading:Locator;
    readonly addProductButton:Locator;
    readonly categoryField:Locator;
    readonly continueButton:Locator;

    //add product form
    readonly singleProductFormBtn:Locator;
    readonly productNameField:Locator;
   // readonly siteIncludedField:Locator;   
    readonly productCategoriesSelection:Locator; 
    readonly addProductBtn:Locator;
    readonly continueProduct:Locator;
    readonly previewLinkUrl:Locator;
    readonly affiliateDropdown:Locator;
    readonly affiliateOption:Locator;
  
    constructor(page:Page){
      this.page = page;
      this.productTab=page.getByRole("navigation").getByRole("link", { name: "Products" })
      this.productsHeading = page.getByRole("heading", { name: "Products"});
      this.addProductButton = page.getByRole("button", {name: "Add Product"});
      this.categoryField = page.getByRole("button", {name: "Ecomm"});
      this.continueButton=this.page.getByRole('button', {name: /Continue/});
      this.singleProductFormBtn = page.getByRole('button', { name: /Single Product Form/ });

      this.productNameField = this.page.getByPlaceholder('e.g. Alpha Whey');
    //  this.siteIncludedField =this.page.getByRole('button', { name: /Sites Included/ })
     this.productCategoriesSelection = this.page.getByRole('button', { name: 'Select Category *' })
     this.previewLinkUrl = this.page.getByText('Preview Link URL', { exact: false }).locator('..').locator('input[type="url"]');
     this.affiliateDropdown = this.page.getByRole('button', { name: 'Select Affiliate...'}); 
     this.affiliateOption = this.page.locator('div.cursor-pointer').filter({ hasText: /^Amazon Associates$/ });
     this.addProductBtn =   this.page .locator('button.bg-blue-600').filter({ hasText: /^Add Product$/ });

    this.continueProduct = this.page.getByRole('button', { name: 'Continue (1 site)' });
    }
    async clickProducts():Promise<void>{
        await this.productTab.click();
    }
    async isProductsHeadingVisible():Promise<boolean>{
        return await this.productsHeading.isVisible();
    }   

    async addProduct():Promise<void>{
        await this.addProductButton.click();
    }
     

    //add products category selection page  
    async selectCategories(): Promise<void> {
   
      await this.categoryField.click();
 
    }
    async clickContinueButton(): Promise<void>{
        await this.continueButton.click();
    }
    async singleProduct():Promise<void>{
        await this.singleProductFormBtn.click();
    }
  //Add new product page 
    async removeSite(siteName: string): Promise<void> {
    await this.page
        .getByText(siteName, { exact: true })
        .locator('xpath=../..')
        .getByRole('button', { name: 'Remove' })
        .click();
}

async removeUnwantedSites(): Promise<void> {
    await this.removeSite('DHS');
    await this.removeSite('GRC');
    await this.removeSite('TBR');
}
 async continueToAddProduct(): Promise<void> {
   await this.continueProduct.click();
  }

  async enterProductDetails(productNames: string): Promise<void>{
    await this.productNameField.fill(productNames);
    await this.page.getByRole('button', { name: /Select Product Category/ }).click();
    await this.page.locator('div.cursor-pointer').filter({ hasText: /^men health$/ }).click();
    await this.affiliateDropdown.click();
    await this.affiliateOption.click();
    await this.previewLinkUrl.fill("https://dailyworkreport.com/products");
  }






//   async clickSitesIncluded():Promise<void>{
//     //await this.siteIncludedField.click();
//    await this.page.locator('div').filter({ hasText: 'DHS' }).getByRole('button', { name: 'Remove' }).click();

//     await this.page.locator('div').filter({ hasText: 'GRC' }).getByRole('button', { name: 'Remove' }).click();

//     await this.page.locator('div').filter({ hasText: 'TBR' }).getByRole('button', { name: 'Remove' }).click();
//   }


//   async ProductCategoriesSelection():Promise<void>{
//     await this.productCategoriesSelection.click();
//     await this.page.getByText('test', { exact: true }).click();
     
// }
//     async affilateSelection():Promise<void>{
//     await this.page.getByRole('button', { name: 'Select Affiliate *' }).click();
//     await this.page.getByText('Admitad', { exact: true }).click();

//     }
//     async trendLinkField():Promise<void>{
//         // await this.page.getByPlaceholder('https://... *').fill('https://example.com');

//         await this.page.locator('tbody tr').first().locator('input[type="url"]').nth(0).fill('https://example.com/trend');

//     }
//     async previewLinkField():Promise<void>{
//         await this.page.locator('tbody tr').first().locator('input[type="url"]').nth(1).fill('https://example.com/preview');
        
//     }
   
    async clickAddProductButton():Promise<void>{
        await this.addProductBtn.click();
    }   



}