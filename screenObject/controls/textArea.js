import { BaseElement } from '../base';

export class TextArea extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async type(text) {
    await $(this.selector).clearValue();
    await $(this.selector).addValue(text);
  }
}
