export default class {
    constructor (page) {
      if (!page) {
        throw new Error('page обязательно надо передать')
      }
      this.page = page;
      console.log('create page object')
    }

    set pageUrl(url) {
        this._url = url
    }

    get pageUrl() {
        return this._url
    }
  
    async visit () {
      console.log('current url', this.page.url())
      await this.page.goto(this.pageUrl)
      console.log('new url', this.page.url())
    }
  }