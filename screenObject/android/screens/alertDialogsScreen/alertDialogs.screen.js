import { BaseScreen } from '../../../base';
import { Button } from '../../../controls';
import { DialogWithMessage } from '../../popups';
import { Label } from '../../../controls';
import { SingleChoicePopup } from '../../popups';

export class AlertDialogsScreen extends BaseScreen {
  constructor(appPackage = 'io.appium.android.apis', appActivity = '.app.AlertDialogSamples') {
    super(appPackage, appActivity);
    this.pageTitleSelector = '//android.widget.TextView[@text="App/Alert Dialogs"]';
    this.dialogWithMessageButtonSelector = '~OK Cancel dialog with a message';
    this.dialogWithMessageSelector = '//android.widget.LinearLayout[@resource-id="android:id/parentPanel"]';
    this.cancelButtonSelector = '//android.widget.Button[@resource-id="android:id/button2"]';
    this.okButtonSelector = '//android.widget.Button[@text="OK"]';
    this.singleChoiceListButtonSelector = '~Single choice list';
    this.singleChoicePopupSelector = '//*[@resource-id="android:id/parentPanel"]';
  }

  get pageTitle() {
    return new Label(this.pageTitleSelector);
  }

  get dialogWithMessageButton() {
    return new Button(this.dialogWithMessageButtonSelector);
  }

  get singleChoiceListButton() {
    return new Button(this.singleChoiceListButtonSelector);
  }

  get dialogWithMessage() {
    return new DialogWithMessage(this.dialogWithMessageSelector, this.okButtonSelector, this.cancelButtonSelector);
  }

  get singleChoicePopup() {
    return new SingleChoicePopup(this.singleChoicePopupSelector);
  }
}
