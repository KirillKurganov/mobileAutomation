export class BaseElement {
  constructor(selector) {
    this.selector = selector;
  }

  async tap() {
    await $(this.selector).touchAction('tap');
  }

  async tapSeveralTimes(number) {
    for (let i = 0; i < number; i++) {
      await this.tap();
      await driver.pause(1000);
    }
  }

  async getElement() {
    return await $(this.selector);
  }

  async getText() {
    return await $(this.selector).getText();
  }

  async getValue() {
    return await $(this.selector).getValue();
  }

  async getElementCoordinates() {
    return await $(this.selector).getLocation();
  }

  async isDisplayed() {
    return await $(this.selector).isDisplayed();
  }

  async toContainText(expectedText) {
    return String(await $(this.selector).getText()).includes(expectedText);
  }

  async waitForElementIsNotDisplayed() {
    await $(this.selector).waitUntil(
      async function () {
        return (await $(this.selector).isDisplayed()) === false;
      },
      { timeout: 5000 }
    );
  }

  async waitForElementDisplayed() {
    await $(this.selector).waitForDisplayed();
  }
}
