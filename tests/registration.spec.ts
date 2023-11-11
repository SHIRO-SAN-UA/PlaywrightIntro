import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { RegistrationPage } from "../pages/registration.page";
import { LoginPage } from "../pages/login.page";

test.describe("Registration", async () => {
    test("Registration", async ({ page }) => {
        //Create an instance of the RegistrationPage and HomePage and pass the current page
        const registrationPage = new RegistrationPage(page);
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        await homePage.navigateToHomePage();

        //Click Registration link
        await homePage.clickRegistrationLink();

        // Define test data
        const testData = {
            login: "StandardUser",
            password: "12345678A",
            confirmation: "12345678A",
            firstName: "John",
            lastName: "Connor",
            email: "serge.karpov@gmail.com",
        };

        // Fill in the registration form with test data
        await registrationPage.fillRegistrationForm(
            testData.login,
            testData.password,
            testData.confirmation,
            testData.firstName,
            testData.lastName,
            testData.email
        );

        // Submit the registration form
        await registrationPage.submitRegistrationForm();

        // Assertions
        await expect(loginPage.loginForm).toBeVisible();
        await expect(loginPage.registrationTextBox).toContainText("Account was successfully created.");
    });
});
