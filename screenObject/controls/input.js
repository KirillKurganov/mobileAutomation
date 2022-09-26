import { BaseElement } from '../base';

export class Input extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async type(text, options = {}) {
    await $(this.selector).addValue(text, options);
  }

  async getInputValue() {
    return await super.getText();
  }

  async setValue(value) {
    await $(this.selector).setValue(value);
  }
}
