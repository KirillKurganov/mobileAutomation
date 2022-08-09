import { BasePopup } from '../../base';
import { Icon, Label } from '../../controls';

export class DialogWithMessage extends BasePopup {
  constructor(selector, okButtonSelector, cancelButtonSelector) {
    super(selector, okButtonSelector, cancelButtonSelector);
    this.descriptionSelector = '//android.widget.TextView[@resource-id="android:id/alertTitle"]';
    this.iconSelector = '//android.widget.ImageView[@resource-id="android:id/icon"]';
  }

  get description() {
    return new Label(this.descriptionSelector);
  }

  get icon() {
    return new Icon(this.iconSelector);
  }
}
