import { BasePopup } from '../../base';
import { Label } from '../../controls';

export class OkCancelPopup extends BasePopup {
  constructor(selector, okButtonSelector, cancelButtonSelector) {
    super(selector, okButtonSelector, cancelButtonSelector);
    this.titleSelector = '//XCUIElementTypeStaticText[@name="A Short Title Is Best"]';
    this.descriptionSelector = '~A message should be a short, complete sentence.';
  }

  get title() {
    return new Label(this.titleSelector);
  }

  get description() {
    return new Label(this.descriptionSelector);
  }
}
