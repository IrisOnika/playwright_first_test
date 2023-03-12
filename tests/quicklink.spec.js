const { test, expect } = require('@playwright/test');
import * as app from '../framework'


for (const data of app.data.quickLinksData) {

  test('check menu url for ' + data[0], async ({ page }) => {
    const basePage = new app.page.BasePage(page);
    basePage.pageUrl = app.config.urls.baseUrl
    const quickLinks = new app.element.QuickLinks(page)
    await basePage.visit()

    await quickLinks.selectCategory(data[0])

    await expect(page).toHaveURL(data[1]);
  })
};
