import { Locator, Page } from "@playwright/test";
export class DashboardPage {
    readonly page: Page;
    readonly calendar: Locator;
    
      public baseUrl: string;
      public notification: Locator;

     constructor(page: Page) {
         this.page = page;
         this.calendar=this.page.getByRole('link', { name: 'Work Calendar' });
         this.baseUrl = "https://dailyworkreport.com";
         this.notification=this.page.getByRole("link", { name: "Notifications" });
  }

   async navigateToLoginPage(): Promise<void> {
    await this.page.goto(this.baseUrl);
  }
  
 async clickCalendar(): Promise<void> {
    await this.calendar.click();
    await this.page.goto(this.baseUrl + "/calendar");
 }
 async clickNotificationIcon(): Promise<void> {
    await this.notification.click();
    await this.page.goto(this.baseUrl + "/notifications");
}
}   