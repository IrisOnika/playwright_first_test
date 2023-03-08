const { test, expect } = require('@playwright/test');
import * as app from '../framework'


const urls = {
  baseUrl: 'https://petstore.octoperf.com/actions/Catalog.action',
}

for (const data of app.config.quickLinksData) {

  test('check menu url for ' + data[0], async ({ page }) => {
    const basePage = new app.page.BasePage(page);
    basePage.pageUrl = urls.baseUrl
    const quickLinks = new app.element.QuickLinks(page)
    await basePage.visit()

    await quickLinks.selectCategory(data[0])

    await expect(page).toHaveURL(data[1]);
  })
};
