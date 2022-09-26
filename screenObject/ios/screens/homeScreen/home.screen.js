import { BaseScreen } from '../../../base';
import { Label } from '../../../controls';

export class HomeScreen extends BaseScreen {
  constructor() {
    super();
    this.alertViewsLabelSelector = '~Alert Views';
    this.stackViewsLabelSelector = '~Stack Views';
    this.slidersLabelSelector = '~Sliders';
    this.textViewLabelSelector = '~Text View';
  }

  get alertViewsLabel() {
    return new Label(this.alertViewsLabelSelector);
  }

  get stackViewsLabel() {
    return new Label(this.stackViewsLabelSelector);
  }

  get slidersLabel() {
    return new Label(this.slidersLabelSelector);
  }

  get textViewLabel() {
    return new Label(this.textViewLabelSelector);
  }
}
