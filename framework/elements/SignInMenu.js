export default class {
    constructor (page) {
        if (!page) {
          throw new Error('page обязательно надо передать')
        }
        this.page = page;
        console.log('create page object')
      }

    get () {
        return this.page.locator('#MenuContent')
    };

    async clickSignIn() {
        const menu = await this.get();
        await menu.getByRole('link', {name: 'Sign In' }).click()

        return this
      };

    async clickMyAccount() {
        const menu = await this.get();
        await menu.getByRole('link', {name: 'My Account' }).click()

        return this
      };

    async getMenuContent() {
        const menu = await this.get();
        const menuText = await menu.locator('xpath=//a[2]').textContent()
        console.log(menuText)
        return menuText

    };

    async getMenuAccount() {
        const menu = await this.get();
        const menuText = await menu.locator('xpath=//a[3]').textContent()
        console.log(menuText)
        return menuText

    }
  

}