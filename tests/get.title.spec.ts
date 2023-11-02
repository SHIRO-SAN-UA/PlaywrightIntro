import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('Main page title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  
  const title = await homePage.getTitle();
  //Assertions
  await expect(title).toContain('Redmine');
});
