import {expect,Locator, Page} from "@playwright/test";

export class Loginpage{

    
readonly page: Page;
readonly swaglabsvisible: Locator;
readonly Username: Locator;
readonly Password: Locator;
readonly loginbutton: Locator;
readonly loginsuccess: Locator;


    constructor(page: Page){

        this.page = page;
        this.swaglabsvisible = page.getByText("Swag Labs");
        this.Username = page.getByPlaceholder('Username');
        this.Password = page.getByPlaceholder('Password');
        this.loginbutton = page.getByRole('button', { name: 'Login' });
        this.loginsuccess = page.getByText('Products');
}



async LaunchSwaglabURL(){
    await this.page.goto("https://www.saucedemo.com/");

}

async VerifyURLlaunchsuccess(){
    await expect(this.swaglabsvisible).toBeVisible();
}

async EnterCredentialsAndClickOnLogin(username: string, password: string){
    await this.Username.fill(username);
    await this.Password.fill(password);
    await this.loginbutton.click();
}

async VerifyLoginSuccessfull(){
    await expect(this.loginsuccess).toBeVisible();
}

async Takescreenshot(){
    await this.page.screenshot({ path: 'Screenshots/Loginsuccess.png' });
}

}