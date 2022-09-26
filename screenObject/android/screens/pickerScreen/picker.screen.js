import { BaseScreen } from '../../../base';
import { Input, Label } from '../../../controls';

export class PickerScreen extends BaseScreen {
  constructor(appPackage = 'io.appium.android.apis', appActivity = '.view.CustomPicker1') {
    super(appPackage, appActivity);
    this.pickerSelector = '//android.widget.EditText';
    this.selectedValueLabelSelector = '//android.widget.TextView[@resource-id="io.appium.android.apis:id/textView1"]';
  }

  get picker() {
    return new Input(this.pickerSelector);
  }

  get selectedValueLabel() {
    return new Label(this.selectedValueLabelSelector);
  }
}
