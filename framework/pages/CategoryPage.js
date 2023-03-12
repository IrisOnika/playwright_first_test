import { expect } from '@playwright/test';
import BasePage from './BasePage';
import { urls } from '../config';

export default class extends BasePage {

    set pageUrl(category) {
        this._url = urls.categoryUrl+category
    }

    get pageUrl() {
        return this._url
    }

  get () {
        return this.page.locator('#Catalog')
        };
  
  async getCategoryTitle() {
    await this.visit();
    const title = await this.page.locator('.h2').textContent()

    return title
  }

  async getProductIdByName(ProductName) {
    const  catalog = this.get()
    const productId = await catalog.locator(`xpath = //table//tr[td[text()='${ProductName}']]/td/a`).textContent()

    return productId
  }

  async clickProductIdByName (ProductName) {
    const  catalog = this.get()
    await catalog.locator(`xpath = //table//tr[td[text()='${ProductName}']]/td/a`).click()

    return this
  }

  
}