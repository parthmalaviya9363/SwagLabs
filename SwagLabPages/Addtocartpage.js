const { expect } = require('@playwright/test');
const { addToCartLocators } = require('./locators');

class Addtocartpage {
  constructor(page) {
    this.page = page;
    this.Productstextvisible = page.getByText(addToCartLocators.productsText);
    this.Additem1 = page.locator(addToCartLocators.addItem1);
    this.Additem2 = page.locator(addToCartLocators.addItem2);
    this.itemcount = page.locator(addToCartLocators.itemCount);
    this.clickcartbutton = page.locator(addToCartLocators.itemCount);
    this.yourcarttextvisible = page.getByText(addToCartLocators.yourCartText);
    this.clickcheckout = page.getByRole('button', { name: addToCartLocators.checkoutButtonName });
    this.checkouttext = page.getByText(addToCartLocators.checkoutText);
  }

  async Productvisible() {
    await expect(this.Productstextvisible).toHaveText('Products');
  }

  async Additems() {
    await this.Additem1.click();
    await this.Additem2.click();
  }

  async Itemcountvisible() {
    await expect(this.itemcount).toBeVisible();
  }

  async Clickoncartbutton() {
    await this.clickcartbutton.click();
  }

  async Yourcarttextvisible() {
    await expect(this.yourcarttextvisible).toHaveText('Your Cart');
  }

  async Clickoncheckoutbutton() {
    await this.clickcheckout.click();
  }

  async Checkouttextvisible() {
    await expect(this.checkouttext).toHaveText('Checkout: Your Information');
  }
}

module.exports = { Addtocartpage };
