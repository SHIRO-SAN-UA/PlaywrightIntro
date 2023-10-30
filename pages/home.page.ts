import { Page } from 'playwright';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    // Navigate to the Redmine homepage
    await this.page.goto('https://www.redmine.org/');
  }

  async getTitle() {
    // Get the title of the Redmine homepage
    return this.page.title();
  }

  async clickLink(linkText: string) {
    // Click a link with the specified linkText
    await this.page.click(`text=${linkText}`);
  }
}
