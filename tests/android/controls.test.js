import { faker } from '@faker-js/faker';

import { ControlsScreen } from '../../screenObject/android/screens';
import { Gestures } from '../../helpers';

describe('Controls test', () => {
  const textValue = faker.lorem.words(3);

  let controlsScreen;
  let gestures;

  describe('Fill in the text field', () => {
    before(async () => {
      controlsScreen = new ControlsScreen();
      gestures = new Gestures();
      await controlsScreen.openScreen();
      await controlsScreen.textField.type(textValue);
    });

    it('verify the input field is displayed', async () => {
      expect(await controlsScreen.textField.isDisplayed()).toEqual(true);
    });

    it('verify the entered text is displayed in the input field', async () => {
      expect(await controlsScreen.textField.getInputValue()).toEqual(textValue);
    });

    it('verify the first checkbox is not checked', async () => {
      expect(await controlsScreen.firstCheckBox.isChecked()).toEqual(false);
    });
  });

  describe('Select the first checkbox', () => {
    before(async () => {
      await controlsScreen.firstCheckBox.tap();
    });

    it('verify the first checkbox is displayed', async () => {
      expect(await controlsScreen.firstCheckBox.isDisplayed()).toEqual(true);
    });

    it('verify the first checkbox is checked', async () => {
      expect(await controlsScreen.firstCheckBox.isChecked()).toEqual(true);
    });

    it('verify the first radio button is not checked', async () => {
      expect(await controlsScreen.firstRadioButton.isChecked()).toEqual(false);
    });
  });

  describe('Select the first radio button', () => {
    before(async () => {
      await controlsScreen.firstRadioButton.tap();
    });

    it('verify the first radio button is displayed', async () => {
      expect(await controlsScreen.firstRadioButton.isDisplayed()).toEqual(true);
    });

    it('verify the first radio button is checked', async () => {
      expect(await controlsScreen.firstRadioButton.isChecked()).toEqual(true);
    });

    it('verify the toggle text is correct', async () => {
      const expectedResult = 'OFF';
      expect(await controlsScreen.firstToggle.getText()).toEqual(expectedResult);
    });
  });

  describe('Tap the toggle', () => {
    before(async () => {
      await controlsScreen.firstToggle.tap();
    });

    it('verify the toggle text is displayed', async () => {
      expect(await controlsScreen.firstToggle.isDisplayed()).toEqual(true);
    });

    it('verify the toggle text is changes after tapping', async () => {
      const expectedResult = 'ON';
      expect(await controlsScreen.firstToggle.getText()).toEqual(expectedResult);
    });

    it('verify the default planet value is correct', async () => {
      const expectedResult = 'Mercury';
      expect(await controlsScreen.planetLabel.getText()).toEqual(expectedResult);
    });
  });

  describe('Change the planet value to "Earth"', () => {
    const planetValue = 'Earth';

    before(async () => {
      await controlsScreen.planetLabel.tap();
      await controlsScreen.planetsPopup.waitForElementDisplayed();
      await controlsScreen.planetsPopup.selectPlanetByValue(planetValue);
      await controlsScreen.planetsPopup.waitForElementIsNotDisplayed();
    });

    it('verify the planet value is displayed', async () => {
      expect(await controlsScreen.planetLabel.isDisplayed()).toEqual(true);
    });

    it('verify the planet value is correct', async () => {
      expect(await controlsScreen.planetLabel.getText()).toEqual(planetValue);
    });

    it('verify the hidden label is not displayed on the screen', async () => {
      expect(await controlsScreen.hiddenLabel.isDisplayed()).toEqual(false);
    });
  });

  describe('Swipe to the end of the screen', () => {
    before(async () => {
      await gestures.swipeUp();
      await controlsScreen.hiddenLabel.waitForElementDisplayed();
    });

    it('verify the hidden label is displayed on the screen', async () => {
      expect(await controlsScreen.hiddenLabel.isDisplayed()).toEqual(true);
    });
  });
});
