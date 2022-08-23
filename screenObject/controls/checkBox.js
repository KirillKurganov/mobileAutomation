import { BaseElement } from '../base';

export class CheckBox extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async isSelected() {
    return await $(this.selector).isSelected();
  }
}
