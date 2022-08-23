import { BaseElement } from './baseElement';
import { Button } from '../controls';

export class BasePopup extends BaseElement {
  constructor(selector, okButtonSelector = '//*[@text="OK"]', cancelButtonSelector = '//*[@text="Cancel"]') {
    super(selector);
    this.okButtonSelector = okButtonSelector;
    this.cancelButtonSelector = cancelButtonSelector;
  }

  get okButton() {
    return new Button(this.okButtonSelector);
  }

  get cancelButton() {
    return new Button(this.cancelButtonSelector);
  }

  async tapOk() {
    await this.okButton.tap();
  }

  async tapCancel() {
    await this.cancelButton.tap();
  }
}
