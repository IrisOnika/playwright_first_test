export default class {
    constructor (page) {
        if (!page) {
          throw new Error('page обязательно надо передать')
        }
        this.page = page;
        console.log('create page object')
      }

    get () {
      return this.page.locator('#BackLink')
   
    }

    async clickReturnLink () {
        const returnLink = await this.get()
            .locator('//a').click()
        return this
    }

    async returnLinkText () {
        const returnLink = await this.get()
        const linkText = returnLink.locator('//a').textContent()
        return linkText
    }

}