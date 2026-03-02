const { test } = require('./Fixtures/creds');
const { Loginpage } = require('../SwagLabPages/Loginpage');
const { Addtocartpage } = require('../SwagLabPages/Addtocartpage');
const { Checkoutpage } = require('../SwagLabPages/Checkoutpage');
const { Logoutpage } = require('../SwagLabPages/Logoutpage');

let context;
let page;

test.beforeAll(async ({ browser, creds }) => {
  context = await browser.newContext();
  page = await context.newPage();

  const loginpage = new Loginpage(page);
  await loginpage.LaunchSwaglabURL();
  await loginpage.VerifyURLlaunchsuccess();
  await loginpage.EnterCredentialsAndClickOnLogin(creds.username, creds.password);
  await loginpage.VerifyLoginSuccessfull();
  await loginpage.Takescreenshot();
});

test('Addtocart', async () => {
  const addtocart = new Addtocartpage(page);
  await addtocart.Productvisible();
  await addtocart.Additems();
  await addtocart.Itemcountvisible();
  await addtocart.Clickoncartbutton();
  await addtocart.Yourcarttextvisible();
  await addtocart.Clickoncheckoutbutton();
  await addtocart.Checkouttextvisible();
});

test('Checkout', async () => {
  const checkout = new Checkoutpage(page);
  await checkout.Addcustomerinfo();
  await checkout.ClickonContinuebutton();
  await checkout.ItemTotalvisible();
  await checkout.Clickonfinishbutton();
  await checkout.Ordercreatedsuccessfully();
});

test('Logout', async () => {
  const logout = new Logoutpage(page);
  await logout.Clickonmenu();
  await logout.Logoutbuttonvisible();
  await logout.ClickonLogout();
  await logout.swaglabvisible();
});
