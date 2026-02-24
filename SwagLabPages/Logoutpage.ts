import {expect,Locator, Page} from "@playwright/test";

export class Logoutpage{

readonly page: Page;
readonly backhome: Locator;
readonly Productstextvisible: Locator;
readonly openmenu: Locator;
readonly logout: Locator;
readonly swaglabsvisible: Locator;

    constructor(page: Page){
        this.backhome = page.locator('#back-to-products');;
        this.Productstextvisible = page.getByText('Products');
        this.openmenu = page.getByRole('button', { name: 'Open Menu' });
        this.logout = page.locator('#logout_sidebar_link');
        this.swaglabsvisible = page.getByText("Swag Labs");
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