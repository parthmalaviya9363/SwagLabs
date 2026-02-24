import {expect,Locator, Page} from "@playwright/test";

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
        this.firstname = page.locator('#first-name');
        this.lastname = page.locator('#last-name');
        this.postalcode = page.locator('#postal-code');
        this.continue = page.getByRole('button', { name: 'continue' });
        this.itemtotal = page.locator('.summary_total_label');
        this.finish = page.getByRole('button', { name: 'Finish' });
        this.heading = page.getByRole('heading', { name: 'Thank you for your order!' });

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