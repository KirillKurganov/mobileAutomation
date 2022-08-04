import { BaseScreen } from '../../base';
import { Button } from '../../controls';
import { DialogWithMessage } from './dialogWithMessage';
import { Label } from '../../controls';

export class AlertDialogsScreen extends BaseScreen {
  constructor(appPackage = 'io.appium.android.apis', appActivity = '.app.AlertDialogSamples') {
    super(appPackage, appActivity);
    this.pageTitleSelector = '//android.widget.TextView[@text="App/Alert Dialogs"]';
    this.dialogWithMessageButtonSelector = '~OK Cancel dialog with a message';
    this.dialogWithMessageSelector = '//android.widget.LinearLayout[@resource-id="android:id/parentPanel"]';
    this.cancelButtonSelector = '//android.widget.Button[@resource-id="android:id/button2"]';
    this.okButtonSelector = '//android.widget.Button[@text="OK"]';
  }

  get pageTitle() {
    return new Label(this.pageTitleSelector);
  }

  get dialogWithMessageButton() {
    return new Button(this.dialogWithMessageButtonSelector);
  }

  get dialogWithMessage() {
    return new DialogWithMessage(this.dialogWithMessageSelector, this.okButtonSelector, this.cancelButtonSelector);
  }
}
