import {expect,Locator, Page} from "@playwright/test";
import { logoutLocators } from './locators';

export class Logoutpage{

readonly page: Page;
readonly backhome: Locator;
readonly Productstextvisible: Locator;
readonly openmenu: Locator;
readonly logout: Locator;
readonly swaglabsvisible: Locator;

    constructor(page: Page){
        this.page = page;
        this.backhome = page.locator(logoutLocators.backHome);
        this.Productstextvisible = page.getByText(logoutLocators.productsText);
        this.openmenu = page.getByRole('button', { name: logoutLocators.openMenuButtonName });
        this.logout = page.locator(logoutLocators.logoutLink);
        this.swaglabsvisible = page.getByText(logoutLocators.swagLabsText);
    }

async Clickonbackhomebutton(){
    await this.backhome.click();

}

async Productvisible(){
    await expect(this.Productstextvisible).toHaveText('Products');
}

async Clickonmenu(){
    await this.openmenu.click();
}

async Logoutbuttonvisible(){
    await expect(this.logout).toBeVisible();
}

async ClickonLogout(){
    await this.logout.click();
}

async swaglabvisible(){
    await expect(this.swaglabsvisible).toBeVisible();
}

}