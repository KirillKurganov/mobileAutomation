export class BaseScreen {
  constructor(appPackage = '', appActivity = '') {
    this.appPackage = appPackage;
    this.appActivity = appActivity;
  }

  async openScreen() {
    await driver.startActivity(this.appPackage, this.appActivity);
  }

  async goBack() {
    await driver.back();
  }
}
