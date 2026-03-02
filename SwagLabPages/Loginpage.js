const { expect } = require('@playwright/test');
const { loginLocators } = require('./locators');

class Loginpage {
  constructor(page) {
    this.page = page;
    this.swaglabsvisible = page.getByText(loginLocators.swagLabsText);
    this.Username = page.getByPlaceholder(loginLocators.usernamePlaceholder);
    this.Password = page.getByPlaceholder(loginLocators.passwordPlaceholder);
    this.loginbutton = page.getByRole('button', { name: loginLocators.loginButtonName });
    this.loginsuccess = page.getByText(loginLocators.productsText);
  }

  async LaunchSwaglabURL() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async VerifyURLlaunchsuccess() {
    await expect(this.swaglabsvisible).toBeVisible();
  }

  async EnterCredentialsAndClickOnLogin(username, password) {
    try {
      await this.Username.fill(username);
      await this.Password.fill(password);
      await this.loginbutton.click();
    } catch (error) {
      console.error('Login failed:', error);
      try {
        await this.page.screenshot({ path: 'Screenshots/LoginError.png' });
      } catch (screenshotError) {
        console.error('Failed to capture screenshot after login error:', screenshotError);
      }
      throw error;
    }
  }

  async VerifyLoginSuccessfull() {
    await expect(this.loginsuccess).toBeVisible();
  }

  async Takescreenshot() {
    await this.page.screenshot({ path: 'Screenshots/Loginsuccess.png' });
  }
}

module.exports = { Loginpage };
