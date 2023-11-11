import { Page } from "@playwright/test";
import { HomePage } from "./home.page";

export class LoginPage extends HomePage {
    // Define selectors for elements on the Login page

    get loginForm() {
        return this.page.locator("#login-form");
    }
    get registrationTextBox() {
        return this.page.locator("#flash_notice");
    }
    private loginField = "#username";
    private passwordField = "#password";
    private stayLoggedCheckbox = "#autologin";
    private loginButton = "#login-submit";

    constructor(page: Page) {
        super(page);
    }

    // Add methods specific to the Login page here.
    async fillLoginForm(login: string, password: string) {
        await this.page.fill(this.loginField, login);
        await this.page.fill(this.passwordField, password);
        await this.page.check(this.stayLoggedCheckbox);
        await this.page.click(this.loginButton);
    }
}
