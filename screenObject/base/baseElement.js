export class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }

  async tap() {
    await $(this.selector).click();
  }

  async getText() {
    return await $(this.selector).getText();
  }

  async isDisplayed() {
    return await $(this.selector).isDisplayed();
  }

  async toContainText(expectedText) {
    return String(await $(this.selector).getText()).includes(expectedText);
  }
}
