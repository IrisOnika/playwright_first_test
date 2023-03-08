export default class {
    constructor (page) {
        if (!page) {
          throw new Error('page обязательно надо передать')
        }
        this.page = page;
        console.log('create page object')
      }

    get () {
        return this.page.locator('#SidebarContent')
    };

    async selectCategory(categoryName) {
        const menu = await this.get();
        await menu.locator(`xpath=//a[img[@src = "../images/${categoryName}_icon.gif"]]`).click()
        return this
      };

    async getMenuDescripnion() {
        const menu = await this.get();
        const menuDescription = await menu.textContent()
        return menuDescription
    }





}