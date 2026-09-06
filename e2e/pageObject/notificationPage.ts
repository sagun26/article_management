import{Locator,Page} from "@playwright/test";

export class NotificationPage {
    private page: Page;
    private seemoreButton: Locator;

    constructor(page: Page) {
        this.page = page;
    
        this.seemoreButton = this.page.getByRole("button", { name: /See More/ });
    }

   
    async viewMoreNotifications() {
        await this.seemoreButton.click();
    }
}