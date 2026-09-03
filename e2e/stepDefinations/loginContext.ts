import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pageObject/loginPage";
import { CustomWorld } from "../support/customWorld";

Given("I am on the login page", async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateToLoginPage();
});
When("I enter valid username", async function (this: CustomWorld, dataTable: DataTable) {
  if (!this.loginPage) {
    this.loginPage = new LoginPage(this.page);
  }

  // Extracts ['muna', 'samir'] skipping header row
  const usernames = dataTable.raw().slice(1).flat();

  for (const username of usernames) {
    await this.loginPage.enterName(username);
   
  }
   await this.loginPage.clickLoginButton();
});

Then("the user logged in successfully and redirected to the home page", async function (this: CustomWorld) {
  if (!this.loginPage) {
    this.loginPage = new LoginPage(this.page);
  }

  await expect(this.loginPage.dashboardSelector).toBeVisible();
});

Given("I am logged in", async function (this: CustomWorld) {
    this.loginPage = new LoginPage(this.page);

    await this.loginPage.navigateToLoginPage();

    await this.loginPage.enterName("sujata");

    await this.loginPage.clickLoginButton();

    await expect(this.loginPage.dashboardSelector).toBeVisible();
});