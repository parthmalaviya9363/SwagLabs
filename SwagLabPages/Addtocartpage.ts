import {expect,Locator, Page} from "@playwright/test";

export class Addtocartpage{

    
    readonly page: Page;
    readonly Productstextvisible: Locator;
    readonly Additem1: Locator;
    readonly Additem2: Locator;
    readonly itemcount: Locator;
    readonly clickcartbutton: Locator;
    readonly yourcarttextvisible: Locator;
    readonly clickcheckout: Locator;
    readonly checkouttext: Locator;

        constructor(page: Page){
    
            this.page = page;
            this.Productstextvisible = page.getByText('Products');
            this.Additem1 = page.locator('#add-to-cart-sauce-labs-backpack');
            this.Additem2 = page.locator('#add-to-cart-sauce-labs-bike-light');
            this.itemcount = page.locator('.shopping_cart_badge');
            this.clickcartbutton = page.locator('.shopping_cart_badge');
            this.yourcarttextvisible = page.getByText('Your Cart');
            this.clickcheckout = page.getByRole('button', { name: 'Checkout' });
            this.checkouttext = page.getByText('Checkout: Your Information');
    }

    
    async Productvisible(){
        await expect(this.Productstextvisible).toHaveText('Products');
    }
    
    async Additems(){
        await this.Additem1.click(); 
        await this.Additem2.click(); 
    } 

    async Itemcountvisible(){
        await expect(this.itemcount).toBeVisible();
    }

    async Clickoncartbutton(){
        await this.clickcartbutton.click();

    }

    async Yourcarttextvisible(){
        await expect(this.yourcarttextvisible).toHaveText('Your Cart');
    }

    async Clickoncheckoutbutton(){
        await this.clickcheckout.click();
    }
    
    async Checkouttextvisible(){
        await expect(this.checkouttext).toHaveText('Checkout: Your Information');
    }

    }