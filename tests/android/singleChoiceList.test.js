import { AlertDialogsScreen } from '../../screenObject/android/screens';

describe('Single choice list tests', () => {
  let alertDialogsScreen;

  describe('Open the "Alert dialogs" screen', () => {
    before(async () => {
      alertDialogsScreen = new AlertDialogsScreen();
      await alertDialogsScreen.openScreen();
    });

    it('verify the "Single choice list" button is displayed', async () => {
      expect(await alertDialogsScreen.singleChoiceListButton.isDisplayed()).toEqual(true);
    });
  });

  describe('Click the "Single choice list" button', () => {
    before(async () => {
      await alertDialogsScreen.singleChoiceListButton.tap();
    });

    it('verify the "Single choice list" popup is displayed', async () => {
      expect(await alertDialogsScreen.singleChoicePopup.isDisplayed()).toEqual(true);
    });

    it('verify the "Single choice list" popup title is displayed', async () => {
      expect(await alertDialogsScreen.singleChoicePopup.title.isDisplayed()).toEqual(true);
    });

    it('verify the "Single choice list" popup title text is correct', async () => {
      const expectedResult = 'Single choice list';
      expect(await alertDialogsScreen.singleChoicePopup.title.getText()).toEqual(expectedResult);
    });

    it('verify the "Map" checkBox is displayed', async () => {
      expect(await alertDialogsScreen.singleChoicePopup.mapCheckBox.isDisplayed()).toEqual(true);
    });

    it('verify the "Map" checkBox is checked', async () => {
      expect(await alertDialogsScreen.singleChoicePopup.mapCheckBox.isChecked()).toEqual(true);
    });

    it('verify the "Map" checkBox text is correct', async () => {
      const expectedResult = 'Map';
      expect(await alertDialogsScreen.singleChoicePopup.mapCheckBox.getText()).toEqual(expectedResult);
    });
  });

  describe('Select the "Street view" check box', () => {
    before(async () => {
      await alertDialogsScreen.singleChoicePopup.streetViewCheckBox.tap();
    });

    it('verify the "Map" checkBox is not checked', async () => {
      expect(await alertDialogsScreen.singleChoicePopup.mapCheckBox.isChecked()).toEqual(false);
    });
  });

  describe('Close the "Single choice list" popup', () => {
    before(async () => {
      await alertDialogsScreen.singleChoicePopup.cancelButton.tap();
      await alertDialogsScreen.singleChoicePopup.waitForElementIsNotDisplayed();
    });

    it('verify the "Single choice list" popup is not displayed', async () => {
      expect(await alertDialogsScreen.singleChoicePopup.isDisplayed()).toEqual(false);
    });
  });
});
