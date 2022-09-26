import { faker } from '@faker-js/faker';
import { TextViewScreen } from '../../screenObject/ios/screens';

describe('Text view test', () => {
  let textViewScreen;

  describe('Open the "Text view" screen', () => {
    before(async () => {
      textViewScreen = new TextViewScreen();
      await textViewScreen.openScreen();
    });

    it('verify the text box is displayed', async () => {
      expect(await textViewScreen.textBox.isDisplayed()).toEqual(true);
    });
  });

  describe('Fill in text box with text', () => {
    const content = faker.lorem.words(30);

    before(async () => {
      await textViewScreen.textBox.type(content);
    });

    it('verify the text box value is correct', async () => {
      expect(await textViewScreen.textBox.getValue()).toContain(content);
    });
  });
});
