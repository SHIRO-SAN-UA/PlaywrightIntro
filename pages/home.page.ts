import { Page, } from 'playwright';

export class HomePage {
  protected page: Page;

  // Define selectors for elements at the home page
  get registrationPageLink() {
    return this.page.locator('.register');
  }


  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    // Navigate to the Redmine homepage
    await this.page.goto('https://www.redmine.org/');
  }

  async navigateToLoginPage() {
    // Navigate to the Redmine login page
    await this.page.goto('https://www.redmine.org/login');
  }

  async getTitle() {
    // Get the title of the page
    return this.page.title();
  }

  async clickRegistrationLink() {
    // Click the Registration Page link 
    await this.registrationPageLink.click();
  }
}
