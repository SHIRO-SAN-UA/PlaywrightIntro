import { Page } from "@playwright/test";
import { HomePage } from "./home.page";

export class LoginPage extends HomePage {

    // Define selectors for elements on the registration page

    get loginForm() {
        return this.page.locator('#login-form');
      }
    get registrationTextBox() {
        return this.page.locator('#flash_notice');
      }
    
    
      constructor(page: Page) {
        super(page);
      }
    
    // Add methods specific to the Registration page here.
    
      
    }
    