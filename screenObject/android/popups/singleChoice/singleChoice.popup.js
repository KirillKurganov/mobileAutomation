import { BasePopup } from '../../../base';
import { CheckBox, Label } from '../../../controls';

export class SingleChoicePopup extends BasePopup {
  constructor(selector) {
    super(selector);
    this.titleSelector = '//*[@text="Single choice list"]';
    this.mapCheckBoxSelector = '//*[@text="Map"]';
    this.satelliteCheckBoxSelector = '//*[@text="Satellite"]';
    this.trafficCheckBoxSelector = '//*[@text="Traffic"]';
    this.streetViewCheckBoxSelector = '//*[@text="Street view"]';
  }

  get title() {
    return new Label(this.titleSelector);
  }

  get mapCheckBox() {
    return new CheckBox(this.mapCheckBoxSelector);
  }

  get streetViewCheckBox() {
    return new CheckBox(this.streetViewCheckBoxSelector);
  }
}
