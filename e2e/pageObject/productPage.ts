import{Locator, Page} from "@playwright/test";
export class ProductPage{

    readonly page:Page;
    readonly productTab:Locator;
    readonly productsHeading:Locator;
    readonly addProductButton:Locator;
    readonly categoryField:Locator;

    constructor(page:Page){
      this.page = page;
      this.productTab=page.getByRole("navigation").getByRole("link", { name: "Products" })
      this.productsHeading = page.getByRole("heading", { name: "Products"});
      this.addProductButton = page.getByRole("button", {name: "Add Product"});
      this.categoryField = page.getByRole("button", {name: "Ecomm"});
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
   

    //add products 
  
    async selectCategories(categories: string[]): Promise<void> {
    for (const category of categories) {
        await this.page.getByRole('button', { name: category ,exact: true}).click();
    }
    }
    
}
    

