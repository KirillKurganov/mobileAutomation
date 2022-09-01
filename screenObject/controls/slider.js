import { BaseElement } from '../base';

export class Slider extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  async setSliderValue(value) {
    await $(this.selector).addValue(value);
  }
}
