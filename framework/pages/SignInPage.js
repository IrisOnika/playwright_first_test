import { expect } from '@playwright/test';
import BasePage from './BasePage';
import { urls } from '../config';

export default class extends BasePage {

    pageUrl = urls.signInUrl

  async filllogin (login) {
    const field = await this.page.locator('input[name="username"]')
    await field.fill('');
    await field.fill(login);

    return this;
  }

  async fillPassword (password) {
    const field = await this.page.locator('input[name="password"]')
    await field.fill('');
    await field.fill(password);

    return this;
  }

  async submit () {
    //return this.page.locator('.button', { hasText: 'Login' }).click();
    await this.page.locator('input[value="Login"]').click();

    return this;
  }

  async login (username, password) {
    await this.visit()
    await this.filllogin(username)
    await this.fillPassword(password)
    await this.submit()
    await expect(this.page).toHaveURL(urls.baseUrl)
  }

  async getErrormess () {
    const errorMess = await this.page.locator('.messages').textContent();
    console.log(errorMess);
    return errorMess;
    
  }
  
}
