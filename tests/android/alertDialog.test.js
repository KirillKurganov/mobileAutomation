import { AlertDialogsScreen } from '../../screenObject/android/screens';

describe('Alert Dialog test', () => {
  let alertDialogsScreen;

  describe('Open the "Alert dialogs" screen', () => {
    before(async () => {
      alertDialogsScreen = new AlertDialogsScreen();
      await alertDialogsScreen.openScreen();
    });

    it('verify page title is displayed', async () => {
      expect(await alertDialogsScreen.pageTitle.isDisplayed()).toEqual(true);
    });
  });

  describe('Tap the "Dialog with message" button', () => {
    before(async () => {
      await alertDialogsScreen.dialogWithMessageButton.tap();
    });

    it('verify the alert dialog is displayed', async () => {
      expect(await alertDialogsScreen.dialogWithMessage.isDisplayed()).toEqual(true);
    });

    it('verify the alert dialog icon is displayed', async () => {
      expect(await alertDialogsScreen.dialogWithMessage.icon.isDisplayed()).toEqual(true);
    });

    it('verify the alert dialog description is displayed', async () => {
      expect(await alertDialogsScreen.dialogWithMessage.description.isDisplayed()).toEqual(true);
    });

    it('verify the alert dialog description text is correct', async () => {
      const expectedResult = 'Lorem ipsum dolor sit aie consectetur adipiscing';
      expect(await alertDialogsScreen.dialogWithMessage.description.toContainText(expectedResult)).toEqual(true);
    });

    it('verify the alert dialog description text is correct', async () => {
      const expectedResult = 'Plloaso mako nuto siwuf cakso dodtos anr koop.';
      expect(await alertDialogsScreen.dialogWithMessage.description.toContainText(expectedResult)).toEqual(true);
    });

    it('verify the "Cancel" button is displayed', async () => {
      expect(await alertDialogsScreen.dialogWithMessage.cancelButton.isDisplayed()).toEqual(true);
    });

    it('verify the "Cancel" button text is correct', async () => {
      const expectedResult = 'Cancel';
      expect(await alertDialogsScreen.dialogWithMessage.cancelButton.getText()).toEqual(expectedResult);
    });

    it('verify the "OK" button is displayed', async () => {
      expect(await alertDialogsScreen.dialogWithMessage.okButton.isDisplayed()).toEqual(true);
    });

    it('verify the "OK" button text is correct', async () => {
      const expectedResult = 'OK';
      expect(await alertDialogsScreen.dialogWithMessage.okButton.getText()).toEqual(expectedResult);
    });
  });

  describe('Close the alert dialog', () => {
    before(async () => {
      await alertDialogsScreen.dialogWithMessage.okButton.tap();
    });

    it('verify alert dialog is closed', async () => {
      expect(await alertDialogsScreen.dialogWithMessage.isDisplayed()).toEqual(false);
    });
  });
});
