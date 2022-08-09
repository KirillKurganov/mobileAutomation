import { AlertViewsScreen } from '../../screenObject/ios/screens/alertViewsScreen';

describe('Alert views test', () => {
  let alertViewsScreen;

  describe('Open the "Alert views" screen', () => {
    before(async () => {
      alertViewsScreen = new AlertViewsScreen();
      await alertViewsScreen.openScreen();
    });

    it('verify the "Alert views" screen title is displayed', async () => {
      expect(await alertViewsScreen.sectionTitle.isDisplayed()).toEqual(true);
    });
  });

  describe('Tap the "Ok/Cancel" button', () => {
    before(async () => {
      await alertViewsScreen.okCancelLabel.tap();
    });

    it('verify the alert popup is displayed', async () => {
      expect(await alertViewsScreen.okCancelPopup.isDisplayed()).toEqual(true);
    });

    it('verify the alert popup title is displayed', async () => {
      expect(await alertViewsScreen.okCancelPopup.title.isDisplayed()).toEqual(true);
    });

    it('verify the alert popup title text is correct', async () => {
      const expectedResult = 'A Short Title Is Best';
      expect(await alertViewsScreen.okCancelPopup.title.getText()).toEqual(expectedResult);
    });

    it('verify the alert popup description is displayed', async () => {
      expect(await alertViewsScreen.okCancelPopup.description.isDisplayed()).toEqual(true);
    });

    it('verify the alert popup title text is correct', async () => {
      const expectedResult = 'A message should be a short, complete sentence.';
      expect(await alertViewsScreen.okCancelPopup.description.getText()).toEqual(expectedResult);
    });

    it('verify the "OK" button is displayed', async () => {
      expect(await alertViewsScreen.okCancelPopup.okButton.isDisplayed()).toEqual(true);
    });

    it('verify the "OK" button text is correct', async () => {
      const expectedResult = 'OK';
      expect(await alertViewsScreen.okCancelPopup.okButton.getText()).toEqual(expectedResult);
    });

    it('verify the "Cancel" button is displayed', async () => {
      expect(await alertViewsScreen.okCancelPopup.cancelButton.isDisplayed()).toEqual(true);
    });

    it('verify the "Cancel" button text is correct', async () => {
      const expectedResult = 'Cancel';
      expect(await alertViewsScreen.okCancelPopup.cancelButton.getText()).toEqual(expectedResult);
    });
  });

  describe('Close the popup', () => {
    before(async () => {
      await alertViewsScreen.okCancelPopup.tapOk();
    });

    it('verify the alert popup is closed', async () => {
      expect(await alertViewsScreen.okCancelPopup.isDisplayed()).toEqual(false);
    });
  });
});
