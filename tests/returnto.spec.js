const { test, expect } = require('@playwright/test');
import * as app from '../framework'


for (const data of app.data.returnToData.checkLinks) {

  test('check return from ' + data[0], async ({ page }) => {
    const basePage = new app.page.BasePage(page);
    basePage.pageUrl = data[0]
    const returnLink = new app.element.ReturnTo(page)
    await basePage.visit()

    await returnLink.clickReturnLink()

    await expect(page).toHaveURL(data[1]);
  })
};

for (const data of app.data.returnToData.checkLinksText) {

    test('check return links text from ' + data[0], async ({ page }) => {
      const basePage = new app.page.BasePage(page);
      basePage.pageUrl = data[0]
      const returnLink = new app.element.ReturnTo(page)
      await basePage.visit()
  
      const linktext = await returnLink.returnLinkText()
  
      await expect(linktext).toEqual(data[1]);
    })
  };