import { SlidersScreen } from '../../screenObject/ios/screens';

describe('Sliders test', () => {
  let slidersScreen;

  describe('Open the "Sliders" screen', () => {
    before(async () => {
      slidersScreen = new SlidersScreen();
      await slidersScreen.openScreen();
    });

    it('verify the default slider is displayed', async () => {
      expect(await slidersScreen.defaultSlider.isDisplayed()).toEqual(true);
    });

    it('verify the default slider value is correct', async () => {
      const expectedValue = '42';
      expect(await slidersScreen.defaultSlider.getValue()).toContain(expectedValue);
    });
  });

  describe('Set another value', () => {
    before(async () => {
      await slidersScreen.defaultSlider.setSliderValue('0.59');
    });

    it('verify the default slider value is correct', async () => {
      const expectedValue = '60';
      expect(await slidersScreen.defaultSlider.getValue()).toContain(expectedValue);
    });
  });
});
