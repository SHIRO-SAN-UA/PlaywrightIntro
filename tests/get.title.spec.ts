import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  
  const title = await homePage.getTitle();
  await expect(title).toContain('Redmine');
});
