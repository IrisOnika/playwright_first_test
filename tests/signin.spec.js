const { test, expect } = require('@playwright/test');
import * as app from '../framework'
//import { SignInMenu } from '../framework/elements';

const urls = {
  baseUrl: 'https://petstore.octoperf.com/actions/Catalog.action',
  signInUrl: 'https://petstore.octoperf.com/actions/Account.action?signonForm='
}


test('has title', async ({ page }) => {
  const basePage = new app.page.BasePage(page);
  basePage.pageUrl = urls.baseUrl
  await basePage.visit()

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/JPetStore Demo/);
});

test('check sign in link', async ({ page }) => {
  const basePage = new app.page.BasePage(page);
  const menu = new app.element.SignInMenu(page);
  basePage.pageUrl = urls.baseUrl
  await basePage.visit()

  // Click a sign in link
  //await page.getByRole('link', {name: 'Sign In' }).click()
  await menu.clickSignIn()

  // Expects the URL for sign in page
  await expect(page).toHaveURL(/.*signonForm=/);
});

test('try to login with default credentions', async ({ page }) => {
  const signInPage = new app.page.SignInPage(page);
  const menu = new app.element.SignInMenu(page);
  await signInPage.visit()

  // Click login with no filled login/password
  await signInPage.submit()

  // get menu content
  const loginmenu = await menu.getMenuContent()
  // Check sign in 
  expect(loginmenu).toEqual('Sign In')
});


test('try to login with wrong credentions - check error', async ({ page }) => {
  const signInPage = new app.page.SignInPage(page);
  const menu = new app.element.SignInMenu(page);
  await signInPage.visit()

  // Input incorrect credentions
  await signInPage.filllogin('badusername')
  await signInPage.fillPassword('badpassword')

  // Click login with no filled login/password
  await signInPage.submit()

  //get error
  const errormess = await signInPage.getErrormess()
  // check error
  expect(errormess).toEqual("Invalid username or password.  Signon failed.")

  // get menu content
  const loginmenu = await menu.getMenuContent()
  // Check sign in 
  expect(loginmenu).toEqual('Sign In')
});

test.only('try to login with correct credentions', async ({ page }) => {
  const signInPage = new app.page.SignInPage(page);
  const menu = new app.element.SignInMenu(page);

  //login
  await signInPage.login(app.config.credentials.login, app.config.credentials.password)

  // check menu content
  const loginmenu = await menu.getMenuContent()
  expect(loginmenu).toEqual('Sign Out')
  const isMyAcc = await menu.getMenuAccount()
  expect(isMyAcc).toEqual('My Account')
});
