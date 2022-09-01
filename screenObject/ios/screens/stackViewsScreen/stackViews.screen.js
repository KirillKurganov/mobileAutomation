import { BaseScreen } from '../../../base';
import { HomeScreen } from '../homeScreen';
import { Button, Input } from '../../../controls';

export class StackViewsScreen extends BaseScreen {
  constructor() {
    super();
    this.detailInputFieldSelector = '//XCUIElementTypeTextField';
    this.addViewsButtonSelector = '(//XCUIElementTypeButton[@name="stepper increment"])[2]';
    this.removeViewsButtonSelector = '~stepper decrement';
  }

  get detailInputField() {
    return new Input(this.detailInputFieldSelector);
  }

  get addViewsButton() {
    return new Button(this.addViewsButtonSelector);
  }

  get removeViewsButton() {
    return new Button(this.removeViewsButtonSelector);
  }

  async openScreen() {
    const homeScreen = new HomeScreen();
    await homeScreen.stackViewsLabel.tap();
  }
}
