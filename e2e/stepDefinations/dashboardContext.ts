import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/customWorld";
import { DashboardPage } from "../pageObject/dashboardPage";

When("I click on Work Calendar", async function (this: CustomWorld) {
    this.dashboardPage = new DashboardPage(this.page);

    await this.dashboardPage.clickCalendar();
});

Then(
    "I should be redirected to the Work Calendar page",
    async function (this: CustomWorld) {
       await expect(this.page).toHaveURL("https://dailyworkreport.com/calendar");
    }
);

When("I click on the notification icon", async function (this: CustomWorld) {
    this.dashboardPage = new DashboardPage(this.page);
    await this.dashboardPage.clickNotificationIcon();
});
Then("I should see the notifications panel", async function(this:CustomWorld){
    await expect(this.page).toHaveURL("https://dailyworkreport.com/notifications");
})