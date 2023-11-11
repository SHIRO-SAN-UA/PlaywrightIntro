import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";

test.describe("Main page title", async () => {
    test("Check if the main page has the correct title", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();

        const title = await homePage.getTitle();
        //Assertions
        expect(title).toContain("Redmine");
    });
});
