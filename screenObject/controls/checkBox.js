import { BaseElement } from '../base';

export class CheckBox extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async isChecked() {
    return (await $(this.selector).getAttribute('checked')) === 'true';
  }
}
