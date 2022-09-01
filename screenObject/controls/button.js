import { BaseElement } from '../base';

export class Button extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async isButtonEnabled() {
    return await $(this.selector).isEnabled();
  }
}
