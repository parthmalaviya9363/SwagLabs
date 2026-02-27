import {expect,Locator, Page} from "@playwright/test";
import { checkoutLocators } from './locators';

export class Checkoutpage{

readonly page: Page;
readonly firstname: Locator;
readonly lastname: Locator;
readonly postalcode: Locator;
readonly continue: Locator;
readonly itemtotal: Locator;
readonly finish: Locator;
readonly heading: Locator;


    constructor(page: Page){
        this.page = page;
        this.firstname = page.locator(checkoutLocators.firstName);
        this.lastname = page.locator(checkoutLocators.lastName);
        this.postalcode = page.locator(checkoutLocators.postalCode);
        this.continue = page.getByRole('button', { name: checkoutLocators.continueButtonName });
        this.itemtotal = page.locator(checkoutLocators.itemTotal);
        this.finish = page.getByRole('button', { name: checkoutLocators.finishButtonName });
        this.heading = page.getByRole('heading', { name: checkoutLocators.headingText });

}


async Addcustomerinfo(){
    await this.firstname.fill('Parth');
    await this.lastname.fill('Patel');
    await this.postalcode.fill('362001');
}

async ClickonContinuebutton(){
    await this.continue.click();
}

async ItemTotalvisible(){
    await expect(this.itemtotal).toBeVisible();
    const totalText = await this.itemtotal.textContent();
    console.log('Order amount', totalText?.trim());
}

async Clickonfinishbutton(){
    await this.finish.click();
}

async Ordercreatedsuccessfully(){
    await expect(this.heading).toBeVisible();

}

}