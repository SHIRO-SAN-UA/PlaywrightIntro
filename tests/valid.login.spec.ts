import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

test.describe('Logging in', async() => {
    test('Logging in existing user', async ({ page }) => {
    //Create an instance of the LoginPage and HomePage and pass the current page
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.navigateToHomePage();

    //Click Login link
    await homePage.clickLoginLink();

    // Define test data
    const testData = {
    login: 'StandardUser',
    password: '12345678A',
    };

    // Fill in the registration form with test data
    await loginPage.fillLoginForm(
    testData.login,
    testData.password,
    );

    // Assertions
    await expect(homePage.loggedMessageBox).toContainText("Logged in as StandardUser");

    });
});