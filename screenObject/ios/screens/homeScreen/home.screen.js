import { BaseScreen } from '../../../base';
import { Label } from '../../../controls';

export class HomeScreen extends BaseScreen {
  constructor() {
    super();
    this.alertViewsLabelSelector = '~Alert Views';
  }

  get alertViewsLabel() {
    return new Label(this.alertViewsLabelSelector);
  }
}
