import { BaseScreen } from '../../../base';
import { HomeScreen } from '../homeScreen';
import { Slider } from '../../../controls';

export class SlidersScreen extends BaseScreen {
  constructor() {
    super();
    this.defaultSliderSelector = '(//XCUIElementTypeSlider)[1]';
  }

  get defaultSlider() {
    return new Slider(this.defaultSliderSelector);
  }

  async openScreen() {
    const homeScreen = new HomeScreen();
    await homeScreen.slidersLabel.tap();
  }
}
