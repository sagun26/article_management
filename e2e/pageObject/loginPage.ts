import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  public baseUrl: string;

  private readonly emailInput: Locator;
  private readonly loginButton: Locator;
  readonly dashboardSelector: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://dailyworkreport.com";
    this.emailInput = this.page.getByPlaceholder("name@fishtailinfosolutions.com");
    this.loginButton = this.page.locator('button[type="submit"]');
    this.dashboardSelector = this.page.getByRole("link", { name: "Dashboard" });
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto(this.baseUrl);
  }

  async enterName(name: string): Promise<void> {
    await this.emailInput.fill(name);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
  
}