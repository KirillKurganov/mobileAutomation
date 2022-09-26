import { PickerScreen } from '../../screenObject/android/screens';

describe('Picker test', () => {
  let pickerScreen;

  describe('Open the "Picker" screen', () => {
    before(async () => {
      pickerScreen = new PickerScreen();
      await pickerScreen.openScreen();
    });

    it('verify the picker is displayed', async () => {
      expect(await pickerScreen.picker.isDisplayed()).toEqual(true);
    });

    it('verify the "Value" label is not displayed', async () => {
      expect(await pickerScreen.selectedValueLabel.isDisplayed()).toEqual(false);
    });
  });

  describe('Select the "kupima" value', () => {
    const selectedValue = 'kupima';

    before(async () => {
      await pickerScreen.picker.setValue(selectedValue);
    });

    it('verify the picker is displayed', async () => {
      expect(await pickerScreen.picker.isDisplayed()).toEqual(true);
    });

    it('verify the set value text is correct', async () => {
      expect(await pickerScreen.picker.getText()).toEqual(selectedValue);
    });
  });
});
