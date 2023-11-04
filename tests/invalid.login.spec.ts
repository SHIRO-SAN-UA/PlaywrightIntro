import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';


test.describe("Invalid login with fake data", async() => {
    test('Should check sign in with invalid data (email and password)', async ({ page }) => {

    //Create an instance of the LoginPage and HomePage and pass the current page
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.navigateToHomePage();

    //Click Login link
    await homePage.clickLoginLink();

    //Fill the login form with random fake data
    const { faker } = require('@faker-js/faker');
    const randomName = faker.person.fullName();  
    const randomEmail = faker.internet.email();
    await loginPage.fillLoginForm(randomName, randomEmail);

    //Assertions
    await expect(page.locator('#flash_error')).toBeVisible();

    });
});