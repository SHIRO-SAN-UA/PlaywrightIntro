import { Page } from "@playwright/test";
import { HomePage } from "./home.page";



export class RegistrationPage extends HomePage {

// Define selectors for elements on the registration page
  private loginField = '#user_login';
  private passwordField = '#user_password';
  private confirmationField = '#user_password_confirmation';
  private firstNameField = '#user_firstname';
  private lastNameField = '#user_lastname';
  private emailField = '#user_mail';
  
  private submitButton = '#new_user > input:nth-child(4)';

  get errorMessageBox() {
    return this.page.locator('#errorExplanation');
  }


  constructor(page: Page) {
    super(page);
  }

// Add methods specific to the Registration page here.
    async fillRegistrationForm(login: string, password: string, confirmation: string, firstName: string, lastName: string, email: string) {
        await this.page.fill(this.loginField, login);
        await this.page.fill(this.passwordField, password);
        await this.page.fill(this.confirmationField, confirmation);
        await this.page.fill(this.firstNameField, firstName);
        await this.page.fill(this.lastNameField, lastName);
        await this.page.fill(this.emailField, email);
  }
  
// Method to submit the registration form
  async submitRegistrationForm() {
    await this.page.click(this.submitButton);
  }
  
}
