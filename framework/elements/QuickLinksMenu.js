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
        return this
    }
  

}