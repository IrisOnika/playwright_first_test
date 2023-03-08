export default class {
    constructor (page) {
        if (!page) {
          throw new Error('page обязательно надо передать')
        }
        this.page = page;
        console.log('create page object')
      }

    get () {
        return this.page.locator('#QuickLinks')
    };

    async selectCategory(categoryName) {
        const menu = await this.get();
        await menu.locator(`xpath=//a[img[@src = "../images/sm_${categoryName}.gif"]]`).click()
        //await this.page.locator(`xpath=//a[img[@src = "../images/sm_fish.gif"]]`).click()

        return this
      };

    async getMenuContent() {
        const menu = await this.get();
        const menuText = await menu.textContent()
        console.log(menuText)
        return menuText

    }
  

}