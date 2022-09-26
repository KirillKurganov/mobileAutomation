import { BaseScreen } from '../../../base';
import { HomeScreen } from '../homeScreen';
import { TextArea } from '../../../controls';

export class TextViewScreen extends BaseScreen {
  constructor() {
    super();
    this.textBoxSelector = '//XCUIElementTypeTextView';
  }

  get textBox() {
    return new TextArea(this.textBoxSelector);
  }

  async openScreen() {
    const homeScreen = new HomeScreen();
    await homeScreen.textViewLabel.tap();
  }
}
