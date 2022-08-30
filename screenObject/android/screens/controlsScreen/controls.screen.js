import { BaseScreen } from '../../../base';
import { PlanetsPopup } from '../../popups';
import { CheckBox, Input, Label, RadioButton, Toggle } from '../../../controls';

export class ControlsScreen extends BaseScreen {
  constructor(appPackage = 'io.appium.android.apis', appActivity = '.view.Controls2') {
    super(appPackage, appActivity);
    this.textFieldSelector = '//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]';
    this.firstCheckBoxSelector = '~Checkbox 1';
    this.firstRadioButtonSelector = '~RadioButton 1';
    this.firstToggleSelector = '//*[@resource-id="io.appium.android.apis:id/toggle1"]';
    this.planetValueSelector = '//android.widget.TextView[@resource-id="android:id/text1"]';
    this.planetsPopupSelector = '//android.widget.ListView[@resource-id="android:id/select_dialog_listview"]';
    this.hiddenLabelSelector = '~(And all inside of a ScrollView!)';
  }

  get textField() {
    return new Input(this.textFieldSelector);
  }

  get firstCheckBox() {
    return new CheckBox(this.firstCheckBoxSelector);
  }

  get firstRadioButton() {
    return new RadioButton(this.firstRadioButtonSelector);
  }

  get firstToggle() {
    return new Toggle(this.firstToggleSelector);
  }

  get planetLabel() {
    return new Label(this.planetValueSelector);
  }

  get hiddenLabel() {
    return new Label(this.hiddenLabelSelector);
  }

  get planetsPopup() {
    return new PlanetsPopup(this.planetsPopupSelector);
  }
}
