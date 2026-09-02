import { Locator, Page } from "@playwright/test";
export class DashboardPage {
    readonly page: Page;
    readonly calendar: Locator;
    
      public baseUrl: string;

     constructor(page: Page) {
         this.page = page;
         this.calendar=this.page.getByRole('link', { name: 'Work Calendar' });
         this.baseUrl = "https://dailyworkreport.com"
  }

   async navigateToLoginPage(): Promise<void> {
    await this.page.goto(this.baseUrl);
  }
  
 async clickCalendar(): Promise<void> {
    await this.calendar.click();
    await this.page.goto(this.baseUrl + "/calendar");
 }
}