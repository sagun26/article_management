import{Locator,Page} from "@playwright/test";

export class NotificationPage {
    private page: Page;
    private unreadNotifications: Locator;
    private markAllAsReadButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.unreadNotifications =this.page.getByRole("button", { name: "Unread" });
        this.markAllAsReadButton = this.page.getByRole("button", { name: "Mark all read" });
    }

    async viewUnreadNotifications() {
        await this.unreadNotifications.click();
    }
    async markAllAsRead() {
        await this.markAllAsReadButton.click();
    }
}