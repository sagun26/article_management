import { Locator, Page } from "@playwright/test";

export class DeleteProductPage {

    readonly page: Page;
    readonly deleteBth: Locator;
    readonly dlt: Locator;
    readonly editbtn:Locator;
    readonly editcategories:Locator; 
    readonly selectCategories:Locator;
    readonly saveBtn:Locator;

    constructor(page: Page) {
        this.page = page;

        this.deleteBth = page.getByRole("button", { name: "Delete"  }).first();

        this.dlt = page.getByRole("button", {  name: "Delete Product" });
        this.editbtn=page.getByRole('button', { name: 'Edit' }).first();
        this.editcategories= page.getByRole('button', { name: 'men health' });
        this.selectCategories=page.locator('div').filter({ hasText: /^test$/ }).nth(1)
        this.saveBtn=page.getByRole('button', { name: 'Save Changes' });
        }

    async DeleteButton(): Promise<void> {
        await this.deleteBth.click();
    }

    async delete(): Promise<void> {
        await this.dlt.click();
    }

    async EditButton():Promise<void>{
        await this.editbtn.click();
    }
    async EditCategories():Promise<void>{
        await this.editcategories.click();

    }
    async SelectCategories():Promise<void>{
        await this.selectCategories.click();
    }
    async SaveButton():Promise<void>{
        await this.saveBtn.click();
    }
}