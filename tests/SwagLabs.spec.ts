import {Page,BrowserContext} from "@playwright/test";
import { test, expect } from './Fixtures/creds';
import { Loginpage } from "../SwagLabPages/Loginpage";
import { Addtocartpage } from "../SwagLabPages/Addtocartpage";
import { Checkoutpage } from "../SwagLabPages/Checkoutpage";
import { Logoutpage } from "../SwagLabPages/Logoutpage";

    let context: BrowserContext;
    let page: Page;
    
  // Login method
test.beforeAll(async ({ browser, creds }) => {
        context = await browser.newContext(); // fresh context for this suite
        page = await context.newPage();
    
        const loginpage = new Loginpage(page);
        await loginpage.LaunchSwaglabURL();
        await loginpage.VerifyURLlaunchsuccess();
        await loginpage.EnterCredentialsAndClickOnLogin(creds.username,creds.password);
        await loginpage.VerifyLoginSuccessfull();
        await loginpage.Takescreenshot();
      });
    
test("Addtocart", async ()=>{

    const addtocart = new Addtocartpage(page);
    await addtocart.Productvisible();
    await addtocart.Additems();
    await addtocart.Itemcountvisible();
    await addtocart.Clickoncartbutton();
    await addtocart.Yourcarttextvisible();
    await addtocart.Clickoncheckoutbutton();
    await addtocart.Checkouttextvisible();
})

test("Checkout", async ()=>{

    const checkout = new Checkoutpage(page);
    await checkout.Addcustomerinfo();
    await checkout.ClickonContinuebutton();
    await checkout.ItemTotalvisible();
    await checkout.Clickonfinishbutton();
    await checkout.Ordercreatedsuccessfully();
})
test("Logout", async ()=>{

    const logout = new Logoutpage(page);
    //await logout.Clickonbackhomebutton();
    // await logout.Productvisible();;
    await logout.Clickonmenu();
    await logout.Logoutbuttonvisible();
    await logout.ClickonLogout();
    await logout.swaglabvisible();
})
