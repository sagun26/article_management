import{Given,When,Then} from "@cucumber/cucumber";
import { DashboardPage } from "../pageObject/dashboardPage";
import { CustomWorld } from "../support/customWorld";
import { NotificationPage } from "../pageObject/notificationPage";
import { expect } from "@playwright/test";

Given("I am on the Notifications page", async function (this: CustomWorld) {
    this.notificationPage = new NotificationPage(this.page);

    await this.page.goto("https://dailyworkreport.com/notifications");

    await expect(this.page).toHaveURL(
        "https://dailyworkreport.com/notifications"
    );
});

When("I click on the Unread button", async function (this: CustomWorld) {
    this.notificationPage = new NotificationPage(this.page);
    await this.notificationPage.viewUnreadNotifications();
});

Then("I should see the unread notifications", async function (this: CustomWorld) {
    await expect(this.page).toHaveURL("https://dailyworkreport.com/notifications" );
});

When("I click on See more", async function (this: CustomWorld) {
    this.notificationPage = new NotificationPage(this.page);
    await this.notificationPage.viewMoreNotifications();
});

Then("I should see more notifications", async function (this: CustomWorld) {
    await expect(this.page).toHaveURL("https://dailyworkreport.com/notifications");
});