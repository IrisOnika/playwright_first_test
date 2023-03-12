const { test, expect } = require('@playwright/test');
import * as app from '../framework'


for (const data of app.data.quickLinksData) {

  test('check menu url for ' + data[0], async ({ page }) => {
    const basePage = new app.page.BasePage(page);
    basePage.pageUrl = app.config.urls.baseUrl
    const leftMenu = new app.element.LeftMenu(page)
    await basePage.visit()

    await leftMenu.selectCategory(data[0])

    await expect(page).toHaveURL(data[1]);
  })
};

test('check menu content ', async ({ page }) => {
    const basePage = new app.page.BasePage(page);
    basePage.pageUrl = app.config.urls.baseUrl
    const leftMenu = new app.element.LeftMenu(page)
    await basePage.visit()

    const menuDescription = await leftMenu.getMenuDescripnion()

    await expect(menuDescription).toEqual(app.data.content.menuDescr)
  })
