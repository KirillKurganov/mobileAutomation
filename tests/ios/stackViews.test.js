import { faker } from '@faker-js/faker';

import { StackViewsScreen } from '../../screenObject/ios/screens';

describe('StackViews test', () => {
  let stackViewsScreen;

  describe('Open the "Stack views" screen', () => {
    before(async () => {
      stackViewsScreen = new StackViewsScreen();
      await stackViewsScreen.openScreen();
    });

    it('verify the "Detail" input field is displayed', async () => {
      expect(await stackViewsScreen.detailInputField.isDisplayed()).toEqual(true);
    });

    it('verify the "Add views" button is displayed', async () => {
      expect(await stackViewsScreen.addViewsButton.isDisplayed()).toEqual(true);
    });

    it('verify the "Remove views" button is displayed', async () => {
      expect(await stackViewsScreen.removeViewsButton.isDisplayed()).toEqual(true);
    });
  });

  describe('Fill in the "Detail" input field', () => {
    const content = faker.lorem.words(3);

    before(async () => {
      await stackViewsScreen.detailInputField.type(content);
    });

    it('verify the entered text is displayed in the "Detail" input field', async () => {
      expect(await stackViewsScreen.detailInputField.getInputValue()).toEqual(content);
    });

    it('verify the "Add views" button is enabled', async () => {
      expect(await stackViewsScreen.addViewsButton.isButtonEnabled()).toEqual(true);
    });

    it('verify the "Remove views" button is disabled', async () => {
      expect(await stackViewsScreen.removeViewsButton.isButtonEnabled()).toEqual(false);
    });
  });

  describe('Tap the "Add views" button three times', () => {
    before(async () => {
      await stackViewsScreen.addViewsButton.tapSeveralTimes(3);
    });

    it('verify the "Add views" button is disabled', async () => {
      expect(await stackViewsScreen.addViewsButton.isButtonEnabled()).toEqual(false);
    });

    it('verify the "Remove views" button is enabled', async () => {
      expect(await stackViewsScreen.removeViewsButton.isButtonEnabled()).toEqual(true);
    });
  });

  describe('Tap the "Remove views" button three times', () => {
    before(async () => {
      await stackViewsScreen.removeViewsButton.tapSeveralTimes(3);
    });

    it('verify the "Add views" button is enabled', async () => {
      expect(await stackViewsScreen.addViewsButton.isButtonEnabled()).toEqual(true);
    });

    it('verify the "Remove views" button is disabled', async () => {
      expect(await stackViewsScreen.removeViewsButton.isButtonEnabled()).toEqual(false);
    });
  });
});
