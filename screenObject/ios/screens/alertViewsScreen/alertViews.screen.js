import { BaseScreen } from '../../../base';
import { HomeScreen } from '../homeScreen';
import { Label } from '../../../controls';
import { OkCancelPopup } from '../../popups';

export class AlertViewsScreen extends BaseScreen {
  constructor() {
    super();
    this.okCancelLabelSelector = '~Okay / Cancel';
    this.sectionTitleSelector = '//*[@value="Alert Views"]';
    this.okCancelPopupSelector = '//XCUIElementTypeAlert[@name="A Short Title Is Best"]';
    this.cancelButtonSelector = '~Cancel';
    this.okButtonSelector = '~OK';
  }

  get okCancelLabel() {
    return new Label(this.okCancelLabelSelector);
  }

  get sectionTitle() {
    return new Label(this.sectionTitleSelector);
  }

  get okCancelPopup() {
    return new OkCancelPopup(this.okCancelPopupSelector, this.okButtonSelector, this.cancelButtonSelector);
  }

  async openScreen() {
    const homeScreen = new HomeScreen();
    await homeScreen.alertViewsLabel.tap();
  }
}
