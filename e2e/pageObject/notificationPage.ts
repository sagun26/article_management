import{Locator,Page} from "@playwright/test";

export class NotificationPage {
    private page: Page;
    private unreadNotifications: Locator;
    private seemoreButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.unreadNotifications =this.page.getByRole("button", { name: "Unread" });
        this.seemoreButton = this.page.getByRole("button", { name: /See More/ });
    }

    async viewUnreadNotifications() {
        await this.unreadNotifications.click();
    }
    async viewMoreNotifications() {
        await this.seemoreButton.click();
    }
}