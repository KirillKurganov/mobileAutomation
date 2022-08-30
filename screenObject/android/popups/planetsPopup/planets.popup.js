import { BasePopup } from '../../../base';

export class PlanetsPopup extends BasePopup {
  constructor(selector) {
    super(selector);
    this.planetSelector = '//*[@text=';
  }

  async selectPlanetByValue(value) {
    const selector = `"${value}"]`;
    await $(`${this.planetSelector}${selector}`).click();
  }
}
