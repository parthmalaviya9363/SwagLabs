import {test,expect} from "@playwright/test";

test("Open URL and verify page title",async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");

    let title:string=await page.title();
    console.log("Tile:",title);

    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");

})